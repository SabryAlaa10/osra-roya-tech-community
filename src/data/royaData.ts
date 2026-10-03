import { Member, Achievement, GalleryItem, EventTab } from '../types';
import sabryPhoto from '../../assets/member-sabry.webp';
import ziadPhoto from '../../assets/12880c36-2beb-48a9-b95e-fdb4334a1d19.jpg';
import ahmadPhoto from '../../assets/7c97903d-3c76-402e-b39a-704344f799a7.jpg';
import ibrahimPhoto from '../../assets/WhatsApp Image 2026-09-17 at 2.55.44 PM.jpeg';
import adlyPhoto from '../../assets/WhatsApp Image 2026-09-17 at 2.55.30 PM.jpeg';
import esraaPhoto from '../../assets/WhatsApp Image 2026-09-17 at 2.38.21 PM.jpeg';
import haninPhoto from '../../assets/WhatsApp Image 2026-09-17 at 2.38.00 PM.jpeg';
import hanaaPhoto from '../../assets/WhatsApp Image 2026-09-22 at 9.07.51 AM.jpeg';
import yasserPhoto from '../../assets/WhatsApp Image 2026-09-22 at 5.35.22 PM.jpeg';
import tharwatPhoto from '../../assets/0233552c-9d4d-47e6-94e5-d4257ff5106f.jpg';
import abdelrahmanPhoto from '../../assets/WhatsApp Image 2026-09-22 at 4.14.12 PM.jpeg';
import farisPhoto from '../../assets/WhatsApp Image 2026-09-22 at 6.39.55 PM.jpeg';
import waelPhoto from '../../assets/WhatsApp Image 2026-09-22 at 5.47.32 PM.jpeg';
import khaledPhoto from '../../assets/WhatsApp Image 2026-09-22 at 2.42.36 PM.jpeg';
import rawdaPhoto from '../../assets/WhatsApp Image 2026-09-24 at 2.12.07 AM.jpeg';
import galleryPhoto01 from '../../assets/ChatGPT Image Sep 17, 2026, 02_31_13 PM.png';
import galleryPhoto02 from '../../assets/ChatGPT Image Sep 17, 2026, 02_33_31 PM.png';
import galleryPhoto03 from '../../assets/ChatGPT Image Sep 17, 2026, 03_07_01 PM.png';
import galleryPhoto04 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.30 PM (1).jpeg';
import galleryPhoto05 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.30 PM (2).jpeg';
import galleryPhoto06 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.30 PM.jpeg';
import galleryPhoto07 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.34 PM.jpeg';
import galleryPhoto08 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.37 PM.jpeg';
import galleryPhoto09 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.41 PM.jpeg';
import galleryPhoto10 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.44 PM (1).jpeg';
import galleryPhoto11 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.44 PM.jpeg';
import galleryPhoto12 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.46 PM.jpeg';
import galleryPhoto13 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.48 PM.jpeg';
import galleryPhoto14 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.50 PM.jpeg';
import galleryPhoto15 from '../../assets/WhatsApp Image 2026-10-02 at 10.21.51 PM.jpeg';
import galleryPhoto16 from '../../assets/WhatsApp Image 2026-10-02 at 10.14.23 PM.jpeg';

