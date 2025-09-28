import React from "react";
import ProfileCard from "./ProfileCard";

const PEOPLE = [
  {
    profileType: "Student",
    name: "Ignacio Castillo",
    dateOfBirth: "15/03/2007",
    courseAndDegree: "6 IV",
    age: 18,
    profileImage: "/defaultProfilePic.avif",
  },
  {
    profileType: "Student",
    name: "María López",
    dateOfBirth: "22/08/2006",
    courseAndDegree: "5 III",
    age: 17,
    profileImage: "/defaultProfilePic2.avif",
  },
  {
    profileType: "Teacher",
    name: "Carlos Fernández",
    dateOfBirth: "10/01/1980",
    courseAndDegree: "Profesor de Informática",
    age: 43,
    profileImage: "/defaultProfilePic3.avif",
  },
  {
    profileType: "Director",
    name: "Lucía Martínez",
    dateOfBirth: "05/05/1975",
    courseAndDegree: "Directora",
    age: 48,
    profileImage: "/defaultProfilePic4.avif",
  },
];

export default function ProfileContainer({ filterText = "" }) {
  return (
    <main className="border border-[var(--border)] min-h-32 w-full p-4 space-y-4">
      {PEOPLE.filter((person) =>
        person.name.toLowerCase().includes(filterText.toLowerCase())
      ).map((person, index) => (
        <ProfileCard
          key={index}
          profileType={person.profileType}
          name={person.name}
          dateOfBirth={person.dateOfBirth}
          courseAndDegree={person.courseAndDegree}
          age={person.age}
          profileImage={person.profileImage}
        />
      ))}
    </main>
  );
}

// Skeleton para mostrar mientras carga
function ProfileSkeleton() {
  return (
    <div className="bg-[var(--background-secondary)] m-4 border border-[var(--border)] rounded-xl p-4 shadow-sm animate-pulse flex flex-row items-start space-x-4">
      <div className="w-24 h-24 bg-gray-300 rounded-xl"></div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="h-4 bg-gray-300 rounded col-span-2"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
