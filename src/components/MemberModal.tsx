import React from 'react';
import { Member, Language } from '../types';

interface MemberModalProps {
  member: Member | null;
  onClose: () => void;
  language: Language;
  onJoinTeam: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({
  member,
  onClose,
  language,
  onJoinTeam,
}) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#111827] border border-white/10 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4cd7f6]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#1c1f2a] border border-white/10 text-[#bcc9cd] hover:text-white flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Member Header */}
        <div className="flex flex-col items-center text-center mb-6">
          {member.avatarUrl ? (
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#4cd7f6] via-[#0566d9] to-[#4edea3] mb-4 overflow-hidden shadow-lg">
              <img
                src={member.avatarUrl}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ) : (
            <div
              className={`w-24 h-24 rounded-full p-1 mb-4 ${
                member.isPresident
                  ? 'bg-gradient-to-tr from-[#F59E0B] to-[#4cd7f6]'
                  : member.isVP
                  ? 'bg-gradient-to-tr from-[#4cd7f6] to-[#adc6ff]'
                  : 'bg-gradient-to-tr from-[#4cd7f6] to-[#4edea3]'
              }`}
            >
              <div className="w-full h-full rounded-full bg-[#1c1f2a] flex items-center justify-center text-[#4cd7f6] font-headline-md text-2xl font-bold">
                {member.avatarInitials}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#dfe2f1]">
              {member.name}
            </h3>
            <span
              className="member-badge-glow px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase"
              style={{ '--member-badge-color': member.badgeColor ?? '#4cd7f6' } as React.CSSProperties}
            >
              {member.badge}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-semibold text-[#4cd7f6]">
              {language === 'ar' ? member.arabicRole : member.role}
            </span>
            <span aria-hidden="true" className="text-[#869397]">·</span>
            <span dir="ltr" className="rounded-md border border-[#4cd7f6]/20 bg-[#4cd7f6]/8 px-2 py-0.5 font-mono text-xs font-semibold text-[#4cd7f6]">
              {member.academicYear}
            </span>
          </div>
          <span className="text-xs text-[#869397] font-mono mt-0.5">
            {member.track}
          </span>
        </div>

        {/* Member Details */}
        <div className="bg-[#171b26]/70 border border-white/5 rounded-2xl p-4 mb-6 space-y-3">
          <div>
            <span className="text-xs text-[#869397] block mb-1">نبذة عن العضو والدور:</span>
            <p className="text-sm text-[#dfe2f1] leading-relaxed">
              {member.bio || 'عضو فاعل ومساهم في مسابقات وورش العمل التقنية لأسرة رؤية.'}
            </p>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-[#869397]">المسار التخصصي:</span>
            <span className="text-[#4edea3] font-semibold">
              {language === 'ar' ? member.arabicTrack : member.track}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-[#869397]">الكلية والمؤسسة:</span>
            <span className="text-[#dfe2f1]">حاسبات ومعلومات • جامعة الصالحية</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onJoinTeam();
            }}
            className="flex-1 py-3 px-4 rounded-xl bg-[#4cd7f6] hover:bg-[#acedff] text-[#003640] font-bold text-sm transition-colors text-center"
          >
            انضم للأسرة وشارك مع الفريق
          </button>
        </div>
      </div>
    </div>
  );
};
