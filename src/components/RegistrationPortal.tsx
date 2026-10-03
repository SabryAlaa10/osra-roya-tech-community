import React, { useState } from 'react';
import { EventTab, Language, RegistrationFormData, RegistrationTicket } from '../types';
import { EVENT_TABS_DATA, FAQS_DATA } from '../data/royaData';

interface RegistrationPortalProps {
  language: Language;
  onSuccessTicket: (ticket: RegistrationTicket) => void;
}

export const RegistrationPortal: React.FC<RegistrationPortalProps> = ({
  language,
  onSuccessTicket,
}) => {
  const [activeTabKey, setActiveTabKey] = useState<string>('ecpc');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Certificate lookup state
  const [certSearchId, setCertSearchId] = useState('');
  const [certResult, setCertResult] = useState<{
    found: boolean;
    name?: string;
    course?: string;
    grade?: string;
    date?: string;
    serial?: string;
  } | null>(null);

  // Form State
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    academicYear: '',
    department: '',
    academicId: '',
    tracks: ['problem-solving', 'ai-ml'],
    experienceLevel: 'beginner',
    profileUrl: '',
    motivation: '',
    attendanceMode: 'onsite',
    suggestions: '',
    termsAccepted: false,
    eventSelected: 'ecpc',
  });

  const activeTab: EventTab =
    EVENT_TABS_DATA[activeTabKey] || EVENT_TABS_DATA.ecpc;

  const handleTrackToggle = (trackValue: string) => {
    setFormData((prev) => {
      const exists = prev.tracks.includes(trackValue);
      const newTracks = exists
        ? prev.tracks.filter((t) => t !== trackValue)
        : [...prev.tracks, trackValue];
      return { ...prev, tracks: newTracks };
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      const generatedTicket: RegistrationTicket = {
        ticketId: `ROYA-${activeTabKey.toUpperCase()}-${Math.floor(
          1000 + Math.random() * 9000
        )}`,
        studentName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        eventName: activeTab.sidebarTitle,
        tracks: formData.tracks,
        timestamp: new Date().toLocaleDateString('ar-EG', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        seatNumber: `G-${Math.floor(10 + Math.random() * 85)}`,
        venue: activeTab.location,
        qrValue: `https://chat.whatsapp.com/H4L5agmgZRT2ZTAWPTuGEi?candidate=${encodeURIComponent(
          formData.fullName
        )}`,
      };

      onSuccessTicket(generatedTicket);
    }, 1200);
  };

  const handleCertificateSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certSearchId.trim()) return;

    // Simulate authentic verification lookup
    setCertResult({
      found: true,
      name: certSearchId.length > 5 ? 'طالب متميز بالكلية' : 'أحمد محمد علي إبراهيم',
      course: 'معسكر تدريب البرمجة المتقدمة وحل المشكلات ECPC V.03',
      grade: 'امتياز مع مرتبة الشرف (Distinction with Honors)',
      date: 'نوفمبر 2024',
      serial: `SGU-FCI-CERT-${Math.floor(100000 + Math.random() * 900000)}`,
    });
  };

  return (
    <div className="w-full relative overflow-hidden pt-4 pb-16">
      {/* Subtle Ambient Glow Orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#4cd7f6]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[30rem] h-[30rem] rounded-full bg-[#14B8A6]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#F59E0B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section 1: Header / Hero Section */}
        <section className="flex flex-col gap-6 relative">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262a35] text-[#4cd7f6] font-label-sm text-xs border border-white/5">
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping" />
              <span>
                {language === 'ar'
                  ? 'بوابة المشاركة والتسجيل · EVENT & WORKSHOP PORTAL'
                  : 'EVENT & WORKSHOP PORTAL'}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1f2a] text-[#4edea3] font-label-sm text-xs border border-white/5">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>الموسم الأكاديمي 2024 / 2025</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl font-bold text-[#dfe2f1] tracking-tight mb-3">
                {language === 'ar'
                  ? 'استمارة التسجيل في الفعاليات والأنشطة التقنية'
                  : 'Tech Events & Workshops Registration Portal'}
              </h1>
              <p className="font-body-lg text-sm sm:text-base text-[#bcc9cd] leading-relaxed">
                {language === 'ar'
                  ? 'سجل بياناتك للمشاركة في ورش العمل القادمة، المعسكرات البرمجية، الهاكاثونات، وفرص الانضمام لفرق عمل أسرة رؤية. المقاعد محدودة وتخضع لأسبقية التسجيل والتقييم الأكاديمي.'
                  : 'Register for upcoming programming bootcamps, AI hackathons, and committee recruitments. Seats are allocated based on submission priority and academic eligibility.'}
              </p>
            </div>

            {/* Quick Telemetry Dial */}
            <div className="flex items-center gap-4 bg-[#171b26]/80 border border-white/10 backdrop-blur-xl p-4 rounded-xl shadow-lg shrink-0">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 36 36">
                  <path
                    className="text-[#313540]"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="text-[#4cd7f6] stroke-current"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeDasharray="78, 100"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="font-headline-sm text-sm font-bold text-[#4cd7f6]">
                    78%
                  </span>
                </div>
              </div>

              <div className="flex flex-col text-right">
                <span className="font-label-sm text-[11px] text-[#869397] uppercase font-mono">
                  سعة القاعات المحجوزة
                </span>
                <span className="font-headline-sm text-sm md:text-base text-[#dfe2f1] font-semibold">
                  112 / 140 طالب
                </span>
                <span className="font-body-sm text-xs text-[#F59E0B] flex items-center gap-1 mt-0.5 font-medium">
                  <span className="material-symbols-outlined text-[15px]">timer</span>
                  متبقي 28 مقعد فقط
                </span>
              </div>
            </div>
          </div>

          {/* Metrics & Telemetry Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-[#171b26] p-2 rounded-xl border border-white/5">
            <div className="flex items-center gap-3 p-3 bg-[#1c1f2a] rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-[#262a35] flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-xl">bolt</span>
              </div>
              <div className="flex flex-col min-w-0 text-right">
                <span className="font-label-sm text-[11px] text-[#869397]">
                  الفعالية النشطة حالياً
                </span>
                <span className="font-label-lg text-xs md:text-sm text-[#dfe2f1] font-semibold truncate">
                  معسكر ECPC 2025 وهاكاثون الذكاء الاصطناعي
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#1c1f2a] rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-[#262a35] flex items-center justify-center text-[#F59E0B] shrink-0">
                <span className="material-symbols-outlined text-xl">event_seat</span>
              </div>
              <div className="flex flex-col min-w-0 text-right">
                <span className="font-label-sm text-[11px] text-[#869397]">
                  المقاعد المتبقية بالتحديد
                </span>
                <span className="font-label-lg text-xs md:text-sm text-[#dfe2f1] font-semibold">
                  28 مقعد متاح بالقاعات المركزية
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#1c1f2a] rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-[#262a35] flex items-center justify-center text-[#4edea3] shrink-0">
                <span className="material-symbols-outlined text-xl">event_available</span>
              </div>
              <div className="flex flex-col min-w-0 text-right">
                <span className="font-label-sm text-[11px] text-[#869397]">
                  الموعد النهائي لغلق التسجيل
                </span>
                <span className="font-label-lg text-xs md:text-sm text-[#dfe2f1] font-semibold">
                  15 نوفمبر 2025 · 11:59 مساءً
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Active Event Selector Tabs */}
        <section className="mt-8 mb-6">
          <div className="flex items-center justify-between mb-3 text-right">
            <span className="font-label-md text-xs md:text-sm text-[#bcc9cd] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">
                tune
              </span>
              اختر نوع الاستمارة أو الفعالية المطلوب التسجيل بها:
            </span>
            <span className="font-label-sm text-xs text-[#869397] hidden sm:inline font-mono">
              يتم تحديث حقول النموذج ديناميكياً
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 bg-[#0a0e18] p-2 rounded-xl border border-white/5">
            {Object.values(EVENT_TABS_DATA).map((tab) => {
              const isActive = activeTabKey === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTabKey(tab.id);
                    setFormData((prev) => ({ ...prev, eventSelected: tab.id }));
                  }}
                  type="button"
                  className={`flex items-center gap-3 p-3.5 rounded-lg text-right transition-all duration-200 ${
                    isActive
                      ? 'bg-[#06b6d4] text-[#00424f] shadow-md shadow-[#06b6d4]/20'
                      : 'bg-[#1c1f2a] text-[#bcc9cd] hover:text-[#dfe2f1] hover:bg-[#262a35] border border-white/5'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-2xl shrink-0 ${
                      isActive ? 'text-[#00424f]' : 'text-[#4cd7f6]'
                    }`}
                  >
                    {tab.icon}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-xs md:text-sm font-bold truncate">
                      {tab.title}
                    </span>
                    <span
                      className={`font-label-sm text-[10px] md:text-xs truncate font-mono ${
                        isActive ? 'opacity-90' : 'opacity-70'
                      }`}
                    >
                      {tab.englishTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Section 3: Two-Column Main Area (Form + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Right / Main Form Column (8 Cols) */}
          <main className="lg:col-span-8 bg-[#111827]/90 border border-white/5 backdrop-blur-2xl rounded-2xl p-6 md:p-8 shadow-xl flex flex-col gap-8 relative overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <div className="flex items-center gap-3 text-right">
                <div className="w-3 h-8 bg-[#4cd7f6] rounded-full shrink-0" />
                <div>
                  <h2 className="font-headline-md text-lg sm:text-xl md:text-2xl text-[#dfe2f1] font-bold">
                    {activeTab.headerTitle}
                  </h2>
                  <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd]">
                    برجاء تحري الدقة، سيتم التواصل عبر الواتساب لتحديد المقابلات والاختبار المبدئي
                  </p>
                </div>
              </div>
              <span className="font-label-sm text-xs px-3 py-1 rounded-full bg-[#313540] text-[#4cd7f6] font-mono hidden sm:inline-block">
                STEP 01 / 03
              </span>
            </div>

            {/* If Certificate Verification Tab is Active: Dedicated Credential Lookup Subsystem */}
            {activeTabKey === 'certificate' ? (
              <div className="flex flex-col gap-6">
                <div className="bg-[#171b26]/70 p-6 rounded-xl border border-white/5 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#F59E0B] text-2xl">
                      verified
                    </span>
                    <h3 className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                      الاستعلام والتحقق من شهادات الفعاليات السابقة
                    </h3>
                  </div>
                  <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd]">
                    أدخل رقمك القومي (14 رقم) أو كود الشهادة للتحقق من قيد حضورك في معسكرات ECPC، ورش الذكاء الاصطناعي، والهاكاثونات المعتمدة.
                  </p>

                  <form onSubmit={handleCertificateSearch} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={certSearchId}
                      onChange={(e) => setCertSearchId(e.target.value)}
                      placeholder="أدخل الرقم القومي أو الرقم الجامعي أو كود الشهادة..."
                      className="flex-1 bg-[#0a0e18] border border-white/10 text-[#dfe2f1] px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#4cd7f6] font-mono text-left"
                      dir="ltr"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[#4cd7f6] text-[#003640] font-bold text-sm hover:bg-[#acedff] transition-colors flex items-center justify-center gap-2 shrink-0"
                    >
                      <span className="material-symbols-outlined text-lg">search</span>
                      <span>تحقق الآن</span>
                    </button>
                  </form>

                  {certResult && (
                    <div className="mt-4 p-5 rounded-xl bg-[#0a0e18] border border-[#F59E0B]/30 animate-in fade-in duration-300">
                      <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#4edea3] text-xl">
                            check_circle
                          </span>
                          <span className="text-sm font-bold text-[#4edea3]">
                            شهادة معتمدة وموثقة في سجلات جامعة الصالحية
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#F59E0B] bg-[#F59E0B]/10 px-2.5 py-0.5 rounded">
                          {certResult.serial}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-right text-xs">
                        <div>
                          <span className="text-[#869397] block">اسم المتدرب / الطالب:</span>
                          <span className="text-[#dfe2f1] font-bold text-sm">
                            {certResult.name}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#869397] block">المعسكر / الفعالية:</span>
                          <span className="text-[#4cd7f6] font-semibold">
                            {certResult.course}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#869397] block">التقدير المحرز:</span>
                          <span className="text-[#F59E0B] font-semibold">
                            {certResult.grade}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#869397] block">تاريخ الإصدار:</span>
                          <span className="text-[#dfe2f1] font-mono">
                            {certResult.date}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[11px] text-[#869397]">
                          ختم إلكتروني موثق من كلية الحاسبات والمعلومات • جامعة الصالحية الجديدة
                        </span>
                        <button
                          type="button"
                          onClick={() => alert('تم تنزيل النسخة الرقمية عالية الدقة من الشهادة (PDF)!')}
                          className="px-3 py-1.5 rounded-md bg-[#1bbd85] text-[#003824] text-xs font-bold flex items-center gap-1.5"
                        >
                          <span className="material-symbols-outlined text-sm">download</span>
                          <span>تحميل الشهادة (PDF)</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-center p-4 bg-[#171b26]/40 rounded-xl text-xs text-[#869397]">
                  إذا لم تجد شهادتك، يمكنك ملء النموذج أدناه لطلب تدقيق وإصدار بدل فاقد أو شهادة جديدة.
                </div>
              </div>
            ) : null}

            {/* Regular Multi-Section Interactive Registration Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-right">
              {/* SECTION 1: Personal & Academic Info */}
              <div className="bg-[#171b26]/70 p-5 md:p-6 rounded-xl border border-white/5 flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-xl">
                    badge
                  </span>
                  <h3 className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                    1. البيانات الشخصية والأكاديمية
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Arabic Name */}
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label
                      htmlFor="fullName"
                      className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium flex items-center justify-between"
                    >
                      <span>
                        الاسم الرباعي باللغة العربية <span className="text-[#ffb4ab]">*</span>
                      </span>
                      <span className="font-label-sm text-xs text-[#869397]">
                        كما يظهر في البطاقة والشهادات الرسمية
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="أحمد محمد علي إبراهيم"
                        required
                        className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]/60"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#869397] text-[18px]">
                        person
                      </span>
                    </div>
                  </div>

                  {/* University Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium"
                    >
                      البريد الإلكتروني الجامعي أو الشخصي <span className="text-[#ffb4ab]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="student@sgu.edu.eg"
                        dir="ltr"
                        required
                        className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] px-4 py-3 rounded-lg text-sm text-left focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]/60 font-mono"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#869397] text-[18px]">
                        mail
                      </span>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium flex items-center justify-between"
                    >
                      <span>
                        رقم الهاتف المحمول (واتساب) <span className="text-[#ffb4ab]">*</span>
                      </span>
                      <span className="font-label-sm text-xs text-[#4edea3]">
                        مهم للجروب
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="01012345678"
                        dir="ltr"
                        required
                        className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] px-4 py-3 rounded-lg text-sm text-left focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]/60 font-mono"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#869397] text-[18px]">
                        chat
                      </span>
                    </div>
                  </div>

                  {/* Academic Year */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="academicYear"
                      className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium"
                    >
                      الفرقة الدراسية الحالية <span className="text-[#ffb4ab]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="academicYear"
                        name="academicYear"
                        value={formData.academicYear}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#4cd7f6] appearance-none cursor-pointer"
                      >
                        <option value="" disabled>اختر الفرقة الدراسية...</option>
                        <option value="year1">الفرقة الأولى (مستجدين)</option>
                        <option value="year2">الفرقة الثانية</option>
                        <option value="year3">الفرقة الثالثة</option>
                        <option value="year4">الفرقة الرابعة (تخرج)</option>
                        <option value="prep">طالب وافد / تحويل</option>
                      </select>
                      <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#869397] text-[20px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Department / Track */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="department"
                      className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium"
                    >
                      القسم أو التخصص الأكاديمي <span className="text-[#ffb4ab]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#4cd7f6] appearance-none cursor-pointer"
                      >
                        <option value="" disabled>اختر التخصص...</option>
                        <option value="cs">علوم الحاسب (Computer Science - CS)</option>
                        <option value="ai">الذكاء الاصطناعي (Artificial Intelligence - AI)</option>
                        <option value="is">نظم المعلومات (Information Systems - IS)</option>
                        <option value="cyber">الأمن السيبراني (Cybersecurity)</option>
                        <option value="general">عام / لم يتم التشعيب بعد</option>
                      </select>
                      <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#869397] text-[20px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Academic ID / National ID */}
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label
                      htmlFor="academicId"
                      className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium flex items-center justify-between"
                    >
                      <span>
                        الرقم الجامعي أو الرقم القومي (14 رقم) <span className="text-[#ffb4ab]">*</span>
                      </span>
                      <span className="font-label-sm text-xs text-[#869397]">
                        للتحقق من قيد الطالب بجامعة الصالحية
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="academicId"
                        name="academicId"
                        value={formData.academicId}
                        onChange={handleInputChange}
                        placeholder="3030101XXXXXXXXX / SGU-2024-XXXX"
                        dir="ltr"
                        required
                        className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] px-4 py-3 rounded-lg text-sm text-left focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]/60 font-mono"
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#869397] text-[18px]">
                        fingerprint
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Technical Track & Experience */}
              <div className="bg-[#171b26]/70 p-5 md:p-6 rounded-xl border border-white/5 flex flex-col gap-5">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-xl">
                      psychology
                    </span>
                    <h3 className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                      2. المسار التقني ومستوى الخبرة
                    </h3>
                  </div>
                  <span className="font-label-sm text-xs text-[#4cd7f6]">
                    يمكنك اختيار أكثر من مسار
                  </span>
                </div>

                {/* Checkbox Pills for Tracks */}
                <div className="flex flex-col gap-2">
                  <span className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium">
                    المسارات التقنية والمجالات المهتم بها:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {[
                      { id: 'problem-solving', icon: 'terminal', label: 'Problem Solving & C++' },
                      { id: 'ai-ml', icon: 'neurology', label: 'AI & Data Science' },
                      { id: 'web', icon: 'code', label: 'Web Development' },
                      { id: 'mobile', icon: 'devices', label: 'Mobile Apps (Flutter)' },
                      { id: 'cybersecurity', icon: 'security', label: 'Cybersecurity & CTF' },
                      { id: 'uiux', icon: 'draw', label: 'UI/UX & Product Design' },
                    ].map((track) => {
                      const isChecked = formData.tracks.includes(track.id);
                      return (
                        <label
                          key={track.id}
                          className={`flex items-center gap-2.5 p-3 rounded-lg cursor-pointer transition-all border ${
                            isChecked
                              ? 'bg-[#4cd7f6]/15 border-[#4cd7f6]/40 text-[#4cd7f6]'
                              : 'bg-[#1c1f2a] border-white/5 text-[#bcc9cd] hover:bg-[#262a35]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleTrackToggle(track.id)}
                            className="w-4 h-4 rounded text-[#06b6d4] accent-[#06b6d4] bg-[#0a0e18]"
                          />
                          <span className="material-symbols-outlined text-xl">
                            {track.icon}
                          </span>
                          <span className="font-label-md text-xs font-semibold">
                            {track.label}
                          </span>
                        </label>
                      );
                    })}

                    <label
                      className={`flex items-center gap-2.5 p-3 rounded-lg cursor-pointer transition-all border sm:col-span-2 md:col-span-3 ${
                        formData.tracks.includes('organization')
                          ? 'bg-[#4cd7f6]/15 border-[#4cd7f6]/40 text-[#4cd7f6]'
                          : 'bg-[#1c1f2a] border-white/5 text-[#bcc9cd] hover:bg-[#262a35]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.tracks.includes('organization')}
                        onChange={() => handleTrackToggle('organization')}
                        className="w-4 h-4 rounded text-[#06b6d4] accent-[#06b6d4] bg-[#0a0e18]"
                      />
                      <span className="material-symbols-outlined text-xl">campaign</span>
                      <span className="font-label-md text-xs font-semibold">
                        التنظيم وإدارة الفعاليات والعلاقات العامة (Media & PR)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Experience Level Radios */}
                <div className="flex flex-col gap-2 pt-2">
                  <span className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium">
                    ما هو تقييمك لمستواك الحالي في المجال المختار؟ <span className="text-[#ffb4ab]">*</span>
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      {
                        val: 'beginner',
                        title: 'مبتدئ تماماً',
                        desc: 'متحمس جداً للبدء من الصفر وتعلم الأساسيات البرمجية خطوة بخطوة.',
                      },
                      {
                        val: 'intermediate',
                        title: 'متوسط',
                        desc: 'لديك معرفة جيدة بالـ OOP وهياكل البيانات وقمت ببناء مشاريع بسيطة.',
                      },
                      {
                        val: 'advanced',
                        title: 'متقدم / تنافسي',
                        desc: 'شاركت في مسابقات كـ ECPC/Codeforces ولديك ريتينج أو مشاريع واقعية.',
                      },
                    ].map((level) => {
                      const isSelected = formData.experienceLevel === level.val;
                      return (
                        <label
                          key={level.val}
                          className={`flex flex-col gap-2 p-3.5 rounded-xl cursor-pointer transition-all border ${
                            isSelected
                              ? 'bg-[#1E293B] border-[#4cd7f6]/50 shadow-lg'
                              : 'bg-[#1c1f2a] border-white/5 hover:bg-[#262a35]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-headline-sm text-sm md:text-base text-[#dfe2f1] font-bold">
                              {level.title}
                            </span>
                            <input
                              type="radio"
                              name="experienceLevel"
                              value={level.val}
                              checked={isSelected}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#06b6d4] accent-[#06b6d4]"
                            />
                          </div>
                          <p className="font-body-sm text-xs text-[#bcc9cd] leading-relaxed">
                            {level.desc}
                          </p>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Profile Links */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <label
                    htmlFor="profileUrl"
                    className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium flex items-center justify-between"
                  >
                    <span>رابط حساب GitHub أو LinkedIn أو Codeforces (اختياري لكن يُفضل)</span>
                    <span className="font-label-sm text-xs text-[#4edea3]">
                      يعزز فرصة القبول
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      id="profileUrl"
                      name="profileUrl"
                      value={formData.profileUrl}
                      onChange={handleInputChange}
                      placeholder="https://codeforces.com/profile/... or github.com/..."
                      dir="ltr"
                      className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] px-4 py-3 rounded-lg text-sm text-left focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]/60 font-mono"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#869397] text-[18px]">
                      link
                    </span>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Motivation & Logistics */}
              <div className="bg-[#171b26]/70 p-5 md:p-6 rounded-xl border border-white/5 flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-xl">
                    forum
                  </span>
                  <h3 className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                    3. دوافع الحضور وتطلعاتك
                  </h3>
                </div>

                {/* Motivation Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="motivation"
                    className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium"
                  >
                    إيه أكتر حاجة متحمس تتعلمها أو تنجزها بانضمامك للفعالية؟{' '}
                    <span className="text-[#ffb4ab]">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="أخبرنا باختصار عن شغفك، المشكلة البرمجية التي تود حلها، أو الهدف الذي تسعى للوصول إليه في هذا المعسكر..."
                    rows={3}
                    required
                    className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] p-4 rounded-lg text-sm focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]/60"
                  />
                </div>

                {/* Attendance Mode */}
                <div className="flex flex-col gap-2">
                  <span className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium">
                    هل تستطيع الالتزام بالحضور الفعلي داخل مقرات الجامعة؟{' '}
                    <span className="text-[#ffb4ab]">*</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        val: 'onsite',
                        title: 'نعم، حضور فعلي كامل بالجامعة',
                        sub: 'مدرجات ومعامل كلية الحاسبات',
                      },
                      {
                        val: 'hybrid',
                        title: 'مزيج هجين (أوفلاين وأونلاين)',
                        sub: 'لظروف السفر وبُعد المسافة',
                      },
                    ].map((mode) => {
                      const isChecked = formData.attendanceMode === mode.val;
                      return (
                        <label
                          key={mode.val}
                          className={`flex items-center gap-3 p-3.5 rounded-lg cursor-pointer transition-all border ${
                            isChecked
                              ? 'bg-[#1E293B] border-[#4cd7f6]/50'
                              : 'bg-[#1c1f2a] border-white/5 hover:bg-[#262a35]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="attendanceMode"
                            value={mode.val}
                            checked={isChecked}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#06b6d4] accent-[#06b6d4]"
                          />
                          <div className="flex flex-col">
                            <span className="font-label-md text-xs md:text-sm font-bold text-[#dfe2f1]">
                              {mode.title}
                            </span>
                            <span className="font-body-sm text-xs text-[#bcc9cd]">
                              {mode.sub}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Questions / Suggestions */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="suggestions"
                    className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-medium flex items-center justify-between"
                  >
                    <span>هل لديك أي استفسار، متطلبات خاصة، أو اقتراح للأسرة؟</span>
                    <span className="font-label-sm text-xs text-[#869397]">اختياري</span>
                  </label>
                  <textarea
                    id="suggestions"
                    name="suggestions"
                    value={formData.suggestions}
                    onChange={handleInputChange}
                    placeholder="أي أسئلة بخصوص المواعيد أو المحتوى العلمي..."
                    rows={2}
                    className="w-full bg-[#0a0e18] border border-white/10 text-[#dfe2f1] p-4 rounded-lg text-sm focus:outline-none focus:border-[#4cd7f6] placeholder:text-[#869397]/60"
                  />
                </div>
              </div>

              {/* Agreement & Confirmation */}
              <div className="flex flex-col gap-4">
                <label className="flex items-start gap-3 p-4 rounded-xl bg-[#1c1f2a] border border-white/5 cursor-pointer hover:bg-[#262a35] transition-colors">
                  <input
                    type="checkbox"
                    id="termsAgreement"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 mt-0.5 rounded text-[#06b6d4] accent-[#06b6d4] bg-[#0a0e18] shrink-0"
                  />
                  <span className="font-body-sm text-xs md:text-sm text-[#dfe2f1] leading-relaxed">
                    أتعهد بالالتزام التام بحضور الجلسات في مواعيدها المحددة، إنجاز المهام المطلوبة، واحترام ميثاق الشرف الأخلاقي والأكاديمي لأسرة رؤية وكلية الحاسبات والمعلومات بجامعة الصالحية الجديدة.
                  </span>
                </label>

                {/* Submission CTA Button */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    id="submitBtn"
                    disabled={isSubmitting || submittedSuccess}
                    className={`w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-headline-sm text-sm sm:text-base font-bold shadow-xl transition-all duration-200 ${
                      submittedSuccess
                        ? 'bg-[#1bbd85] text-[#003824]'
                        : isSubmitting
                        ? 'bg-[#4cd7f6]/70 text-[#003640] cursor-wait'
                        : 'bg-[#4cd7f6] text-[#003640] shadow-[#4cd7f6]/20 hover:shadow-[#4cd7f6]/40 hover:scale-[1.01] active:scale-[0.99]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-[#003640] border-t-transparent rounded-full animate-spin" />
                        <span>جارٍ التحقق وتأكيد المقعد...</span>
                      </>
                    ) : submittedSuccess ? (
                      <>
                        <span className="material-symbols-outlined text-2xl">
                          check_circle
                        </span>
                        <span>تم إرسال الاستمارة وتوليد تصريح الحضور!</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-2xl">send</span>
                        <span>تأكيد التسجيل وإرسال الاستمارة 🚀</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 text-[#869397] font-label-sm text-xs shrink-0">
                    <span className="material-symbols-outlined text-[#4edea3] text-lg">
                      lock
                    </span>
                    <span>بياناتك مؤمنة ومشفرة تماماً</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Live Alert Box */}
              {submittedSuccess && (
                <div className="p-4 rounded-xl flex items-center gap-3 bg-[#1bbd85]/20 border border-[#1bbd85]/40 text-[#dfe2f1] animate-in fade-in duration-300">
                  <span className="material-symbols-outlined text-[#4edea3] text-3xl">
                    check_circle
                  </span>
                  <div className="flex flex-col text-right">
                    <span className="font-headline-sm text-sm md:text-base font-bold text-[#4edea3]">
                      تم تسجيل طلبك بنجاح!
                    </span>
                    <span className="font-body-sm text-xs text-[#bcc9cd]">
                      تم إرسال كود التأكيد ورابط مجتمع الواتساب الخاص بالمعسكر إلى بريدك وهاتفك. يمكنك الاطلاع على تذكرتك الآن.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </main>

          {/* Left Column: Event Information & Perks Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
            {/* Active Event Card */}
            <div className="bg-[#111827]/95 border border-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-xl relative overflow-hidden text-right">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B] font-label-sm text-xs font-semibold">
                  <span className="material-symbols-outlined text-[15px]">stars</span>
                  الفعالية المميزة الحالية
                </span>
                <span className="font-label-sm text-xs text-[#4cd7f6] font-mono bg-[#1c1f2a] border border-white/5 px-2.5 py-1 rounded-md">
                  BOOSTER 2025
                </span>
              </div>

              {/* Visual Asset Preview */}
              <div className="w-full h-44 rounded-xl overflow-hidden mb-5 relative group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Competitive programming event"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtNhmp8zcWnNbBEpPiB56Q-lPJjgr-UR3TGlQm-UaABXplO8MMs-2ovL2XugctOCH_t0N9lGVTDflcJgCZOPnh3CrDItmWZy1XpTYOUgOe7ltnbtDMyrZUTEJm8Tf-apmH5jOJ1Jupuoav53PdDx0Q1zxGPsN3rjWapJknUQ82aJ4bBPInfLTgWi9gHr_Q-Rek3fpN9slWpq_EaDtHflyxG4mgaSWfjYE6jeUIkrzPNvfKpAnG5hBaeg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-[#dfe2f1]">
                  <span className="font-label-sm text-xs font-mono bg-[#0a0e18]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/5">
                    ECPC_CAMP_V4
                  </span>
                  <span className="font-label-sm text-xs text-[#4edea3] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
                    المقاعد قاربت على النفاد
                  </span>
                </div>
              </div>

              <h3 className="font-headline-md text-base sm:text-lg text-[#dfe2f1] font-bold mb-2">
                {activeTab.sidebarTitle}
              </h3>
              <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd] mb-5 leading-relaxed">
                {activeTab.sidebarDesc}
              </p>

              <div className="space-y-3.5 bg-[#171b26] p-4 rounded-xl mb-5 border border-white/5">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-xl mt-0.5 shrink-0">
                    calendar_month
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[11px] text-[#869397]">
                      المواعيد وجدول الحضور
                    </span>
                    <span className="font-body-sm text-xs md:text-sm text-[#dfe2f1] font-semibold">
                      {activeTab.schedule}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-xl mt-0.5 shrink-0">
                    location_on
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[11px] text-[#869397]">
                      المقر والمكان
                    </span>
                    <span className="font-body-sm text-xs md:text-sm text-[#dfe2f1] font-semibold">
                      {activeTab.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-xl mt-0.5 shrink-0">
                    school
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[11px] text-[#869397]">
                      الإشراف الأكاديمي والمدربون
                    </span>
                    <span className="font-body-sm text-xs md:text-sm text-[#dfe2f1] font-semibold">
                      {activeTab.supervisors}
                    </span>
                  </div>
                </div>
              </div>

              {/* What will you get? */}
              <div className="flex flex-col gap-3">
                <span className="font-label-md text-xs md:text-sm text-[#dfe2f1] font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#F59E0B] text-lg">
                    card_giftcard
                  </span>
                  ماذا ستحصل بعد إتمام التسجيل والمشاركة؟
                </span>
                <ul className="space-y-2 text-[#bcc9cd] font-body-sm text-xs">
                  {[
                    'شهادة معتمدة وموثقة برقم أكاديمي من الكلية والأسرة.',
                    'فرصة حصرية لتمثيل جامعة الصالحية ببطولة ECPC الرسمية.',
                    'عضوية غرف الديسكورد المغلقة للمراجعات ومناقشة المسائل.',
                    'وصول مجاني دائم للماتريال والتمارين والتسجيلات.',
                  ].map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-base shrink-0">
                        check_circle
                      </span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Support / Help Box */}
            <div className="bg-[#262a35]/80 border border-white/5 rounded-2xl p-5 shadow-lg flex flex-col gap-3 text-right">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#313540] flex items-center justify-center text-[#4cd7f6] shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    support_agent
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-sm md:text-base text-[#dfe2f1] font-bold">
                    واجهتك مشكلة في التسجيل؟
                  </h4>
                  <p className="font-body-sm text-xs text-[#bcc9cd]">
                    فريق الدعم الفني متواجد للإجابة على استفساراتك فوراً
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="https://chat.whatsapp.com/H4L5agmgZRT2ZTAWPTuGEi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#1c1f2a] text-[#dfe2f1] hover:text-[#4cd7f6] hover:bg-[#1E293B] font-label-sm text-xs font-semibold transition-colors border border-white/5"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  واتساب الدعم
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#1c1f2a] text-[#dfe2f1] hover:text-[#4cd7f6] hover:bg-[#1E293B] font-label-sm text-xs font-semibold transition-colors border border-white/5"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  قناة التيليجرام
                </a>
              </div>
            </div>

            {/* Campus Life Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 group border border-white/5">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Students in tech faculty hall"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUVRtUr8Zzc-J4rVhDzG5tRLUDvmgxSrVxJKzYtjQKxb1yARHvQh3iEZeUfe_uNWzJuUn6U1sS4OORHLSVhXy7QN9B-jhBHu-Ed7q50zUW9WNR04ZYAZUsuDl1EQeIE8-1KqI-qQvLgpDt2lN6u-pJBFPpZ9bl9tIgOYKMstuvesXpWiwpxDeoKD7oFQykA9T5cnx-zR_mugCn_9AWhi9DP5WYWSugtoN7Ra4J0YGPUYQySKdVclR5qA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f131d] via-[#0f131d]/40 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 flex flex-col text-[#dfe2f1] text-right">
                <span className="font-label-sm text-xs text-[#4cd7f6] font-mono">
                  ROYA COMMUNITY
                </span>
                <span className="font-headline-sm text-sm md:text-base font-bold">
                  معاً نصنع فارقاً حقيقياً في مسيرتك
                </span>
              </div>
            </div>
          </aside>
        </div>

        {/* Section 4: Frequently Asked Questions (FAQ Section) */}
        <section className="mt-16 bg-[#111827]/70 border border-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-xl text-right">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#4cd7f6] font-label-sm text-xs mb-1">
                <span className="material-symbols-outlined text-[18px]">help_center</span>
                <span>الأسئلة الأكثر تكراراً</span>
              </div>
              <h2 className="font-headline-lg text-xl sm:text-2xl md:text-3xl font-bold text-[#dfe2f1]">
                كل ما يدور بذهنك حول التسجيل والقبول
              </h2>
            </div>
            <span className="font-body-sm text-xs md:text-sm text-[#bcc9cd] max-w-md">
              جمعنا لك إجابات وافية لأهم التساؤلات لضمان انضمام سلس وممتع لكافة الطلاب بمختلف الفرق.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS_DATA.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#171b26] border border-white/5 p-5 rounded-xl flex flex-col gap-2 hover:bg-[#1c1f2a] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-xl shrink-0">
                    {faq.icon}
                  </span>
                  <h3 className="font-headline-sm text-sm md:text-base text-[#dfe2f1] font-bold">
                    {faq.q}
                  </h3>
                </div>
                <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd] leading-relaxed pr-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Status & System Health Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#0a0e18] border border-white/5 text-[#869397] font-label-sm text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#4edea3]">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
              PORTAL_STATUS: ACTIVE & RECEIVING
            </span>
            <span className="text-[#313540]">|</span>
            <span>GATEWAY: SGU-FCI-CLUSTER-01</span>
          </div>
          <div>
            <span>LAST_BATCH_DISPATCH: 4 MINUTES AGO</span>
          </div>
        </div>
      </div>
    </div>
  );
};
