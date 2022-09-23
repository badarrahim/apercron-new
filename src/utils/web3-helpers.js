import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { configEnv } from './configEnv';
import { store as web3Store } from '../store';
import { setWalletAddress } from '../store/web3-slice';
import { TokenABI } from './abi/TokenABI';

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
							[selectedChainID]:configEnv[selectedChainID].rpc,
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
		alert('error',err.message);
	}
};

export const verifyTokenAddress = async(address)=>{
	try{
		
		const state = web3Store.getState();

		const tempWeb3 = new Web3(configEnv[state?.web3Slice?.selectedChainID]?.rpc)

		const contract = new tempWeb3.eth.Contract(TokenABI,address);

		const name = await contract.methods.name().call();

		return {
			success:true
		}
	}catch(err){
		console.log(err);
		return {success:false};
	}
}