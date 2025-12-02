import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((project) => { // Renamed 'data' to 'project' for clarity
        return (
          <div
            data-aos="zoom-in"
            key={project.id}
            // Increased internal vertical spacing for elements within the card (if any were present)
            className="flex flex-col justify-center items-center gap-6" 
          >
            {/* POPUP: The main clickable and visual container. Added 'group' and consistent rounding/overflow. */}
            <POPUP className="img-content relative group rounded-xl overflow-hidden shadow-xl"> 
              {/* Image Container: Consistent size, object-cover, and scale applied to container */}
              <div className="relative h-[250px] w-[380px] sm:h-[200px] sm:w-[92%] mx-auto transition-transform duration-500 group-hover:scale-105">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full" // Use object-cover to ensure images fill consistently
                  onError={(e) => e.target.src = "https://placehold.co/380x250/cccccc/333333?text=Image+Missing"}
                />
              </div>

              {/* Popup Overlay: Covers 100% of the rounded parent, with a refined blur and contrast */}
              <div
                className={`popup absolute inset-0 w-full h-full p-4 flex flex-col items-center justify-center text-center`}
              >
                <p className="text-gray-900 text-sm leading-relaxed w-[90%] mb-4">
                  {project.desc}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Link
                    to={project.link}
                    target="_blank"
                    className="rounded-full shadow-lg p-2 px-4 flex gap-2 items-center justify-center font-medium bg-white hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                  >
                    <RxExternalLink className="text-black w-[20px] h-[20px]" />
                    <p className="text-black text-sm font-semibold">Demo</p>
                  </Link>
                  {/* Visual separator */}
                  <span className="w-[1px] h-6 bg-gray-300"></span> 
                  <Link
                    to={project.git}
                    target="_blank"
                    className="rounded-full shadow-lg p-2 px-4 flex gap-2 items-center justify-center font-medium bg-white hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                  >
                    <AiOutlineGithub className="text-black w-[20px] h-[20px]" />
                    <p className="text-black text-sm font-semibold">Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            {/* Title below card - Increased margin from mt-3 to mt-6 */}
            <p className="text-gray-800 text-xl font-medium sm:text-lg mt-6">
              {project.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  /* Applying a slight shadow and a slightly larger border-radius (rounded-xl) for a smoother look */
  border-radius: 0.75rem; /* Equivalent to Tailwind's rounded-xl */
  overflow: hidden;

  /* Ensures the overlay covers the card perfectly */
  .popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s ease;
    
    /* Refined background for better contrast and appearance */
    background: rgba(255, 255, 255, 0.85); 
    backdrop-filter: blur(10px);
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #333;
    
    border-radius: 0.75rem; /* Match parent rounding */
    overflow: hidden;
  }

  /* Hover effect on the POPUP container */
  &:hover .popup {
    opacity: 1;
  }
`;