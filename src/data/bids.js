import artwork1 from "../assets/images/artworks/artwork1.jpg";
import artwork2 from "../assets/images/artworks/artwork2.jpg";
import profile2 from "../assets/images/profiles/profile2.jpg";

export const bids = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  title: i % 2 ? "Liquid Wave" : "Cute Cube Cool",
  owner: "John Abraham",
  image: i % 2 ? artwork2 : artwork1,
  avatar: profile2,
}));