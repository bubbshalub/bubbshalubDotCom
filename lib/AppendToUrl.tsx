"use client";

export default function AppendToUrl(str: string): void {
  console.log("appending to url");
  let currentURL = window.location.href;
  window.history.replaceState(null, "vulbyte", currentURL + str);

  return;
}
