import React from 'react';
import { Language } from '../types';
import { ACHIEVEMENTS_DATA } from '../data/royaData';

interface AchievementsSectionProps {
  language: Language;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  language,
}) => {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16"
      id="achievements"
    >
      <div className="flex flex-col items-start text-right mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#262a35] text-[#4cd7f6] font-label-sm text-xs uppercase font-mono mb-2 border border-white/5">
          <span className="material-symbols-outlined text-sm">timeline</span>
          <span>
            {language === 'ar' ? 'المشوار • THE JOURNEY' : 'THE JOURNEY • MILESTONES'}
          </span>
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-[#dfe2f1]">
          {language === 'ar' ? 'إنجازات وأنشطة الأسرة' : 'Achievements & Milestones'}
        </h2>
        <p className="font-body-md text-sm md:text-base text-[#bcc9cd] mt-1">
          {language === 'ar'
            ? 'سجل زاخر بالمشاركات الفعالة والإنجازات المشرفة على مستوى الجمهورية.'
            : 'A track record of competitive victories, summit attendances, and community impact.'}
        </p>
      </div>

      {/* Achievements Stack */}
      <div className="flex flex-col gap-4">
        {ACHIEVEMENTS_DATA.map((ach) => {
          if (ach.highlight) {
            return (
              <div
                key={ach.id}
                className="p-6 md:p-7 rounded-3xl bg-[#111827]/95 border border-[#F59E0B]/30 shadow-xl relative overflow-hidden hover:bg-[#1E293B] hover:border-[#F59E0B]/60 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-5 text-right">
                  <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/15 flex items-center justify-center text-[#F59E0B] shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                    <span className="material-symbols-outlined text-3xl">
                      {ach.iconName}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-headline-sm text-lg md:text-xl text-[#F59E0B] font-bold">
                        {language === 'ar' ? ach.title : ach.englishTitle}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] font-label-sm text-xs font-bold border border-[#F59E0B]/30">
                        {ach.englishTitle}
                      </span>
                    </div>
                    <span className="font-label-md text-sm text-[#dfe2f1] font-semibold mt-1">
                      {ach.subtitle}
                    </span>
                    <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd] mt-1 leading-relaxed max-w-3xl">
                      {ach.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end md:self-center">
                  <span className="px-4 py-2 rounded-xl bg-[#F59E0B] text-[#0a0e18] font-label-md text-sm font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-lg">
                      military_tech
                    </span>
                    <span>{ach.statusBadge}</span>
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={ach.id}
              className="p-5 md:p-6 rounded-2xl bg-[#111827]/75 border border-white/5 shadow-md hover:bg-[#1E293B] hover:border-[#4cd7f6]/30 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
            >
              <div className="flex items-start gap-4 text-right">
                <div className="w-12 h-12 rounded-xl bg-[#4cd7f6]/10 flex items-center justify-center text-[#4cd7f6] shrink-0 border border-white/5">
                  <span className="material-symbols-outlined text-2xl">
                    {ach.iconName}
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h4 className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold">
                      {ach.title}
                    </h4>
                    <span className="font-label-sm text-xs text-[#869397] font-mono">
                      {ach.englishTitle}
                    </span>
                  </div>
                  <span className="font-label-sm text-xs text-[#4cd7f6] font-semibold mt-0.5">
                    {ach.subtitle}
                  </span>
                  <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd] mt-1 max-w-3xl">
                    {ach.description}
                  </p>
                </div>
              </div>

              <span className="px-3.5 py-1.5 rounded-lg bg-[#262a35] text-xs font-mono font-medium text-[#bcc9cd] shrink-0 self-end md:self-center border border-white/5">
                {ach.statusBadge}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
