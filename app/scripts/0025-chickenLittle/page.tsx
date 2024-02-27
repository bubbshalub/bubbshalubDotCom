//import "./chickenLittle.css";
import Navbar from "@/components/navbar";

const textShadowValues = [
  "#ff0 0.08rem 0.08rem 0.03rem",
  "#ff0 -0.08rem 0.08rem 0.03rem",
  "#ff0 0.08rem -0.08rem 0.03rem",
  "#ff0 -0.08rem -0.08rem 0.03rem",

  "#ff0 0.0rem 0.1rem 0.03rem",
  "#ff0 0.1rem 0.0rem 0.03rem",
  "#ff0 0.0rem -0.1rem 0.03rem",
  "#ff0 -0.1rem 0.0rem 0.0rem",
];

const cl = "chimgen little: the game";

export default function chickenLittle() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[60rem] m-auto">
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/339040/header.jpg?t=1571775013"
          alt="chicken little cover from steam"
          style={{ width: "100%" }}
        />
        <div style={{ position: "relative" }}>
          <h1
            style={{
              color: "transparent",
              position: "absolute",
              textShadow: textShadowValues.join(", "),
            }}
          >
            {cl}
          </h1>
          <h1
            style={{
              backgroundImage: "linear-gradient(-5deg, #ff0000, #ff5500)",
              backgroundClip: "text",
              color: "transparent",
              position: "absolute",
            }}
          >
            {cl}
          </h1>
        </div>
        <br />
        <br />
        <div>
          <h2> the lost tier of games </h2>
          <sub> vulbyte, 2024/02/25 </sub>
        </div>
        <div>
          <h3> Introduction:</h3>
          <h4> Hook </h4>
          <p>{`chicken little is a better game then most modern titles`}</p>
          <h4> Context </h4>
          <p>{`
            with the current state of gaming and the churning of content most game studios are going through constantly, somehow are outdone by this tie in game which is chicken little for PC, which you can somehow still buy on steam
        `}</p>
          <iframe
            className=""
            style={{
              aspectRatio: "646 / 190",
              height: "190px",
              maxHeight: "100%",
              width: "646px",
              maxWidth: "100%",
              margin: "auto",
            }}
            src="https://store.steampowered.com/widget/339040/"
          ></iframe>
          <sub className="text-zinc-400 m-auto">{`
          please note, if the above link is broken that means the game has been
          removed from steam 
          `}</sub>
        </div>
        <div>
          <h3> Description of the Subject: </h3>
          <h4> Overview </h4>
          <p>
            {" "}
            {`
            before we get too into the weeds, let's actually break down what this game is.
        `}{" "}
            <br />
            {`chicken little`}
            <b> {`the game`} </b>
            {`
            is a game which- 
            nonono, you know, imm a just pull an illuminautti [`}
            <a href="">context</a>
            {`]and read the wiki
          `}
          </p>
          <hr />
          <p>
            {`
            Chicken Little is a 2005 action-adventure game developed by Avalanche Software for GameCube, Microsoft Windows, PlayStation 2 and Xbox and by Artificial Mind and Movement for the Game Boy Advance; both were published by Buena Vista Games. Based on the 2005 film Chicken Little, they were released in October 2005.
            Plot
            `}
            <br />
            <br />
            {`
            The game follows the same plot as the film Chicken Little. The game also features the original actors reprising their roles in the game, except for Joan Cusack (Abby) and Don Knotts (Mayor Turkey Lurkey) (who are replaced by Pamela Adlon and Jeff Bennett respectively).
            Gameplay
            `}
            <br />
            <br />
            {`
            Chicken Little is an action-adventure game. The player takes control of Chicken Little; occasionally the player is able to play as Abby, Runt, and Fish Out of Water in six different levels and Mayor Turkey Lurkey in one level. The player has to collect five baseball cards throughout each level of the game, the cards unlock special bonus mini-games in multiplayer mode.[2] 
        `}
          </p>
          <cite>
            {`from:`}
            <a href="https://en.wikipedia.org/wiki/Chicken_Little_(video_game)">
              {`https://en.wikipedia.org/wiki/Chicken_Little_(video_game)`}{" "}
            </a>
          </cite>
          <p>{`
        and that's it, that's the whole wikipedia, holy sh*t no one cared about this game! except for me and you're about to hear me rant about it!
        `}</p>
          <h4> Specifications </h4>
          {`
            according to the above it was realeased on most major platforms in 2005 and received 6-7 out of 10, with the game being rated the highest on pc, and the lowest on ps2, the same console i attempted to beat it as a child. 
        `}
        </div>
        <div>
          <h3> Personal Experience or Opinion: </h3>
          <h4> First Impressions </h4>
          <p>{`
            my first experianc with this game was back when i was like 12 or so. 
                my parents were nice enough to afford me a ps2 slim, which i had a few games for.

                it was so long ago i'm not certain where we got it from, i believe it was either a walmart discount bin where we got it for like 5$.
        `}</p>
          <h4> Personal Experience </h4>
          <p>{`
            after opening up the packaging up i remember eagerly putting it into the ps2 and eagerly starting it jaws agape on the old black crt, the amazing title screen of "chicken little" came up on the screen and i stared thinking this was the coolest thing
        `}</p>
          <aside>
            {`
            which was honestly funny because as a kid my parents drove around a lot, and i had chicken little in one of those car rest dvd players, but the drives were at most roughly an hour 1h 21m film
          `}
            <cite>
              [
              <a href="https://en.wikipedia.org/wiki/Chicken_Little_(2005_film)">
                https://en.wikipedia.org/wiki/Chicken_Little_(2005_film)
              </a>
              ]
            </cite>
            {`
                so i remember only ever making it as far the scene where big click would burst out of the town hall, only for my parent who was driving me to turn off the car even though i already knew how the movie ended, 
                it was always devistating
            `}
          </aside>
        </div>
        <div>
          <h3> Pros and Cons: </h3>
          <h4> Strengths (Pros) </h4>
          <h4> Weaknesses (Cons) </h4>
        </div>
        <div>
          <h3> Comparisons: </h3>
          <h4> Benchmarking </h4>
          <h4> Alternatives </h4>
        </div>
        <div>
          <h3> Critical Analysis: </h3>
          <h4> Quality </h4>
          <h4> Impact </h4>
        </div>
        <div>
          <h3> Audience Considerations: </h3>
          <h4> Target Audience </h4>
          <h4> Accessibility </h4>
        </div>
        <div>
          <h3> Supporting Evidence: </h3>
          <h4> Examples </h4>
          <h4> Quotes </h4>
        </div>
        <div>
          <h3> Conclusion: </h3>
          <h4>Summary</h4>
          <h4>Recommendation</h4>
        </div>
        <div>
          <h3>Closing Thoughts:</h3>
          <h4>Final Impressions</h4>
          <h4> Call to Action</h4>
        </div>
      </div>
    </div>
  );
}
