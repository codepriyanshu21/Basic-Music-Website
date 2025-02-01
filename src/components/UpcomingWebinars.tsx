'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {

    const webinars = [
        {
          title: "MelodyHub",
          description:
            "A platform that connects artists, producers, and fans to create, share, and discover new music.",
          slug: "melodyhub",
          isFeatured: true,
        },
        {
          title: "HarmoniX",
          description:
            "An AI-powered tool that helps musicians compose, mix, and master tracks with ease.",
          slug: "harmonix",
          isFeatured: false,
        },
        {
          title: "TuneStream",
          description:
            "A music streaming service offering high-quality audio, curated playlists, and personalized recommendations.",
          slug: "tunestream",
          isFeatured: true,
        },
        {
          title: "BeatForge",
          description:
            "A cutting-edge beat-making software designed for producers of all levels to craft unique sounds.",
          slug: "beatforge",
          isFeatured: false,
        },
        {
          title: "LyricLab",
          description:
            "A songwriting assistant that generates lyrics, suggests rhymes, and enhances creativity for musicians.",
          slug: "lyriclab",
          isFeatured: true,
        },
        {
          title: "SoundSphere",
          description:
            "An immersive audio experience that brings spatial sound technology to music lovers and creators.",
          slug: "soundsphere",
          isFeatured: false,
        },
    ];
      
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide ">featured webinars</h2>
                <p className="mt-2 text-3zl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>
        </div>
        <div className="mt-10">
            <HoverEffect items={webinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: `/${webinar.slug}`, // Use the slug for the link
                    key: webinar.slug // Use the slug as the unique key
                }
            ))}></HoverEffect>
        </div>

        <div className="mt-10 text-center">
            <Link href={"/"} className="px-4 py-2 rounded-md border border-neutral-600
            text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 ">
                View All Webinars
            </Link>
        </div>
    </div>
  )
}

export default UpcomingWebinars
