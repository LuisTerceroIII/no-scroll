
export const publicRoutes = [
    {
        path: "/",
        element: undefined
    },
    {
        path: "timeline-galery",
        element: undefined
    }
]

export const isValidPublicPath = (path: string) => {
    return publicRoutes.some(route => route.path === path)
}