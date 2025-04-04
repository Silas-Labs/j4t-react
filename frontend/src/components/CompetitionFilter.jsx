import React, { useState } from "react";
import { useFixtures } from "../store";

export const CompetitionFilter = ({ title, list }) => {
  const [selected, setSelected] = useState(title);
  const [isOpen, setIsOpen] = useState(false);
  const { fixtures } = useFixtures();

  const filteredFixture = fixtures?.filter((it) =>
    it.name.toLowerCase().includes(selected.toLowerCase())
  );

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
    return;
  };

  const handleSelect = (name) => {
    setSelected(name);
    setIsOpen(false); // Close dropdown
    return;
  };
  return (
    <div className="border rounded-lg p-1">
      <div className="dropdown dropdown-center">
        <button
          className=" w-full h-full cursor-pointer"
          onClick={toggleDropDown}
        >
          {selected}
        </button>
        {isOpen && (
          <ul
            tabIndex={1}
            className="dropdown-content menu rounded-box z-1 w-52 shadow-md bg-white/40 backdrop-blur-lg"
          >
            {list?.map((it) => (
              <li
                key={it.id}
                className="hover:bg-green-950/40 w-full"
                onClick={() => handleSelect(it.name)}
              >
                {it.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
