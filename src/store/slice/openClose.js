import { createSlice } from '@reduxjs/toolkit'



const openClose = createSlice({
    name: "openclose",
    initialState: {
        basketPopover: false,
        logoPopover: false
    },
    reducers: {
        basketOnOff(state) {
            state.basketPopover = !state.basketPopover
        },
        logoOnOff(state) {
            state.logoPopover = !state.logoPopover
        },
        basketOff(state) {
            state.basketPopover = false;
        },
        logoOff(state) {
            state.logoPopover = false
        }
    }
});

export const { logoOnOff, basketOnOff, basketOff, logoOff } = openClose.actions

export default openClose.reducer