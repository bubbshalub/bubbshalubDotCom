"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';

const MissingTexture = "/lib/Missing_Texture_JE4.webp";

const charactersData = 
[
        {
            "name": "mario",
            "index": "0",
            "icon": "https://static.wikia.nocookie.net/mario/images/2/2a/MK8_Mario_icon.png",
            "value": 0,
        },
        {
            "name": "luigi",
            "index": "1",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/5/51/MK8_Luigi_Icon.png",
            "value": 0,
        },
        {
            "name": "peach",
            "index": "2",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/c/c2/MK8_Peach_Icon.png",
            "value": 0,
        },
        {
            "name": "daisy",
            "index": "3",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/3/32/MK8_Daisy_Icon.png",
            "value": 0,
        },
        {
            "name": "rosalina",
            "index": "4",
            "icon": "https://static.wikia.nocookie.net/fantendo/images/9/99/RosalinaIconMK8.png",
            "value": 0,
        },
        {
            "name": "tanooki mario",
            "index": "5",
            "icon": "https://static.wikia.nocookie.net/mario/images/f/fe/Tanooki_Mario_SM3DW.png",
            "value": 0,
        },
        {
            "name": "cat peach",
            "index": "7",
            "icon": "https://static.wikia.nocookie.net/we-are-peach/images/0/09/MKT_Cat_Peach.png",
            "value": 0,
        },
        { 
            "name": "birdo",
            "index": "8",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/f/f6/MK8D_Birdo_Icon.png",
            "value": 0,
        },
        {
            "name": "yoshi",
            "index": "10",
            "icon": "https://static.wikia.nocookie.net/fantendo/images/8/85/YoshiIconMK8.png",
            "value": 0,
        },
        {
            "name": "toad",
            "index": "11",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/4/45/MK8_Toad_Icon.png",
            "value": 0,
        },
        {
            "name": "koopa troopa",
            "index": "12",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/b/bc/MK8_Koopa_Icon.png",
            "value": 0,
        },
        {
            "name": "shy dood",
            "index": "13",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/7/7f/MK8_ShyGuy_Icon.png",
            "value": 0,
        },
        {
            "name": "lakitu",
            "index": "14",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/7/7d/MK8_Lakitu_Icon.png",
            "value": 0,
        },
        {
            "name": "toadette",
            "index": "15",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/8/8e/MK8_Toadette_Icon.png",
            "value": 0,
        },
        {
            "name": "king boo",
            "index": "16",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/2/27/King_Boo_-_Mario_Kart_Wii.PNG",
            "value": 0,
        },
        {
            "name": "petey piranha",
            "index": "17",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/6/6b/MK8D_Petey_Piranha_Icon.webp",
            "value": 0,
        },
        {
            "name": "baby mario", 
            "index": "18",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/d/d2/MK8_BabyMario_Icon.png",
            "value": 0,
        },
        {
            "name": "baby luigi", 
            "index": "19",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/a/aa/MK8_BabyLuigi_Icon.png",
            "value": 0,
        },
        {
            "name": "baby peach", 
            "index": "20",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/3/3d/MK8_BabyPeach_Icon.png",
            "value": 0,
        },
        {
            "name": "baby daisy",
            "index": "21",
            "icon": "https://static.wikia.nocookie.net/fantendo/images/3/31/BabyDaisyIconMK8.png",
            "value": 0,
        },
        {
            "name": "baby rosalina",
            "index": "22",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/0/09/MK8_BabyRosalina_Icon.png",
            "value": 0,
        },
        {
            "name": "metal mario", 
            "index": "23",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/f/f9/120px-MK8_MMario_Icon.png",
            "value": 0,
        },
        {
            "name": "metal peach", 
            "index": "24",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/0/0d/MK8_PGPeach_Icon.png",
            "value": 0,
        },
        {
            "name": "wiggler", 
            "index": "24",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/5/5e/MK8D_Wiggler_Icon.webp",
            "value": 0,
        },
        {
            "name": "wario",
            "index": "25",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/c/c2/MK8_Wario_Icon.png",
            "value": 0,
        },
        {
            "name": "waluigi",
            "index": "26",
            "icon": "https://i.redd.it/n3j7iuu8sps41.jpg",
            "value": 0,
        },
        {
            "name": "donkey kong",
            "index": "27",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/0/08/MK8_DKong_Icon.png",
            "value": 0,
        },
        {
            "name": "bowser", 
            "index": "28",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/4/47/MK8_Bowser_Icon.png",
            "value": 0,
        },
        {
            "name": "dry bonez",
            "index": "29",
            "icon": "https://static.wikia.nocookie.net/fantendo/images/3/3f/MK8DX_Dry_Bones_Icon.png",
            "value": 0,
        },
        {
            "name": "bowser jr", 
            "index": "30",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/0/0d/Bowser_Jr._MK8Deluxe.png",
            "value": 0,
        },
        {
            "name": "dry bowser",
            "index": "31",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/2/29/MK8_Dry_Bowser_Icon.png",
            "value": 0,
        },
        {
            "name": "kamek",
            "index": "32",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/8/8b/Unused_Kamek_Emblem_%28Mario_Kart_8%29.webp",
            "value": 0,
        },
        {
            "name": "lemmy", 
            "index": "33",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/f/fc/MK8_Lemmy_Icon.png",
            "value": 0,
        },
        {
            "name": "larry", 
            "index": "34",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/c/c2/MK8_Larry_Icon.png",
            "value": 0,
        },
        {
            "name": "wendy",
            "index": "35",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/d/d9/MK8_Wendy_Icon.png",
            "value": 0,
        },
        {
            "name": "ludwig", 
            "index": "36",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/a/a8/MK8_Ludwig_Icon.png",
            "value": 0,
        },
        {
            "name": "iggy",
            "index": "37",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/d/dd/MK8_Iggy_Icon.png",
            "value": 0,
        },
        {
            "name": "roy", 
            "index": "38",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/3/3e/MK8_Roy_Icon.png",
            "value": 0,
        },
        {
            "name": "morton",
            "index": "39",
            "icon": "https://static.wikia.nocookie.net/mario/images/7/72/MK8_Morton_Icon.png",
            "value": 0,
        },
        {
            "name": "peachette",
            "index": "40",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/7/78/Peachette_SMBUD.png",
            "value": 0,
        },
        {
            "name": "inklings",
            "index": "41",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/b/b9/MK8DX_Female_Inkling_Icon.png",
            "value": 0,
        },
        {
            "name": "link",
            "index": "42",
            "icon": "https://www.zeldadungeon.net/wiki/images/thumb/0/0b/Link_-_MK8_icon.png/120px-Link_-_MK8_icon.png",
            "value": 0,
        },
        {
            "name": "villager", 
            "index": "43",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/1/16/VillagerMale-Icon-MK8.png",
            "value": 0,
        },
        {
            "name": "✨isabell✨", 
            "index": "44",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/2/20/MK8_Isabelle_Icon.png",
            "value": 0,
        },
        {
            "name": "diddy kong", 
            "index": "45",
            "icon": "https://static.wikia.nocookie.net/mariokart/images/8/82/DiddyTour.png",
            "value": 0,
        },
        {
            "name": "funky kong", 
            "index": "46",
            "icon": "https://www.seekpng.com/png/full/189-1890436_funky-funky-kong-mario-kart-wii.png",
            "value": 0,
        },
        {
            "name": "woman", 
            "index": "47",
            "icon": "https://static.wikia.nocookie.net/mk-tour/images/1/10/MKT_Icon_PaulineRose.png",
            "value": 0,
        },
        {
            "name": "mii", 
            "index": "48",
            "icon": "https://static.wikia.nocookie.net/supersmashbrosultimate/images/b/b1/Mii-0.png",
            "value": 0,
        },
    ];

