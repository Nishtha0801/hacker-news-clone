import React, { Component } from "react";
import Feed from "./containers/Feed";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

export const ButtonWrapper = styled.div`
  padding: 0px 30px 10px;
`;

export function getSinglePage(page_number, m) {
  return new Promise((resolve) => {
    axios
      .get(`https://hn.algolia.com/api/v1/search?page=${page_number}`)
      .then((res) => {
        let all_data = res.data;
        let final_data = [];
        let i = m + 1;
        for (let row of all_data.hits) {
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
          i++;
        }
        resolve(final_data);
      });
  });
}

const App = () => {
  const [curStories, setCurStories] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [m, setM] = useState(0);

  const getStories = async (page_number) => {
    let results = await getSinglePage(page_number, m);

    setCurStories(results);
    setM(m + results.length);
  };

  const handleClick = () => {
    setPageNumber(1 + pageNumber);
    getStories(pageNumber + 1);
  };

  const hideData = (id) => {
    let data_here = curStories;
    for (let k = 0; k < data_here.length; k++) {
      if (data_here[k].id === id) {
        data_here.splice(k, 1);
        break;
      }
    }
    setCurStories(data_here);
  };

  const upVote = (id) => {
    let data_here = curStories;
    let m = -1;
    for (let k = 0; k < data_here.length; k++) {
      if (data_here[k].id === id) {
        m = k;
        break;
      }
    }
    data_here[m].points += 1;
    setCurStories(data_here);
  };

  useEffect(() => {
    getStories(pageNumber);
  }, [pageNumber]);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />

      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
      <MenuBar />
      <Feed items={curStories} hideData={hideData} upVote={upVote} />

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              class={`page-item ${pageNumber === 1 ? "disabled" : ""}`}
              onClick={() => {
                if (pageNumber > 1) setPageNumber(pageNumber - 1);
              }}
            >
              <a
                class="page-link"
                href="#"
                style={{
                  color: pageNumber > 1?"black":"darkgrey",
                }}
              >
                Previous
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="#"
                style={{
                  color: "black",
                }}
              >
                {pageNumber}
              </a>
            </li>
            <li
              class="page-item"
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
            >
              <a
                class="page-link"
                href="#"
                style={{
                  color: "black",
                }}
              >
                {1 + pageNumber}
              </a>
            </li>
            <li
              class="page-item"
              onClick={() => {
                setPageNumber(pageNumber + 2);
              }}
            >
              <a
                class="page-link"
                href="#"
                style={{
                  color: "black",
                }}
              >
                {2 + pageNumber}
              </a>
            </li>
            <li
              class="page-item"
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
            >
              <a
                class="page-link "
                style={{
                  color: "black",
                }}
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Footer />
    </div>
  );
};

export default App;
