/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveView, Language, Member, RegistrationTicket } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { MentorSpotlight } from './components/MentorSpotlight';
import { MembersSection } from './components/MembersSection';
import { GallerySection } from './components/GallerySection';
import { AchievementsSection } from './components/AchievementsSection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { RegistrationPortal } from './components/RegistrationPortal';
import { Footer } from './components/Footer';
import { MemberModal } from './components/MemberModal';
import { TicketModal } from './components/TicketModal';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [language, setLanguage] = useState<Language>('ar');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [generatedTicket, setGeneratedTicket] = useState<RegistrationTicket | null>(null);

  // Sync HTML lang and dir attribute
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const handleNavigateToView = (view: ActiveView) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#0f131d] text-[#dfe2f1] font-sans antialiased selection:bg-[#4cd7f6] selection:text-[#003640] ${
        language === 'ar' ? 'font-cairo' : 'font-jakarta'
      }`}
    >
      {/* Top Fixed Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={handleNavigateToView}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#0f131d] min-h-screen">
        {activeView === 'registration' ? (
          /* ==================== REGISTRATION & EVENTS PORTAL (SCREEN 2) ==================== */
          <RegistrationPortal
            language={language}
            onSuccessTicket={(ticket) => setGeneratedTicket(ticket)}
          />
        ) : activeView === 'members' ? (
          /* ==================== DEDICATED MEMBERS VIEW ==================== */
          <div className="pt-4">
            <MembersSection
              language={language}
              onOpenMemberModal={(member) => setSelectedMember(member)}
              onApplyNow={() => handleNavigateToView('registration')}
            />
            <WhatsAppSection language={language} />
          </div>
        ) : activeView === 'gallery' ? (
          /* ==================== DEDICATED GALLERY VIEW ==================== */
          <div className="pt-4">
            <GallerySection language={language} />
            <WhatsAppSection language={language} />
          </div>
        ) : activeView === 'achievements' ? (
          /* ==================== DEDICATED ACHIEVEMENTS VIEW ==================== */
          <div className="pt-4">
            <AchievementsSection language={language} />
            <WhatsAppSection language={language} />
          </div>
        ) : activeView === 'community' ? (
          /* ==================== DEDICATED COMMUNITY VIEW ==================== */
          <div className="pt-4">
            <WhatsAppSection language={language} />
            <AchievementsSection language={language} />
          </div>
        ) : activeView === 'about' ? (
          /* ==================== DEDICATED ABOUT VIEW ==================== */
          <div className="pt-4">
            <WhoWeAreSection language={language} />
            <MentorSpotlight language={language} />
            <AchievementsSection language={language} />
          </div>
        ) : (
          /* ==================== HOME VIEW (SCREEN 1 - FULL COMMUNITY HUB) ==================== */
          <div className="flex flex-col w-full relative overflow-hidden">
            {/* Ambient Background Flares */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-gradient-to-b from-[#4cd7f6]/10 via-[#0566d9]/5 to-transparent blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-[1400px] -right-48 w-96 h-96 bg-[#4cd7f6]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute top-[2800px] -left-48 w-96 h-96 bg-[#4edea3]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* 1. Hero Section */}
            <HeroSection
              language={language}
              onExploreMembers={() => handleScrollToSection('members-section')}
              onJoinWhatsApp={() => handleScrollToSection('whatsapp-section')}
              onRegister={() => handleNavigateToView('registration')}
            />

            {/* 2. Who We Are Section */}
            <WhoWeAreSection language={language} />

            {/* 3. Pioneer / Advisor Spotlight */}
            <MentorSpotlight language={language} />

            {/* 4. Members Grid Section */}
            <MembersSection
              language={language}
              onOpenMemberModal={(member) => setSelectedMember(member)}
              onApplyNow={() => handleNavigateToView('registration')}
            />

            {/* 5. Photo Gallery Showcase */}
            <GallerySection language={language} />

            {/* 6. Achievements & Journey Section */}
            <AchievementsSection language={language} />

            {/* 7. WhatsApp Community Section with QR Code */}
            <WhatsAppSection language={language} />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer language={language} onNavigate={handleNavigateToView} />

      {/* Member Details Modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
        language={language}
        onJoinTeam={() => {
          setSelectedMember(null);
          handleNavigateToView('registration');
        }}
      />

      {/* Entry Pass / Ticket Modal */}
      <TicketModal
        ticket={generatedTicket}
        onClose={() => setGeneratedTicket(null)}
        language={language}
      />
    </div>
  );
}
