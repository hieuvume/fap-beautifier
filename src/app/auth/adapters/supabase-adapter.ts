import { AuthModel, UserModel } from '@/app/auth/lib/models';
import { supabase } from '@/app/lib/supabase';

/**
 * Supabase adapter that maintains the same interface as the existing auth flow
 * but uses Supabase under the hood.
 */
export const SupabaseAdapter = {
  /**
   * Login with email and password
   */
  async login(email: string, password: string): Promise<AuthModel> {
    console.log('SupabaseAdapter: Attempting login with email:', email);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('SupabaseAdapter: Login error from Supabase:', error);
        throw new Error(error.message);
      }

      console.log(
        'SupabaseAdapter: Login successful, session:',
        data.session
          ? {
              access_token_length: data.session.access_token?.length,
              refresh_token_length: data.session.refresh_token?.length,
            }
          : 'No session data',
      );

      // Transform Supabase session to AuthModel
      return {
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      };
    } catch (error) {
      console.error('SupabaseAdapter: Unexpected login error:', error);
      throw error;
    }
  },

  /**
   * Login with OAuth provider (Google, GitHub, etc.)
   */
  async signInWithOAuth(
    provider:
      | 'google'
      | 'github'
      | 'facebook'
      | 'twitter'
      | 'discord'
      | 'slack',
    options?: { redirectTo?: string },
  ): Promise<void> {
    console.log(
      'SupabaseAdapter: Initiating OAuth flow with provider:',
      provider,
    );

    try {
      const redirectTo =
        options?.redirectTo || `${window.location.origin}/auth/callback`;

      console.log('SupabaseAdapter: Using redirect URL:', redirectTo);

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
        },
      });

      if (error) {
        console.error('SupabaseAdapter: OAuth error:', error);
        throw new Error(error.message);
      }

      console.log('SupabaseAdapter: OAuth flow initiated successfully');

      // No need to return anything - the browser will be redirected
    } catch (error) {
      console.error('SupabaseAdapter: Unexpected OAuth error:', error);
      throw error;
    }
  },

  /**
   * Register a new user
   */
  async register(
    email: string,
    password: string,
    password_confirmation: string,
    firstName?: string,
    lastName?: string,
  ): Promise<AuthModel> {
    if (password !== password_confirmation) {
      throw new Error('Passwords do not match');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: email.split('@')[0], // Default username from email
          first_name: firstName || '',
          last_name: lastName || '',
          fullname:
            firstName && lastName ? `${firstName} ${lastName}`.trim() : '',
          created_at: new Date().toISOString(),
        },
      },
    });

    if (error) throw new Error(error.message);

    // Return empty tokens if email confirmation is required
    if (!data.session) {
      return {
        access_token: '',
        refresh_token: '',
      };
    }

    // Transform Supabase session to AuthModel
    return {
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    };
  },

  /**
   * Request password reset
   */
  async requestPasswordReset(email: string): Promise<void> {
    console.log('Requesting password reset for:', email);

    try {
      // Ensure the redirect URL is properly formatted with a hash for token
      const redirectUrl = `${window.location.origin}/auth/reset-password`;
      console.log('Using redirect URL:', redirectUrl);

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });

      if (error) {
        console.error('Password reset request error:', error);
        throw new Error(error.message);
      }

      console.log('Password reset email sent successfully');
    } catch (err) {
      console.error('Unexpected error in password reset:', err);
      throw err;
    }
  },

  /**
   * Reset password with token
   */
  async resetPassword(
    password: string,
    password_confirmation: string,
  ): Promise<void> {
    if (password !== password_confirmation) {
      throw new Error('Passwords do not match');
    }

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) throw new Error(error.message);
  },

  /**
   * Request another verification email
   */
  async resendVerificationEmail(email: string): Promise<void> {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/verify-email`,
      },
    });

    if (error) throw new Error(error.message);
  },

  /**
   * Get current user from the session
   */
  async getCurrentUser(): Promise<UserModel | null> {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return null;

    return this.getUserProfile();
  },

  /**
   * Get user profile from user metadata
   */
  async getUserProfile(): Promise<UserModel> {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) throw new Error(error?.message || 'User not found');

    // Get user metadata and transform to UserModel format
    const metadata = user.user_metadata || {};

    // Format data to maintain compatibility with existing UI
    return {
      id: user.id,
      email: user.email || '',
      email_verified: user.email_confirmed_at !== null,
      username: metadata.username || '',
      first_name: metadata.first_name || '',
      last_name: metadata.last_name || '',
      fullname:
        metadata.fullname ||
        `${metadata.first_name || ''} ${metadata.last_name || ''}`.trim(),
      occupation: metadata.occupation || '',
      company_name: metadata.company_name || '',
      companyName: metadata.company_name || '', // For backward compatibility
      phone: metadata.phone || '',
      roles: metadata.roles || [],
      pic: metadata.pic || '',
      language: metadata.language || 'en',
      is_admin: metadata.is_admin || false,
    };
  },

  /**
   * Update user profile (stored in metadata)
   */
  async updateUserProfile(userData: Partial<UserModel>): Promise<UserModel> {
    // Transform from UserModel to metadata format
    const metadata: Record<string, unknown> = {
      username: userData.username,
      first_name: userData.first_name,
      last_name: userData.last_name,
      fullname:
        userData.fullname ||
        `${userData.first_name || ''} ${userData.last_name || ''}`.trim(),
      occupation: userData.occupation,
      company_name: userData.company_name || userData.companyName, // Support both formats
      phone: userData.phone,
      roles: userData.roles,
      pic: userData.pic,
      language: userData.language,
      is_admin: userData.is_admin,
      updated_at: new Date().toISOString(),
    };

    // Remove undefined fields
    Object.keys(metadata).forEach((key) => {
      if (metadata[key] === undefined) {
        delete metadata[key];
      }
    });

    // Update user metadata
    const { error } = await supabase.auth.updateUser({
      data: metadata,
    });

    if (error) throw new Error(error.message);

    return this.getCurrentUser() as Promise<UserModel>;
  },

  /**
   * Logout the current user
   */
  async logout(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  },
};
