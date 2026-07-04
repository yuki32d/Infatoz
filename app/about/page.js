'use client';
import dynamic from "next/dynamic";

const AboutContent = dynamic(() => import("./AboutContent"), {
  ssr: false,
  loading: () => null
});

export default function AboutPage() {
  return <AboutContent />;
}
