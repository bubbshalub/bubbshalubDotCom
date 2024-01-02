export default async function GetDate(returnType: string): Promise<string> {
  console.log("running: GetDate();");
  try {
    const response = await fetch("http://worldclockapi.com/api/json/utc/now");
    if (!response.ok) {
      throw new Error("date call failed");
    }
    let result = await response.json();

    let returnVal: string;
    let mediary: any;

    switch (returnType.toLowerCase()) {
      case "year":
      case "y":
        mediary = result.currentDateTime.split("T")[0];
        console.log(`GetDate(${returnType}); `, mediary);
        returnVal = mediary.split("-")[0];
        break;
      case "month":
      case "m":
        console.log(
          `GetDate(${returnType}); `,
          (mediary = result.currentDateTime.split("T")[0]).split("-")[1],
        );
        returnVal = mediary.split("-")[1];
        break;
      case "day":
      case "d":
        console.log(
          `GetDate(${returnType}); `,
          (mediary = result.currentDateTime.split("T")[0]).split("-")[2],
        );
        returnVal = mediary.split("-")[2];
        break;
      case "ymd":
      case "year month day":
      case "yearmonthday":
        console.log(
          `GetDate(${returnType}); `,
          (mediary = result.currentDateTime.split("T")[0]),
        );
        returnVal = mediary;
        break;
      case "default":
      default:
        returnVal = "null";
        break;
    }
    return returnVal;
  } catch (error) {
    console.error("error getting date: ", error);
    return "0";
  }
}
