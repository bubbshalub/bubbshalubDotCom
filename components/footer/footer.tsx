import Image from "next/image";

import vulbytesLogo from "@/lib/vulbytesLogo.svg";
import vulbytesWordmark from "@/lib/vulbyteWordmark.svg";

export default function Footer() {
  return (
    <footer
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(6rem, 1fr))",
      }}
    >
      <div className="h-[100%]">
        <ul
          style={{ textDecoration: "none", listStyleType: "none" }}
          className="flex flex-col justify-between h-[100%]"
        >
          <li>
            <h6>contact</h6>
            <a href="mailto:vulbyt3@gmail.com">vulbyt3@gmail.com</a>
          </li>
          <li>
            <a href="twitter.com/vulbyte"> twitter</a>
          </li>
          <li>
            <a href="youtube.com/vulbyte"> youtube</a>
          </li>
        </ul>
      </div>
      <div style={{ height: "100%" }}>
        <Image src={vulbytesLogo} alt="vulbytes logo" />
        <Image src={vulbytesWordmark} alt="vulbytes wordmark" />
      </div>
      <div style={{ height: "100px" }}>
        <h6>other stuff</h6>
        <ul className="flex flex-col justify-between h-[100%] ml-auto mr-0 ">
          <li>{`we collect no user data at this time`}</li>
          <br />
          <li>{`the website comes as is`}</li>
          <br />
          <li>{`here is our discord server policy`}</li>
          <br />
          <li>{`all rights reserved`}</li>
          <br />
          <li>{`have a good day`}</li>
          <br />
        </ul>
      </div>
    </footer>
  );
}
