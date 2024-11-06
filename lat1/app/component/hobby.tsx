import React from "react";

// Objek Hobi
const hobbies = [
  {
    id: 1,
    name: "Gaming",
    image:
      "https://i.pinimg.com/236x/2a/56/90/2a569090a4ac6622ffcbca560b7e90b8.jpg",
  },
  {
    id: 2,
    name: "Hiking",
    image:
      "https://i.pinimg.com/564x/21/f5/3b/21f53bba92008515b8c1a6c059dde7a3.jpg",
  },
  {
    id: 3,
    name: "Bermain Bola",
    image:
      "https://i.pinimg.com/564x/a9/9a/ca/a99aca081515eaa26d04d44fd9df88b1.jpg",
  },
  {
    id: 4,
    name: "Nonton Film",
    image:
      "https://i.pinimg.com/736x/78/0f/9c/780f9c253e71486abf1c7a839c6d8d1e.jpg",
  },
  {
    id: 5,
    name: "Edit Vidio",
    image:
      "https://i.pinimg.com/236x/b3/b6/d8/b3b6d89e4c8566c8bc7d52e71a8ba81c.jpg",
  },
  {
    id: 6,
    name: "Berenang",
    image:
      "https://i.pinimg.com/236x/d5/2f/c9/d52fc9887d27478982b66108d75f36f2.jpg",
  },
  {
    id: 7,
    name: "Bermain Alat Musik",
    image:
      "https://i.pinimg.com/236x/cb/1c/3a/cb1c3a9339fa005912b8edaef28d246a.jpg",
  },
  {
    id: 8,
    name: "Mendengarkan Musik",
    image:
      "https://i.pinimg.com/236x/dd/e9/30/dde930acce45ac0d440511b37e4f18de.jpg",
  },
];

export default function MyGallery() {
  return (
    <div className="container mx-auto p-6 text-center pt-20">
      <h2 className="text-3xl font-extrabold mb-8">My Hobby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <div
            key={hobby.id}
            className="relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-white text-xl font-semibold">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
