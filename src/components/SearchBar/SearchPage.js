import React, { useState, useEffect } from "react";
import Feed from "../../containers/Feed";
import SearchMenu from "../MenuBar/SearchMenu";
import SortingBox from "../Story/SortingBox";

const SearchPage = ({ setCurStories, setIsSearch }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredValues, setFilteredValues] = useState([]);
  const [tags, setTags] = useState("");
  const [sortedBy, setSortedBy] = useState("search");
  const hideData = () => {};
  const upVote = () => {};

  const timeFilter = (days) => {
    console.log(days, " Here is Days");
    let data_here = searchResults;
    let final_data = [];
    let i = 0;
    if (days == "-1") {
      setFilteredValues(searchResults);
      return;
    }
    for (let row of data_here) {
      let date = new Date(row.created_at);
      let cur_date = new Date();
      let diff = cur_date.getTime() - date.getTime();
      let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      if (diffDays <= days) {
        final_data.push(row);
        i++;
      }
    }
    // setSearchResults(final_data);
    setFilteredValues(final_data);
  };

  const showPastWeek = () => {
    let data_here = searchResults;
    let final_data = [];
    let i = 0;
    for (let row of data_here) {
      let date = new Date(row.created_at);
      let cur_date = new Date();
      let diff = cur_date.getTime() - date.getTime();
      let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      if (diffDays <= 7) {
        final_data.push(row);
        i++;
      }
    }
    setSearchResults(final_data);
  };

  const showPastYear = () => {
    let data_here = searchResults;
    let final_data = [];
    let i = 0;
    for (let row of data_here) {
      let date = new Date(row.created_at);
      let cur_date = new Date();
      let diff = cur_date.getTime() - date.getTime();
      let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      if (diffDays <= 365) {
        final_data.push(row);
        i++;
      }
    }
    setSearchResults(final_data);
  };

  return (
    <div>
      <SearchMenu
        setCurStories={setCurStories}
        setIsSearch={setIsSearch}
        setSearchResults={setSearchResults}
        setFilteredValues={setFilteredValues}
        tags={tags}
        sortedBy={sortedBy}
      />
      <SortingBox
        timeFilter={timeFilter}
        setTags={setTags}
        setSortedBy={setSortedBy}
      />
      <Feed items={filteredValues} hideData={hideData} upVote={upVote} tags={tags}  />
    </div>
  );
};

export default SearchPage;
