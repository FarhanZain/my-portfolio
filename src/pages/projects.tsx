import React from "react";
import { FloatingDock } from "@/components/floating-dock";
import {
  IconCircleArrowRight,
  IconFolderOpen,
  IconSmartHome,
  IconUserCircle,
} from "@tabler/icons-react";
import SpotlightCard from "@/components/spotlightCard";
import RegularCard from "@/components/regularCard";
import Image from "next/image";
import AnimatedContent from "@/components/animatedContent";
import Head from "next/head";

export default function Projects() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconSmartHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "about",
    },
    {
      title: "Projects",
      icon: (
        <IconFolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "projects",
    },
  ];

  return (
    <div className="container mx-auto p-4 flex flex-col items-center sm:py-10 h-screen w-full">
      <Head>
        <title>Projects</title>
      </Head>
      <div className="w-full max-w-[1000px]">
        {/* Section 1 */}
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0}
        >
          <RegularCard className="p-4 w-full mb-3">
            <p className="text-center font-semibold">My Projects</p>
          </RegularCard>
        </AnimatedContent>
        {/* Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
          <div className="w-full">
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
              <SpotlightCard href="projects/pmtools" className="w-full h-[210px]">
                <div className="h-full flex gap-2">
                  <div className="w-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="font-light text-xs mb-1 text-gray-50">Web Design</p>
                      <p className="font-semibold text-xl">Project Management Tools</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs">View</p>
                      <IconCircleArrowRight stroke={1} />
                    </div>
                  </div>
                  <div className="w-full relative">
                    <Image src='/img/pm-thumbnail.png' fill className="object-cover" alt=""></Image>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
          <div className="w-full">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={400}
            >
              <SpotlightCard href="projects/redesign-mysatnusa" className="w-full h-[210px]">
                <div className="h-full flex gap-2">
                  <div className="w-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="font-light text-xs mb-1 text-gray-50">Mobile Design</p>
                      <p className="font-semibold text-xl">Redesign Mysatnusa App</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs">View</p>
                      <IconCircleArrowRight stroke={1} />
                    </div>
                  </div>
                  <div className="w-full relative">
                    <Image src='/img/redesign-thumbnail.png' fill className="object-cover" alt=""></Image>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
          <div className="w-full">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={600}
            >
              <SpotlightCard href="projects/project-summary" className="w-full h-[210px]">
                <div className="h-full flex gap-2">
                  <div className="w-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="font-light text-xs mb-1 text-gray-50">Mobile Design</p>
                      <p className="font-semibold text-xl">Project Summary Mobile</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs">View</p>
                      <IconCircleArrowRight stroke={1} />
                    </div>
                  </div>
                  <div className="w-full relative">
                    <Image src='/img/summary-thumbnail.png' fill className="object-cover" alt=""></Image>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
          <div className="w-full">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={800}
            >
              <SpotlightCard href="projects/ui-snorkeling" className="w-full h-[210px]">
                <div className="h-full flex gap-2">
                  <div className="w-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="font-light text-xs mb-1 text-gray-50">Mobile Design</p>
                      <p className="font-semibold text-xl">UI Snorkeling Tour Booking</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs">View</p>
                      <IconCircleArrowRight stroke={1} />
                    </div>
                  </div>
                  <div className="w-full relative">
                    <Image src='/img/snorkeling-thumbnail.png' fill className="object-cover" alt=""></Image>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
          <div className="w-full">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={1000}
            >
              <SpotlightCard href="projects/ui-items-lending" className="w-full h-[210px]">
                <div className="h-full flex gap-2">
                  <div className="w-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="font-light text-xs mb-1 text-gray-50">Mobile Design</p>
                      <p className="font-semibold text-xl">UI Items Lending System</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs">View</p>
                      <IconCircleArrowRight stroke={1} />
                    </div>
                  </div>
                  <div className="w-full relative">
                    <Image src='/img/lending-thumbnail.png' fill className="object-cover" alt=""></Image>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
          <div className="w-full">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={1200}
            >
              <SpotlightCard href="projects/ui-tracer-study" className="w-full h-[210px]">
                <div className="h-full flex gap-2">
                  <div className="w-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="font-light text-xs mb-1 text-gray-50">Web Design</p>
                      <p className="font-semibold text-xl">UI Tracer Study</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs">View</p>
                      <IconCircleArrowRight stroke={1} />
                    </div>
                  </div>
                  <div className="w-full relative">
                    <Image src='/img/tracer-thumbnail.png' fill className="object-cover" alt=""></Image>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
        </div>
      </div>
    
      <FloatingDock
        desktopClassName="fixed top-1/2 -translate-y-1/2 left-12"
        mobileClassName="fixed bottom-4 right-4"
        items={links}
      />
    </div>
  );
}
