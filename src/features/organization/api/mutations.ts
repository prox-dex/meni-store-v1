import { CreateOrganizationRequest, Organization} from "../types";
import {createOrganizationSchema } from '@/features/organization/schema'

export async function createOrganization(
  data: CreateOrganizationRequest
): Promise<Organization> {
  const validatedData = createOrganizationSchema.parse(data);

  const response = await fetch('/api/organizations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validatedData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create organization');
  }

  return response.json();
}