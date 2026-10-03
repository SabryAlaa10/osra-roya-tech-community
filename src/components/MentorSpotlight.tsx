import React from 'react';
import { Language } from '../types';
import mentorPhoto from '../../assets/1761320664901.jpg';

interface MentorSpotlightProps {
  language: Language;
}

export const MentorSpotlight: React.FC<MentorSpotlightProps> = ({ language }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <span className="font-label-sm text-xs uppercase font-mono text-[#4cd7f6] tracking-widest mb-1">
          {language === 'ar'
            ? 'قيادة وإلهام • LEADERSHIP & MENTORSHIP'
            : 'LEADERSHIP & MENTORSHIP'}
        </span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-[#dfe2f1]">
          {language === 'ar' ? 'رائد وموجه أسرة رؤية' : 'Advisor & Tech Mentor'}
        </h2>
      </div>

      {/* Dr. Muhammad Soliman Bento Spotlight Card */}
      <div className="rounded-3xl bg-[#1c1f2a]/80 border border-white/5 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow rim decoration */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#4cd7f6]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Mentor Avatar & Cyber Badge Frame */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-[#4cd7f6] via-[#0566d9] to-[#4edea3] shadow-[0_0_35px_rgba(6,182,212,0.35)] mb-5">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0e18]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Dr. Muhammad Soliman PhD"
                      src={mentorPhoto}
                />
              </div>
              <div className="absolute bottom-1 right-2 px-3 py-1 rounded-full bg-[#0a0e18]/90 border border-white/10 backdrop-blur-md shadow-md flex items-center gap-1.5 text-xs font-mono font-bold text-[#F59E0B]">
                <span>🥷</span>
                <span>NinjaD</span>
              </div>
            </div>

            <span className="px-4 py-1.5 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] font-label-md text-xs font-bold mb-2">
              {language === 'ar' ? 'رائد ومستشار أسرة رؤية' : 'Faculty Advisor & Tech Pioneer'}
            </span>
            <h3 className="font-headline-md text-xl md:text-2xl text-[#dfe2f1] font-extrabold tracking-tight">
              Muhammad Soliman, PhD
            </h3>
            <span className="font-label-sm text-xs text-[#bcc9cd] font-mono mt-1">
              Senior Solutions Architect & Academic Lecturer
            </span>

            {/* Official Social Mentorship Links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/in/lupate"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#262a35] hover:bg-[#0566d9] text-[#dfe2f1] hover:text-[#e6ecff] font-label-sm text-xs font-semibold flex items-center gap-2 transition-all shadow-sm border border-white/5"
              >
                <span className="font-mono text-xs font-bold">in</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://adplist.org/mentors/muhammad-lupate"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#262a35] hover:bg-[#06b6d4] text-[#dfe2f1] hover:text-[#00424f] font-label-sm text-xs font-semibold flex items-center gap-2 transition-all shadow-sm border border-white/5"
              >
                <span className="font-mono text-xs font-bold">A</span>
                <span>ADPList Mentorship</span>
              </a>
            </div>
          </div>

          {/* Mentor Bio & Honors Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-right">
            <div className="p-4 rounded-xl bg-[#171b26]/70 border border-white/5">
              <p className="font-body-md text-sm md:text-base text-[#bcc9cd] leading-relaxed">
                {language === 'ar' ? (
                  <>
                    د. محمد هو أستاذ جامعة ومهندس حلول رائد في المجال الرقمي، بخبرة تزيد عن{' '}
                    <span className="text-[#4cd7f6] font-bold">+16 عاماً</span> في هندسة البرمجيات والأمن السيبراني والحوسبة السحابية. في academia، يعلّم الجيل الجديد من قادة التقنية من خلال تدريس الأمن السيبراني وتطوير تطبيقات الهاتف المحمول، كما ي mentor المهنيين والمهندسين في أكثر من خمس دول عبر منصة ADPList الدولية.
                  </>
                ) : (
                  <>
                    Dr. Soliman is a university lecturer and leading Solutions Architect with over <span className="text-[#4cd7f6] font-bold">+16 years</span> in software engineering, cybersecurity, and cloud computing. He mentors engineers worldwide across ADPList and leads technical empowerment for next-generation talent.
                  </>
                )}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#171b26]/70 border border-white/5">
              <p className="font-body-md text-sm md:text-base text-[#bcc9cd] leading-relaxed">
                {language === 'ar' ? (
                  <>
                    تعتمد أبحاثه وأساسه الأكاديمي على رسالة دكتوراه متخصصة تركز على{' '}
                    <span className="text-[#dfe2f1] font-semibold">Explainable AI والأمن السحابي</span>، إلى جانب حيازته شهادات احترافية رفيعة المستوى من Google وAmazon وLinux Foundation وOracle. في دوره المؤسسي، يقود التحول الرقمي في مجالات الـ FinTech، البنوك، التجارة الإلكترونية، والحوكمة في مصر والمنطقة.
                  </>
                ) : (
                  <>
                    His academic foundation centers on Explainable AI and Cloud Security research, bolstered by prestigious credentials from Google, AWS, Linux Foundation, and Oracle, driving enterprise digital transformation across FinTech and banking.
                  </>
                )}
              </p>
            </div>

            {/* Red Hat Champion Achievement Pill */}
            <div className="p-4 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-2xl">award_star</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-label-lg text-sm md:text-base font-bold text-[#F59E0B]">
                    Red Hat Champion 2025
                  </span>
                  <span className="font-label-sm text-xs text-[#bcc9cd] font-mono">
                    Red Hat Future of Banks
                  </span>
                </div>
                <p className="font-body-sm text-xs md:text-sm text-[#bcc9cd] mt-1 leading-relaxed">
                  {language === 'ar'
                    ? 'حائز على اللقب لمهارته المتقدمة في هندسة السحابة المؤسسية باستخدام Red Hat OpenShift، وتكريس وقته لربط الأكاديميا بالممارسة الصناعية المتقدمة ونقل الخبرات المعرفية لطلاب أسرة رؤية.'
                    : 'Awarded for advanced mastery in enterprise cloud architecture with Red Hat OpenShift, bridging academia with cutting-edge industry practice.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
