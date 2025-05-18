import { useEffect, useState } from 'react';
import { useAuth } from '@/app/auth/context/auth-context';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/app/lib/supabase';

/**
 * Callback page for OAuth authentication redirects.
 * This component handles the authentication flow after a user signs in with a third-party provider.
 */
export function CallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const { saveAuth, setUser: setCurrentUser } = useAuth();

  useEffect(() => {
    // Get error parameters
    const errorParam = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    if (errorParam) {
      setError(errorDescription || 'Authentication failed');
      // After a delay, redirect to signin page with error params
      setTimeout(() => {
        navigate(
          `/auth/signin?error=${errorParam}&error_description=${encodeURIComponent(errorDescription || 'Authentication failed')}`,
        );
      }, 1500);
      return;
    }

    // The supabase client will automatically handle setting up the session
    // We need to get the session and integrate it with our auth context
    const handleCallback = async () => {
      try {
        console.log('Processing OAuth callback');

        // Get the session from Supabase
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Error getting session:', error);
          throw error;
        }

        if (!data.session) {
          console.error('No session found after OAuth callback');
          throw new Error('Authentication session not established');
        }

        console.log('Session obtained successfully from OAuth provider');

        // Create auth model from session data (same structure as used in regular login)
        const authModel = {
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
        };

        // Save auth data to context and local storage
        saveAuth(authModel);
        console.log('Auth data saved to context');

        // Get the next URL - either from query param or default to root
        const nextPath = searchParams.get('next') || '/';

        // Navigate to the target page
        console.log('Redirecting to:', nextPath);
        navigate(nextPath);
      } catch (err) {
        console.error('Error processing OAuth callback:', err);
        setError('An unexpected error occurred during authentication');

        // Redirect to login page after showing error
        setTimeout(() => {
          navigate(
            '/auth/signin?error=auth_callback_error&error_description=Failed to complete authentication',
          );
        }, 1500);
      }
    };

    handleCallback();
  }, [navigate, searchParams, saveAuth, setCurrentUser]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      {error ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-destructive">
            Authentication Error
          </h2>
          <p className="text-muted-foreground">{error}</p>
          <p className="text-sm">Redirecting to sign-in page...</p>
        </div>
      ) : null}
    </div>
  );
}
