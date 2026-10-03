import React, { useState } from 'react';
import { Language } from '../types';
import communityQr from '../../assets/qr-community.png';

interface WhatsAppSectionProps {
  language: Language;
}

export const WhatsAppSection: React.FC<WhatsAppSectionProps> = ({ language }) => {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = 'https://chat.whatsapp.com/H4L5agmgZRT2ZTAWPTuGEi';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 mb-8"
      id="whatsapp-section"
    >
      <div className="rounded-3xl bg-gradient-to-br from-[#1c1f2a] via-[#111827] to-[#171b26] border border-white/10 p-8 md:p-14 shadow-2xl relative overflow-hidden">
        {/* Cyan / Teal Radial flare */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#4cd7f6]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Instruction & Community Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1bbd85]/15 border border-[#1bbd85]/30 text-[#4edea3] font-label-sm text-xs font-bold mb-4">
              <span className="material-symbols-outlined text-base">forum</span>
              <span>
                {language === 'ar'
                  ? 'انضم لينا • JOIN THE COMMUNITY'
                  : 'JOIN THE COMMUNITY'}
              </span>
            </div>

            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-[#dfe2f1] mb-2">
              {language === 'ar'
                ? 'جروبات الأسرة على واتساب'
                : 'Osra Roya WhatsApp Community'}
            </h2>

            <span className="font-label-md text-sm md:text-base text-[#4cd7f6] font-mono mb-4 block">
              Osra Roya Official WhatsApp Community
            </span>

            <p className="font-body-lg text-base md:text-lg text-[#bcc9cd] leading-relaxed mb-6">
              {language === 'ar'
                ? 'اختار الرابط الرسمي، اضغط الزر أو امسح الـ QR Code لتدخل المجتمع مباشرة. مجتمعنا موحد لكل أنشطة الأسرة، الكورسات التدريبية، الفرق البرمجية والإعلانات الفورية لكل جديد في الكلية.'
                : 'Join our verified WhatsApp hub to connect with coaches, receive announcements for bootcamps, and access real-time team coordination.'}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#1bbd85] text-[#003824] font-label-lg text-sm sm:text-base font-bold shadow-[0_0_25px_rgba(27,189,133,0.4)] hover:shadow-[0_0_35px_rgba(27,189,133,0.65)] hover:-translate-y-0.5 transition-all"
              >
                <span className="material-symbols-outlined text-2xl">chat</span>
                <span>
                  {language === 'ar'
                    ? 'انضم لمجتمع واتساب الآن'
                    : 'Join WhatsApp Community Now'}
                </span>
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] font-label-md text-sm transition-colors shadow-sm border border-white/5"
              >
                <span className="material-symbols-outlined text-xl">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>
                  {copied
                    ? language === 'ar'
                      ? 'تم نسخ الرابط!'
                      : 'Link Copied!'
                    : language === 'ar'
                    ? 'نسخ الرابط الرسمي'
                    : 'Copy Official Link'}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Official Interactive QR Code Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm p-6 sm:p-8 rounded-3xl bg-[#0a0e18]/90 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center relative group hover:border-[#4cd7f6]/40 transition-all">
              {/* High Tech QR Container */}
              <div className="p-4 rounded-2xl bg-white mb-5 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                <img
                  src={communityQr}
                  alt={language === 'ar' ? 'رمز QR لمجتمع أسرة رؤية على واتساب' : 'QR code for the Osra Roya WhatsApp community'}
                  className="w-48 h-48 sm:w-52 sm:h-52 object-contain bg-white"
                />
              </div>

              <h4 className="font-headline-sm text-lg md:text-xl text-[#dfe2f1] font-bold">
                {language === 'ar' ? 'مجتمع أسرة رؤية' : 'Osra Roya Community'}
              </h4>
              <span className="font-label-sm text-xs text-[#bcc9cd] mt-1 mb-4">
                {language === 'ar'
                  ? 'رابط الانضمام الرسمي، موحد لكل نشاطات الأسرة ومجتمعاتها.'
                  : 'Official direct onboarding link for all students and tracks.'}
              </span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#1bbd85] hover:bg-[#14B8A6] text-[#003824] font-label-md text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">open_in_new</span>
                <span>
                  {language === 'ar' ? 'انضم لينا مباشرة' : 'Join Community Directly'}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
