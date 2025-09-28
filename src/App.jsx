import React, { useState } from "react";
import Presentation from "./components/Presentation";
import Search from "./components/Search";
import ProfileContainer from "./components/Profile/ProfileContainer";

export default function App() {
  const [filterText, setFilterText] = useState("");

  return (
    <>
      <Presentation></Presentation>

      {/* Search Bar */}
      <section className="flex flex-col justify-center place-items-center-safe gap-6 w-1/2 mx-auto">
        <Search
          filterText={filterText} 
          onFilterTextChange={setFilterText} 
        ></Search>
        {/* Profiles Container */}
        <ProfileContainer filterText={filterText}>

        </ProfileContainer>
      </section>
    </>
  );
}
