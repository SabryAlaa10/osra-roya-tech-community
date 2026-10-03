import React, { useState } from 'react';
import { Member, Language } from '../types';
import { MEMBERS_DATA } from '../data/royaData';

interface MembersSectionProps {
  language: Language;
  onOpenMemberModal: (member: Member) => void;
  onApplyNow: () => void;
}

export const MembersSection: React.FC<MembersSectionProps> = ({
  language,
  onOpenMemberModal,
  onApplyNow,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMembers = MEMBERS_DATA.filter((member) => {
    const matchesCategory =
      selectedCategory === 'all' || member.category === selectedCategory;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.arabicName.includes(searchQuery) ||
      member.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.arabicTrack.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16"
      id="members-section"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-right">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#262a35] text-[#4cd7f6] font-label-sm text-xs uppercase font-mono mb-2 border border-white/5">
            <span>THE TECH TALENTS</span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-[#dfe2f1]">
            {language === 'ar' ? 'أعضاء أسرة رؤية' : 'Osra Roya Members'}
          </h2>
        </div>
        <p className="font-body-sm text-sm text-[#bcc9cd] max-w-md">
          {language === 'ar'
            ? 'باقي الأعضاء بيتضافوا تباعاً — المكان محجوز ومتاح للكوادر المتميزة في حاسبات ومعلومات الصالحية.'
            : 'New members are continuously inducted — open to passionate talent at FCI SGU.'}
        </p>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', labelAr: 'الكل', labelEn: 'All' },
            { id: 'leadership', labelAr: 'القيادة والإدارة', labelEn: 'Leadership' },
            { id: 'tech', labelAr: 'المسارات التقنية', labelEn: 'Technical Tracks' },
            { id: 'media', labelAr: 'العلاقات والمجتمع', labelEn: 'PR & Media' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#06b6d4] text-[#00424f] shadow-md shadow-[#06b6d4]/20'
                  : 'bg-[#1c1f2a] text-[#bcc9cd] hover:text-[#dfe2f1] hover:bg-[#262a35] border border-white/5'
              }`}
            >
              {language === 'ar' ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'ar' ? 'ابحث بالاسم أو التخصص...' : 'Search member...'
            }
            className="w-full bg-[#1c1f2a] border border-white/10 text-[#dfe2f1] placeholder:text-[#869397] px-4 py-2 pr-9 rounded-lg text-xs md:text-sm focus:outline-none focus:border-[#4cd7f6]"
          />
          <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[#869397] text-lg pointer-events-none">
            search
          </span>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => onOpenMemberModal(member)}
            className="rounded-2xl bg-[#111827]/90 border border-white/5 p-5 shadow-lg flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(6,182,212,0.2)] hover:border-[#4cd7f6]/40 transition-all relative overflow-hidden group cursor-pointer"
          >
            {/* Top Badge Strip */}
            <div className="flex items-start justify-between gap-2 mb-4">
              {member.isPresident ? (
                <div className="px-2.5 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B] font-label-sm text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">stars</span>
                  <span>
                    {language === 'ar'
                      ? 'رئيس الأسرة • President'
                      : 'President • Leader'}
                  </span>
                </div>
              ) : member.isVP ? (
                <div className="px-2.5 py-1 rounded-full bg-[#4cd7f6]/15 border border-[#4cd7f6]/30 text-[#4cd7f6] font-label-sm text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    verified_user
                  </span>
                  <span>
                    {language === 'ar'
                      ? 'نائب رئيس الأسرة • VP'
                      : 'Vice President'}
                  </span>
                </div>
              ) : (
                <span className="px-2 py-1 rounded-md bg-[#1c1f2a] border border-white/5 text-[#bcc9cd] font-label-sm text-xs">
                  {language === 'ar' ? 'عضو في الأسرة' : 'Family Member'}
                </span>
              )}

              <span
                className="member-badge-glow px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase"
                style={{ '--member-badge-color': member.badgeColor ?? '#4cd7f6' } as React.CSSProperties}
              >
                {member.badge}
              </span>
            </div>

            {/* Avatar & Name */}
            <div className="flex flex-col items-center text-center my-3">
              {member.avatarUrl ? (
                <div className="w-20 h-20 rounded-full p-0.5 bg-gradient-to-tr from-[#4cd7f6] to-[#4edea3] mb-3 overflow-hidden shadow-md">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
                  />
                </div>
              ) : (
                <div
                  className={`w-20 h-20 rounded-full p-1 mb-3 ${
                    member.isPresident
                      ? 'bg-gradient-to-tr from-[#F59E0B] to-[#4cd7f6]'
                      : member.isVP
                      ? 'bg-gradient-to-tr from-[#4cd7f6] to-[#adc6ff]'
                      : 'bg-[#1c1f2a] border border-white/10'
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-[#1c1f2a] flex items-center justify-center text-[#4cd7f6] font-headline-sm text-xl font-bold group-hover:scale-105 transition-transform">
                    {member.avatarInitials}
                  </div>
                </div>
              )}

              <h4 className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold group-hover:text-[#4cd7f6] transition-colors">
                {member.name}
              </h4>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-2">
                <span className="font-label-sm text-xs text-[#bcc9cd] font-mono">
                  {language === 'ar' ? member.arabicRole : member.role}
                </span>
                <span aria-hidden="true" className="text-[#869397]">·</span>
                <span dir="ltr" className="rounded-md border border-[#4cd7f6]/20 bg-[#4cd7f6]/8 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#4cd7f6]">
                  {member.academicYear}
                </span>
              </div>
            </div>

            {/* Bottom Track Pill */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-center text-xs font-mono text-[#869397] group-hover:text-[#4cd7f6] transition-colors">
              <span>{language === 'ar' ? member.arabicTrack : member.track}</span>
            </div>
          </div>
        ))}

        {/* Reserved Empty Slot Card (From original design) */}
        <div
          onClick={onApplyNow}
          className="rounded-2xl bg-[#171b26]/40 border-2 border-dashed border-white/10 p-5 flex flex-col items-center justify-center text-center hover:bg-[#171b26] hover:border-[#4cd7f6]/50 transition-all relative group cursor-pointer min-h-[220px]"
        >
          <div className="w-16 h-16 rounded-full bg-[#1c1f2a] border border-white/5 flex items-center justify-center text-[#869397] group-hover:text-[#4cd7f6] group-hover:scale-110 transition-all mb-3">
            <span className="material-symbols-outlined text-3xl">add</span>
          </div>
          <span className="font-headline-sm text-base md:text-lg text-[#dfe2f1] font-bold mb-1">
            {language === 'ar' ? 'عضو جديد قريباً' : 'New Member Soon'}
          </span>
          <span className="font-body-sm text-xs text-[#869397] font-mono">
            {language === 'ar' ? 'مكانك محجوز معنا' : 'Your Spot Is Waiting'}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onApplyNow();
            }}
            className="mt-4 px-3 py-1.5 rounded-lg bg-[#313540] text-xs font-mono font-bold text-[#4cd7f6] group-hover:bg-[#4cd7f6] group-hover:text-[#003640] transition-colors"
          >
            {language === 'ar' ? 'قدّم الآن' : 'Apply Now'}
          </button>
        </div>
      </div>
    </section>
  );
};
