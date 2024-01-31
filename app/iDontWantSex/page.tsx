import Navbar from "@/components/navbar";

import "./checkerGrid.css";

export default function IWantMinions() {
  const guesses = [
    "free space",
    "popular/cliche music",
    "there's a new character because sequal",
    "all was good until...",
    "minions are ~30% of the ad",
    "is hiding being bad from wifu",
    "repeating a previously done plotline",
    "hahaha fart joke (tldr potty humor)",
    "character thought to be dead is back",
    "pandering to meme culture",
    "big actor is x",
    "ends with TITLE like it's a surprise dispite being the 4th part",
    "main character is slightly different to show they have aged (but not in a way like hair or wrinkles, just a new scarf or some shit)",
    "love/attention triangle",
    "joke characters ruin any tension",
    "rapid cut away from a moment for a joke",
    "nostolgia pandering (bringing something back and showing it off for hype",
    "previous events are mostly/completely ignored minus characters being around",
    "minions screaming/slapstick at studio advertisement/banner",
    "no notiable changes to the enviornment because reasons",
    "clear toy bait (buy my marketable plushie)",
    "some previous big characters (like a lost brother) are now just missing again",
    "annoying pop culture reference (omg is that talletless hack simon coward from the x factor!!?!?!)",
    "fladerization of characters",
    "young character being obsessed with social media/self image",
  ];

  function shuffle(array: string[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  shuffle(guesses);

  let row = "";

  for (let i = 1; i <= 25; i++) {
    if (i % 5 == 0) {
      console.log("ROW:" + row);
      row = "";
    }
    row += i + guesses[i - 1];
  }

  const minionBingo = guesses.map((value) => {
    return (
      <div key={value} className="checkerGrid">
        {value}
        <input type="checkbox" />
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="text-white grid grid-cols-5">{minionBingo}</div>
    </div>
  );
}