const domain = "vulbyte.com";

export default function MostPopularMK8Character() {
  const [characters, setCharacters] = useState(charactersData);

  useEffect(() => {
    initUrlData();
  }, []);

  function incrementValue(index) {
    setCharacters((prevCharacters) => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].value += 1;
      updateUrl();
      return updatedCharacters;
    });
  }

  function decrementValue(index:number) {
    setCharacters((prevCharacters) => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].value -= 1;
      updateUrl();
      return updatedCharacters;
    });
  }

  function initUrlData() {
    if (document.URL.includes("?")) {
      for (let i = 0; i < charactersData.length; i++) {
        let index = i;
        let value = charactersData[i].value;
        let url = document.URL;
        let query = index + "=";
        let indexOfSub = url.indexOf(query);
        let charValueRange = [];
        if (index === 47) {
          charValueRange = [
            url.indexOf("=", indexOfSub) + 1,
            url.length,
          ];
        } else {
          charValueRange = [
            url.indexOf("=", indexOfSub) + 1,
            url.indexOf("&", indexOfSub),
          ];
        }
        let restoredValue = parseInt(
          url.substring(charValueRange[0], charValueRange[1]).toString()
        );
        charactersData[i].value = restoredValue;
      }
    }
  }

  function updateUrl() {
    let urlData = "?";
    characters.forEach((character, index) => {
      urlData = urlData + "&" + `${index}=${character.value}`;
    });
    window.history.pushState("", "", urlData);
    console.log("urlData:\n" + urlData);
  }

  return (
    <div>
        <Navbar />
      <h1>Which Mk8 Character Is The Most Popular?</h1>
      <div
        className="characterContainer"
        style={{
          display: 'grid',
          flexDirection: 'row',
          gridTemplateColumns: 'repeat(auto-fit, minmax(64px, 128px))',
          maxWidth: '100%',
        }}
      >
        {characters.map(({ name, icon, value }, index) => (
          <div
            key={name}
            id={name}
            className="generatedCharacter"
            style={{
              margin: 'auto',
              paddingTop: '1rem',
            }}
          >
            <div>
              <img
                src={icon}
                alt={`icon of ${name}`}
                style={{
                  height: '6rem',
                  width: '100%',
                  margin: 'auto',
                }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <h4
                className="name"
                style={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  width: '100%',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                {name}
              </h4>
              <div
                style={{
                  display: 'flex',
                }}
              >
                <div
                  className="incrementButton minus"
                  role="button"
                  tabIndex="0"
                  onClick={() => decrementValue(index)}
                  onKeyPress={() => {}}
                >
                  -
                </div>
                <div
                  style={{
                    margin: 'auto',
                    width: '2em',
                    textAlign: 'center',
                  }}
                >
                  {value}
                </div>
                <div
                  className="incrementButton plus"
                  role="button"
                  onClick={() => incrementValue(index)}
                  tabIndex="0"
                  onKeyPress={() => {}}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p>
          If you want to save your data, just copy the page link! It contains the data you entered.
        </p>
      </div>
    </div>
  );
}

