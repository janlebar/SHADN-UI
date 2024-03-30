"use client";

import React from 'react';
import Map from '@/components/map';
import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <LazyMap />
    </main>
  );
}