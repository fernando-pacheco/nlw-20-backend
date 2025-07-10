import type { RouteHandlerMethod } from "fastify"
import type { FastifyTypedInstance } from "../types/fastify.ts"

interface FactoryRouteProps {
    app: FastifyTypedInstance
    endpoint: string
    method: "get" | "post" | "put" | "delete"
    resource: RouteHandlerMethod
}

export type { FactoryRouteProps }
