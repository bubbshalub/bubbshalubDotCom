import Navbar from "@/components/navbar";

export default function Scripts() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl"> {` this is the script page `} </h1>
      <h1>
        {`
        this is where i store and save things (the scripts and whatever i make), 
        i post them publicly because it's primarily easier for me,
        `}
        <br />
        {`
        however if it helps others due to accessibility, ease of fact checking, etc etc,
        then that's a nice bonus. `}
        <br />
        <br />
        {`
        hope you enjoy!
        `}
        <p>
          {`
                oh btw, if you're wondering why there's gaps, those are either abandoned projects are me just being bad at documenting-
            `}
        </p>
        <hr />
      </h1>
      <h2> scripts: </h2>
      <ul>
        <li>
          <a href="/scripts/0024-newYears" className="text-blue-400">
            {`
                0028-newYears
            `}
          </a>
        </li>
      </ul>
    </div>
  );
}
