import React from 'react'
import styled from 'styled-components'

export const HintContainer = styled.div`
  width: 125mm;
  padding: 0px 20px;
  background-color: #f6e1a6;
	background:-webkit-gradient(linear, 100% 100%, 0% 5%, from(#d8bd72), to(#fae1a6));
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
  overflow: hidden;
  transition: all 5s ease-in-out;
  
  &:.content{
    max-height: 30%;
    overflow: auto;
  }
`
export const HintItem = styled.div`
  margin: 5px 0px;
  border-bottom: 1px solid #ccaa7e;
  font-family: Oswald, sans-serif;
  padding-bottom: 7px;
  color: #000;
  display: flex;
`

export const Mask = styled.span`
  flex: initial;
  width: 30%;
`

export const Clue = styled.span`
  width: 70%;
`

export const TickMark = styled.span`
  color: green;
  font-weight: bold;
`

export const Found = styled.span`
  color: #FF4500;
`

export const Header = styled.h3`
  font-family: Oswald, sans-serif;
  margin: 15px 0px 5px 0px;
`