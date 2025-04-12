
/** Connection API Protocol*/

export type ConnectionStatusProtocol = "idle" | "loading" | "succeeded" | "failed"

export type ConnectionResponseProtocol = {
    code: number // HTTP Status Code    
    message: string // HTTP Status Message
    data: any //Response Data
}

export type Connection = {
    status: ConnectionStatusProtocol
    response: ConnectionResponseProtocol
}
