import React from "react";
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  text-align: center;
  background-color: #fafafa;
  border: 1px solid black;
  height: 25px;
`;

export const NavIcons = styled.div`
  max-width: 150px;
  width: 100%;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
`;
