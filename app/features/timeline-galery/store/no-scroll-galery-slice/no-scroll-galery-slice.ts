import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreSlices } from "../../../../store/Slices";
import { Connection, ConnectionStatusProtocol } from "../../../../types/connection-api-protocol.types";
import NoScrollGaleryStaticData from "./no-scroll-galery-static-data.json";

export type GaleryElement = {
    id: string
    title?: string
    description?: string
    backgroundColor?: string
    type: 'image' | 'video' | "phrase"
}

type Galery = {
    elements?: GaleryElement[]
    connection?: Connection
}

export const NoScrollGalerySlice = createSlice({
    name: StoreSlices.NO_SCROLL_GALERY_SLICE,
    initialState: {
        galery: {} as Galery
    },
    reducers: {
        getElements: (state) => {
            if (!state.galery?.elements || state.galery?.elements?.length === 0) {
                const typedData = NoScrollGaleryStaticData as Array<{
                    id: string;
                    title: string;
                    description: string;
                    type: 'image' | 'video' | 'phrase';
                    backgroundColor: string;
                }>;
                state.galery.elements = typedData;
            }
        },
        setConnectionStatus: (state, action: PayloadAction<ConnectionStatusProtocol>) => {
            if (!state.galery.connection) {
                state.galery.connection = {} as Connection;
            }
            state.galery.connection.status = action.payload;
        }
    }
})