import { Routes } from "../interfaces/abstract/routes.ts"
import { HealthResource } from "../resources/health.ts"
import type { FastifyTypedInstance } from "../types/fastify.ts"
import { FactoryRoute } from "../utils/routes/factory-route.ts"

class HealthRoutes extends Routes {
    constructor(private resource: HealthResource = new HealthResource()) {
        super()
    }

    public registerRoutes(app: FastifyTypedInstance): void {
        this.registerHealthRoutes(app)
    }

    private registerHealthRoutes(app: FastifyTypedInstance): void {
        FactoryRoute({
            app,
            endpoint: "/health",
            method: "get",
            resource: this.resource.healthCheck,
        })
    }
}

export { HealthRoutes }
