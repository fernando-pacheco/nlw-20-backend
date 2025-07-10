import { type FastifyInstance, fastify } from "fastify"
import type { ZodTypeProvider } from "fastify-type-provider-zod"
import { vars } from "./config/vars.ts"
import { corsPlugin } from "./plugins/cors.ts"
import { validatorPlugin } from "./plugins/validator.ts"
import { Router } from "./router.ts"

class Server {
    private AMB: string

    constructor(
        private app: FastifyInstance = fastify({
            logger: true,
        }).withTypeProvider<ZodTypeProvider>(),
        private router: Router = new Router(),
        private environments: Record<string, string> = {
            qa: "Homologação",
            prod: "Produção",
            dev: "Desenvolvimento",
        }
    ) {
        this.AMB = this.environments[vars.NODE_ENV]
    }

    private async configure() {
        validatorPlugin(this.app)
        await corsPlugin(this.app)
    }

    private registerRoutes() {
        this.app.register(this.router.register)
    }

    public async start() {
        try {
            await this.configure()
            this.registerRoutes()
            const port = vars.API_PORT
            const path = vars.API_URL
            await this.app.listen({ port, path })
        } catch (err) {
            console.error("Error starting server:", err)
            process.exit(1)
        }
    }
}

const server = new Server()
server.start()
