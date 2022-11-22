import React from "react";
import PropTypes from "prop-types";
import {
  HeaderClass,
  RankClass,
  TitleClass,
  UrlClass,
  HrefClass,
} from "./Styles";

export default function Header(props) {
  return (
    <HeaderClass>
      <RankClass>
        {props.curRank}.{" "}
        <UrlClass>
          {/* <div
            style={{
              width: "10px",
              height: "10px",
              border: "0px",
              margin: "3px 2px 6px",
              background: `url("https://news.ycombinator.com/grayarrow.gif") no-repeat`,
            }}
          ></div> */}
          <HrefClass
            href="#"
            onClick={() => {
              props.upVote(props.Id);
            }}
          >
            <img src="https://news.ycombinator.com/grayarrow.gif" alt="" style={{
              width: "10px",
              height: "10px",
            }} />
          </HrefClass>
        </UrlClass>
      </RankClass>
      <TitleClass href={props.url}>
        {props.title}{" "}
        <UrlClass>
          <HrefClass href={props.url}>({props.url})</HrefClass>
        </UrlClass>
      </TitleClass>
    </HeaderClass>
  );
}

Header.propTypes = {
  Id: PropTypes.number.isRequired,
  curRank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};
