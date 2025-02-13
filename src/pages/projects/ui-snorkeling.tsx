import React from "react";
import Head from "next/head";
import Image from "next/image";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from 'next/router'
import AnimatedContent from "@/components/animatedContent";

export default function UiSnorkeling() {

  const router = useRouter()
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('../projects');
  }

  return (
    <AnimatedContent
      distance={150}
      direction="vertical"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0.0}
      animateOpacity
      scale={1.0}
      threshold={0.2}
      delay={200}
    >
      <div className="container mx-auto p-4 flex flex-col items-center sm:py-10 h-screen w-full">
        <Head>
          <title>UI Snorkeling Tour Booking</title>
        </Head>
        <div className="w-full max-w-[800px]">
          {/* Hero */}
          <div className="flex gap-1 items-center mb-4 cursor-pointer" onClick={handleClick}>
            <IconChevronLeft stroke={1} />
            <p>Back</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full relative min-h-[250px]">
                  <Image src='/img/snorkeling/snorkeling-detail.png' fill className="object-cover rounded-3xl" alt=""></Image>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="text-xs font-light border px-3 py-1 rounded-full w-fit">Mobile Design</div>
                <h1 className="text-3xl font-semibold">UI Snorkeling Tour Booking</h1>
                <p className="h-full">Personalized project to practice design skills.</p>
              </div>
          </div>
          <hr className="my-10 rounded-full border-[#222222]" />
          {/* Overview (about/background, problems & goals) */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Overview</h1>
            <p className="mb-5">this project is a personal project about a mobile application that can book snorkeling tours for all destinations in indonesia. in it there is a home page that displays all destinations and their costs, a detail page of the destination, and a history page to see the history of ongoing or completed bookings.</p>
          </div>
          {/* Mockup */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-4">Mockup</h1>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/snorkeling/snorkeling-mockup.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
    
  );
}
