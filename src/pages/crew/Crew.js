import React, { useState } from "react";
import CrewSlide from "../../components/CrewSlide";
import imgEngineer from "../../assets/crew/image-anousheh-ansari.png";
import imgPilot from "../../assets/crew/image-victor-glover.png";
import imgCommander from "../../assets/crew/image-douglas-hurley.png";
import imgSpecialist from "../../assets/crew/image-mark-shuttleworth.png";
import "./crew.css";

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState("engineer");
  let selectedFunction;
  let selectedName;
  let selectedImg;
  switch (selectedCrew) {
    case "engineer":
      selectedFunction = "Flight Engineer";
      selectedName = "Anousheh Ansari";
      selectedImg = imgEngineer;
      break;
    case "specialist":
      selectedFunction = "Mission Specialist";
      selectedName = "Mark Shuttleworth";
      selectedImg = imgSpecialist;
      break;
    case "commander":
      selectedFunction = "commander";
      selectedName = "Douglas Hurley";
      selectedImg = imgCommander;
      break;
    case "pilote":
      selectedFunction = "Pilot";
      selectedName = "Victor Glover";
      selectedImg = imgPilot;
      break;
    default:
      selectedFunction = "";
      selectedName = "";
      selectedImg = null;
  }
  return (
    <div className="section-container padding">
      <section>
        <div className="crew-container shared-padding">
          <div className="hero-title-shared center flex ">
            <span>03</span>meet your crew
          </div>
          <div className="crew-2 padding-top">
            <div className="crew-2-left center ">
              {selectedFunction && (
                <div className="current-function-shared">
                  {selectedFunction}
                </div>
              )}
              {selectedName && (
                <div className="current-title-secondary-shared">
                  {selectedName}
                </div>
              )}
              <p className="current-description-text">
                <CrewSlide function_crew={selectedCrew} />
              </p>
              <div className="dots-crew flex">
  <div className={`dot ${selectedCrew === "engineer" ? "selected" : ""}`} onClick={() => setSelectedCrew("engineer")}>
    &bull;
  </div>
  <div className={`dot ${selectedCrew === "pilote" ? "selected" : ""}`} onClick={() => setSelectedCrew("pilote")}>
    &bull;
  </div>
  <div className={`dot ${selectedCrew === "commander" ? "selected" : ""}`} onClick={() => setSelectedCrew("commander")}>
    &bull;
  </div>
  <div className={`dot ${selectedCrew === "specialist" ? "selected" : ""}`} onClick={() => setSelectedCrew("specialist")}>
    &bull;
  </div>
</div>

            </div>
            {selectedImg && (
              <div className="crew-images">
                <img src={selectedImg} alt={`${selectedName} `} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Crew;
