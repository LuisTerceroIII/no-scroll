export enum StoreSlices {
    NO_SCROLL_GALERY_SLICE = "noScrollGalerySlice",
    NO_SCROLL_NAVIGATION_SLICE = "noScrollNavigationSlice"
}

export type StoreSlice = keyof typeof StoreSlices
export const isEnabledSlices = (slice: StoreSlices) => Object.values(StoreSlices).includes(slice)
