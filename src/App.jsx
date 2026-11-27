import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Invitation from './components/Invitation';
import WeddingEvent from './components/WeddingEvent';
import Countdown from './components/Countdown';
import ReceptionEvent from './components/ReceptionEvent';
import Venue from './components/Venue';
import Blessings from './components/Blessings';
import MusicPlayer from './components/MusicPlayer';
import MobileActionBar from './components/MobileActionBar';
import Footer from './components/Footer';
import { WritingStyleProvider } from './context/WritingStyleContext';

// Mobile-Optimized 2-Second Physical Royal Kasavu Envelope Opening Ceremony
import KeralaEnvelopeOpening from './components/openings/KeralaEnvelopeOpening';

function AppContent() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const [replayCount, setReplayCount] = useState(0);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  // Audio begins ONLY when opening begins / "Tap to Open" is triggered
  const handleInviteStart = () => {
    setAutoPlayMusic(true);
    if (typeof window !== 'undefined' && window.__playWeddingMusic) {
      window.__playWeddingMusic();
    }
  };

  const handleInviteOpen = () => {
    setInvitationOpened(true);
    setAutoPlayMusic(true);
  };

  const handleReplayInvite = () => {
    setReplayCount((c) => c + 1);
    setInvitationOpened(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-base,#FEF9E7)] text-[var(--color-text-main,#2C1405)] selection:bg-[#FDE68A] selection:text-[#2C1405] transition-colors duration-500 overflow-x-hidden font-sans pb-16 md:pb-0">
      
      {/* 2-Second Royal Kasavu Physical Envelope Opening */}
      {!invitationOpened && (
        <KeralaEnvelopeOpening
          key={replayCount}
          onStartOpen={handleInviteStart}
          onOpen={handleInviteOpen}
        />
      )}

      {/* Sticky Glassmorphic Royal Kasavu Navigation Bar */}
      {invitationOpened && <Navbar />}

      {/* Main Single Page Wedding Invitation Sections */}
      <main>
        <Hero />
        <Invitation />
        <WeddingEvent />
        <Countdown />
        <ReceptionEvent />
        <Venue />
        <Blessings />
      </main>

      {/* Desktop Audio Player */}
      <MusicPlayer
        autoPlayTrigger={autoPlayMusic}
        onReplayEnvelope={handleReplayInvite}
      />

      {/* Sticky Mobile Quick-Action Dock (Save Date, Directions, Music Equalizer, WhatsApp) */}
      {invitationOpened && <MobileActionBar />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WritingStyleProvider>
      <AppContent />
    </WritingStyleProvider>
  );
}

export default App;
