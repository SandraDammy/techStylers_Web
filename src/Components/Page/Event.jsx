/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "../Style/Resources.module.css";
import Button from "../Common/Button";
import MonthPicker from "../Misc/MonthPicker";
import { pastEvents, upcomingEvents } from "../Misc/eventData";
import { useState } from "react";

const Event = () => {
  const btnRegister = () => {
    console.log("Event clicked!");
  };
  const btnEventHandler = () => {
    console.log("Event clicked!");
  };

  const [event, setEvent] = useState("past");
  const [eventData, setEventData] = useState(pastEvents);
  const [eventData2, setEventData2] = useState(upcomingEvents);

  const handleEvent = (e) => {
    if (e.target.value === "past") {
      setEvent("past");
      setEventData(pastEvents);
    } else {
      setEvent("upcoming");
      setEventData2(upcomingEvents);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.eventRegister}>
        <h1>
          Tech Elevate: <br />
          Empowering Innovation <br />
          with Techstylers
        </h1>
        <div className={style.eventBtn}>
          <Button
            className={"btnPry"}
            title={"Register"}
            btnEventHandler={btnRegister}
          />
          <Button
            className={"btnSec"}
            title={"See more"}
            btnEventHandler={btnEventHandler}
          />
        </div>
        <p>24th-26th Jan 2024</p>
        <p>Unilag</p>
      </div>
      <div className={style.postEvent}>
        <div className={style.eventPost}>
          <div className={style.pastEvent}>
            <button
              value="past"
              onClick={handleEvent}
              className={event === "past" ? style.active : style.pastEvent}
            >
              Past Events
            </button>

            <button
              value="upcoming"
              onClick={handleEvent}
              className={event === "upcoming" ? style.active : style.pastEvent}
            >
              Upcoming Events
            </button>
          </div>
          <div>
            <MonthPicker />
          </div>
        </div>
        <div className={style.gridContainer}>
          {event === "past"
            ? eventData.map((data, index) => (
                <div key={index} className={style.card}>
                  <div className={style.imgResources}>
                    <img src={data.image} alt="event" className={style.img} />
                  </div>
                  <div className={style.txtContainer}>
                    <div className={style.txtEvent}>
                      <h1>{data.title}</h1>
                      <p>{data.date}</p>
                    </div>
                    <div className={style.eventTxt}>
                      <p>{data.description}</p>
                      <a href="#" className={style.seeMoreLink}>
                        See more details...
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : eventData2.map((data, index) => (
                <div key={index} className={style.card}>
                  <div className={style.imgResources}>
                    <img src={data.image} alt="event" className={style.img} />
                  </div>
                  <div className={style.txtContainer}>
                    <div className={style.txtEvent}>
                      <h1>{data.title}</h1>
                      <p>{data.date}</p>
                    </div>
                    <div className={style.eventTxt}>
                      <p>{data.description}</p>
                      <a href="#" className={style.seeMoreLink}>
                        See more details...
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
