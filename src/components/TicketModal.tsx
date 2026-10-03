import React from 'react';
import { RegistrationTicket, Language } from '../types';

interface TicketModalProps {
  ticket: RegistrationTicket | null;
  onClose: () => void;
  language: Language;
}

export const TicketModal: React.FC<TicketModalProps> = ({
  ticket,
  onClose,
  language,
}) => {
  if (!ticket) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#111827] border border-[#4cd7f6]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)] relative overflow-hidden text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4cd7f6]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#1c1f2a] border border-white/10 text-[#bcc9cd] hover:text-white flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="w-12 h-12 rounded-xl bg-[#06b6d4] text-[#00424f] flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-2xl">confirmation_number</span>
          </div>
          <div>
            <span className="text-xs font-mono text-[#4cd7f6] uppercase tracking-wider block">
              OFFICIAL ENTRY PASS
            </span>
            <h3 className="font-headline-md text-lg sm:text-xl font-bold text-[#dfe2f1]">
              تصريح حضور فعالية معتمد
            </h3>
          </div>
        </div>

        {/* Ticket Body Card */}
        <div className="bg-[#0a0e18] border border-white/10 rounded-2xl p-5 mb-6 relative">
          {/* Ticket Header */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
            <span className="text-xs font-mono text-[#F59E0B] font-bold bg-[#F59E0B]/10 px-2.5 py-1 rounded border border-[#F59E0B]/20">
              {ticket.ticketId}
            </span>
            <span className="text-xs text-[#869397] font-mono">
              مقعد: {ticket.seatNumber}
            </span>
          </div>

          {/* Details */}
          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <span className="text-[#869397] block text-[11px]">اسم المشترك:</span>
              <span className="text-[#dfe2f1] font-bold text-base">
                {ticket.studentName}
              </span>
            </div>

            <div>
              <span className="text-[#869397] block text-[11px]">الفعالية / البرنامج:</span>
              <span className="text-[#4cd7f6] font-semibold">
                {ticket.eventName}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
              <div>
                <span className="text-[#869397] block text-[11px]">تاريخ التسجيل:</span>
                <span className="text-[#dfe2f1] font-mono text-xs">
                  {ticket.timestamp}
                </span>
              </div>
              <div>
                <span className="text-[#869397] block text-[11px]">المقر:</span>
                <span className="text-[#dfe2f1] text-xs">
                  كلية الحاسبات • SGU
                </span>
              </div>
            </div>
          </div>

          {/* QR Code Container */}
          <div className="mt-5 pt-4 border-t border-dashed border-white/10 flex items-center justify-between gap-4">
            <div className="text-right">
              <span className="text-xs font-bold text-[#4edea3] block mb-1">
                تم تأكيد حجز مقعدك بنجاح!
              </span>
              <span className="text-[11px] text-[#869397] leading-relaxed block">
                يرجى إبراز هذا الكود عند الدخول لقاعة التدريب أو المعمل.
              </span>
            </div>
            <div className="p-2 bg-white rounded-xl shadow-md shrink-0">
              <svg
                className="w-16 h-16"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="5" width="30" height="30" fill="#0B0F19" rx="3" />
                <rect x="12" y="12" width="16" height="16" fill="white" />
                <rect x="16" y="16" width="8" height="8" fill="#0B0F19" />
                <rect x="65" y="5" width="30" height="30" fill="#0B0F19" rx="3" />
                <rect x="72" y="12" width="16" height="16" fill="white" />
                <rect x="76" y="16" width="8" height="8" fill="#0B0F19" />
                <rect x="5" y="65" width="30" height="30" fill="#0B0F19" rx="3" />
                <rect x="12" y="72" width="16" height="16" fill="white" />
                <rect x="16" y="76" width="8" height="8" fill="#0B0F19" />
                <rect x="42" y="15" width="15" height="10" fill="#06B6D4" />
                <rect x="42" y="42" width="16" height="16" fill="#0B0F19" rx="2" />
                <rect x="65" y="65" width="20" height="10" fill="#0B0F19" />
                <rect x="70" y="80" width="15" height="10" fill="#06B6D4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://chat.whatsapp.com/H4L5agmgZRT2ZTAWPTuGEi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-[#1bbd85] hover:bg-[#14B8A6] text-[#003824] font-bold text-sm text-center flex items-center justify-center gap-2 transition-all shadow-md shadow-[#1bbd85]/20"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>الدخول لجروب الواتساب فوراً</span>
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="py-3 px-4 rounded-xl bg-[#1c1f2a] hover:bg-[#262a35] text-[#dfe2f1] font-semibold text-sm flex items-center justify-center gap-2 transition-colors border border-white/10"
          >
            <span className="material-symbols-outlined text-lg">print</span>
            <span>طباعة / حفظ التصريح</span>
          </button>
        </div>
      </div>
    </div>
  );
};
