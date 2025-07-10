import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    await prisma.rooms.deleteMany()

    const rooms = Array.from({ length: 20 }).map(() => ({
        name: faker.company.name(),
        description: faker.lorem.sentence(),
    }))

    await prisma.rooms.createMany({ data: rooms })

    console.log("✅ Seed concluído com sucesso.")
}

main()
    .catch((e) => {
        console.error("Erro no seed:", e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())
