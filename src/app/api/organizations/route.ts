import { NextRequest, NextResponse } from "next/server";
import * as repository from '@/features/organization/lib/repository';
import { createOrganizationSchema } from '@/features/organization/schema';
import { randomUUID } from "crypto";

export async function GET(request: NextRequest) {
    try {
        const result = await repository.findAll();
        return NextResponse.json(result);
    } catch (error) {
        console.error(`GET request: ${request} /api/organizations error: ${error}`);
        return NextResponse.json(
            { error: 'Failed to fetch organizations' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validatedData = createOrganizationSchema.parse(body);

    const existing = await repository.findBySlug(validatedData.slug);
    if (existing) {
        return NextResponse.json(
            { error: 'Slug is already taken' },
            { status: 400 }
        );
    }

    const id = randomUUID();
    const organization = await repository.create({
        id: id,
        name: validatedData.name,
        slug: validatedData.slug,
        createdAt: new Date(),
    });

    return NextResponse.json(organization, { status: 201 });
}