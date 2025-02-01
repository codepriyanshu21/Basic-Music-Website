"use client";
 
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const movingCardData = [
    {
      quote:
        "Music has the power to turn the best of times into unforgettable moments and the worst of times into healing melodies. It brings light in darkness, hope in despair, and belief in the impossible.",
      name: "John Harmony",
      title: "The Power of Music",
    },
    {
      quote:
        "To play, or not to play, that is the question. Whether to embrace the rhythm of life, face the highs and lows of the melody, or let silence take over. Music is the battle, and harmony is the victory.",
      name: "Melody Shakespeare",
      title: "The Sound of Existence",
    },
    {
      quote: "Every note we hear is but a dream within a dream, echoing through time.",
      name: "Edgar Tune",
      title: "A Symphony Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged that a song with heart will always find its way into the soul.",
      name: "Jane Melodica",
      title: "The Universal Language of Music",
    },
    {
      quote:
        "Call me a musician. Some years ago—never mind how long precisely—having little but a guitar in my hands and a melody in my heart, I set out to explore the vast ocean of sound.",
      name: "Harmon Melville",
      title: "A Journey Through Sound",
    },
  ];
  

const MovingCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="font-extrabold text-white text-center text-3xl mb-8">Hear our Harmony: Voices of success</h2>
        <div className="flex jusify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full  ">
                <InfiniteMovingCards items={movingCardData} direction="right" speed="slow"/>
            </div>
        </div>
        
    </div>
  )
}

export default MovingCards