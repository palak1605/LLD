import { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";

const CHAT_MESSAGES_LIMIT = 100;

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function generateRandomNames() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const fetchData = () => {
    // Make API call and get Data

    const data = [
      {
        name: generateRandomNames(),
        photo:
          "https://yt3.ggpht.com/WrjDeIWr2pmRdCKFuEDfvkovr0O_o7gyfT_J_AMJjFk5KR9HGQVirOP0DeimyAoBUHRfH79X=s68-c-k-c0x00ffffff-no-rj",
        message:
          "This is a live streaming chat video in Namaste Frontend System Design series.",
      },
    ];

    setMessages((messages) => {
      let newMessageList = [...data, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessageList;
    });
  };

  useEffect(() => {
    const s = setInterval(fetchData, 1000);

    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "600px",
        border: "1px solid black",
        margin: "20px",
        overflowY: "scroll",
        flexDirection: "column-reverse",
      }}
    >
      {messages.map((message, i) => (
        <ChatMessage key={i} {...message} />
      ))}
    </div>
  );
};
export default ChatWindow;