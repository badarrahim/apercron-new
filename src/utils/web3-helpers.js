import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { configEnv } from './configEnv';
import { store, store as web3Store } from '../store';
import { setWalletAddress, setEthLanuchPads, setUsdtLanuchPads, setLaunchPadData, setLaunchDataLoading, setSelectedNetwork } from '../store/web3-slice';
import { TokenABI } from './abi/TokenABI';
import axios from 'axios';
import bigNumber from 'big-number';

export let web3 = {};

web3[80001] = new Web3(configEnv[80001]?.rpc);
web3[4] = new Web3(configEnv[4]?.rpc);

export const connectWallet = async () => {
	try {
		const state = web3Store.getState();
		const address = state?.web3Slice?.userAddress;
		const selectedChainID = state?.web3Slice?.selectedChainID;
		if (!address) {
			console.log('Connecting to wallet');
			// /*
			const providerOptions = {
				walletconnect: {
					package: WalletConnectProvider,
					options: {
						bridge: 'https://bridge.walletconnect.org',
						chainId: selectedChainID, //137 for mainnet
						rpc: {
							[selectedChainID]: configEnv[selectedChainID].rpc,
						},
					},
				},
			};

			console.log('Provider is', providerOptions);

			const web3Modal = new Web3Modal({
				// network: configEnv.AVAX_NETWORK_ID,
				cacheProvider: false, // optional
				providerOptions, // required
				disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
			});

			console.log('Web3Modal instance is', web3Modal);
			const provider = await web3Modal.connect();

			provider.on('accountsChanged', async accounts => {
				console.log('Accounts', accounts);
				web3Store.dispatch(setWalletAddress(accounts[0]));
			});

			web3 = new Web3(provider);

			console.log('Web3 instance is', web3);

			const chainid = await web3.eth.getChainId();

			console.log(chainid);
			if (chainid !== selectedChainID) {
				alert(`error Please connect to ${selectedChainID == 80001 ? 'Mumbai Network' : 'Rinkeby Network'}`);
				return;
			}
			const accounts = await web3.eth.getAccounts();
			console.log('Acount is', accounts[0]);

			web3Store.dispatch(setWalletAddress(accounts[0]));
		} else {
			console.log('Already connected');
		}
	} catch (err) {
		console.log(err);
		alert('error', err.message);
	}
};

export const verifyTokenAddress = async (address) => {
	try {

		const state = web3Store.getState();

		const tempWeb3 = new Web3(configEnv[state?.web3Slice?.selectedChainID]?.rpc);

		const contract = new tempWeb3.eth.Contract(TokenABI, address);

		const tokenName = await contract.methods.name().call();
		const tokenSymbol = await contract.methods.symbol().call();
		const tokenDecimals = await contract.methods.decimals().call();

		return {
			success: true,
			tokenName, tokenSymbol, tokenDecimals
		};
	} catch (err) {
		console.log(err);
		return { success: false, tokenName: '', tokenSymbol: '', tokenDecimals: '' };
	}
};
export const addTokenToLaunchPad = async (obj, currencySelected) => {
	try {
		const state = web3Store.getState();
		const tempWeb3 = new Web3(configEnv[state?.web3Slice?.selectedChainID]?.rpc);
		let launchPadContract = currencySelected == 'USDT' ? configEnv[state?.web3Slice?.selectedChainID]?.ApercronLaunchpadUSDT : configEnv[state?.web3Slice?.selectedChainID]?.ApercronLaunchpadEth;
		const address = state?.web3Slice?.userAddress;

		if (!address) {
			alert('Please connect wallet address');
			return;
		}
		const contract = new tempWeb3.eth.Contract(launchPadContract.abi, launchPadContract.contractAddress);
		console.log(contract);
		await contract.methods.addTokenToLaunchpad(obj).send({ from: address }).on('receipt', function () {
			console.log("received");
			// return {
			// 	success: true
			// };
		});


	} catch (err) {
		console.log(err);
		// return { success: false };
	}
};
export const getTotalLaunchPads = async () => {
	try {
		const state = web3Store.getState();
		web3Store.dispatch(setLaunchDataLoading(true));
		const tempWeb3 = new Web3(configEnv[state?.web3Slice?.selectedChainID]?.rpc);
		let usdtlaunchPadContract = configEnv[state?.web3Slice?.selectedChainID]?.ApercronLaunchpadUSDT;
		let ethlaunchPadContract = configEnv[state?.web3Slice?.selectedChainID]?.ApercronLaunchpadEth;
		const ethcontract = new tempWeb3.eth.Contract(ethlaunchPadContract.abi, ethlaunchPadContract.contractAddress);
		const usdtcontract = new tempWeb3.eth.Contract(usdtlaunchPadContract.abi, usdtlaunchPadContract.contractAddress);
		const totalEth = await ethcontract.methods.currentLaunchID().call();
		const totalUsdt = await usdtcontract.methods.currentLaunchID().call();
		web3Store.dispatch(setEthLanuchPads(totalEth));
		web3Store.dispatch(setUsdtLanuchPads(totalUsdt));
		let tempArray = [];
		if (totalEth > 0) {
			let tempEthArr = new Array(parseInt(totalEth)).fill('hello');
			console.log(tempEthArr);
			let index = 1;
			for await (let value of tempEthArr) {
				const ethData = await ethcontract.methods.launchData(index).call();
				const uri = await await ethcontract.methods.getUri(index).call();
				const { data: ipfsResponse } = await axios.get(`https://gateway.pinata.cloud/ipfs/${uri}`);
				const tokencontract = new tempWeb3.eth.Contract(TokenABI, ethData?.tokenAddress);
				const tokenName = await tokencontract.methods.name().call();
				const tokenSymbol = await tokencontract.methods.symbol().call();
				// const tokenDecimals = await tokencontract.methods.decimals().call();
				tempArray.push({ ...ethData, ...ipfsResponse, tokenName, tokenSymbol, contractType: 'ApercronLaunchpadEth' });
				index++;
			}
		}
		if (totalUsdt > 0) {
			let tempUsdtArr = new Array(parseInt(totalUsdt)).fill('hello');
			let index = 1;
			for await (let value of tempUsdtArr) {
				const ethData = await usdtcontract.methods.launchData(index).call();
				const uri = await await usdtcontract.methods.getUri(index).call();
				const { data: ipfsResponse } = await axios.get(`https://gateway.pinata.cloud/ipfs/${uri}`);
				const tokencontract = new tempWeb3.eth.Contract(TokenABI, ethData?.tokenAddress);
				const tokenName = await tokencontract.methods.name().call();
				const tokenSymbol = await tokencontract.methods.symbol().call();
				// const tokenDecimals = await tokencontract.methods.decimals().call();
				tempArray.push({ ...ethData, ...ipfsResponse, tokenName, tokenSymbol, contractType: 'ApercronLaunchpadUSDT' });
				index++;
			}
		}
		console.log(tempArray)
		web3Store.dispatch(setLaunchDataLoading(false));
		web3Store.dispatch(setLaunchPadData(tempArray));


	} catch (err) {
		console.log(err);
		web3Store.dispatch(setLaunchDataLoading(false));
		// return { success: false };
	}
};

