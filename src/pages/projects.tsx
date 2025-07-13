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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from 'next/router'

export default function Projects() {
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

  const uixProjects = [
    {
      type: "UI/UX Web",
      title: "Project Management Tools",
      image: "/img/pm-thumbnail.png",
      link: 'projects/pmtools',
      delay: 0
    },
    {
      type: "UI/UX Mobile",
      title: "Redesign MySatnusa App",
      image: "/img/redesign-thumbnail.png",
      link: 'projects/redesign-mysatnusa',
      delay: 50
    },
    {
      type: "UI/UX Mobile",
      title: "Project Summary Mobile",
      image: "/img/summary-thumbnail.png",
      link: 'projects/project-summary',
      delay: 100
    },
    {
      type: "UI/UX Mobile",
      title: "UI Snorkeling Tour Booking App",
      image: "/img/snorkeling-thumbnail.png",
      link: 'projects/ui-snorkeling',
      delay: 150
    },
    {
      type: "UI/UX Mobile",
      title: "UI Items Lending System",
      image: "/img/lending-thumbnail.png",
      link: 'projects/ui-items-lending',
      delay: 200
    },
    {
      type: "UI/UX Web",
      title: "UI Tracer Study",
      image: "/img/tracer-thumbnail.png",
      link: 'projects/ui-tracer-study',
      delay: 250
    },
  ]

  const slicings = [
    {
      type: "Internship",
      title: "Moulding Dashboard",
      image: "/img/moulding.png",
      link: '',
      stack: 'Laravel, HTML, CSS, JS, Bootstrap, ChartJS, ApexChart',
      delay: 0
    },
    {
      type: "Exercise",
      title: "Slicing SUXZ Figma Community",
      image: "/img/suxz.jpg",
      link: 'https://slicing-suxz.vercel.app/',
      stack: 'Tailwind CSS, React JS',
      delay: 50
    },
    {
      type: "Excercise",
      title: "Slicing Bublebash Figma Community",
      image: "/img/bublebash.jpg",
      link: 'https://bublebash.vercel.app/',
      stack: 'Tailwind CSS, React JS',
      delay: 100
    },
    {
      type: "Internship",
      title: "OEE Dashboard",
      image: "/img/oee.png",
      link: '',
      stack: 'Laravel, HTML, CSS, JS, Bootstrap, ChartJS, ApexChart',
      delay: 150
    },
    {
      type: "Internship",
      title: "EMR Dashboard",
      image: "/img/emr.png",
      link: '',
      stack: 'Laravel, HTML, CSS, JS, Bootstrap, ChartJS, ApexChart',
      delay: 200
    },
    {
      type: "Internship",
      title: "SMT Dashboard",
      image: "/img/smt.png",
      link: '',
      stack: 'Laravel, HTML, CSS, JS, Bootstrap, ChartJS, ApexChart',
      delay: 250
    },
    {
      type: "Excercise",
      title: "Milky Way Galaxy",
      image: "/img/milkyway.jpg",
      link: 'https://milky-way-han.vercel.app/Home.html',
      stack: 'HTML, CSS, JS',
      delay: 300
    },
  ]

  return (
    <div className="container mx-auto p-4 flex flex-col items-center sm:py-10 h-screen w-full">
      <Head>
        <title>Projects</title>
      </Head>
      <div className="w-full max-w-[1000px]">
        {/* Section 1 */}
        <Tabs defaultValue="uix" className="w-full">
          <TabsList className="mb-3 w-full h-14 px-2 bg-neutral-800">
            <TabsTrigger value="uix" className="text-lg w-full py-2 font-semibold">UI/UX Project</TabsTrigger>
            <TabsTrigger value="slicing" className="text-lg w-full py-2 font-semibold">Slicing Project</TabsTrigger>
          </TabsList>
          <TabsContent value="uix">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
              {uixProjects.map((uixProject, i) => (
              <div className="w-full" key={i}>
                  <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.0}
                    animateOpacity
                    scale={1.0}
                    threshold={0.2}
                    delay={uixProject.delay}
                  >
                    <SpotlightCard href={uixProject.link} className="w-full h-[210px] group">
                      <div className="h-full flex gap-2">
                        <div className="w-full p-4 lg:p-5 2xl:p-7 flex flex-col justify-between">
                          <div>
                            <p className="text-xs font-light border border-gray-500 px-3 py-1 rounded-full w-fit mb-3 sm:mb-2">{uixProject.type}</p>
                            <p className="font-semibold text-xl">{uixProject.title}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-xs">View</p>
                            <IconCircleArrowRight stroke={1} />
                          </div>
                        </div>
                        <div className="w-full relative">
                          <Image src={uixProject.image} fill className="object-cover group-hover:scale-110 transition" alt=""></Image>
                        </div>
                      </div>
                    </SpotlightCard>
                  </AnimatedContent>
              </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="slicing">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
              {slicings.map((slicing, i) => (
              <div className="w-full" key={i}>
                <AnimatedContent
                  distance={150}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.0}
                  animateOpacity
                  scale={1.0}
                  threshold={0.2}
                  delay={slicing.delay}
                >
                  <SpotlightCard className="w-full h-full group">
                    <div className="flex flex-col h-[350px] lg:h-[400px] 2xl:h-[430px]">
                      <div className="w-full h-full relative">
                        <Image src={slicing.image} fill className="object-cover group-hover:scale-110 transition" alt=""></Image>
                      </div>
                      <div className="w-full p-4 lg:p-5 2xl:p-7 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-light border border-gray-500 px-3 py-1 rounded-full w-fit mb-3">{slicing.type}</p>
                            {slicing.link && 
                              <button onClick={()=>window.open(slicing.link, '_blank')} className="text-sm font-semibold text-black bg-white hover:bg-neutral-700 hover:text-white px-3 py-1 rounded-full w-fit mb-1">Demo</button>
                            }
                          </div>
                          <p className="font-semibold text-xl mb-1 lg:mb-0 2xl:mb-1">{slicing.title}</p>
                          <p>{slicing.stack}</p>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </AnimatedContent>
              </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    
      <FloatingDock
        desktopClassName="fixed top-1/2 -translate-y-1/2 left-12"
        mobileClassName="fixed bottom-4 right-4"
        items={links}
      />
    </div>
  );
}
