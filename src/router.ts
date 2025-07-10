import { HealthRoutes } from "./routes/health.ts"
import { RoomsRoutes } from "./routes/rooms.ts"
import type { FastifyTypedInstance } from "./types/fastify.ts"

class Router {
    constructor(
        private health: HealthRoutes = new HealthRoutes(),
        private rooms: RoomsRoutes = new RoomsRoutes()
    ) {}

    register = async (app: FastifyTypedInstance) => {
        this.health.registerRoutes(app)
        this.rooms.registerRoutes(app)
    }
}

export { Router }
