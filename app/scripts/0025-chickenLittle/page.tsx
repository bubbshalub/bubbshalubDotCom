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
            <a
              href="https://youtu.be/yDp3cB5fHXQ?si=kgm6JgL9T76-2Wg0&t=2579"
              target="_blank"
            >
              context
            </a>
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
            <a
              href="https://en.wikipedia.org/wiki/Chicken_Little_(video_game)"
              target="_blank"
            >
              {`https://en.wikipedia.org/wiki/Chicken_Little_(video_game)`}
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
            my first experience with this game was back when i was like 12 or so. 
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
              <a
                href="https://en.wikipedia.org/wiki/Chicken_Little_(2005_film)"
                target="_blank"
              >
                https://en.wikipedia.org/wiki/Chicken_Little_(2005_film)
              </a>
              ]
            </cite>
            {`
                so i remember only ever making it as far the scene where big click would burst out of the town hall, only for my parent who was driving me to turn off the car even though i already knew how the movie ended, 
                it was always devastating
            `}
          </aside>
          <p>
            {`
                recently, on a whim we have noticed that me and bubbs have discovered that chicken little is somehow still available on steam. and this isn't a cheap remake or some knock off or even a port, this is the actual native version, and guess what?
                it runs fine, flawless even!
            `}
          </p>
        </div>
        <div>
          <h3> Pros and Cons: </h3>
          <h4> Strengths (Pros) </h4>
          <ul>
            <li>
              <h5> the game is fun? </h5>
              <p>{`
                one thing that was genuinely shocking about this game for me was that this game was genuinely fun genuinely! 
              `}</p>
            </li>
            <li>
              <h5> stable </h5>
              <p>{`
                this game is schockingly solid, relitively bug less, and is very consistent, expecally compared to the current market of games is (cyberpunk footage here)
                `}</p>
            </li>
            <li>
              <p>{`
                it also had a nice range of mechanics that made the game feel a lot less repetitive and interesting
                `}</p>
            </li>
          </ul>
          <h4> Weaknesses (Cons) </h4>
          <ul>
            <li>
              <h5> the graphics are dated </h5>
              <p>{`
                now i don't want to sound like a dingle, but i will say the graphics are rather dated. and this isn't a "i don't like the style" way, but more a "this was published in 2005 and i can see it". that being said i don't want to make it seem like i'm hating on them, given my limited knowledge of graphics programming, and how  
                `}</p>
              <cite>
                <a
                  href="https://en.wikipedia.org/wiki/PlayStation_2_technical_specifications#:~:text=The%20sixth%2Dgeneration%20hardware%20of,299%20MHz%20in%20later%20consoles)."
                  target="_blank"
                >
                  {`
                the ps2 had a clockspeed of ~295MHz and about 32mb of ram
                  `}
                </a>
              </cite>
              <p>{`
                this is extremely understandable. can you even download a phone app that isn't at least 30mb now? at least one that isn't a "lite" version or a glorified web wrapper
              `}</p>
            </li>
            <li>
              <h5>
                the cuts between the story and gameplay are rather jarring
              </h5>
              <p>{`
                speaking of graphics i find it rather jarring how the cuts between the movie, and the game are. 
                i'm not trying to be rude when i say this, but when i play the game, i can get immersed in the less ideal graphics. 
                the issue though is then i have these cuts between the movie and the in game animations it is VERY jarring to me, and makes me commonly comment how stark i feel the difference is.
                again, i think the game looks great but with the contrast in how the a prerendered movie is vs an either real time or in game cinematic is, it's rather jarring and i sorta with they would have done the whole thing in game. but i understand budget and time constrains probably wouldn't allow that.
              `}</p>
            </li>
            <li>
              <h5> the game has its repetitive moments </h5>
              <p>{`
                this is a thing that is rather rad to say, but the game really felt like crunch was hitting near the end, as the finale platformer is effectively a repeat of only a few levels earlier.
                which really made the last level feel much more like a victory lap then a proper level.
              `}</p>
            </li>
            <li>
              <h5> the game changes the story of chicken little </h5>
              <p>{`
                another issue i have with the game is they change a good chunk of the story and how it goes, and i'm generally not opposed to things being changed; however in this case it feels like it was to simply hold the game together and add more levels. and i completely understand why they did this, however but i don't personally think the story benefits from the changes, and some of the major off branches from the story are some of my more tedious and less favorable levels.
              `}</p>
            </li>
          </ul>
        </div>
        {/*<div>
          <h3> Comparisons: </h3>
          <h4> Benchmarking </h4>
          <h4> Alternatives </h4>
        </div>*/}
        <div>
          <h3> Critical Analysis: </h3>
          <p>{``}</p>
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
