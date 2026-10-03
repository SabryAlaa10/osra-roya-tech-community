import React from 'react';
import { ActiveView, Language } from '../types';

interface HeroSectionProps {
  language: Language;
  onExploreMembers: () => void;
  onJoinWhatsApp: () => void;
  onRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onExploreMembers,
  onJoinWhatsApp,
  onRegister,
}) => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-16 flex flex-col items-center text-center">
      {/* Dynamic Ambient Glows & Cyber Grid Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-gradient-to-b from-[#4cd7f6]/10 via-[#0566d9]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Institutional Pill Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#262a35]/80 border border-white/10 backdrop-blur-md shadow-sm mb-6 hover:bg-[#313540] transition-colors">
        <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping" />
        <span className="font-label-sm text-xs md:text-sm text-[#4cd7f6] tracking-wide font-medium">
          {language === 'ar'
            ? 'كلية الحاسبات والمعلومات • جامعة الصالحية الجديدة'
            : 'Faculty of Computers & Information • El Saleheya El Gadida University'}
        </span>
        <span className="text-[#869397] text-xs">|</span>
        <span className="font-label-sm text-xs text-[#bcc9cd] font-mono">FCI • SGU</span>
      </div>

      {/* Main Title with Cyber Visual Hierarchy */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative inline-block">
          <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4cd7f6] via-[#acedff] to-[#4edea3] drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
            {language === 'ar' ? 'أسرة رؤية' : 'Osra Roya'}
          </h1>
          <span className="block font-label-md text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.35em] text-[#adc6ff] mt-2">
            OSRA ROYA TECH COMMUNITY
          </span>
        </div>
      </div>

      {/* Hero Paragraph extracted from original copy */}
      <p className="max-w-3xl font-body-lg text-base md:text-lg text-[#bcc9cd] mb-10 leading-relaxed text-balance">
        {language === 'ar' ? (
          <>
            مساحة أخوية طلابية بتجمع طلاب الكلية على هدف واحد:{' '}
            <span className="text-[#dfe2f1] font-semibold">تعلّم حقيقي</span>،{' '}
            <span className="text-[#4cd7f6] font-semibold">تجارب فعلية</span>، و
            <span className="text-[#4edea3] font-semibold">إنجازات نفتخر بيها مع بعض</span>{' '}
            في قلب وادي التكنولوجيا.
          </>
        ) : (
          <>
            A collegiate tech fraternity uniting students for genuine learning, hands-on software development, competitive programming excellence, and collective milestones at the heart of technology.
          </>
        )}
      </p>

      {/* CTAs with glow and glass styling */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <button
          onClick={onExploreMembers}
          className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#4cd7f6] text-[#003640] font-label-lg text-sm sm:text-base font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.65)] hover:-translate-y-0.5 transition-all"
        >
          <span className="material-symbols-outlined text-xl">group</span>
          <span>{language === 'ar' ? 'اتعرف على الأعضاء' : 'Meet Our Members'}</span>
        </button>

        <button
          onClick={onJoinWhatsApp}
          className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#262a35]/90 border border-white/10 text-[#4cd7f6] hover:text-[#dfe2f1] hover:bg-[#353944] transition-all font-label-lg text-sm sm:text-base font-bold shadow-md"
        >
          <span className="material-symbols-outlined text-xl">forum</span>
          <span>{language === 'ar' ? 'انضم لمجتمعنا (WhatsApp)' : 'Join WhatsApp Community'}</span>
        </button>

        <button
          onClick={onRegister}
          className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#1bbd85]/15 border border-[#1bbd85]/40 text-[#4edea3] hover:bg-[#1bbd85]/25 transition-all font-label-lg text-sm sm:text-base font-bold"
        >
          <span className="material-symbols-outlined text-xl">how_to_reg</span>
          <span>{language === 'ar' ? 'التسجيل في المعسكرات' : 'Register for Events'}</span>
        </button>
      </div>

      {/* Live Telemetry / Achievement Metrics Counters */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {/* Metric 1 */}
        <div className="p-6 rounded-2xl bg-[#171b26]/75 border border-white/5 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg relative group hover:-translate-y-1 hover:border-[#4cd7f6]/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#4cd7f6]/10 flex items-center justify-center text-[#4cd7f6] mb-3 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">groups_3</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-headline-xl text-3xl md:text-4xl font-bold text-[#dfe2f1]">
              15+
            </span>
          </div>
          <span className="font-label-md text-sm text-[#bcc9cd] mt-1 font-medium">
            {language === 'ar' ? 'أعضاء الأسرة الفاعلين' : 'Active Members'}
          </span>
          <span className="font-label-sm text-xs text-[#869397] font-mono">
            Family Members
          </span>
        </div>

        {/* Metric 2 (Gold Accent Champion) */}
        <div className="p-6 rounded-2xl bg-[#171b26]/75 border border-[#F59E0B]/30 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg relative group hover:-translate-y-1 hover:border-[#F59E0B]/60 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 flex items-center justify-center text-[#F59E0B] mb-3 shadow-[0_0_15px_rgba(245,158,11,0.25)] group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">trophy</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-headline-xl text-3xl md:text-4xl font-bold text-[#F59E0B]">
              {language === 'ar' ? 'المركز 1' : 'Rank 1'}
            </span>
          </div>
          <span className="font-label-md text-sm text-[#dfe2f1] mt-1 font-semibold">
            {language === 'ar' ? 'بطل مسابقة ECPC على الجامعة' : 'University ECPC Champion'}
          </span>
          <span className="font-label-sm text-xs text-[#F59E0B]/80 font-mono">
            ECPC 1st Place Champion
          </span>
        </div>

        {/* Metric 3 */}
        <div className="p-6 rounded-2xl bg-[#171b26]/75 border border-white/5 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg relative group hover:-translate-y-1 hover:border-[#4edea3]/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#4edea3]/10 flex items-center justify-center text-[#4edea3] mb-3 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">rocket_launch</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-headline-xl text-3xl md:text-4xl font-bold text-[#dfe2f1]">
              7+
            </span>
          </div>
          <span className="font-label-md text-sm text-[#bcc9cd] mt-1 font-medium">
            {language === 'ar' ? 'إيفنتات تقنية كبرى حضرناها' : 'Major Tech Summits Attended'}
          </span>
          <span className="font-label-sm text-xs text-[#869397] font-mono">
            Tech Events Attended
          </span>
        </div>
      </div>
    </section>
  );
};
