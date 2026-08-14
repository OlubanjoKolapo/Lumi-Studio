import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import SectionLink from "@/components/SectionLink";
import ServiceDetail from "@/components/ServiceDetail";
import { pageHeaders } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Lumi Studio",
  description:
    "Knotless braids, cornrows and feed-ins, braided updos, passion twists and locs. What each one costs, how long it takes and what's included.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader {...pageHeaders.services} />
      <ServiceDetail />
      <Process />
      <Reviews />
      <section className="bg-cream px-[var(--gutter)] py-20 text-center md:py-28">
        <SectionLink href="/contact" label="Request a booking" className="inline-block" />
      </section>
    </>
  );
}
