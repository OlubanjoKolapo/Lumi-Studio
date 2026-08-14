import Booking from "@/components/Booking";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import SectionLink from "@/components/SectionLink";
import Services from "@/components/Services";
import Studio from "@/components/Studio";
import Work from "@/components/Work";

export default function Page() {
  return (
    <>
      <Hero />
      <Studio />
      <Services>
        <SectionLink
          href="/services"
          label="See the full menu"
          className="mt-16 flex justify-center md:mt-20"
        />
      </Services>
      <Work>
        <SectionLink
          href="/gallery"
          label="View all work"
          className="mt-14 flex justify-center md:mt-16"
        />
      </Work>
      <Booking />
      <Reviews />
    </>
  );
}
