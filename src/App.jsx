import { useState } from "react";
import Projects from "./components/Projects";
import Modal from "./components/Modal";

export default function App() {
  const [modal, setModal] = useState({ active: false, index: 0 });


  console.log(modal)
  const projects = [
    {
      title: "FuturoBotix Branding",
      src: "img1.jpg",
      tag: "Branding",
    },
    {
      title: "EcoHarvest E-commerce Website",
      src: "img2.jpg",
      tag: "Web Development",
    },
    {
      title: "Wanderlust Mobile App",
      src: "img3.jpg",
      tag: "Mobile App Development",
    },
    {
      title: "MediLink AI Chatbot",
      src: "img4.jpg",
      tag: "Artificial Intelligence (AI)",
    },
  ];

  return (
    <main className="h-screen flex justify-center items-center px-5">
      <div className="grid grid-cols-6 border-t-2 border-black w-full">
        <div className="col-span-2 py-3 font-semibold text-6xl tracking-tighter">Our works</div>
        <div className="flex flex-col col-span-4">
          {projects.map((project, index) => {
            return (
              <Projects
                index={index}
                setModal={setModal}
                key={index}
                title={project.title}
                src={project.src}
                tag={project.tag}
              />
            );
          })}
        </div>
      </div>
      <Modal projects={projects} modal={modal}/>
    </main>
  );
}
