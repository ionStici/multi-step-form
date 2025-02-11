import { assets } from "./assets";

const { iconArcade, iconAdvanced, iconPro } = assets;

const plans = [
  { name: "Arcade", monthly: "9", yearly: "90", icon: iconArcade },
  { name: "Advanced", monthly: "12", yearly: "120", icon: iconAdvanced },
  { name: "Pro", monthly: "15", yearly: "150", icon: iconPro },
];

const addons = [
  {
    name: "Online service",
    about: "Access to multiplayer games",
    monthly: "1",
    yearly: "10",
  },
  {
    name: "Larger storage",
    about: "Extra 1TB of cloud save",
    monthly: "2",
    yearly: "20",
  },
  {
    name: "Customizable profile",
    about: "Custom theme on your profile",
    monthly: "2",
    yearly: "20",
  },
];

export { plans, addons };
