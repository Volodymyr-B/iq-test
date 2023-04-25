import image1 from "../assets/images/test-img1.png";
import image2 from "../assets/images/test-img2.png";
import image3 from "../assets/images/test-img3.png";

export default [
  {
    id: 1,
    type: "list",
    question: "Choose your gender:",
    options: ["Male", "Female"],
  },
  {
    id: 2,
    type: "list",
    question: "Choose your age:",
    options: ["18", "18-28", "29-35", "36+"],
  },
  {
    id: 3,
    type: "list",
    question: "Remove the excess word:",
    options: ["House", "Hut", "Bungalow", "Bench", "Cottage"],
  },
  {
    id: 4,
    type: "list",
    question: "Continue the number line: 18 20 24 32",
    options: ["62", "48", "74", "57", "60", "77"],
  },
  {
    id: 5,
    type: "visual",
    question: "Choose preferred color:",
    options: [
      "#A8A8A8",
      "#0000A9",
      "#00A701",
      "#F60100",
      "#FDFF19",
      "#A95403",
      "#000000",
      "#850068",
      "#46B2AC",
    ],
  },
  {
    id: 6,
    type: "visual",
    question: "Rest few seconds and choose color again:",
    options: [
      "#A8A8A8",
      "#46B2AC",
      "#A95403",
      "#00A701",
      "#000000",
      "#F60100",
      "#850068",
      "#FDFF19",
      "#0000A9",
    ],
  },
  {
    id: 7,
    type: "list",
    question: "Witch city not suitable here:",
    options: ["Washinghton", "London", "Paris", "Kyiv", "New york", "Ottava"],
  },
  {
    id: 8,
    type: "number",
    question: "Choose the correct figure from the 4 proposed:",
    image: image1,
    options: ["1", "2", "3", "4"],
  },
  {
    id: 9,
    type: "list",
    question: "What are more familiar and more important to you:",
    options: [
      "Enjoy every minute of your time",
      "be mindful of the future",
      "take into account previous experience in daily practice",
    ],
  },
  {
    id: 10,
    type: "list",
    question: "Which definition do you think best fits this geometric image:",
    image: image2,
    options: ["It is pointed", "It is sustainable", "It is in equilibrium"],
  },
  {
    id: 11,
    type: "number",
    question: "Choose the right number:",
    image: image3,
    options: ["34", "36", "53", "44", "62", "42"],
  },
];