export const MEMBERS_DATA: Member[] = [
  {
    id: 'sabry',
    name: 'Sabry Mohamed Alaa',
    arabicName: 'صبري محمد علاء',
    academicYear: 'Senior',
    role: 'Family President',
    arabicRole: 'رئيس الأسرة',
    track: 'Family Leadership',
    arabicTrack: 'رئاسة وتأسيس أنشطة الأسرة',
    badge: 'Guru',
    badgeColor: '#F59E0B',
    avatarInitials: 'SM',
    avatarUrl: sabryPhoto,
    category: 'leadership',
    isPresident: true,
    bio: 'رئيس ومؤسس فعاليات أسرة رؤية، ويتابع أهم الفعاليات التقنية في مصر.'
  },
  {
    id: 'ziad',
    name: 'Ziad Ashour',
    arabicName: 'زياد عاشور',
    academicYear: 'Senior',
    role: 'Vice President',
    arabicRole: 'نائب رئيس أسرة رؤية',
    track: 'Family Operations',
    arabicTrack: 'تنظيم فعاليات الأسرة وتنسيق المشاركة',
    badge: 'Captain',
    badgeColor: '#4CD7F6',
    avatarInitials: 'ZA',
    avatarUrl: ziadPhoto,
    category: 'leadership',
    isVP: true,
    bio: 'يدعم تنظيم فعاليات الأسرة ويتعاون مع القيادة في تنسيق الحضور والمشاركة.'
  },
  {
    id: 'ahmed',
    name: 'Ahmad Mohamed',
    arabicName: 'أحمد محمد',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'Academic Excellence & NTI Training',
    arabicTrack: 'التفوق الدراسي وتدريبات NTI',
    badge: 'Ace',
    badgeColor: '#4EDEA3',
    avatarInitials: 'AM',
    avatarUrl: ahmadPhoto,
    category: 'tech',
    bio: 'طالب متميز ومن أوائل الكلية، وشارك في فعاليات وتدريبات متعددة لدى NTI.'
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim Ibn Adham',
    arabicName: 'إبراهيم بن أدهم',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'NTI Training & Cohort Leadership',
    arabicTrack: 'تدريب NTI وقيادة الدفعة',
    badge: 'Pioneer',
    badgeColor: '#ADC6FF',
    avatarInitials: 'IA',
    avatarUrl: ibrahimPhoto,
    category: 'tech',
    bio: 'تدرب في NTI ويقود دفعته.'
  },
  {
    id: 'adly',
    name: 'Mohamed Adly',
    arabicName: 'محمد عدلي',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'NTI Training & Family Activities',
    arabicTrack: 'تدريب NTI والمشاركة في أنشطة الأسرة',
    badge: 'Dynamo',
    badgeColor: '#F472B6',
    avatarInitials: 'MA',
    avatarUrl: adlyPhoto,
    category: 'tech',
    bio: 'تدرب في NTI، ومن أوائل الدفعة، ويشارك بفاعلية في أنشطة الأسرة.'
  },
  {
    id: 'esraa',
    name: 'Esraa Eid Saad',
    arabicName: 'إسراء عيد سعد',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'Academic Excellence & NTI Training',
    arabicTrack: 'التفوق الدراسي وتدريبات NTI',
    badge: 'Visionary',
    badgeColor: '#FB923C',
    avatarInitials: 'EE',
    avatarUrl: esraaPhoto,
    category: 'tech',
    bio: 'الأولى على الدفعة، وحضرت تدريبات في NTI، ومتحمسة للمشاركة في فعاليات الأسرة.'
  },
  {
    id: 'hanin',
    name: 'Hanin Khalid Mahmoud',
    arabicName: 'حنين خالد محمود',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'Academic Excellence & ITI Training',
    arabicTrack: 'التفوق الدراسي والتدريب في ITI',
    badge: 'Strategist',
    badgeColor: '#A3E635',
    avatarInitials: 'HK',
    avatarUrl: haninPhoto,
    category: 'operations',
    bio: 'الثانية على الدفعة، وتتدرب في ITI، وتشارك بفاعلية داخل الأسرة.'
  },
  {
    id: 'hanaa',
    name: 'Hanaa Tarek Elsayed',
    arabicName: 'هناء طارق السيد',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'Mobile Development, AI & Innovation',
    arabicTrack: 'تطوير تطبيقات الهاتف والذكاء الاصطناعي والابتكار',
    badge: 'Maverick',
    badgeColor: '#22D3EE',
    avatarInitials: 'HT',
    avatarUrl: hanaaPhoto,
    category: 'tech',
    bio: 'تدريبات في تطوير تطبيقات الهاتف لدى NTI، والذكاء الاصطناعي في BUE، والابتكار في Creativa.'
  },
  {
    id: 'menna',
    name: 'Menna Allah Shady Samir',
    arabicName: 'منة الله شادي سمير',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'Innovation Camp, AI & Mobile Development',
    arabicTrack: 'معسكر الابتكار والذكاء الاصطناعي وتطوير تطبيقات الهاتف',
    badge: 'Guardian',
    badgeColor: '#FBBF24',
    avatarInitials: 'MA',
    category: 'media',
    bio: 'شاركت في Innovation Camp، وأكملت AI Level 1 لدى Creativa وتطوير تطبيقات الهاتف لدى NTI.'
  },
  {
    id: 'yasser',
    name: 'Yasser Mahmoud',
    arabicName: 'ياسر محمود',
    academicYear: 'Freshman',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'New Family Member',
    arabicTrack: 'عضو جديد في الأسرة',
    badge: 'Connector',
    badgeColor: '#34D399',
    avatarInitials: 'YM',
    avatarUrl: yasserPhoto,
    category: 'media',
    bio: 'عضو جديد داخل الأسرة، ومستعد للمشاركة في الأنشطة والفعاليات.'
  },
  {
    id: 'tharwat',
    name: 'Tharwat Mahmoud',
    arabicName: 'ثروت محمود',
    academicYear: 'Freshman',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'New Family Member',
    arabicTrack: 'عضو جديد في الأسرة',
    badge: 'Rockstar',
    badgeColor: '#60A5FA',
    avatarInitials: 'TM',
    avatarUrl: tharwatPhoto,
    category: 'tech',
    bio: 'عضو جديد داخل الأسرة، ومستعد للمشاركة في الأنشطة والفعاليات.'
  },
  {
    id: 'abdelrahman',
    name: 'Abdelrahman Sabry',
    arabicName: 'عبدالرحمن صبري',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'Academic Excellence & NTI Training',
    arabicTrack: 'التفوق الدراسي والتدريب في NTI',
    badge: 'Troubleshooter',
    badgeColor: '#F87171',
    avatarInitials: 'AS',
    avatarUrl: abdelrahmanPhoto,
    category: 'tech',
    bio: 'من أوائل الدفعة، وأكمل تدريبًا في NTI.'
  },
  {
    id: 'faris',
    name: 'Faris Nabil Mokhtar',
    arabicName: 'فارس نبيل مختار',
    academicYear: 'Junior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'Social Research, Software Testing & AI/ML',
    arabicTrack: 'البحث الاجتماعي واختبار البرمجيات والذكاء الاصطناعي',
    badge: 'Challenger',
    badgeColor: '#2DD4BF',
    avatarInitials: 'FN',
    avatarUrl: farisPhoto,
    category: 'tech',
    bio: 'حقق المركز الأول في البحث الاجتماعي بـ SGU، والمركز الثاني في DEPI R4 لاختبار البرمجيات، وأكمل تدريبًا صيفيًا في AI/ML.'
  },
  {
    id: 'wael',
    name: 'Wael Mohamed Abdellatif',
    arabicName: 'وائل محمد عبداللطيف',
    academicYear: 'Junior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'ECPC University Champion & Community Officer',
    arabicTrack: 'المركز الأول في ECPC ومسؤول مجتمعها في SGU',
    badge: 'Codebreaker',
    badgeColor: '#C084FC',
    avatarInitials: 'WA',
    avatarUrl: waelPhoto,
    category: 'tech',
    bio: 'عضو في الفريق الحاصل على المركز الأول في ECPC على مستوى الجامعة، ومسؤول مجتمع ECPC في SGU.'
  },
  {
    id: 'khaled',
    name: 'Khaled Mohamed',
    arabicName: 'خالد محمد',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'NTI & ITI Training',
    arabicTrack: 'التدريب في NTI وITI',
    badge: 'Scholar',
    badgeColor: '#E879F9',
    avatarInitials: 'KM',
    avatarUrl: khaledPhoto,
    category: 'tech',
    bio: 'طالب متميز، وأكمل تدريبات في NTI وITI.'
  },
  {
    id: 'rawda',
    name: 'Rawda Hossam Abdel Fattah',
    arabicName: '',
    academicYear: 'Senior',
    role: 'Family Member',
    arabicRole: 'عضو في الأسرة',
    track: 'Full Stack Development, Creativa & Innovation Camp',
    arabicTrack: 'تطوير Full Stack وCreativa Ismailia ومعسكر الابتكار',
    badge: '🎨 Innovator',
    badgeColor: '#38BDF8',
    avatarInitials: 'RA',
    avatarUrl: rawdaPhoto,
    category: 'media',
    bio: 'شاركت في Full Stack Development لدى Creativa Ismailia ومعسكر الابتكار.'
  }
];

