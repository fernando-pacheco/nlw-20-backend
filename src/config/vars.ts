import "dotenv/config"
import { z } from "zod/v4"

const envSchema = z.object({
    NODE_ENV: z.string().default("qa"),
    API_PORT: z.coerce.number().default(3333),
    API_URL: z.string().default("localhost:3333"),
    CLIENT_ORIGIN: z.string().default("http://localhost:3000"),
    DATABASE_URL: z.url().startsWith("postgresql://"),
})

const vars = envSchema.parse(process.env)

export { vars }
