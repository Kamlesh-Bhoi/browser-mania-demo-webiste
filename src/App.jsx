import React, { useState } from 'react';
import './App.css';
import './components/InteractiveStyles.css';
import { CyberNavbar } from './components/CyberNavbar';
import { HeroSection } from './components/HeroSection';
import { RoundsSection } from './components/RoundsSection';
import { InteractivePlayground } from './components/InteractivePlayground';
import { TimelineSection } from './components/TimelineSection';
import { PrizesSection } from './components/PrizesSection';
import { GuidelinesSection } from './components/GuidelinesSection';
import { RegistrationSection } from './components/RegistrationSection';
import { CoordinatorsSection } from './components/CoordinatorsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { PosterModal } from './components/PosterModal';
import { BackgroundVideo } from './components/BackgroundVideo';
import { InteractiveCyberLayer } from './components/InteractiveCyberLayer';

export function App() {
  const [scanlinesEnabled, setScanlinesEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <div className="app-root">
      {/* Live Looping Cyber Background Video Animation */}
      <BackgroundVideo 
        videoEnabled={videoEnabled} 
        onToggleVideo={setVideoEnabled}
        audioEnabled={audioEnabled}
      />

      {/* Dynamic User Interaction Layer (Cursor, 3D tilt, HUD dock, Particles) */}
      <InteractiveCyberLayer 
        videoEnabled={videoEnabled}
        setVideoEnabled={setVideoEnabled}
        scanlinesEnabled={scanlinesEnabled}
        setScanlinesEnabled={setScanlinesEnabled}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />

      {/* Optional CRT Scanlines Overlay */}
      {scanlinesEnabled && <div className="scanlines-overlay" />}

      {/* Retro Browser Window Header & Navigation */}
      <CyberNavbar 
        scanlinesEnabled={scanlinesEnabled}
        setScanlinesEnabled={setScanlinesEnabled}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection 
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenPoster={() => setIsPosterOpen(true)}
        />

        <RoundsSection 
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        <InteractivePlayground />

        <TimelineSection />

        <PrizesSection />

        <GuidelinesSection />

        <RegistrationSection 
          onOpenPoster={() => setIsPosterOpen(true)}
        />

        <CoordinatorsSection />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
      />

      {/* Modals */}
      <RegistrationModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <PosterModal 
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />
    </div>
  );
}

export default App;