const FAMILY_GALLERY_PHOTOS = [
  galleryPhoto16,
  galleryPhoto04,
  galleryPhoto05,
  galleryPhoto06,
  galleryPhoto07,
  galleryPhoto08,
  galleryPhoto09,
  galleryPhoto10,
  galleryPhoto11,
  galleryPhoto12,
  galleryPhoto13,
  galleryPhoto14,
  galleryPhoto15,
  galleryPhoto01,
  galleryPhoto02,
  galleryPhoto03
];

export const GALLERY_ITEMS: GalleryItem[] = FAMILY_GALLERY_PHOTOS.map((imageUrl, index) => {
  const featured = index % 4 === 0;
  const isEventPhoto = index < 13;
  const colSpanDesktop: 8 | 4 = featured ? 8 : 4;

  return {
    id: `gal-${index + 1}`,
    title: isEventPhoto ? 'فعالية رؤية مستقبل حاسبات' : 'لحظات من أسرة رؤية',
    category: isEventPhoto ? 'ROYA FUTURE OF COMPUTERS' : 'OSRA ROYA',
    year: '2026',
    description: isEventPhoto ? 'صور من فعالية رؤية مستقبل حاسبات.' : 'صور من أرشيف أنشطة وفعاليات أسرة رؤية.',
    imageUrl,
    colSpanDesktop,
    minHeightClass: featured ? 'min-h-[320px]' : 'min-h-[240px]'
  };
});

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-1',
    title: 'المركز الأول في ECPC على مستوى الجامعة',
    englishTitle: '1st Place in ECPC • University Level',
    subtitle: 'المسابقة المصرية للبرمجة الجامعية',
    description: 'فريق أسرة رؤية يقتنص المركز الأول ECPC ويحقق الصدارة على مستوى الجامعة - تأهل إلى المراحل التصفوية والإقليمية وتتويج كأقوى فريق حاسبات في الصالحية.',
    tag: 'ECPC 2024/2025',
    statusBadge: 'المركز الأول',
    statusColor: 'bg-achievement-gold text-[#0f131d]',
    iconName: 'emoji_events',
    highlight: true
  },
  {
    id: 'ach-2',
    title: 'CognitioX Egypt 2026',
    englishTitle: 'CognitioX Summit Egypt',
    subtitle: 'مؤتمر الذكاء الاصطناعي والحوسبة المعرفية',
    description: 'مشاركة وفد أسرة رؤية في جلسات الذكاء الاصطناعي التوليدي، الحوسبة الفائقة ونظم المعالجة اللغوية الضخمة، والاطلاع على أحدث التطبيقات العملية المبتكرة.',
    tag: 'CognitioX Summit',
    statusBadge: 'تم الحضور والتمثيل',
    iconName: 'neurology'
  },
  {
    id: 'ach-3',
    title: 'n8n in Egypt',
    englishTitle: 'Automation & AI Workflows',
    subtitle: 'فعالية متخصصة بالأتمتة والذكاء الاصطناعي',
    description: 'تعرّف الطلاب على أدوات الأتمتة المتقدمة No-Code/Low-Code ونظم ربط الـ APIs مع الـ LLMs، وتطبيق مشاريع واقعية تخدم بيئات العمل والشركات الناشئة.',
    tag: 'Workflow Automation',
    statusBadge: 'تم الحضور',
    iconName: 'alt_route'
  },
  {
    id: 'ach-4',
    title: 'AI Hackathons',
    englishTitle: 'National AI Hackathons',
    subtitle: 'مسابقات الهاكاثون وحل المشكلات بالذكاء الاصطناعي',
    description: 'خوض غمار المنافسات البرمجية والحلول الابتكارية، وتطوير نماذج ذكية تعالج مشاكل الرعاية الصحية والتكنولوجيا المالية خلال 48 ساعة متواصلة.',
    tag: 'Hackathon Sprint',
    statusBadge: 'مشاركة فاعلة',
    iconName: 'code_blocks'
  },
  {
    id: 'ach-5',
    title: 'Build with AI: MASR Edition',
    englishTitle: 'Google for Developers',
    subtitle: 'مبادرة جوجل لبناء حلول الذكاء الاصطناعي',
    description: 'برنامج تدريبي تطبيقي على Google Cloud وGemini API وVertex AI، وتدريب أعضاء أسرة رؤية على أحدث تقنيات نشر النماذج السحابية عالمياً.',
    tag: 'Google Cloud & Gemini',
    statusBadge: 'تم الحضور',
    iconName: 'hub'
  },
  {
    id: 'ach-6',
    title: 'NTI Job Fair',
    englishTitle: 'National Telecommunication Institute',
    subtitle: 'ملتقى التوظيف والتدريب لمعهد تكنولوجيا الاتصالات',
    description: 'تسهيل وصول أعضاء الأسرة لفرص التدريب الصيفي والمنح الاحترافية المعتمدة في مجالات الشبكات، السحابة والأمن السيبراني.',
    tag: 'NTI Egypt',
    statusBadge: 'فرص تدريب',
    iconName: 'badge'
  },
  {
    id: 'ach-7',
    title: 'AI Catalyst | V.04',
    englishTitle: 'Orange Digital Center & Partners',
    subtitle: 'مبادرة تسريع وتطوير مهارات الذكاء الاصطناعي',
    description: 'إشراك متميز لأعضاء أسرة رؤية في ورش متخصصة برعاية كبرى الشركات التكنولوجية لتطوير حلول واقعية ومشاريع تخرج رائدة.',
    tag: 'Orange Digital Center',
    statusBadge: 'مشاركة متميزة',
    iconName: 'psychology'
  }
];

