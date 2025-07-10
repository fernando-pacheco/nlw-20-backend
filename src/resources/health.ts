import type { FastifyReply, FastifyRequest } from "fastify"

class HealthResource {
    public async healthCheck(
        _request: FastifyRequest,
        reply: FastifyReply
    ): Promise<void> {
        reply.send({ status: "ok" })
    }
}

export { HealthResource }
