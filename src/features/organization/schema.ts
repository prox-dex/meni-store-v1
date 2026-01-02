import { z } from 'zod';

export const organizationSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    slug: z.string()
        .min(2, 'Slug must be at least 2 characters')
        .max(50, 'Slug must be less than 50 characters')
        .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
});

export const createOrganizationSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters'),
    slug: z.string()
        .min(2, 'Slug must be at least 2 characters')
        .max(50, 'Slug must be less than 50 characters')
        .regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
});

export type CreateOrganizationSchema = z.infer<typeof createOrganizationSchema>;
export type OrganizationSchema = z.infer<typeof organizationSchema>;