
const CrewSlide = ({function_crew}) => {
    let information_crew="";
    switch(function_crew){
     case "engineer":
    information_crew="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space"
    break;
    case "commander":
    information_crew="Hurley Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    break;
    case "specialist":
    information_crew=" Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    break;
    case "pilote":
    information_crew="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    break;
    default:
        information_crew= "";
    }
    return information_crew;
}

export default CrewSlide;
