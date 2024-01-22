/*
 *  note:
 *  rework the whole layout
 *  remove steam and tumbr from the main links,
 *  merge them into your main links,
 *  hide everything else into a dropdown,
 *  move the contact section into a footer,
 */

"use client";

import "./links.css";

import React from "react";
//import mailIcon from '$lib/mailIcon.svg';
//import vulbytesIcon from './lib/1614160340.iminsert_000,042_-_thatlazyrat.jpg';

const links = [
  //{{{1
  // ... (same as in Svelte code)
  // Active links
  {
    name: "Discord Server",
    link: "https://discord.gg/yyFmxV2uFC",
    icon: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg",
    status: "active",
    note: "",
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/artist/6FjeqS3Sxcd33egUhLoG3P",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png",
    status: "active",
    note: "",
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com/vulbyte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png",
    status: "active",
    note: "",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@vulbyte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
    status: "active",
    note: "",
  },
  // monitored links
  {
    name: "ArtStation",
    link: "https://www.artstation.com/vulbyte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cib-artstation_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Cib-artstation_%28CoreUI_Icons_v1.0.0%29.svg.png",
    status: "monitored",
    note: "",
  },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/vulbyte.bsky.social",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bluesky_butterfly-logo.svg/1920px-Bluesky_butterfly-logo.svg.png",
    status: "monitored",
    note: "",
  },
  {
    name: "Furaffinity",
    link: "https://www.furaffinity.net/user/iminsert",
    icon: "https://user-images.githubusercontent.com/73164889/117507463-efde5e80-af7e-11eb-8886-5aeb3ce43778.png",
    status: "monitored",
    note: "",
  },
  {
    name: "GitHub",
    link: "https://github.com/vulbyte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
    status: "monitored",
    note: "",
  },
  {
    name: "Steam",
    link: "https://steamcommunity.com/id/vulbyte/",
    icon: "https://cdn.icon-icons.com/icons2/2428/PNG/512/steam_black_logo_icon_147078.png",
    status: "monitored",
    note: "",
  },
  {
    name: "Tumblr",
    link: "https://www.tumblr.com/vulbyte",
    icon: "https://www.iconpacks.net/icons/2/free-tumblr-icon-2169-thumb.png",
    status: "monitored",
    note: "",
  },
  // inactive links
  {
    name: "Facebook",
    link: "https://www.facebook.com/vulbyte/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png",
    status: "inactive",
    note: "",
  },
  {
    name: "GameJolt",
    link: "https://gamejolt.com/@iminsert",
    icon: "https://thumbnails.pcgamingwiki.com/3/37/Game_Jolt_Logo.svg/300px-Game_Jolt_Logo.svg.png",
    status: "inactive",
    note: "",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vulbyte/",
    icon: "https://static.wikia.nocookie.net/logopedia/images/2/2f/Instagram_2016.svg/",
    status: "inactive",
    note: "",
  },
  {
    name: "itch.io",
    link: "https://iminsert.itch.io",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cib-itch-io_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Cib-itch-io_%28CoreUI_Icons_v1.0.0%29.svg.png",
    status: "inactive",
    note: "",
  },
  {
    name: "Ko-fi",
    link: "https://ko-fi.com/insert",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Cib-ko-fi_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Cib-ko-fi_%28CoreUI_Icons_v1.0.0%29.svg.png",
    status: "inactive",
    note: "",
  },
  {
    name: "Newgrounds",
    link: "https://iminsert.newgrounds.com/",
    icon: "https://static.wikia.nocookie.net/mcleodgaming/images/f/f2/Newgrounds_Tank.png",
    status: "inactive",
    note: "",
  },
  {
    name: "Patreon",
    link: "https://www.patreon.com/vulbyte",
    icon: "https://c15.patreon.com/fhd_Patreon_Symbol_6fff9723d3.png",
    status: "inactive",
    note: "",
  },
  {
    name: "Picarto",
    link: "https://picarto.tv/vulbyte/profile",
    icon: "https://avatars.githubusercontent.com/u/21276730?s=200&v=4",
    status: "inactive",
    note: "",
  },
  {
    name: "#f*ckSpez",
    link: "https://www.reddit.com",
    icon: "https://static-00.iconduck.com/assets.00/reddit-logo-icon-512x512-jv3e2p8i.png",
    status: "inactive",
    note: "",
  },
  {
    name: "Sketchfab",
    link: "https://sketchfab.com/vulbyte",
    icon: "https://static.sketchfab.com/img/press/logos/sketchfab-logo-black.png",
    status: "inactive",
    note: "",
  },
  {
    name: "Soundcloud",
    link: "https://soundcloud.com/vulbyte",
    icon: "https://d21buns5ku92am.cloudfront.net/26628/images/419675-sc-logo-cloud-black%20%281%29-853a4f-medium-1645807039.png",
    status: "inactive",
    note: "",
  },
  {
    name: "Threads",
    link: "https://www.threads.net/@vulbyte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Threads_%28app%29_logo.svg/2048px-Threads_%28app%29_logo.svg.png",
    status: "inactive",
    note: "",
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@vulbyte",
    icon: "https://www.svgrepo.com/show/333611/tiktok.svg",
    status: "inactive",
    note: "",
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv/vulbyte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Twitch_Glitch_Logo_Black.svg/878px-Twitch_Glitch_Logo_Black.svg.png",
    status: "inactive",
    note: "",
  },
  // contact links
  {
    name: "Discord",
    link: "https://discord.gg/ryX4UgaS",
    icon: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg",
    status: "contact",
    note: "",
  },
  {
    name: "Email",
    link: "mailto:insertopen@gmail.com",
    //'icon': mailIcon,
    status: "contact",
    note: "",
  },
  {
    name: "Telegram",
    link: "https://t.me/vulbyte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Telegram_X_2019_Logo.svg/2048px-Telegram_X_2019_Logo.svg.png",
    status: "contact",
    note: "",
  },
  // backup
  //{
  //  'name': '',
  //  'link': '',
  //  'icon': '',
  //  'status': '',
  //  'note': '',
  //},
  //}}}1
];

