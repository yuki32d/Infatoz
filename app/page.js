'use client';
import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("./HomeContent"), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return <HomeContent />;
}
