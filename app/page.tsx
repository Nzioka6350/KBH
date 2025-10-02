import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AcademicsSection } from "@/components/academics-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { AdmissionsSection } from "@/components/admissions-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <FacilitiesSection />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
