import React from "react";
import { FloatingDock } from "@/components/floating-dock";
import {
  IconFolderOpen,
  IconSmartHome,
  IconUserCircle,
} from "@tabler/icons-react";
import RegularCard from "@/components/regularCard";
import Image from "next/image";
import AnimatedContent from "@/components/animatedContent";
import Head from "next/head";
import Stack from "@/components/stack";

export default function About() {
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
      title: "Project",
      icon: (
        <IconFolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "projects",
    },
  ];

  const images = [
    { id: 1, img: "/img/stack/stack5.jpg" },
    { id: 2, img: "/img/stack/stack4.jpg" },
    { id: 3, img: "/img/stack/stack3.jpg" },
    { id: 4, img: "/img/stack/stack2.jpg" },
    { id: 5, img: "/img/stack/stack1.jpg" }
  ];

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col items-center sm:py-10 h-screen w-full">
        <Head>
          <title>About Farhan</title>
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
              <div className="h-full">
                <RegularCard className="p-8 w-full h-full">
                  <p className="text-xl mb-2 font-semibold">About</p>
                  <p>Fresh graduate from the Informatics Engineering program at Batam State Polytechnic. Skilled in UI/UX Design and Frontend Web Development. Has one year of experience as an UI/UX Designer intern. Able to work both independently and in a team, diligent in completing tasks, and always strives to deliver the best results in every project undertaken.</p>
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
              <div className="h-full">
                <div className=" h-[210px] sm:h-full min-w-[250px] relative">
                  {/* <Image src='/img/aboutpp.png' fill className="object-cover" alt=""></Image> */}
                  <Stack
                    randomRotation={false}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ height: 210 }}
                    cardsData={images}
                  />
                </div>
              </div>
            </AnimatedContent>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <div className="w-full sm:w-auto">
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
                <RegularCard className="p-8 w-full h-auto">
                  <p className="font-semibold mb-3">Tools</p>
                  <div className="flex gap-3">
                    <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#222222] rounded-xl">
                      <Image src='/img/figma.png' width={40} height={40} alt=""></Image>
                    </div>
                    <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#222222] rounded-xl">
                      <Image src='/img/vscode.png' width={40} height={40} alt=""></Image>
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
                <RegularCard className="p-8 w-full h-auto">
                  <p className="font-semibold mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#222222] rounded-xl">
                      <Image src='/img/html.png' width={40} height={40} alt=""></Image>
                    </div>
                    <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#222222] rounded-xl">
                      <Image src='/img/css.png' width={40} height={40} alt=""></Image>
                    </div>
                    <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#222222] rounded-xl">
                      <Image src='/img/js.png' width={40} height={40} alt=""></Image>
                    </div>
                    <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#222222] rounded-xl">
                      <Image src='/img/bootstrap.png' width={40} height={40} alt=""></Image>
                    </div>
                    <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#222222] rounded-xl">
                      <Image src='/img/tailwind.png' width={40} height={40} alt=""></Image>
                    </div>
                    <div className="w-[60px] h-[60px] flex items-center justify-center border border-[#222222] rounded-xl">
                      <Image src='/img/react.png' width={40} height={40} alt=""></Image>
                    </div>
                  </div>
                </RegularCard>
              </AnimatedContent>
            </div>
          </div>
          {/* Section 3 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
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
                delay={800}
              >
                <RegularCard className="p-8 w-full h-auto sm:min-h-[220px]">
                  <p className="font-semibold mb-3">Experince</p>
                  <div>
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-lg font-medium">UI/UX Designer Intern</p>
                        <p className="font-light text-zinc-500">Aug 23 - Aug 24</p>
                      </div>
                      <p className="text-sm font-light text-zinc-300">PT Sat Nusapersada Tbk</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-lg font-medium">Web Development Student</p>
                        <p className="font-light text-zinc-500">Feb 23 - Jun 23</p>
                      </div>
                      <p className="text-sm font-light text-zinc-300">Infinite Learning Indonesia</p>
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
                delay={1000}
              >
                <RegularCard className="p-8 w-full h-auto sm:min-h-[246px] lg:min-h-[220px]">
                  <p className="font-semibold mb-3">Education</p>
                  <div>
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-lg font-medium">Informatics Engineering</p>
                        <p className="font-light text-zinc-500">2021 - 2025</p>
                      </div>
                      <p className="text-sm font-light text-zinc-300">Batam State Polytechnic</p>
                    </div>
                  </div>
                </RegularCard>
              </AnimatedContent>
            </div>
          </div>
          {/* Section 4 */}
          <div className="mb-16">
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
              <RegularCard className="p-8 w-full h-auto">
                <p className="font-semibold text-center mb-4">Journey</p>
                <div className="flex flex-wrap sm:flex-nowrap gap-3">
                  <RegularCard className="h-[200px] sm:h-[140px] lg:h-[170px] w-full relative">
                    <Image src='/img/sat2.jpeg' fill className="object-cover" alt=""></Image>
                  </RegularCard>
                  <RegularCard className="h-[200px] sm:h-[140px] lg:h-[170px] w-full relative">
                    <Image src='/img/sat1.jpeg' fill className="object-cover" alt=""></Image>
                  </RegularCard>
                  <RegularCard className="h-[200px] sm:h-[140px] lg:h-[170px] w-full relative">
                    <Image src='/img/il2.jpeg' fill className="object-cover" alt=""></Image>
                  </RegularCard>
                  <RegularCard className="h-[200px] sm:h-[140px] lg:h-[170px] w-full relative">
                    <Image src='/img/il1.jpeg' fill className="object-cover" alt=""></Image>
                  </RegularCard>
                </div>
              </RegularCard>
            </AnimatedContent>
          </div>
        </div>
      </div>
      <FloatingDock
        desktopClassName="fixed top-1/2 -translate-y-1/2 left-12"
        mobileClassName="fixed bottom-4 right-4"
        items={links}
      />
    </>
  );
}
