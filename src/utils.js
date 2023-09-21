import { nanoid } from "nanoid";
import retroPCs from "./assets/image-retro-pcs.jpg";
import topLaptops from "./assets/image-top-laptops.jpg";
import gamingImg from "./assets/image-gaming-growth.jpg";
const navLinks = [
  {
    id: nanoid(),
    link: "home",
  },
  {
    id: nanoid(),
    link: "new",
  },
  {
    id: nanoid(),
    link: "popular",
  },
  {
    id: nanoid(),
    link: "trending",
  },
  {
    id: nanoid(),
    link: "categories",
  },
];

const news = [
  {
    id: nanoid(),
    title: "Hydrogen VS electric cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: nanoid(),
    title: "The downsides of AI artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: nanoid(),
    title: "Is VC funding drying up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const trends = [
  {
    id: nanoid(),
    img: retroPCs,
    header: "01",
    title: "reviving retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: nanoid(),
    img: topLaptops,
    header: "02",
    title: "Top 10 laptops of 2022",
    description: "Our best picks for various needs and budget.",
  },
  {
    id: nanoid(),
    img: gamingImg,
    header: "03",
    title: "The growth of gaming",
    description: "How the pandemic has sparked fresh opportunities.",
  },
];
export { navLinks, news, trends };
