import { useState, useEffect } from 'react';
import * as api from '@/features/organization/api'
import { CreateOrganizationRequest, Organization, OrganizationFilters } from '../types';

export function useOrganizations(
  filters?: OrganizationFilters,
  page: number = 1,
  pageSize: number = 10
) {
  const [data, setData] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchOrganizations = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await api.getOrganizations();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch organizations'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchOrganizations();

    return () => {
      isMounted = false;
    };
  }, [filters, page, pageSize]);

  // Expose a refetch helper so UI can refresh after mutations
  const refetch = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await api.getOrganizations();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch organizations'));
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, refetch };
}

export function useCreateOrganization() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createOrganization = async (data: CreateOrganizationRequest) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await api.createOrganization(data);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to create organization');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createOrganization, isLoading, error };
}