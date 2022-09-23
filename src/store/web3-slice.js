import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    userAddress:"",
    selectedChainID:80001,
    currentContractSelected:'ApercronLaunchpadEth'
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
    }
})

export const {
	setWalletAddress,
    setSelectedNetwork,
    setCurrentContractSelected,
} = web3Slice.actions;
export default web3Slice.reducer;