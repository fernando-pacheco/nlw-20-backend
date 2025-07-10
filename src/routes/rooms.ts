import { Routes } from "../interfaces/abstract/routes.ts"
import { RoomsResource } from "../resources/rooms.ts"
import type { FastifyTypedInstance } from "../types/fastify.ts"
import { FactoryRoute } from "../utils/routes/factory-route.ts"

class RoomsRoutes extends Routes {
    constructor(private resource: RoomsResource = new RoomsResource()) {
        super()
    }

    public registerRoutes(app: FastifyTypedInstance): void {
        this.registerRoomsRoutes(app)
    }

    private registerRoomsRoutes(app: FastifyTypedInstance): void {
        FactoryRoute({
            app,
            endpoint: "/rooms",
            method: "get",
            resource: this.resource.getAllRooms,
        })
    }
}

export { RoomsRoutes }