export const buyTokenWithEth = async (launchId, tokenAmount, tokenPerEth, contractType) => {
	try {
		const state = web3Store.getState();
		const tempWeb3 = new Web3(Web3.givenProvider);
		let launchPadContract = configEnv[state?.web3Slice?.selectedChainID][contractType];
		const address = state?.web3Slice?.userAddress;
		if (!address) {
			alert('Please connect wallet address');
			return { success: false };
		}
		// let transferToken = bigNumber(tokenAmount).multiply(
		// 	bigNumber(String(10 ** 18))
		// );
		// tokenPerEth = tokenPerEth?.toString().length > 17 ? Web3.utils.fromWei(tokenPerEth.toString(), 'ether') : tokenPerEth;
		// let permaticAmount = JSON.stringify(Number(tokenAmount / tokenPerEth));
		// console.log("amount: " + permaticAmount);
		let amountInWei = Web3.utils.toWei(tokenAmount, 'ether')
			;

		const contract = new tempWeb3.eth.Contract(launchPadContract.abi, launchPadContract.contractAddress);
		await contract.methods.buyToken(launchId).send({ from: address, value: amountInWei }).on('receipt', function (result) {
			console.log("received", result);
		});
		return { success: true };


	} catch (err) {
		console.log(err);
		return { success: false };
	}
};
export const buyTokenWithUSDT = async (launchId, tokenAmount, tokenPerEth, contractType) => {
	try {
		const state = web3Store.getState();
		const tempWeb3 = new Web3(Web3.givenProvider);
		let launchPadContract = configEnv[state?.web3Slice?.selectedChainID][contractType];
		const address = state?.web3Slice?.userAddress;
		if (!address) {
			alert('Please connect wallet address');
			return { success: false };
		}
		let transferToken = bigNumber(tokenAmount).multiply(
			bigNumber(String(10 ** 18))
		);
		const contract = new tempWeb3.eth.Contract(launchPadContract.abi, launchPadContract.contractAddress);
		let usdtAddress = await contract.methods.USDTAddress().call();
		const contractApprove = new tempWeb3.eth.Contract(TokenABI, usdtAddress);
		// tokenPerEth = tokenPerEth?.toString().length > 17 ? Web3.utils.fromWei(tokenPerEth.toString(), 'ether') : tokenPerEth;
		// let permaticAmount = JSON.stringify(Number(tokenAmount / tokenPerEth));
		let permaticAmount = JSON.stringify(Number(tokenAmount));
		console.log("amount: " + permaticAmount);
		let amountInWei = Web3.utils.toWei(permaticAmount, 'ether');
		await contractApprove.methods.approve(launchPadContract.contractAddress, amountInWei).send({ from: address })
			.on('receipt', async (result) => {
				console.log(result);
				await contract.methods.buyToken(launchId, amountInWei).send({ from: address }).on('receipt', function (result) {
					console.log("received", result);
				});
			});

		return { success: true };


	} catch (err) {
		console.log(err);
		return { success: false };
	}
};

export const switchNetwork = async (chainID)=>{
	try{
		if(window.ethereum){
        
			const hexChain = await web3[80001].utils.toHex(chainID);
			if(!web3){
				web3 = new Web3(window?.ethereum)
			}
			await window?.ethereum?.request({
			method: 'wallet_switchEthereumChain',
			params: [{
				chainId:hexChain
			}]
		});

		store.dispatch(setSelectedNetwork(chainID))
	}
	}
	catch(err){
		console.log(err);
		throw new Error(err?.message);
	}
}
