import styled from 'styled-components'

export const GridDiv = styled.div`
  margin-top: 12.5mm;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 147mm;
  height: 146mm;
`

export const TileDiv = styled.div`
  cursor: pointer;
  margin: 0.5mm;
  background: #f5cf90 url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/49914/veneer-birch-texture-fs8.png');
  position: relative;
  width: 9.5mm;
  height: 9.5mm;
  box-sizing: border-box;
  box-shadow: 0 0.5625mm 0.375mm -0.25mm rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-top-width: 0.375mm;
  border-right-color: rgba(0, 0, 0, 0.15);
  border-bottom: 0.5625mm rgba(0, 0, 0, 0.3);
  border-left-color: rgba(255, 255, 255, 0.25);
  border-radius: 0.375mm;
  
  &[data-letter]::before {
    content: attr(data-letter);
    text-transform: uppercase;
    font-family: Oswald, sans-serif;
    font-size: 6.65mm;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.6);
    text-shadow: 4px 4px 6px #f5cf90, 0 0 0 rgba(0, 0, 0, 0.7), 1px 2px 1px rgba(255, 255, 255, 0.5);
  }
  
  &[data-letter]::after {
    color: rgba(0, 0, 0, 0.7);
    font-family: sans-serif;
    font-size: 2.1375mm;
    position: absolute;
    right: 12.5%;
    bottom: 12.5%;
    -webkit-transform: translate(50%, 50%);
    transform: translate(50%, 50%);
  }
  
  &[data-letter='E'],
  &[data-letter='A'],
  &[data-letter='I'],
  &[data-letter='O'],
  &[data-letter='N'],
  &[data-letter='R'],
  &[data-letter='T'],
  &[data-letter='L'],
  &[data-letter='S'],
  &[data-letter='U'] {
    background: rgb(231, 187, 114) 547px 447px;
  }
  
  &[data-letter='B'],
  &[data-letter='C'],
  &[data-letter='M'],
  &[data-letter='P'] {
    background-position: 177px 470px;
    background-color: rgb(222, 177, 102);
  }
  
  &[data-letter='E']::after,
  &[data-letter='A']::after,
  &[data-letter='I']::after,
  &[data-letter='O']::after,
  &[data-letter='N']::after,
  &[data-letter='R']::after,
  &[data-letter='T']::after,
  &[data-letter='L']::after,
  &[data-letter='S']::after,
  &[data-letter='U']::after {
    content: "1";
  }
  
  &[data-letter='D']::after,
  &[data-letter='G']::after {
    content: "2";
  }
  
  &[data-letter='B']::after,
  &[data-letter='C']::after,
  &[data-letter='M']::after,
  &[data-letter='P']::after {
    content: "3";
  }
  
  &[data-letter='F']::after,
  &[data-letter='H']::after,
  &[data-letter='V']::after,
  &[data-letter='W']::after,
  &[data-letter='Y']::after {
    content: "4";
  }
  
  &[data-letter='K']::after {
    content: "5";
  }
  
  &[data-letter='J']::after,
  &[data-letter='X']::after {
    content: "8";
  }
  
  &[data-letter='Q']::after,
  &[data-letter='Z']::after {
    content: "10";
  }
`

export const BoardLayout = styled.div`
  display: flex;
`

export const RightPane = styled.div`
  margin-left: 10mm;
  margin-top: 20mm;
`
export const ScoreDiv = styled.div`
    padding: 23px;
    background: linear-gradient(to bottom, #ebd19a 0%,#e3c083 100%);
    box-shadow: 0 1.125mm 0.75mm -0.5mm rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.45);
    border-top-width: 0.75mm;
    border-right-color: rgba(0, 0, 0, 0.15);
    border-bottom: 1.125mm rgba(0, 0, 0, 0.3);
    border-left-color: rgba(255, 255, 255, 0.25);
    border-radius: 44px;
    font-size: 28px;
    font-family: Oswald, sans-serif;
`

export const HintDiv = styled(ScoreDiv)`
  text-align: center;
  margin-top: 50px;
  color: green;
  cursor: pointer;
`