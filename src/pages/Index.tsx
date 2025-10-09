import React from 'react';
import BeamBackground from '@/components/BeamBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import DetailedOffers from '@/components/DetailedOffers';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Beam Background */}
      <BeamBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Feature Cards */}
        <FeatureCards />

        {/* Detailed Offers */}
        <DetailedOffers />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
