import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    userAddress:"",
    selectedChainID:80001,
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
    }
})

export const {
	setWalletAddress,
    setSelectedNetwork,
} = web3Slice.actions;
export default web3Slice.reducer;