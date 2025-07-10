import type { FastifyReply, FastifyRequest } from "fastify"
import { RoomsSchema } from "../schemas/rooms.ts"
import { RoomsService } from "../services/rooms.ts"

class RoomsResource {
    constructor(
        private service: RoomsService = new RoomsService(),
        private schema: RoomsSchema = new RoomsSchema()
    ) {
        this.schema = schema
        this.service = service
        this.getAllRooms = this.getAllRooms.bind(this)
    }

    async getAllRooms(_req: FastifyRequest, reply: FastifyReply) {
        const rooms = await this.service.getAllRooms()
        reply.status(200).send(this.schema.responseArray.parse(rooms))
    }
}

export { RoomsResource }
