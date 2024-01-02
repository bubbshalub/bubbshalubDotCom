"use client";

export default function UpdateNavbarBackgroundSize(
  navbarRef: any,
  setNavbarBgSize: any,
) {
  console.log("UPDATING NAVBAR BG SIZE");

  // Check if the ref is available
  console.log("checking if navbarRef is or is not null");
  if (navbarRef.current !== null) {
    // Get the bounding box of the navbar
    console.log("setting navBoundingBox");
    const navbarBoundingBox = navbarRef.current.getBoundingClientRect();

    // Update the navbar background size
    console.log("setting sizes");
    setNavbarBgSize([
      navbarBoundingBox.top,
      navbarBoundingBox.left,
      navbarBoundingBox.right,
      navbarBoundingBox.bottom,
    ]);

    console.log("Navbar Bounding Box:", navbarBoundingBox);
  } else {
    console.warn("Navbar ref is null or undefined. ");
  }
}
