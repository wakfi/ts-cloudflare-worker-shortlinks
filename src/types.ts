export type WorkerResponse = Response | Promise<Response>

export type Responder = {
	home: () => WorkerResponse,
	to: (destination?: string) => WorkerResponse
}
