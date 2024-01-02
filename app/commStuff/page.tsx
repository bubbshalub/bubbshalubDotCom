import Navbar from "@/components/navbar";

export default function CommStuff() {
  return (
    <div>
      <Navbar />
      <br />
      <br />

      <h1 className="bg-red-500 text-3xl">this is the comm page</h1>

      <h2 className="text-2xl"> form </h2>

      <br />
      <br />

      <div>
        <h3 className="text-xl"> contact info </h3>
        <div>
          <h6 className="text-gray-500">
            {" "}
            in the username slot, whatever you put is how i will refer to you{" "}
          </h6>
          <br />
          <br />

          <input type="email" placeholder="example@server.com" />
          <br />
          <input type="text" placeholder="carrots" />
          <br />
          <input type="text" placeholder="Judy" />
          <br />
          <input type="text" placeholder="H." />
          <br />
          <input type="text" placeholder="Hopps" />
          <br />
          <br />
        </div>

        <h3 className="text-xl"> messaging platform </h3>
        <div>
          <h6 className="text-gray-500">
            please select at least 2 for backup or if one service is down
          </h6>
          <form id="messaging platform">
            <input type="checkbox" value="discord" />
            <label for="discord"> discord </label>
            <br />
            <input type="checkbox" value="telegram" />
            <label for="telegram"> telegram </label>
            <br />
            <input type="checkbox" value="other" />
            <label for="other"> other </label>
            <br />
          </form>
          <br />
          <br />
        </div>

        <h3> character(s) info</h3>
        <div>
          <h6>
            {" "}
            this is general, thing, more questions will be enquired later{" "}
          </h6>
          <div>
            <p> how many characters? </p>
            <input type="range" min="0" max="10" />
          </div>
        </div>
      </div>

      <div>
        <h3> commission details</h3>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
