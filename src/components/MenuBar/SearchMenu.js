import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

export const MenuUrlStyle = styled.a`
  display: inline-block;
  color: #f2f2f2;
  text-align: center;
  padding: 5px 5px;
  text-decoration: none;
  font-size: 14px;
`;
const Logo = styled(MenuUrlStyle)`
  float: left;
  font-size: 16px;
  font-weight: bold;
  color: #030303;
  margin-left: 10px;
  margin-right: 10px;
  &:hover  {
    color: #ffffff;
  }
  display: flex;
  align-items: center;
`;
const MainNavClass = styled.div`
  background-color: rgb(255, 102, 0);
  overflow: hidden;
  display: flex;
  align-items: center;
`;
const MOptions = styled(MenuUrlStyle)`
  float: left;
  color: #030303;
`;

// class SearchMenu extends Component {
//   state = {
//     isMenuHidden: true,
//   };

//   onToggleMenu = () => {
//     this.setState((prevState, props) => {
//       return { isMenuHidden: !prevState.isMenuHidden };
//     });
//   };

//   render() {
//     return (
//       <MainNavClass>
//         <Logo href="/">
//           <img
//             src="https://news.ycombinator.com/y18.gif"
//             alt="logo"
//             style={{
//               border: "1px solid white",
//               marginRight: "5px",
//             }}
//           />
//           Hacker News
//         </Logo>
//         <nav className="navbar navbar-light ">
//           <div className="container-fluid">
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn ml-2" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </nav>
//       </MainNavClass>
//     );
//   }
// }

const SearchMenu = ({
  setCurStories,
  setIsSearch,
  setSearchResults,
  setFilteredValues,
  tags,
  sortedBy,
}) => {
  const [searchText, setSearchText] = useState("Nexus");

  const searchHandler = async (e) => {
    if (e) e.preventDefault();
    let url;
    if (tags == "")
      url = `https://hn.algolia.com/api/v1/${sortedBy}?query=${searchText}`;
    else
      url = `https://hn.algolia.com/api/v1/${sortedBy}?query=${searchText}&tags=${tags}`;

    const response = await fetch(url);
    const data = await response.json();
    const final_data = [];
    let i = 0;
    for (let row of data.hits) {
      i++;
      final_data.push({
        id: i,
        created_at: row.created_at,
        title: row.title,
        url: row.url,
        author: row.author,
        points: row.points,
        story_text: row.story_text,
        num_comments: row.num_comments,
        objectID: row.objectID,
      });
    }
    setSearchResults(final_data);
    setFilteredValues(final_data);
  };

  useEffect(() => {
    searchHandler();
  }, []);
  useEffect(() => {
    searchHandler();
  }, [tags, sortedBy]);
  return (
    <MainNavClass>
      <Logo href="/">
        <img
          src="https://news.ycombinator.com/y18.gif"
          alt="logo"
          style={{
            border: "1px solid white",
            marginRight: "5px",
          }}
        />
        Hacker News
      </Logo>
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn ml-2" type="submit" onClick={searchHandler}>
              Search
            </button>
          </form>

          {/* Cross Button */}
          <button
            className="btn btn-primary ml-2"
            type="button"
            onClick={() => {
              setIsSearch(false);
            }}
          >
            X
          </button>
        </div>
      </nav>
    </MainNavClass>
  );
};

export default SearchMenu;
