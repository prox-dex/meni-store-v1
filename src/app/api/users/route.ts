import { NextRequest, NextResponse } from "next/server";
import * as repository from '@/features/user/lib/repository';

export async function GET(request: NextRequest) {
    try {
        const result = await repository.findAll();
        return NextResponse.json(result);
    } catch (error) {
        console.error(`GET request: ${request} /api/users error: ${error}`);
        return NextResponse.json(
            { error: 'Failed to fetch organizations' },
            { status: 500 }
        );
    }
}