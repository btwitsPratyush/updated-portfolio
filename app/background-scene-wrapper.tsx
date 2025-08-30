"use client"

import dynamic from "next/dynamic"

// Dynamically load the heavy Three.js scene only in the browser
const BackgroundScene = dynamic(() => import("@/components/BackgroundScene"), {
  ssr: false,
})

export default function BackgroundSceneWrapper() {
  return <BackgroundScene />
}