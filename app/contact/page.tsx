import type { Metadata } from "next";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import { pageHeaders } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Lumi Studio",
  description:
    "Request an appointment at Lumi Studio, Victoria Island, Lagos. Open Tuesday to Saturday — we reply within a day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader {...pageHeaders.contact} />
      <Booking eyebrow="Request a booking" heading="Pick your service." />
      <Faq />
    </>
  );
}
