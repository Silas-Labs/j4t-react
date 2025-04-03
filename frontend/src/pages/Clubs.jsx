import React, { useEffect, useState } from "react";
import { ClubCard, Loading, Toast } from "../components";
import { useClubs } from "../store";

function Clubs() {
  const [clubName, setClubName] = useState("");
  const [clubLogo, setClubLogo] = useState("");
  const { clubs, addClub, loadClubs, loading, error } = useClubs();

  useEffect(() => {
    loadClubs();
  }, []);

  const handleAddClub = () => {
    if (clubName.trim() != "" && clubLogo.trim() != "") {
      addClub({ clubName, clubLogo });
      setClubLogo("");
      setClubName("");
    }
  };
  return (
    <div className="flex flex-col items-center flex-1 py-2 gap-2 w-full">
      <span className="titles">Clubs</span>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && <Toast error={error} />}
          <div className="grid grid-cols-4 gap-3">
            {clubs?.map((it) => (
              <ClubCard team_logo={it.logo} team_name={it.name} key={it.id} />
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
        </>
      )}
    </div>
  );
}
export default Clubs;
