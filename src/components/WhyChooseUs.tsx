"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Collaborative Music Production",
      description:
        "Work with artists, producers, and songwriters in real time. Share tracks, exchange ideas, and create music seamlessly, no matter where you are.",
    },
    {
      title: "Live Audio Editing",
      description:
        "Make changes to your tracks in real time. Adjust beats, fine-tune vocals, and mix layers without the hassle of multiple versions.",
    },
    {
      title: "Track Version Control",
      description:
        "Keep all your song versions organized. Easily switch between edits, compare mixes, and ensure you're always working on the latest track.",
    },
    {
      title: "Endless Music Inspiration",
      description:
        "Stuck in a creative block? Get AI-powered suggestions, sample recommendations, and fresh ideas to keep your music flowing.",
    },
  ];
  

const WhyChooseUs = () => {
  return (
    <div className="overflow-hidden">
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs