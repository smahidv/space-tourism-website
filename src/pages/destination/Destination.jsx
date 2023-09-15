import React, { useState } from "react";
import "./destination.css";
import DestinationSlide from "../../components/DestinationSlide";
import imgMars from "../../assets/destination/image-mars.png";
import imgMoon from "../../assets/destination/image-moon.png";
import imgTitan from "../../assets/destination/image-titan.png";
import imgeuropa from "../../assets/destination/image-europa.png";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState("moon");

  let selectedImage;
  let avgDistance;
  let travelTime;

  switch (selectedPlanet) {
    case "moon":
      selectedImage = imgMoon;
      avgDistance = "384,400 mil. km";
      travelTime = "3 days";
      break;
    case "mars":
      selectedImage = imgMars;
      avgDistance = "225 mil. km";
      travelTime = "9 months";
      break;
    case "europa":
      selectedImage = imgeuropa;
      avgDistance = "628 mil. km";
      travelTime = "3 years";
      break;
    case "titan":
      selectedImage = imgTitan;
      avgDistance = "1.6 mil. km";
      travelTime = "7 years";
      break;
    default:
      selectedImage = null;
      avgDistance = "";
      travelTime = "";
  }

  return (
    <div className="section-container padding ">
      <section className="section-padding-right">
        <div className="destination-container shared-padding">
          <div className="hero-title-shared center">
            <span>02</span> Pick your destination
          </div>
          <div className="destination-2 ">
            <div className="destination-2-left ">
              <div className="destination-imageSlide">
                {selectedImage && (
                  <img src={selectedImage} alt={`${selectedPlanet} planet`} />
                )}
              </div>
            </div>
            <div className="destination-2-right ">
              <div className="subNavPlanet">
                <ul className="flex">
                  <li
                    className={selectedPlanet === "moon" ? "active" : ""}
                    onClick={() => setSelectedPlanet("moon")}
                  >
                    moon
                  </li>
                  <li
                    className={selectedPlanet === "mars" ? "active" : ""}
                    onClick={() => setSelectedPlanet("mars")}
                  >
                    mars
                  </li>
                  <li
                    className={selectedPlanet === "europa" ? "active" : ""}
                    onClick={() => setSelectedPlanet("europa")}
                  >
                    europa
                  </li>
                  <li
                    className={selectedPlanet === "titan" ? "active" : ""}
                    onClick={() => setSelectedPlanet("titan")}
                  >
                    titan
                  </li>
                </ul>
              </div>
              {selectedPlanet && (
                <div className="bold-title-shared center">{selectedPlanet}</div>
              )}
              <p className="current-description-text center">
                <DestinationSlide 
                 planet={selectedPlanet} />
              </p>
              <div className="currentPlanet-information">
                <div className="distance center">
                  <div className="currentPlanet-information-title ">
                    Avg. distance
                  </div>
                  <div className="distancePlanet_variable ">{avgDistance}</div>
                </div>
                <div className="travelTime center">
                  <div className="currentPlanet-information-title ">
                    Est. travel time
                  </div>
                  <div className="travelTimePlanet_variable ">{travelTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
