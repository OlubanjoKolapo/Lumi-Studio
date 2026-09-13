import type { Metadata } from "next";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import { pageHeaders } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Yenissar Beauty Center",
  description:
    "Request an appointment at Yenissar Beauty Center, Canada. Pick a service and a day and it opens straight in WhatsApp. Open Tuesday to Saturday.",
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
