import type { FastifyTypedInstance } from "../../types/fastify.ts"

export abstract class Routes {
    public abstract registerRoutes(app: FastifyTypedInstance): void
}
