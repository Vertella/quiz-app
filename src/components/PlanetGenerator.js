import React from 'react';
import planets from "../data/planets.json";


const PlanetGallery = ({ planets }) => {
  return (
    <div className="flex space-x-4 p-3">
      {planets.map((planet, index) => (
        <div
          key={index}
          className="flex flex-col w-2/4 h-auto overflow-hidden border rounded m-3 md:p-3"
        >
          <img src={planet.imageSource} alt={planet.ImageName} />
          <h3 className="text-slate-200 text-center text-sm">{planet.ImageName}</h3>
        </div>
      ))}
    </div>
  );
};

export default PlanetGallery;
