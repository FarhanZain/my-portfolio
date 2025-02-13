import React from "react";
import Head from "next/head";
import Image from "next/image";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from 'next/router'
import AnimatedContent from "@/components/animatedContent";

export default function RedesignMysatnusa() {

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
          <title>Redesign Mysatnusa App</title>
        </Head>
        <div className="w-full max-w-[800px]">
          {/* Hero */}
          <div className="flex gap-1 items-center mb-4 cursor-pointer" onClick={handleClick}>
            <IconChevronLeft stroke={1} />
            <p>Back</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full relative min-h-[250px]">
                  <Image src='/img/redesign/redesign-detail.png' fill className="object-cover rounded-3xl" alt=""></Image>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="text-xs font-light border px-3 py-1 rounded-full w-fit">Mobile Design</div>
                <h1 className="text-3xl font-semibold">Redesign Mysatnusa App</h1>
                <p className="h-full">Redesigned the user interface of the entire application</p>
              </div>
          </div>
          <hr className="my-10 rounded-full border-[#222222]" />
          {/* Overview (about/background, problems & goals) */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Overview</h1>
            <p className="mb-5">This is the main application in Satnusa, which is mobile-based. This application has many features related to the company's systems, ranging from general features to specialized features.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="w-full">
                <p className="font-semibold mb-2">The Problems</p>
                <p>The old look was too plain and wanted to customize with new additional features.</p>
              </div>
              <div className="w-full">
                <p className="font-semibold mb-2">The Goals</p>
                <p>Update the appearance of the current application to reflect a different look based on the additional features.</p>
              </div>
            </div>
          </div>
          {/* Testing (how we do testing = design review) */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Design Review</h1>
            <p>We did a design presentation with stakeholders to get approval or feedback. we did not do usability testing because the time available was very limited.</p>
          </div>
          {/* Wireframe */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-4">Wireframe</h1>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/redesign/redesign-wireframe1.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/redesign/redesign-wireframe2.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
          </div>
          {/* Mockup */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-4">Mockup</h1>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/redesign/redesign-mockup1.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/redesign/redesign-mockup2.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
    
  );
}
