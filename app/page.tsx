// TODO: seperate scripts into an "entertainment" section that contains:
// scripts, music, etc etc

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="bg-slate-950 h-screen">
        <div>
          <br />
          <div className="warning bg-yellow-500 text-white font-bold p-8">
            <h6>
              {`please know this site is currently being reworked to add lots of
              new features and stuff.`}
              <br />
            </h6>
            <p>
              {`you ]ill likely encounter bugs and glitches while i [vulbyte] am sorting everything out. but until then please enjoy yourself and feel free to check out my `}
              <a className="text-teal" href="/links">
                {`links!`}
              </a>
              <br />
              {`or poke around`}
            </p>
          </div>
          <br />
        </div>
        <div className="w-fit m-auto">
          <p> welcome to </p>
          <h1 className="text-white">
            <span className="text-[#ff0000]">v</span>
            <span className="text-[#ffff00]">u</span>
            <span className="text-[#00ff00]">l</span>
            <span className="text-[#00ffff]">b</span>
            <span className="text-[#0000ff]">y</span>
            <span className="text-[#ff00ff]">t</span>
            <span className="text-[#ff0000]">e</span>
            {`'s website`}
          </h1>
          <br />
          {`
                the website is under heavy maintenance right now. but until then feel free look around
            `}
        </div>
      </main>
    </div>
  );
}
