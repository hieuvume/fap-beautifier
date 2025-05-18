import React, { useEffect, useState } from 'react';
import { SupabaseAdapter } from '@/app/auth/adapters/supabase-adapter';

/**
 * A simple component that displays the status of the Supabase connection.
 * This can be used during development to verify that Supabase is properly connected.
 */
export const SupabaseStatus: React.FC = () => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>(
    'checking',
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const isAvailable = await SupabaseAdapter.isAvailable();
        if (isAvailable) {
          setStatus('connected');
        } else {
          setStatus('error');
          setError('Supabase connection failed. Check console for details.');
        }
      } catch (e) {
        setStatus('error');
        setError(e instanceof Error ? e.message : 'Unknown error');
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="p-4 rounded-md border">
      <h3 className="text-lg font-medium mb-2">Supabase Status</h3>
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            status === 'checking'
              ? 'bg-accent'
              : status === 'connected'
                ? 'bg-green-500'
                : 'bg-red-500'
          }`}
        />
        <span>
          {status === 'checking'
            ? 'Checking connection...'
            : status === 'connected'
              ? 'Connected to Supabase'
              : 'Connection error'}
        </span>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};
