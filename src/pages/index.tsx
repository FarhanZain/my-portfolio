import React from "react";
import { FloatingDock } from "@/components/floating-dock";
import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconCircleArrowRight,
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
import Stack from "@/components/stack";
import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  const router = useRouter()

  const links = [
    {
      title: "Home",
      icon: (
        <IconSmartHome className="h-full w-full text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconUserCircle className="h-full w-full text-neutral-300" />
      ),
      href: "about",
    },
    {
      title: "Projects",
      icon: (
        <IconFolderOpen className="h-full w-full text-neutral-300" />
      ),
      href: "projects",
    },
  ];

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const images = [
    { id: 1, img: "/img/stack/stack5.jpg" },
    { id: 2, img: "/img/stack/stack4.jpg" },
    { id: 3, img: "/img/stack/stack3.jpg" },
    { id: 4, img: "/img/stack/stack2.jpg" },
    { id: 5, img: "/img/stack/stack1.jpg" }
  ];

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
            <RegularCard className="p-7 lg:p-5 2xl:p-8 w-full">
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
                    texts={['UI/UX Engineer', 'Frontend Web']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black text-base sm:text-xl font-bold sm:font-semibold overflow-hidden items-center justify-center rounded-md sm:rounded-lg mt-[-1px] sm:mt-0"
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
              <p>Have interest in UI/UX and Frontend, with 1 year of internship experience as a UI/UX Engineer and a strong work ethic.</p>
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
          delay={100}
        >
          <div>
            <div className="flex flex-wrap justify-center sm:justify-between gap-3 w-full sm:w-[246px]">
                <SpotlightCard href="mailto:farhanabdurrahmanzain@gmail.com" className="w-[74px] h-[74px] lg:h-[60px] 2xl:h-[74px] flex items-center justify-center lg:rounded-2xl 2xl:rounded-3xl">
                  <IconMail size={24}/>
                </SpotlightCard>
                <SpotlightCard link="https://www.linkedin.com/in/farhan-abdurrahman-zain/" className="w-[74px] h-[74px] lg:h-[60px] 2xl:h-[74px] flex items-center justify-center lg:rounded-2xl 2xl:rounded-3xl">
                  <IconBrandLinkedin size={24}/>
                </SpotlightCard>
                <SpotlightCard link="https://dribbble.com/FarhanZain26" className="w-[74px] h-[74px] lg:h-[60px] 2xl:h-[74px] flex items-center justify-center lg:rounded-2xl 2xl:rounded-3xl">
                  <IconBrandDribbble size={24}/>
                </SpotlightCard>
                <div className="w-[74px] h-[74px] block sm:hidden"></div>
                <div className="w-[74px] h-[74px] block sm:hidden"></div>
                <SpotlightCard link="https://github.com/FarhanZain" className="w-[74px] h-[74px] lg:h-[60px] 2xl:h-[74px] flex items-center justify-center lg:rounded-2xl 2xl:rounded-3xl">
                  <IconBrandGithub size={24}/>
                </SpotlightCard>
                <SpotlightCard link="https://www.instagram.com/farhanzainnn_/" className="w-[74px] h-[74px] lg:h-[60px] 2xl:h-[74px] flex items-center justify-center lg:rounded-2xl 2xl:rounded-3xl">
                  <IconBrandInstagram size={24}/>
                </SpotlightCard>
                <SpotlightCard link="http://wa.me/6285293472288" className="w-[74px] h-[74px] lg:h-[60px] 2xl:h-[74px] flex items-center justify-center lg:rounded-2xl 2xl:rounded-3xl">
                  <IconBrandWhatsapp size={24}/>
                </SpotlightCard>
            </div>
          </div>
        </AnimatedContent>
        </div>
        {/* NEW SECTION */}
        <div className="flex flex-col sm:flex-row w-full sm:gap-4">
          {/* Section 2 */}
          <div className="flex flex-col gap-3 mb-3 w-full">
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
                  delay={200}
                >
                  <div className="h-[210px] w-full relative cursor-pointer p-0" onClick={() => router.push("about")}>
                    <Stack
                      randomRotation={false}
                      sensitivity={180}
                      sendToBackOnClick={false}
                      cardDimensions={{ height: 210 }}
                      cardsData={images}
                    />
                    <div className="absolute bottom-0 pb-2 px-2 sm:pe-10 w-full">
                      <div className="flex items-center gap-2 px-3 py-2 bg-white bg-opacity-60 rounded-full">
                        <div className="relative flex h-5 w-5 items-center justify-center">
                          <span
                            className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-green-400 opacity-75"
                          ></span>
                          <span
                            className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500"
                          ></span>
                        </div>
                        <p className="text-black font-bold">Open to work</p>
                      </div>
                    </div>
                  </div>
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
                  delay={300}
                >
                  <SpotlightCard href="projects" className="p-7 w-full h-[210px] relative">
                    <CircularText
                      text="SEE-ALL-PROJECT-"
                      onHover="speedUp"
                      spinDuration={20}
                      className="custom-class"
                    />
                    <IconCircleArrowRight stroke={1} size={36} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
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
                delay={400}
              >
                <SpotlightCard href="projects/pmtools" className="w-full h-[210px] lg:h-[180px] 2xl:h-[210px] group">
                  <div className="h-full flex gap-2">
                    <div className="w-full p-8 lg:p-5 2xl:p-8 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-light border border-gray-500 px-3 py-1 rounded-full w-fit mb-1">UI/UX Design</p>
                        <p className="font-semibold text-xl">Project Management Tools</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs">View</p>
                        <IconCircleArrowRight stroke={1} />
                      </div>
                    </div>
                    <div className="w-full relative">
                      <Image src='/img/pm-thumbnail.png' fill className="object-cover group-hover:scale-110 transition" alt=""></Image>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            </div>
          </div>
          {/* Section 3 */}
          <div className="pb-4 sm:pb-0 sm:flex-row gap-3 w-full">
            <div className="w-full h-full">
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
                <SpotlightCard className="w-full h-full group">
                  <div className="flex flex-col h-[430px] lg:h-[400px] 2xl:h-[430px]">
                    <div className="w-full h-full relative">
                      <Image src='/img/moulding.png' fill className="object-cover group-hover:scale-110 transition" alt=""></Image>
                    </div>
                    <div className="w-full p-8 lg:p-5 2xl:p-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-light border border-gray-500 px-3 py-1 rounded-full w-fit mb-1">Slicing Design</p>
                        </div>
                        <p className="font-semibold text-xl mb-1 lg:mb-0 2xl:mb-1">Slicing Moulding Dashboard</p>
                        <p>Laravel, HTML, CSS, JS, Bootstrap, ChartJS, ApexChart</p>
                      </div>
                      
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    
      <div className="fixed left-12">
        <FloatingDock
          mobileClassName="fixed right-0 bottom-0 me-4 mb-4"
          items={links}
        />
      </div>
    </div>
  );
}
