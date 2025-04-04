import React, { useEffect } from "react";
import { TeamCard } from "./TeamCard";
import { useFixtures } from "../store";
import { Toast, Loading } from ".";

export const Fixtures = () => {
  const { fixtures, error, loadFixtures, loading } = useFixtures();
  useEffect(() => {
    loadFixtures();
  }, []);

  return (
    <div className="flex flex-col items-center flex-1 py-2 w-full">
      {/* Styled Title */}
      <h2
        className="titles"
        style={{ color: "black", fontSize: "24px", fontWeight: "bold" }}
      >
        Upcoming Fixtures
      </h2>

      <div className="flex flex-col justify-center w-full items-center">
        {loading ? (
          <Loading />
        ) : (
          <>
            {error && <Toast error={error} />}
            {fixtures.length > 0 ? (
              fixtures.map((fixture) => (
                <ul key={fixture.id} className="gap-4 w-full">
                  <li className="flex flex-row justify-center w-full hover:bg-green-200">
                    <div className="flex flex-row items-center">
                      {/* <p>{fixture.home_team}</p> */}
                      <TeamCard
                        name={fixture.home_team}
                        team_logo={fixture.home_team_logo}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <span>vs</span>
                      <span className="text-[11px]">{fixture.match_time}</span>
                    </div>
                    <div className="flex flex-row items-center">
                      <TeamCard
                        name={fixture.away_team}
                        team_logo={fixture.away_team_logo}
                      />
                      {/* <p>{fixture.away_team}</p> */}
                    </div>
                  </li>
                </ul>
              ))
            ) : (
              <p className="text-lg text-blue-950">
                No upcoming fixtures available.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// <div key={fixture.id} className="fixture-card">
//   <h3>
//     {fixture.home_team} vs {fixture.away_team}
//   </h3>
//   <p>Date: {new Date(fixture.match_date).toLocaleString()}</p>
//   <p>Venue: {fixture.venue}</p>
// </div>
