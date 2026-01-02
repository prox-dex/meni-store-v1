import prisma from "@/lib/prisma";

async function findById(userId: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        return user;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

async function findAll() {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export {findById, findAll}