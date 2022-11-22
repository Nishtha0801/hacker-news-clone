import React, { Component } from "react";
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
`;
const MOptions = styled(MenuUrlStyle)`
  float: left;
  color: #030303;
`;

class MenuBar extends Component {
  state = {
    isMenuHidden: true,
  };

  onToggleMenu = () => {
    this.setState((prevState, props) => {
      return { isMenuHidden: !prevState.isMenuHidden };
    });
  };

  render() {
    return (
      <MainNavClass>
        <Logo href="/">
          <img src="https://news.ycombinator.com/y18.gif" alt="logo" style={{
            border: "1px solid white",
            marginRight: "5px",
          }}  />
          Hacker News
        </Logo>

        <MOptions href="#">new |</MOptions>
        <MOptions href="#">past |</MOptions>
        <MOptions href="#">comments |</MOptions>
        <MOptions href="#">ask |</MOptions>
        <MOptions href="#">show |</MOptions>
        <MOptions href="#">job |</MOptions>
        <MOptions href="#">submit</MOptions>
      </MainNavClass>
    );
  }
}

export default MenuBar;
