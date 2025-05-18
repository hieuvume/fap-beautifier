export interface ProfileData {
  image: string;
  fullName: string;
  rollNumber: string;
  email: string;
  phone: string;
  balance: string;
  profileData: Record<string, string>;
  academicData: Record<string, string>;
  parentData: Record<string, string>;
  otherData: Record<string, string>;
}

export type ProfileTab = 'profile' | 'academic' | 'parent' | 'other';

export interface UpdateProfileData {
  formHtml: string;
  viewStateValue: string;
  viewStateGeneratorValue: string;
  eventValidationValue: string;
} 