export const EVENT_TABS_DATA: Record<string, EventTab> = {
  ecpc: {
    id: 'ecpc',
    title: 'معسكر البرمجة التنافسية',
    englishTitle: 'ECPC 2025 Training Camp',
    icon: 'code_blocks',
    headerTitle: 'استمارة الالتحاق: معسكر ECPC 2025',
    sidebarTitle: 'معسكر إعداد أبطال البرمجة التنافسية ECPC',
    sidebarDesc: 'برنامج تدريبي مكثف يغطي هياكل البيانات المتقدمة، الخوارزميات، وتأهيل الفرق لتمثيل الجامعة رسمياً في المسابقة البرمجية المصرية للجامعات.',
    schedule: 'السبت والأربعاء · 10:00 ص إلى 2:00 م',
    location: 'مدرج 3 ومعمل الخوارزميات (مبنى كلية الحاسبات والمعلومات)',
    supervisors: 'إشراف أعضاء هيئة التدريس ونخبة طلاب ECPC القدامى'
  },
  ai: {
    id: 'ai',
    title: 'ورشة تقنيات الـ AI والوكلاء',
    englishTitle: 'Autonomous Agents Hub',
    icon: 'smart_toy',
    headerTitle: 'استمارة التسجيل: ورشة تقنيات الـ AI والوكلاء الأذكياء',
    sidebarTitle: 'ورشة تقنيات الـ AI والوكلاء الذاتيين',
    sidebarDesc: 'استكشف بناء تطبيقات الذكاء الاصطناعي التوليدي، نماذج اللغة الضخمة LLMs، ونظم Autonomous Multi-Agents باستخدام Python ومكتبات الذكاء الحديثة.',
    schedule: 'الأحد والثلاثاء · 12:00 م إلى 4:00 م',
    location: 'معمل الذكاء الاصطناعي 2 (مبنى الحاسبات المركزي)',
    supervisors: 'إشراف د. محمد سليمان وفريق مهندسي الذكاء الاصطناعي'
  },
  recruitment: {
    id: 'recruitment',
    title: 'الانضمام للجان أسرة رؤية',
    englishTitle: 'Recruitment Season 2025',
    icon: 'group_add',
    headerTitle: 'استمارة الانضمام للجان وأسرة رؤية (Recruitment)',
    sidebarTitle: 'فتح باب الانضمام للجان أسرة رؤية 2025',
    sidebarDesc: 'انضم إلى أسرة رؤية كعضو تنظيمي أو مدرب تقني، وشارك في قيادة الفعاليات، التصميم، الـ PR، العلاقات العامة وإدارة المجتمعات الرقمية بالكلية.',
    schedule: 'مقابلات شخصية وتنسيق أسبوعي مستمر',
    location: 'مقر رعاية الشباب والأنشطة الطلابية بجامعة الصالحية',
    supervisors: 'إدارة أسرة رؤية ومكتب رعاية الشباب'
  },
  certificate: {
    id: 'certificate',
    title: 'طلب شهادة مشاركة سابقة',
    englishTitle: 'Verified Credential Issuance',
    icon: 'workspace_premium',
    headerTitle: 'طلب استخراج شهادة مشاركة أو إتمام ورشة سابقة',
    sidebarTitle: 'منظومة الشهادات المعتمدة من الكلية',
    sidebarDesc: 'خدمة تدقيق واستخراج الشهادات الرقمية الموقعة إلكترونياً والمطابقة لسجلات الحضور للورش السابقة التي نظمتها أسرة رؤية وكلية الحاسبات.',
    schedule: 'إصدار فوري بعد تدقيق الرقم القومي / الجامعي',
    location: 'المنظومة الرقمية المركزية لجامعة الصالحية',
    supervisors: 'وحدة تكنولوجيا المعلومات وإدارة الكلية'
  }
};

