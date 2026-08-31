import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";
import SectionLink from "@/components/SectionLink";
import { pageHeaders } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery — Yenissar Beauty Center",
  description:
    "Real client work photographed at the end of the appointment — braids, cornrows, twists, locs, weaving and updos.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader {...pageHeaders.gallery} />
      <GalleryGrid />
      <section className="bg-sand px-[var(--gutter)] py-20 text-center md:py-28">
        <p className="u-display mx-auto max-w-[24rem] text-[clamp(1.5rem,2.6vw,2.2rem)] leading-tight text-ink">
          Seen something you want? Send us the one you like and we&apos;ll price it.
        </p>
        <SectionLink
          href="/contact"
          label="Request a booking"
          className="mt-10 inline-block"
        />
      </section>
    </>
  );
}
