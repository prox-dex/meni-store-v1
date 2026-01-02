import { useState, useEffect } from 'react';
import * as api from '@/features/user/api'
import { User, UserFilters } from '../types';

export function useUsers(
  filters?: UserFilters,
  page: number = 1,
  pageSize: number = 10
) {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await api.getUsers();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch users'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, [filters, page, pageSize]);

  return { data, isLoading, error };
}