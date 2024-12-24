import { useEffect, useState } from "react";

export default function Time() {
  const defaultD = new Date();
  const ampmTime = defaultD.toLocaleTimeString();
  const defaultTime = ampmTime.slice(0, ampmTime.length - 2);

  const [time, setTime] = useState(defaultTime);

  useEffect(() => {
    setInterval(() => {
      var currTime = new Date();
      var ampm = currTime.toLocaleTimeString();

      setTime(ampm.slice(0, ampm.length - 2));
    }, 1000);
  }, []);

  return (
    <div className="time">
      <h1 className="time-heading">{time}</h1>
    </div>
  );
}