function ActiveLinks() {
  const activeLinks = links.filter((link) => link.status == "active");

  return (
    <div>
      <h2> Active Links </h2>
      <div id="activeLinks" className="linkContainer">
        {activeLinks.map((link, index) => (
          <a href={link.link} target="_blank">
            <div
              id={link.name}
              className="
              align-middle
              bg-zinc-900 
              flex 
              flex-row 
              font-bold
              generatedLink 
              h-16 
              justify-center 
              m-auto 
              mt-3 
              mb-3 
              m-h-6 
              p-1 
              rounded-full 
              text-white 
              w-80 
              "
              style={{
                backgroundImage: "linear-gradient(-45deg, #222, #333)",
                border: "2px solid #aaa",
              }}
            >
              <img src={link.icon} alt="" className="m-h-4 m-1" />
              <p className="align-middle m-auto"> {link.name} </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function MonitoredLinks() {
  const monitoredLinks = links.filter((link) => link.status == "monitored");

  return (
    <div>
      <h2> Monitored Links </h2>
      {monitoredLinks.map((link, index) => (
        <div id="monitoredLinks" className="linkContainer">
          <a href={link.link} target="_blank">
            <div
              id={link.name}
              className="
              align-middle
              bg-zinc-900 
              flex 
              flex-row 
              font-bold
              generatedLink 
              h-16 
              justify-evenly
              m-auto 
              mt-3 
              mb-3 
              m-h-6 
              p-1 
              rounded-md 
              text-white 
              w-80 
              "
              style={{
                backgroundImage: "linear-gradient(-45deg, #222, #333",
              }}
            >
              <img
                src={link.icon}
                alt=""
                style={{ filter: "invert(1) brightness(1000)" }}
                className="h-12 w-auto"
              />
              <p> {link.name} </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

function InactiveLinks() {
  const inactiveLinks = links.filter((link) => link.status == "inactive");

  return (
    <div>
      <h2> Inactive Links </h2>
      <p>
        these are all links that are offically mine, but are not active. if you
        wish to check them out feel free! but please don't expect a reply or any
        direct engaugement from me as i'm likely just posting via an API
      </p>
      <div>
        <div
          id="inactiveLinks"
          className="linkContainer
      grid"
          style={{
            display: "grid",
            gap: "1em",
            gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
            margin: "auto",
          }}
        >
          {inactiveLinks.map((link, index) => (
            <a
              href={link.link}
              target="_blank"
              className="w-32"
              style={{
                aspectRatio: "auto",
                display: "grid",
              }}
            >
              <div
                id={link.name}
                className="
                  align-middle
                  bg-zinc-900 
                  flex 
                  flex-col
                  font-bold
                  generatedLink 
                  justify-center 
                  h-32
                  p-1 
                  rounded-md 
                  text-white 
                  w-32
                "
                style={{
                  backgroundImage: "linear-gradient(-45deg, #111, #222)",
                  borderRadius: "1rem",
                  padding: "0px",
                  margin: "auto",
                }}
              >
                <img
                  src={link.icon}
                  alt=""
                  className="aspect-auto h-8 w-8 ml-auto mr-auto"
                  style={{
                    filter: "invert(1) brightness(100)",
                  }}
                />
                <p> {link.name} </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactLinks() {
  const contactLinks = links.filter((link) => link.status == "contact");
  return (
    <div id="contactLinks" className="linkContainer">
      <h2> contact links </h2>
      <p className="text-left">
        please do not use these to say hi! i appreciate you wanting to do so,
        but if you want to do so please use my discord server as i try to keep
        my dms clear!
      </p>
      {contactLinks.map((link, index) => (
        <a href={link.link} target="_blank" className="p-3">
          <div
            id={link.name}
            className="
          bg-zinc-900 
          flex
          flex-col
          generatedLink
          h-32
          max-h-32
          max-w-32
          m-auto
          p-6
          rounded-full
          w-96
          "
          >
            <img src={link.icon} alt="" className="h-16 w-16 m-auto" />
            <p> {link.name} </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function LinksPage() {
  return (
    <div id="linksPage" className="m-auto text-center">
      <br />
      <br />
      <div
        id="iconContainer"
        className="
            m-h-2.5 
            m-w-3xl 
            m-w-5xl 
            m-auto
            "
      >
        <img
          src="{vulbytesIcon}"
          alt="icon of vulbyte"
          className="rounded-full m-h-10 m-w-xl text-center m-auto"
        />
      </div>
      <h1>
        <span
          style={{
            color: "transparent",
            backgroundClip: "text",
            backgroundImage: "linear-gradient(-25deg, #f0f, #ff0)",
          }}
        >
          hi
        </span>
      </h1>
      <p className="max-w-xl m-auto text-center">
        wishing you all the best, Vulbyte
      </p>

      <div className="max-w-4xl">
        <ActiveLinks />
        <hr className="opacity-0" />

        <MonitoredLinks />
        <hr className="opacity-0" />

        <InactiveLinks />
        <hr className="opacity-0" />

        <ContactLinks />
        <hr className="opacity-0" />
      </div>
    </div>
  );
}
