import React from 'react'
import styled from 'styled-components'
import { injectGlobal, keyframes } from 'styled-components'

injectGlobal`
  @import url(http://fonts.googleapis.com/css?family=Oswald);
`

const rollInLeft = keyframes`
  0%{-webkit-transform:translateX(-800px) rotate(-540deg);transform:translateX(-800px) rotate(-540deg);opacity:0}
  100%{-webkit-transform:translateX(0) rotate(0deg);transform:translateX(0) rotate(0deg);opacity:1}}@keyframes roll-in-left{0%{-webkit-transform:translateX(-800px) rotate(-540deg);transform:translateX(-800px) rotate(-540deg);opacity:0}100%{-webkit-transform:translateX(0) rotate(0deg);transform:translateX(0) rotate(0deg);opacity:1}
`

const fadeOut = keyframes`
  0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}
  100%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}}@keyframes fade-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}
`

export const FinalMascot = styled.img`
	animation: ${rollInLeft} 0.9s ease-out both;
`

export const PointsDiv = styled.span`
  animation: ${fadeOut} 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; 
  font-size: 200%;
  font-family: Oswald, sans-serif;
  position: absolute;
  color: #1B5E20;
  font-weight: bolder;
  z-index: 1000;
`

export const BoardDiv = styled.div`
  padding: 2vh 5vw;
  background-color: #e6c998;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: -webkit-radial-gradient(center, #7c6f59, transparent);
  background-image: radial-gradient(center, #7c6f59, transparent);

  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

export const RackDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

export const RackTile = styled.div`
  margin: 0.5mm;
  background: #f5cf90 url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/49914/veneer-birch-texture-fs8.png');
  position: relative;
  width: 19mm;
  height: 19mm;
  box-sizing: border-box;
  box-shadow: 0 1.125mm 0.75mm -0.5mm rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-top-width: 0.75mm;
  border-right-color: rgba(0, 0, 0, 0.15);
  border-bottom: 1.125mm rgba(0, 0, 0, 0.3);
  border-left-color: rgba(255, 255, 255, 0.25);
  border-radius: 1.55mm;
  
  &[data-letter]::before {
    content: attr(data-letter);
    text-transform: uppercase;
    font-family: Oswald, sans-serif;
    font-size: 13.3mm;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.6);
    text-shadow: 4px 4px 6px #f5cf90, 0 0 0 rgba(0, 0, 0, 0.7), 1px 2px 1px rgba(255, 255, 255, 0.5);
  }
`

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 500ms;
  background: rgba(0, 0, 0, 0.7);
`

export const PopupDiv = styled.div`
  margin: 15vh auto;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  position: relative;
  transition: all 5s ease-in-out;
  text-align: center;
`
export const GameButton = styled.button`
  margin-top: 20px;
	font-size: 150%;
	padding: 5px 10px;
	cursor: pointer;
	color: rgba(0, 0, 0, 0.6);
	background: #f5cf90 url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/49914/veneer-birch-texture-fs8.png');
`