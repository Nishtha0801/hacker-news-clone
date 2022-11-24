import React, { useState } from "react";

const SortingBox = ({ timeFilter, setTags, setSortedBy }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      {/* 1st */}
      <div
        className="selectBox"
        style={{
          // display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginRight: "10px",
        }}
      >
        <label
          htmlFor="people"
          className="  bg-red  text-sm font-medium text-gray-700 p-0 m-0 mr-2"
        >
          <p
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Search
          </p>
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setTags(e.target.value);
          }}
        >
          <option value="" selected>
            All
          </option>
          <option value="story">Story</option>
          <option value="comment">Comment</option>
        </select>
      </div>
      {/* 2nd */}
      <div
        className="selectBox"
        style={{
          // display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginRight: "10px",
        }}
      >
        <label
          htmlFor="people"
          className="  bg-red  text-sm font-medium text-gray-700 p-0 m-0 mr-2"
        >
          <p
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            By
          </p>
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setSortedBy(e.target.value);
          }}
        >
          <option value="search" selected>
            Popularity
          </option>
          <option value="search_by_date">Date</option>
        </select>
      </div>

      {/* 3rd */}
      <div
        className="selectBox"
        style={{
          // display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginRight: "10px",
        }}
      >
        <label
          htmlFor="people"
          className="  bg-red  text-sm font-medium text-gray-700 p-0 m-0 mr-2"
        >
          <p
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            For
          </p>
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            timeFilter(e.target.value);
          }}
        >
          <option value="-1" selected>
            All time
          </option>

          <option value="1">Last Day</option>
          <option value="7">Last week</option>
          <option value="365">Last Year</option>
        </select>
      </div>
    </div>
  );
};

export default SortingBox;
