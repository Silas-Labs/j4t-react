import React, { useEffect, useState } from "react";
import { ClubCard } from "../components";
import { useClubs } from "../store/Clubs";

function Clubs() {
  const [clubName, setClubName] = useState("");
  const [clubLogo, setClubLogo] = useState("");
  const { clubs, addClub } = useClubs();

  useEffect(() => {
    const storedClubs = JSON.parse(localStorage.getItem("teams")) || [];
    storedClubs.forEach((it) => addClub(it));
  }, []);

  const handleAddClub = () => {
    if (clubName.trim() != "" && clubLogo.trim() != "") {
      addClub({ clubName, clubLogo });
      setClubLogo("");
      setClubName("");
    }
  };
  return (
    <div className="flex flex-col items-center flex-1 py-2 gap-2">
      <span className="titles">Clubs</span>
      <div className="grid grid-cols-4 gap-3">
        {clubs.map((it, index) => (
          <ClubCard
            team_logo={it.clubLogo}
            team_name={it.clubName}
            key={index + 1}
          />
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Team"
          className="input"
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Logo URL"
          className="input"
          value={clubLogo}
          onChange={(e) => setClubLogo(e.target.value)}
        />
      </div>
      <div>
        <button
          className="btn btn-primary p-1 min-w-28"
          onClick={handleAddClub}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default Clubs;
