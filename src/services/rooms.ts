import { PrismaClient } from "@prisma/client"

class RoomsService {
    private RoomsModel: PrismaClient["rooms"]

    constructor(private prisma: PrismaClient = new PrismaClient()) {
        this.RoomsModel = this.prisma.rooms
    }

    async getAllRooms() {
        const rooms = await this.RoomsModel.findMany({
            orderBy: { createdAt: "desc" },
        })

        return rooms
    }
}

export { RoomsService }
