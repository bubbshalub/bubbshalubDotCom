"use client";

import { useState } from "react";

export default function WorkHoursCalc() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [hours, setHours] = useState(0);

  function CalcHours(startTime, endTime, breakTime) {
    let sHour = parseInt(startTime);
    let eHour = parseInt(endTime);
    let breakMinutes = parseFloat(breakTime);

    if (isNaN(sHour) || isNaN(eHour) || isNaN(breakMinutes)) {
      console.error("Invalid input");
      return;
    }

    let workMinutes = (eHour - sHour - breakMinutes) * 60;
    let workHours = workMinutes / 60;

    setHours(workHours);
  }

  return (
    <div>
      <input
        placeholder="Start Time (HH:mm)"
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        placeholder="End Time (HH:mm)"
        onChange={(e) => setEndTime(e.target.value)}
      />
      <input
        placeholder="Break Time (hours)"
        onChange={(e) => setBreakTime(e.target.value)}
      />
      <button onClick={() => CalcHours(startTime, endTime, breakTime)}>
        Submit
      </button>
      <div>Result: {hours} hours</div>
    </div>
  );
}

