import React from "react";
import { FloatingDock } from "@/components/floating-dock";
import {
  IconArrowNarrowRight,
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCircleArrowRight,
  IconCircleArrowUpRight,
  IconFolderOpen,
  IconMail ,
  IconSmartHome,
  IconUserCircle,
} from "@tabler/icons-react";
import SpotlightCard from "@/components/spotlightCard";
import RegularCard from "@/components/regularCard";
import Image from "next/image";
import RotatingText from "@/components/rotatingText";
import AnimatedContent from "@/components/animatedContent";
import Head from "next/head";
import BlurText from "@/components/blurText";
import CircularText from "@/components/circularText";

export default function Home() {
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

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center sm:justify-center h-screen w-full">
      <Head>
        <title>Farhan - Portfolio</title>
      </Head>
      <div className="w-full max-w-[1000px]">
        {/* Section 1 */}
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
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
          <div>
            <RegularCard className="p-8 w-full">
              <div className="flex gap-3 sm:gap-4">
                <BlurText
                    text="Hi, i'm Farhan"
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-xl sm:text-2xl font-semibold mb-3" animationFrom={undefined} animationTo={undefined}                />
                <div>
                  <RotatingText
                    texts={['UI/UX Designer', 'Web Designer']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black text-sm sm:text-xl font-bold sm:font-semibold overflow-hidden items-center justify-center rounded-md sm:rounded-lg mt-1 sm:mt-0"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </div>
              </div>
              <p>Fresh graduate in Informatics Engineering, with 1 year of internship experience as an UI/UX Designer and a strong work ethic.</p>
            </RegularCard>
          </div>
        </AnimatedContent>
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
          <div>
            <div className="flex flex-row sm:flex-col gap-3">
              <div className="flex gap-3 w-full">
                <SpotlightCard href="mailto:farhanabdurrahmanzain@gmail.com" className="min-w-[74px] w-full min-h-[80px] sm:min-h-[74px] flex items-center justify-center">
                  <IconMail size={24}/>
                </SpotlightCard>
                <SpotlightCard link="https://www.linkedin.com/in/farhan-abdurrahman-zain/" className="min-w-[74px] w-full min-h-[80px] sm:min-h-[74px] flex items-center justify-center">
                  <IconBrandLinkedin size={24}/>
                </SpotlightCard>
              </div>
              <div className="flex gap-3 w-full">
                <SpotlightCard link="https://dribbble.com/FarhanZain26" className="min-w-[74px] w-full min-h-[80px] sm:min-h-[74px] flex items-center justify-center">
                  <IconBrandDribbble size={24}/>
                </SpotlightCard>
                <SpotlightCard link="https://github.com/FarhanZain" className="min-w-[74px] w-full min-h-[80px] sm:min-h-[74px] flex items-center justify-center">
                  <IconBrandGithub size={24}/>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </AnimatedContent>
        </div>
        {/* Section 2 */}
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <div className="flex gap-3 w-full">
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
                <RegularCard className="h-[210px] w-full relative cursor-pointer" href="about">
                  <Image src='/img/newpp.png' fill className="object-cover" alt=""></Image>
                  <div className="absolute top-0 right-0 me-1 mt-1">
                    <IconCircleArrowUpRight size={36} stroke={1}/>
                  </div>
                  <div className="absolute bottom-0 pb-2 px-2 w-full">
                    <div className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-60 rounded-full">
                      <div className="relative flex h-5 w-5 items-center justify-center">
                        <span
                          className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-green-400 opacity-75"
                        ></span>
                        <span
                          className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500"
                        ></span>
                      </div>
                      <p className="text-black font-semibold">Open to work</p>
                    </div>
                  </div>
                </RegularCard>
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
                <SpotlightCard href="projects" className="p-7 w-full h-[210px] relative">
                  <CircularText
                    text="SEE-ALL-PROJECT-"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class"
                  />
                  <IconCircleArrowRight stroke={1} size={36} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  {/* <IconArrowNarrowRight/> */}
                </SpotlightCard>
              </AnimatedContent>
            </div>
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
        </div>
        {/* Section 3 */}
        <div className="flex flex-col sm:flex-row gap-3">
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
              delay={1200}
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
        </div>
      </div>
    
      <div className="fixed left-12">
        <FloatingDock
          mobileClassName="fixed right-0 bottom-0 me-4 mb-4" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
}
