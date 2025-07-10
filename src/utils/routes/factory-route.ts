import type { FactoryRouteProps } from "../../interfaces/factory-route.ts"

export function FactoryRoute({
    app,
    endpoint,
    method,
    resource,
}: FactoryRouteProps) {
    app[method](endpoint, resource)
}
