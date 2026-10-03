import React, { useState } from 'react';
import { ActiveView, Language } from '../types';
import royaLogo from '../../assets/roya-logo.webp';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  language,
  setLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navItems: { id: ActiveView; labelAr: string; labelEn: string }[] = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'about', labelAr: 'عن الأسرة', labelEn: 'About Us' },
    { id: 'members', labelAr: 'الأعضاء واللجان', labelEn: 'Members & Committees' },
    { id: 'achievements', labelAr: 'الإنجازات', labelEn: 'Achievements' },
    { id: 'registration', labelAr: 'التسجيل في الفعاليات', labelEn: 'Register' },
    { id: 'gallery', labelAr: 'معرض الصور', labelEn: 'Gallery' },
    { id: 'community', labelAr: 'مجتمع واتساب', labelEn: 'WhatsApp Community' },
  ];

  const handleNavClick = (viewId: ActiveView) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f131d]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.24)]">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Institution Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-right focus:outline-none"
          >
            <div className="relative w-11 h-11 shrink-0 overflow-hidden rounded-xl bg-white border border-white/10 shadow-[0_0_12px_rgba(6,182,212,0.16)] group-hover:border-[#4cd7f6]/50 transition-all duration-300">
              <img
                src={royaLogo}
                alt="شعار أسرة رؤية"
                className="absolute max-w-none w-[140px] h-auto"
                style={{ left: '50%', top: '-6px', transform: 'translateX(-50%)' }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-lg md:text-xl text-[#dfe2f1] tracking-tight font-bold group-hover:text-[#4cd7f6] transition-colors">
                  {language === 'ar' ? 'أسرة رؤية' : 'Osra Roya'}
                </span>
                <span className="font-label-sm text-xs text-[#4cd7f6] uppercase font-mono tracking-wider">
                  ROYA
                </span>
              </div>
              <span className="font-label-sm text-xs text-[#bcc9cd] hidden sm:inline">
                {language === 'ar'
                  ? 'حاسبات ومعلومات • جامعة الصالحية'
                  : 'FCI • SGU Tech Community'}
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 py-2 border-b-2 text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'border-[#4cd7f6] text-[#4cd7f6]'
                    : 'border-transparent text-[#bcc9cd] hover:text-[#dfe2f1]'
                }`}
              >
                {language === 'ar' ? item.labelAr : item.labelEn}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Language / Profile Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1f2a] border border-white/10 text-[#bcc9cd] hover:text-[#dfe2f1] hover:bg-[#262a35] transition-all text-xs font-mono font-medium"
            title="تبديل اللغة / Switch Language"
          >
            <span className={language === 'ar' ? 'text-[#4cd7f6] font-bold' : ''}>AR</span>
            <span className="text-[#869397]">/</span>
            <span className={language === 'en' ? 'text-[#4cd7f6] font-bold' : ''}>EN</span>
          </button>

          {/* Join Us / Register CTA Button */}
          <button
            onClick={() => handleNavClick('registration')}
            className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-[#4cd7f6] text-[#003640] font-label-md text-xs font-bold tracking-wide shadow-[0_0_12px_rgba(6,182,212,0.2)] hover:shadow-[0_0_18px_rgba(6,182,212,0.32)] transition-shadow duration-200"
          >
            {language === 'ar' ? 'انضم إلينا' : 'Join Us'}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#1c1f2a] text-[#dfe2f1] hover:bg-[#262a35] transition-colors"
            aria-label="القائمة"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0f131d]/98 border-b border-white/10 px-4 py-4 flex flex-col gap-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-right px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#06b6d4] text-[#00424f]'
                    : 'text-[#bcc9cd] hover:bg-[#1c1f2a] hover:text-[#dfe2f1]'
                }`}
              >
                <span>{language === 'ar' ? item.labelAr : item.labelEn}</span>
                {isActive && (
                  <span className="material-symbols-outlined text-sm">check</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
