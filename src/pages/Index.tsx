import { useState, useEffect, useCallback } from 'react';
import SpaceScene from '@/components/space/SpaceScene';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    setScrollProgress(Math.min(1, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
      {/* 3D Background - fixed */}
      <SpaceScene scrollProgress={scrollProgress} />

      {/* Scrollable content */}
      <div className="relative z-10">
        <HeroSection scrollProgress={scrollProgress} />

        {/* Spacer for scroll-driven camera descent */}
        <div className="h-[20vh] md:h-[50vh]" />

        {/* On-surface content */}
        <ServicesSection />
        <AboutSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
