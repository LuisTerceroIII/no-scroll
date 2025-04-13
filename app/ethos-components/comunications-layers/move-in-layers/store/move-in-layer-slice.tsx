import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayersNames } from "../../layers-protocol";

export const NoRushSlice = createSlice({
    name: LayersNames.NO_RUSH,
    initialState: {
        channelStatus: "open" as "open" | "closed",
        counter: 0,
        registerElementsIds:[] as string[],
        focusElementId: null as string | null
    },
    reducers: {
        resetRegisterElements: (state) => {
            state.registerElementsIds = []
        },
        registerId: (state, action: PayloadAction<{ id: string }>) => {
            if(state.registerElementsIds.includes(action.payload.id)) return
            state.registerElementsIds = [...state.registerElementsIds, action.payload.id]
            state.counter += 1
        },
        getChannelStatus: (state) => {
            state.channelStatus = "open" as "open" | "closed"
        },
        setChannelStatus: (state, action: PayloadAction<"open" | "closed">) => {
            state.channelStatus = action.payload
        },
        setFocusElementId: (state, action: PayloadAction<string | null>) => {
            state.focusElementId = action.payload
        },
        unsetFocusElementId: (state) => {
            state.focusElementId = null
        }
    }
})