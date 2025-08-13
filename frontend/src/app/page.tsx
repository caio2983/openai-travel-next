"use client";

import SwiperLocations from "./components/SwiperLocations/SwiperLocations";
import Input from "./components/Input/Input";

export default function Home() {
  return (
    <div className="container home-container">
      <Input></Input>
      <SwiperLocations></SwiperLocations>
    </div>
  );
}