export const FAQS_DATA = [
  {
    q: 'هل حضور الفعاليات والورش مجاني بالكامل؟',
    a: 'نعم، 100% مجاناً لكافة طلاب كلية الحاسبات والمعلومات وجامعة الصالحية الجديدة برعاية الكلية وإدارة رعاية الشباب بالجامعة بدون أي رسوم.',
    icon: 'paid'
  },
  {
    q: 'هل يشترط وجود لابتوب أو خبرة سابقة؟',
    a: 'لا يشترط وجود خبرة سابقة لمعسكرات المبتدئين. يُفضل إحضار اللابتوب الخاص بك للتطبيق العملي أثناء الورش، وتوفر معامل الكلية أجهزة بديلة لمن لا يملك لابتوب.',
    icon: 'terminal'
  },
  {
    q: 'كيف أعرف أنه تم قبولي في الفعالية؟',
    a: 'سيتم إرسال رسالة نصية وبريد إلكتروني رسمي يحتوي على كود الحضور، ورابط مجموعة الواتساب الخاصة بالمشتركين خلال 24 إلى 48 ساعة من تاريخ ملء الاستمارة.',
    icon: 'mark_email_read'
  },
  {
    q: 'هل الفعاليات مقتصرة فقط على طلاب حاسبات الصالحية؟',
    a: 'الأولوية لطلاب كلية الحاسبات والمعلومات بجامعة الصالحية، مع إتاحة نسبة مقاعد محددة للكليات الهندسية الشقيقة والجامعات المجاورة وفق الطاقة الاستيعابية.',
    icon: 'groups'
  }
];
