import React from "react";
import Head from "next/head";
import Image from "next/image";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from 'next/router'
import AnimatedContent from "@/components/animatedContent";

export default function Pmtools() {

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
          <title>Project Management Tools</title>
        </Head>
        <div className="w-full max-w-[800px]">
          {/* Hero */}
          <div className="flex gap-1 items-center mb-4 cursor-pointer" onClick={handleClick}>
            <IconChevronLeft stroke={1} />
            <p>Back</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full relative min-h-[250px]">
                  <Image src='/img/pmtools/pm-detail.png' fill className="object-cover rounded-3xl" alt=""></Image>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="text-xs font-light border px-3 py-1 rounded-full w-fit">Web Design</div>
                <h1 className="text-3xl font-semibold">Project Management Tools</h1>
                <p className="h-full">Applications designed to help manage teams, projects, and  tasks.</p>
              </div>
          </div>
          <hr className="my-10 rounded-full border-[#222222]" />
          {/* Overview (about/background, problems & goals) */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Overview</h1>
            <p className="mb-5">This project was built to make it easier to manage projects that are being and will be worked on, making it easier to manage teams, projects, and tasks. this project adjusts user needs according to the development method being used.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="w-full">
                <p className="font-semibold mb-2">The Problems</p>
                <ul className="leading-loose">
                  <li>- Using apps without third parties</li>
                  <li>- Application using agile methods</li>
                </ul>
              </div>
              <div className="w-full">
                <p className="font-semibold mb-2">The Goals</p>
                <p>The application manages projects in accordance with the best practices of the agile methodology.</p>
              </div>
            </div>
          </div>
          {/* User Research (interview) */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">User Research</h1>
            <p>We conducted qualitative user research by interviewing 3 resource persons with roles as a project manager and a scrum master.</p>
          </div>
          {/* Desk Research */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Desk Research</h1>
            <p>We conducted research on frequently used project management applications such as trello, jira, and asana.</p>
          </div>
          {/* Findings */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Findings</h1>
            <ol className="leading-loose">
              <li>1. Apply agile methods consistently in the application</li>
              <li>2. Apply the task point system in agile to calculate employee performance</li>
              <li>3. Apply features that are commonly used in other project management applications</li>
              <li>4. Display dashboard of project progress and employee performance</li>
            </ol>
          </div>
          {/* User Flow */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-4">User Flow</h1>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px]">
                <Image src='/img/pmtools/pm-userflow.png' fill className="object-cover rounded-3xl" alt=""></Image>
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
                <Image src='/img/pmtools/pm-wireframe1.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/pmtools/pm-wireframe2.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/pmtools/pm-wireframe3.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/pmtools/pm-wireframe4.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
          </div>
          {/* Mockup */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-4">Mockup</h1>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/pmtools/pm-mockup1.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/pmtools/pm-mockup2.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/pmtools/pm-mockup3.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
            <div className="w-full relative min-h-[250px] sm:min-h-[500px] mb-4">
                <Image src='/img/pmtools/pm-mockup4.png' fill className="object-cover rounded-3xl" alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
    
  );
}
