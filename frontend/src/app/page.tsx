"use client";

import SwiperLocations from "./components/SwiperLocations/SwiperLocations";
import Input from "./components/Input/Input";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [background, setBackground] = useState<string>("");

  return (
    <div className="container home-container">
      <div className="image-background">
        {background !== "" && (
          <Image
            src={background}
            alt="Imagem de fundo home page"
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <Input></Input>
      <SwiperLocations setBackground={setBackground}></SwiperLocations>
    </div>
  );
}
