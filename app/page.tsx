import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="bg-slate-950 h-screen">
        <div>
          <br />
          <div className="bg-yellow-500 text-black font-bold p-8">
            <h1>
              {" "}
              please know this site is currently being reworked to add lots of
              new features and stuff. <br />{" "}
            </h1>
            <p>
              {`you will likely encounter bugs and glitches while i [vulbyte] am sorting everything out. but until then please enjoy yourself and feel free to check out my links!`}
            </p>
          </div>
          <br />
        </div>
        <div className="w-fit m-auto">
          <p> welcome to </p>
          <h1 className="">
            <span className="text-red-500">v</span>
            <span className="text-green-500">u</span>
            <span className="text-blue-500">l</span>
            <span className="text-yellow-500">b</span>
            <span className="text-pink-500">y</span>
            <span className="text-cyan-500">t</span>
            <span className="text-amber-500">e</span>
            {`'s website`}
          </h1>
        </div>
      </main>
    </div>
  );
}
