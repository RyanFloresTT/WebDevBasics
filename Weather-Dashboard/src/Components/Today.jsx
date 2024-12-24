import { useEffect, useState } from "react";
import styles from "../styles.css";

export default function Today() {
  const startingDate = new Date();

  const defaultDate = startingDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const defaultWeekday = startingDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const [date, setDate] = useState(defaultDate);
  const [weekday, setWeekday] = useState(defaultWeekday);

  useEffect(() => {
    setInterval(() => {
      var currTime = new Date();

      setDate(
        currTime.toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );

      setWeekday(
        currTime.toLocaleDateString("en-US", {
          weekday: "long",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="date">
      <h1 className="weekday-heading">{weekday}</h1>
      <h2 className="date-heading">{date}</h2>
    </div>
  );
}
