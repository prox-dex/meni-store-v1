import type { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

async function findAll(params?: {
    skip?: number;
    take?: number;
    where?: Prisma.organizationWhereInput;
    orderBy?: Prisma.organizationOrderByWithRelationInput;
}) {
    return prisma.organization.findMany(params);
}
async function findBySlug(slug: string) {
    return prisma.organization.findUnique({
        where: { slug },
    });
}
async function create(data: Prisma.organizationCreateInput) {
    return prisma.organization.create({
        data: data
    });
}

export { findAll, findBySlug, create }