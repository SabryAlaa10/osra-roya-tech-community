import React from 'react';
import { ActiveView, Language } from '../types';

interface FooterProps {
  language: Language;
  onNavigate: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  return (
    <footer className="w-full bg-[#0a0e18] border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#4cd7f6] text-xl">
                  terminal
                </span>
              </div>
              <div>
                <span className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                  {language === 'ar' ? 'أسرة رؤية' : 'Osra Roya'}
                </span>
                <span className="block font-label-sm text-xs text-[#4cd7f6] uppercase font-mono">
                  Osra Roya Student Activity
                </span>
              </div>
            </div>

            <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd] leading-relaxed text-justify">
              {language === 'ar'
                ? 'النشاط الطلابي الرائد بكلية الحاسبات والمعلومات بجامعة الصالحية الجديدة. نبني مجتمعاً برمجياً وتقنياً يلهم الابتكار، ويثري مهارات الطلاب الأكاديمية والمهنية عبر ورش العمل والمسابقات والفعاليات العالمية.'
                : 'The premier student tech organization at the Faculty of Computers & Information, El Saleheya El Gadida University. Fostering software excellence and national competitive champions.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1 rounded-full bg-[#1c1f2a] border border-white/5 text-[#4edea3] font-label-sm text-xs flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>{language === 'ar' ? 'معتمدة رسمياً' : 'Officially Accredited'}</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#1c1f2a] border border-white/5 text-[#F59E0B] font-label-sm text-xs flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">military_tech</span>
                <span>{language === 'ar' ? 'نخبة الأنشطة' : 'Elite Student Body'}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-headline-sm text-base text-[#dfe2f1] font-bold mb-1">
              {language === 'ar' ? 'أقسام الموقع' : 'Navigation'}
            </span>
            <nav className="flex flex-col gap-2.5">
              {[
                { id: 'about', labelAr: 'من نحن والرؤية', labelEn: 'About Us' },
                { id: 'members', labelAr: 'الهيكل الإداري واللجان التقنية', labelEn: 'Committees & Members' },
                { id: 'achievements', labelAr: 'سجل البطولات والمنافسات', labelEn: 'Milestones & ECPC' },
                { id: 'registration', labelAr: 'استمارة التسجيل والفعاليات', labelEn: 'Event Registration' },
                { id: 'gallery', labelAr: 'ألبوم الذكريات والفعاليات', labelEn: 'Photo Gallery' },
                { id: 'community', labelAr: 'مجموعات واتساب التخصصية', labelEn: 'WhatsApp Hub' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id as ActiveView);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-body-sm text-xs md:text-sm text-[#bcc9cd] hover:text-[#4cd7f6] text-right transition-colors"
                >
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </button>
              ))}
            </nav>
          </div>

          {/* Official University Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-headline-sm text-base text-[#dfe2f1] font-bold mb-1">
              {language === 'ar' ? 'روابط رسمية' : 'Official Portals'}
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                { nameAr: 'جامعة الصالحية الجديدة', nameEn: 'El Saleheya University' },
                { nameAr: 'كلية الحاسبات والمعلومات', nameEn: 'Faculty of Computers' },
                { nameAr: 'رعاية الشباب والأنشطة', nameEn: 'Student Welfare & Sports' },
                { nameAr: 'بوابة الطلاب الرقمية', nameEn: 'Student Digital Portal' },
              ].map((link, idx) => (
                <li
                  key={idx}
                  className="font-body-sm text-xs md:text-sm text-[#bcc9cd] hover:text-[#dfe2f1] cursor-pointer transition-colors"
                >
                  {language === 'ar' ? link.nameAr : link.nameEn}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-headline-sm text-base text-[#dfe2f1] font-bold">
              {language === 'ar' ? 'تواصل مع الأسرة' : 'Connect With Us'}
            </span>
            <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd]">
              {language === 'ar'
                ? 'انضم إلى قنواتنا الرسمية للبقاء على اطلاع بآخر المعسكرات التدريبية والهاكاثونات القادمة.'
                : 'Stay synced with the latest workshops, hackathons, and competitions.'}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-white/5 flex items-center justify-center text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#262a35] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="مجتمع الديسكورد"
              >
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </a>
              <a
                href="https://chat.whatsapp.com/H4L5agmgZRT2ZTAWPTuGEi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-white/5 flex items-center justify-center text-[#bcc9cd] hover:text-[#1bbd85] hover:bg-[#262a35] hover:shadow-[0_0_15px_rgba(27,189,133,0.3)] transition-all"
                title="مجموعات الواتساب"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-white/5 flex items-center justify-center text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#262a35] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="مستودعات الأكواد"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a
                href="mailto:roya@sgu.edu.eg"
                className="w-10 h-10 rounded-xl bg-[#1c1f2a] border border-white/5 flex items-center justify-center text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#262a35] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                title="البريد الأكاديمي"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Heartbeat Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body-sm text-xs text-[#869397] text-center md:text-right">
            © 2025 أسرة رؤية - كلية الحاسبات والمعلومات • جامعة الصالحية الجديدة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-[#869397]">
            <span className="flex items-center gap-1.5 text-[#4edea3]">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
              الخوادم تعمل بكفاءة 100%
            </span>
            <span className="text-[#313540]">•</span>
            <span>FCI - SGU TECH CORE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
