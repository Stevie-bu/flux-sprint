"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import dynamic from "next/dynamic";

const Studio = dynamic(() => Promise.resolve(() => <NextStudio config={config} />), {
  ssr: false,
});

export default function StudioPage() {
  return <Studio />;
}
