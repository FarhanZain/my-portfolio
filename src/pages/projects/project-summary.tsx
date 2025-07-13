import React from "react";
import Head from "next/head";
import Image from "next/image";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from 'next/router'
import AnimatedContent from "@/components/animatedContent";

export default function ProjectSummary() {

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
          <title>Project Summary Mobile</title>
        </Head>
        <div className="w-full max-w-[1000px]">
          {/* Hero */}
          <div className="flex gap-1 items-center mb-4 cursor-pointer" onClick={handleClick}>
            <IconChevronLeft stroke={1} />
            <p>Back</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src="/img/summary/summary-detail.png"
                className="w-full h-auto rounded-xl"
              />
              <div className="w-full flex flex-col gap-4">
                <div className="text-xs font-light border px-3 py-1 rounded-full w-fit">Mobile Design</div>
                <h1 className="text-3xl font-semibold">Project Summary Mobile</h1>
                <p className="h-full">Designed to monitor the progress of the project being worked on</p>
              </div>
          </div>
          <hr className="my-10 rounded-full border-[#222222]" />
          {/* Overview (about/background, problems & goals) */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Overview</h1>
            <p className="mb-5">This project was created to monitor the progress of projects undertaken by the department, stakeholders can see the progress of the entire project, each milestone, each task, and each employee working on it. this application can also provide comments on existing progress.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="w-full">
                <p className="font-semibold mb-2">The Problems</p>
                <ul className="leading-loose">
                  <li>- Cannot view project progress from anywhere.</li>
                  <li>- Cannot follow up on the project being worked on.</li>
                </ul>
              </div>
              <div className="w-full">
                <p className="font-semibold mb-2">The Goals</p>
                <p>All parts involved can see and follow up on project progress.</p>
              </div>
            </div>
          </div>
          {/* User Research (interview) */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">User Research</h1>
            <p>We conducted qualitative user research by interviewing 2 resource persons with roles as a project manager and a stakeholder.</p>
          </div>
          {/* Findings */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Findings</h1>
            <ol className="leading-loose">
              <li>1. Can see the progress of the project that is being worked on from anywhere using mobile</li>
              <li>2. Can see the progress of the project in detail in terms of percentage and others</li>
              <li>3. Can provide comments or follow up on the progress of the project</li>
              <li>4. Provide notifications to project managers or stakeholders if there are comments or follow-ups</li>
              <li>5. Integrated with project management applications on the web</li>
            </ol>
          </div>
          {/* User Flow */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-4">User Flow</h1>
            <img
                src="/img/summary/summary-userflow.png"
                className="w-full h-auto rounded-xl mt-6"
              />
          </div>
          {/* Wireframe */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-4">Wireframe</h1>
            <img
                src="/img/summary/summary-wireframe.png"
                className="w-full h-auto rounded-xl mt-6"
              />
          </div>
          {/* Mockup */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-4">High Fidelity Design</h1>
            <img
                src="/img/summary/summary-mockup.png"
                className="w-full h-auto rounded-xl mt-6"
              />
          </div>
          {/* Prototyping */}
          <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-3">Prototyping</h1>
            <p>We made advance prototyping using variables in figma, but sorry I can't show it here.</p>
          </div>
          {/* Testing (how we do testing = design review) */}
          <div className="mb-40">
            <h1 className="text-2xl font-semibold mb-3">Testing</h1>
            <p>No testing documentation. We did a design presentation with stakeholders to get approval or feedback. we did not do usability testing because the time available was very limited.</p>
          </div>
        </div>
      </div>
    </AnimatedContent>
    
  );
}
