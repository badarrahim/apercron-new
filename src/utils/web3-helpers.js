import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { configEnv } from './configEnv';
import { store as web3Store } from '../store';
import { setWalletAddress, setEthLanuchPads, setUsdtLanuchPads, setLaunchPadData } from '../store/web3-slice';
import { TokenABI } from './abi/TokenABI';
import axios from 'axios';

export let web3 = {};

web3[80001] = new Web3(configEnv[80001]?.rpc);

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
				alert("error", `Please connect to ${configEnv.AVAX_NETWORK_NAME}`);
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

		const name = await contract.methods.name().call();

		return {
			success: true
		};
	} catch (err) {
		console.log(err);
		return { success: false };
	}
};
export const addTokenToLaunchPad = async (obj, currencySelected) => {
	try {
		const state = web3Store.getState();
		const tempWeb3 = new Web3(configEnv[state?.web3Slice?.selectedChainID]?.rpc);
		let launchPadContract = currencySelected == 'ETH' ? configEnv[state?.web3Slice?.selectedChainID]?.ApercronLaunchpadUSDT : configEnv[state?.web3Slice?.selectedChainID]?.ApercronLaunchpadEth;
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
export const getLaunchPadsData = async (obj, currencySelected) => {
	try {
		const state = web3Store.getState();
		const tempWeb3 = new Web3(configEnv[state?.web3Slice?.selectedChainID]?.rpc);
		let launchPadContract = currencySelected == 'ETH' ? configEnv[state?.web3Slice?.selectedChainID]?.ApercronLaunchpadEth : configEnv[state?.web3Slice?.selectedChainID]?.ApercronLaunchpadUSDT;
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
			let tempEthArr = new Array(totalEth);
			console.log(tempEthArr);
			for await (let [index, value] of tempEthArr) {
				console.log(value, index);
				let searchedValue = parseInt(index);
				const ethData = await ethcontract.methods.launchData(searchedValue).call();
				const uri = await await ethcontract.methods.getUri(searchedValue).call();
				const { data: ipfsResponse } = axios.get(`https://gateway.pinata.cloud/ipfs/${uri}`);
				tempArray.push({ ...ethData, ...ipfsResponse });
			}
		}
		if (totalUsdt > 0) {
			let tempUsdtArr = new Array(totalUsdt);
			for await (let [index, value] of tempUsdtArr) {
				console.log(index, value);
				let searchedValue = parseInt(index);
				console.log(searchedValue);
				const ethData = await usdtcontract.methods.launchData(searchedValue).call();
				const uri = await await usdtcontract.methods.getUri(searchedValue).call();
				const { data: ipfsResponse } = await axios.get(`https://gateway.pinata.cloud/ipfs/${uri}`);
				const tokencontract = new tempWeb3.eth.Contract(TokenABI, ethData?.tokenAddress);
				const tokenName = await tokencontract.methods.name().call();
				const tokenSymbol = await tokencontract.methods.symbol().call();
				// const tokenDecimals = await tokencontract.methods.decimals().call();
				tempArray.push({ ...ethData, ...ipfsResponse, tokenName, tokenSymbol });
			}
		}
		web3Store.dispatch(setLaunchPadData(tempArray));


	} catch (err) {
		console.log(err);
		// return { success: false };
	}
};