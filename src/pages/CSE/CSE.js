import classes from "./CSE.module.css";
import CseLists from "../CseDetail/CseLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const CSE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.CSE}>
      {CseLists.map((list) => {
        return (
          <EventCard
            key={list.id}
            eventtitle={list.heading}
            eventDescription={list.desc}
            imgSrc={list.imgSrc}
            heading={list.name}  
            regFee={list.regFee} 
            contact={list.contact} 
            redirectLink={list.redirectLink}
          />
        );
      })}
    </div>
  );
};

export default CSE;
