import React from 'react';
import { Language } from '../types';

interface WhoWeAreSectionProps {
  language: Language;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ language }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16" id="about-us">
      <div className="rounded-3xl bg-[#171b26]/60 border border-white/5 backdrop-blur-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#4cd7f6]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#262a35] text-[#4cd7f6] font-label-sm text-xs uppercase font-mono mb-4 border border-white/5">
              <span className="material-symbols-outlined text-base">domain</span>
              <span>
                {language === 'ar' ? 'مين إحنا • WHO WE ARE' : 'WHO WE ARE • ABOUT US'}
              </span>
            </div>

            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-[#dfe2f1] mb-4 leading-tight">
              {language === 'ar' ? (
                <>
                  جزء من كلية الحاسبات والمعلومات <br />
                  <span className="text-[#4cd7f6]">بجامعة الصالحية الجديدة</span>
                </>
              ) : (
                <>
                  Pioneering Computer Science Hub at <br />
                  <span className="text-[#4cd7f6]">El Saleheya El Gadida University</span>
                </>
              )}
            </h2>

            <p className="font-body-lg text-base md:text-lg text-[#bcc9cd] leading-relaxed mb-6">
              {language === 'ar'
                ? 'أسرة رؤية مش مجرد مجموعة، دي بيئة متكاملة بندعم فيها بعض من أول يوم في الكلية — من التوجيه الأكاديمي، للمسابقات البرمجية التنافسية، وحضور أهم وأكبر الإيفنتات التقنية في مصر. هدفنا إعداد كوادر برمجية وتقنية تنافس في سوق العمل المحلي والدولي.'
                : 'Osra Roya is more than a student activity; it is an integrated ecosystem empowering students from day one — covering academic mentoring, competitive coding, hackathons, and high-level representation at Egypt’s premier tech summits.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#bcc9cd]">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1f2a] border border-white/5">
                <span className="material-symbols-outlined text-[#4edea3] text-sm">
                  terminal
                </span>
                {language === 'ar'
                  ? 'هندسة البرمجيات والذكاء الاصطناعي'
                  : 'Software Engineering & AI'}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1f2a] border border-white/5">
                <span className="material-symbols-outlined text-[#adc6ff] text-sm">
                  security
                </span>
                {language === 'ar'
                  ? 'الأمن السيبراني والشبكات'
                  : 'Cybersecurity & Cloud'}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1c1f2a] border border-white/5">
                <span className="material-symbols-outlined text-[#F59E0B] text-sm">
                  code_blocks
                </span>
                {language === 'ar'
                  ? 'البرمجة التنافسية (ECPC)'
                  : 'Competitive Programming (ECPC)'}
              </span>
            </div>
          </div>

          {/* Ecosystem Hierarchy Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            {/* Card 1: Family */}
            <div className="p-4 rounded-2xl bg-[#1c1f2a]/90 border border-white/5 flex items-center justify-between gap-4 shadow-sm hover:bg-[#262a35] hover:border-[#4cd7f6]/40 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#06b6d4] text-[#00424f] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0">
                  <span className="material-symbols-outlined text-2xl">diversity_3</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                    {language === 'ar' ? 'أسرة رؤية' : 'Osra Roya'}
                  </span>
                  <span className="font-label-sm text-xs text-[#bcc9cd]">
                    Osra Roya • النشاط الطلابي المركزي
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#313540] text-[#4cd7f6] font-label-sm text-xs font-mono shrink-0">
                {language === 'ar' ? 'الأسرة الطلابية' : 'Student Body'}
              </span>
            </div>

            {/* Card 2: Faculty */}
            <div className="p-4 rounded-2xl bg-[#1c1f2a]/90 border border-white/5 flex items-center justify-between gap-4 shadow-sm hover:bg-[#262a35] hover:border-[#0566d9]/40 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0566d9] text-[#e6ecff] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                    {language === 'ar'
                      ? 'كلية الحاسبات والمعلومات'
                      : 'Faculty of Computers & Info'}
                  </span>
                  <span className="font-label-sm text-xs text-[#bcc9cd]">
                    Faculty of Computers & Information
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#313540] text-[#adc6ff] font-label-sm text-xs font-mono shrink-0">
                {language === 'ar' ? 'الكلية الحاضنة' : 'Incubator Faculty'}
              </span>
            </div>

            {/* Card 3: University */}
            <div className="p-4 rounded-2xl bg-[#1c1f2a]/90 border border-white/5 flex items-center justify-between gap-4 shadow-sm hover:bg-[#262a35] hover:border-[#1bbd85]/40 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#1bbd85] text-[#00452e] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    account_balance
                  </span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                    {language === 'ar'
                      ? 'جامعة الصالحية الجديدة'
                      : 'El Saleheya El Gadida University'}
                  </span>
                  <span className="font-label-sm text-xs text-[#bcc9cd]">
                    El Saleheya El Gadida University (SGU)
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#313540] text-[#4edea3] font-label-sm text-xs font-mono shrink-0">
                {language === 'ar' ? 'الصرح الجامعي' : 'University Campus'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
