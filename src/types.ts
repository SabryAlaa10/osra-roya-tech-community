export type Language = 'ar' | 'en';

export type ActiveView = 
  | 'home' 
  | 'registration' 
  | 'members' 
  | 'achievements' 
  | 'gallery' 
  | 'community' 
  | 'about';

export interface Member {
  id: string;
  name: string;
  arabicName: string;
  academicYear: 'Senior' | 'Junior' | 'Freshman';
  role: string;
  arabicRole: string;
  track: string;
  arabicTrack: string;
  badge: string; // e.g. Guru, Captain, Ace
  badgeColor?: string;
  avatarInitials: string;
  avatarUrl?: string;
  bio?: string;
  category: 'leadership' | 'tech' | 'operations' | 'media';
  isPresident?: boolean;
  isVP?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  description: string;
  tag: string;
  statusBadge: string;
  statusColor?: string;
  iconName: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  colSpanDesktop: number; // 8 or 4
  minHeightClass: string;
}

export interface EventTab {
  id: 'ecpc' | 'ai' | 'recruitment' | 'certificate';
  title: string;
  englishTitle: string;
  icon: string;
  headerTitle: string;
  sidebarTitle: string;
  sidebarDesc: string;
  schedule: string;
  location: string;
  supervisors: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  academicYear: string;
  department: string;
  academicId: string;
  tracks: string[];
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  profileUrl: string;
  motivation: string;
  attendanceMode: 'onsite' | 'hybrid';
  suggestions: string;
  termsAccepted: boolean;
  eventSelected: string;
}

export interface RegistrationTicket {
  ticketId: string;
  studentName: string;
  email: string;
  phone: string;
  eventName: string;
  tracks: string[];
  timestamp: string;
  seatNumber: string;
  venue: string;
  qrValue: string;
}
