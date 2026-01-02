export type Organization = {
    id: string
    name: string
    slug: string
}

export interface OrganizationsResponse {
    organizations: Organization[];
    total: number;
    page: number;
    pageSize: number;
}

export type CreateOrganizationRequest = {
    name: string
    slug: string
}

export interface OrganizationFilters {
    status?: 'active' | 'inactive' | 'pending';
    industry?: string;
    size?: 'small' | 'medium' | 'large' | 'enterprise';
    search?: string;
}