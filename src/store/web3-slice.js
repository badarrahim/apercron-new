import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    userAddress:"",
    selectedChainID:80001,
    currentContractSelected: 'ApercronLaunchpadEth',
    ethLanuchPads: 0,
    usdtLanuchPads: 0,
    launchPadsData: []
}

const web3Slice = createSlice({
	name: 'web3Slice',
	initialState,
	reducers: {
		setWalletAddress(state, action) {
			state.userAddress = action.payload;
		},
        setSelectedNetwork(state,action){
            state.selectedChainID = action.payload;
        },
        setCurrentContractSelected(state,action){
            state.currentContractSelected = action.payload;
        },
        setEthLanuchPads (state, action) {
            state.ethLanuchPads = action.payload;
        },
        setUsdtLanuchPads (state, action) {
            state.usdtLanuchPads = action.payload;
        },
        setLaunchPadData (state, action) {
            state.launchPadsData = action.payload;
        }
    }
})

export const {
	setWalletAddress,
    setSelectedNetwork,
    setCurrentContractSelected,
    setEthLanuchPads,
    setUsdtLanuchPads,
    setLaunchPadData
} = web3Slice.actions;
export default web3Slice.reducer;