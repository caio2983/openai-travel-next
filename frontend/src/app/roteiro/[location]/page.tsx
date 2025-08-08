import LocationCard from "@/app/components/LocationCard/LocationCard";
import React from "react";

export default function LocationPage() {
  const tasks = [
    {
      title: "Visitar a Torre Eiffel",
      description:
        "Não deixe de conhecer a famosa Torre Eiffel e apreciar a vista panorâmica da cidade.",
      image_query: "Torre Eiffel Paris",
    },
    {
      title: "Passear pelo Louvre",
      description:
        "Explore o Museu do Louvre e admire obras de arte renomadas, como a Mona Lisa.",
      image_query: "Louvre Paris",
    },
    {
      title: "Caminhar às margens do Rio Sena",
      description:
        "Desfrute de um agradável passeio às margens do Rio Sena e aprecie a paisagem parisiense.",
      image_query: "Rio Sena Paris",
    },
  ];

  return (
    <div className="container location-page">
      {tasks.map((task, index) => (
        <LocationCard
          key={index}
          title={task["title"]}
          description={task["description"]}
          image_query={task["image_query"]}
        />
      ))}
    </div>
  );
}
