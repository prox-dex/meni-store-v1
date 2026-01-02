export type UserResponse = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export type User = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface UsersResponse {
    organizations: User[];
    total: number;
    page: number;
    pageSize: number;
}

export interface UserFilters {
    status?: 'active' | 'inactive';
    search?: string;
}