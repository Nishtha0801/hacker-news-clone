import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const SortingBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* 1st */}
      <div
        className="selectBox"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginRight: "10px",
        }}
      >
        <label
          htmlFor="people"
          className="  bg-red  text-sm font-medium text-gray-700 p-0 m-0"
        >
          <p
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Show Only
          </p>
        </label>
        <select className="form-select" aria-label="Default select example">
          <option value="1" selected>
            Descending
          </option>
          <option value="2">Ascending</option>
        </select>
      </div>
      {/* 2nd */}
      <div
        className="selectBox"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginRight: "10px",
        }}
      >
        <label
          htmlFor="people"
          className="  bg-red  text-sm font-medium text-gray-700 p-0 m-0"
        >
          <p
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Show Only
          </p>
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      {/* 3rd */}
      <div
        className="selectBox"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginRight: "10px",
        }}
      >
        <label
          htmlFor="people"
          className="  bg-red  text-sm font-medium text-gray-700 p-0 m-0"
        >
          <p
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Show Only
          </p>
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default SortingBox;
