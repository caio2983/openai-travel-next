import { LocationCardProps } from "@/app/types/LocationCard";
import React from "react";

export default function LocationCard({
  title,
  description,
  image_query,
}: LocationCardProps) {
  return (
    <div className="location-card">
      <h3 className="location-title">{title}</h3>
      <p className="location-description">{description}</p>
      <p className="location-image-query">Imagem relacionada: {image_query}</p>
    </div>
  );
}
