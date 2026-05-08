import { ArtikelTerbaruSection } from '@/components/home/ArtikelTerbaruSection';
import { GaleriFasilitasSection } from '@/components/home/GaleriFasilitasSection';
import { HeroSection } from '@/components/home/HeroSection';
import { HomeHashScroll } from '@/components/home/HomeHashScroll';
import { LayananUnggulan } from '@/components/home/LayananUnggulan';
import { LokasiKamiSection } from '@/components/home/LokasiKamiSection';
import { TestimoniPasienSection } from '@/components/home/TestimoniPasienSection';

export default function Home() {
  return (
    <div className="min-h-0">
      <HomeHashScroll />
      <HeroSection />
      <LayananUnggulan />
      <GaleriFasilitasSection />
      <TestimoniPasienSection />
      <ArtikelTerbaruSection />
      <LokasiKamiSection />
    </div>
  );
}
