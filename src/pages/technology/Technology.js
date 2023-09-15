import React, { useState } from "react";
import TechnologySlide from "../../components/TechnologySlide"
import imgvehicule from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import imgSpaceport from "../../assets/technology/image-spaceport-portrait.jpg"
import imgCapsule from "../../assets/technology/image-space-capsule-portrait.jpg"
import "./technology.css";

const Technology = () => {
  const [selectedTechnology,setSelectedTechnology]=useState("vehicule");
  let selectedTitle;
  let selectedImage;
  switch(selectedTechnology){
    case "vehicule":
      selectedTitle="launch vehicule";
      selectedImage=imgvehicule;
    break;
    case "spaceport":
      selectedTitle="Spaceport";
      selectedImage=imgSpaceport;
      break;
    case "capsule":
    selectedTitle="Space capsule";
    selectedImage=imgCapsule;
      break;
    default:
      selectedTitle=""
  }
  return(
    
    <div className="section-container  ">
    <section>
   <div className="technology-container shared-padding">
    <div className="hero-title-shared center flex hero-padding-bottom margin-left"><span>03</span>space launch 101</div>
  <div className="technology-2 ">
    <div className="technology-2-left center padding ">
      <div className="technology-2-subleft-2">
      <div className="technology-numeration flex">
            <div className={`technology-number ${selectedTechnology==="vehicule" ? "selecte" : ""} `} onClick={()=>setSelectedTechnology("vehicule")}>1</div>
            <div className={`technology-number ${selectedTechnology==="spaceport" ? "selecte" : ""} `}  onClick={()=>setSelectedTechnology("spaceport")}>2</div>
            <div className={`technology-number ${selectedTechnology==="capsule" ? "selecte" : ""} `} onClick={()=>setSelectedTechnology("capsule")}>3</div>
      </div>
      <div className="technology-numeration-2-subright">
        <div className="erminology">The terminology...</div>
        <div className="current-title-secondary-shared">{selectedTitle}</div>
      <p className="current-description-text">
          <TechnologySlide tech={selectedTechnology}/>
        </p>
      </div>
      </div>
    </div>
    <div className="technology-2-right-images">
      {selectedImage && (
        <img src={selectedImage} alt={`${selectedImage} technology`}/>
      )}
    </div>
  </div>
  </div>
  </section>
  </div>
  );
};

export default Technology;
