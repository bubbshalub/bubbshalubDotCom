"use client";
import GetDate from "@/lib/GetDate";

// Change navbar bg based on month
export default async function UpdateNavbarBackgroundStyle(
  setNavbarBg: any,
): Promise<void> {
  console.log("UPDATING NAVBAR BG STYLING");
  try {
    let month = await GetDate("month");
    //console.warn(month);
    //console.log("month[0]: ", month[0]);
    //console.log("month[1]: ", month[1]);

    if (month[0] === "0") {
      //console.log("reassigning month");
      month = month[1];
      //console.log(month);
    }

    switch (month) {
      case "1": //jan
        setNavbarBg("linear-gradient(-44deg, red, black, red)"); //working
        break;
      case "2": //feb
        setNavbarBg("linear-gradient(-44deg, pink, magenta, pink)"); //working
        break;
      case "3": //mar
        setNavbarBg("linear-gradient(-44deg, blue, yellow, blue)"); //working
        break;
      case "4": //apr
        setNavbarBg("linear-gradient(-44deg, green, blue, green)"); //working
        break;
      case "5": //may
        setNavbarBg("linear-gradient(-44deg, blue, purple, magenta, purple)"); //working
        break;
      case "6": //jun
        setNavbarBg(
          "linear-gradient(-44deg, red, orange, yellow, green, cyan, blue, purple, magenta, red)",
        ); //working
        break;
      case "7": //jul
        setNavbarBg("linear-gradient(-44deg, red, white, blue, red)"); //working
        break;
      case "8": //aug
        setNavbarBg("linear-gradient(-44deg, red, orange, yellow, green, red)"); //working
        break;
      case "9": //sept
        setNavbarBg(
          "linear-gradient(-44deg, red, blue, yellow, orange, purple, red)",
        ); //working
        break;
      case "10": //oct
        setNavbarBg("linear-gradient(-44deg, orange, black, orange)"); //working
        break;
      case "11": //nov
        setNavbarBg(
          "linear-gradient(-44deg, magenta, black, orange, yellow, magenta)",
        ); //working
        break;
      case "12": //dec
        setNavbarBg("linear-gradient(-44deg, red, white, green, white, red)"); //working
        break;
      default:
        console.warn(
          "error in UpdateNavbarBgStyle function, defaulting. value given:",
          month,
        );
        setNavbarBg("linear-gradient(-44deg, red, black, red)");
        break;
    }
  } catch (error) {
    console.error("Error in GetDate:", error);
    // Handle the error as needed
  }
}
