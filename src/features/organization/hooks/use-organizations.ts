import { useState, useEffect } from 'react';
import * as api from '@/features/organization/api'
import { Organization, OrganizationFilters } from '../types';

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
        const result = await api.getUsers();
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

  return { data, isLoading, error };
}