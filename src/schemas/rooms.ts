import { z } from "zod/v4"

class RoomsSchema {
    public response = z.object({
        id: z.uuid(),
        name: z.string().min(1).max(100),
        description: z.string().optional(),
        createdAt: z.date(),
    })

    public responseArray = z.array(this.response)
}

export { RoomsSchema }
