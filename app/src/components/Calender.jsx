import React from "react";
import { Datepicker } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

export default function Calender() {
  // example for today's labels and invalids
  const myLabels = React.useMemo(() => {
    return [
      {
        start: "2023-07-26",
        textColor: "#e1528f",
        title: "2 SPOTS",
      },
    ];
  }, []);

  const myInvalid = React.useMemo(() => {
    return [
      {
        start: "2023-07-27T08:00",
        end: "2023-07-27T13:00",
      },
      {
        start: "2023-07-27T15:00",
        end: "2023-07-27T17:00",
      },
      {
        start: "2023-07-27T19:00",
        end: "2023-07-27T20:00",
      },
    ];
  }, []);
return (
  <Datepicker
    controls={["calendar", "timegrid"]}
    min="2023-07-27T00:00"
    max="2024-01-27T00:00"
    minTime="08:00"
    maxTime="19:59"
    display="center"
    stepMinute={60}
    labels={myLabels}
    invalid={myInvalid}
    theme="material"
    themeVariant="dark"
    inputProps={{
      placeholder: "Please Select date",
    }}
  />
);
}
