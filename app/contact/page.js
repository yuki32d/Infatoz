'use client';
import dynamic from "next/dynamic";

const ContactContent = dynamic(() => import("./ContactContent"), {
  ssr: false,
  loading: () => null
});

export default function ContactPage() {
  return <ContactContent />;
}
