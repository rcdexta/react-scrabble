import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url(http://fonts.googleapis.com/css?family=Oswald);
`

export const BoardDiv = styled.div`
  padding: 5vh 5vw;
  background-color: #e6c998;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-image: -webkit-radial-gradient(center, #7c6f59, transparent);
  background-image: radial-gradient(center, #7c6f59, transparent);

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
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
  border-radius: 0.75mm;
  
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

  &[data-letter]::after {
    color: rgba(0, 0, 0, 0.7);
    font-family: sans-serif;
    font-size: 4.275mm;
    position: absolute;
    right: 12.5%;
    bottom: 16.5%;
    -webkit-transform: translate(50%, 50%);
    transform: translate(50%, 50%);
  }
  
  &[data-letter='e']::after,
  &[data-letter='a']::after,
  &[data-letter='i']::after,
  &[data-letter='o']::after,
  &[data-letter='n']::after,
  &[data-letter='r']::after,
  &[data-letter='t']::after,
  &[data-letter='l']::after,
  &[data-letter='s']::after,
  &[data-letter='u']::after {
    content: "1";
  }
  
  &[data-letter='d']::after,
  &[data-letter='g']::after {
    content: "2";
  }
  
  &[data-letter='b']::after,
  &[data-letter='c']::after,
  &[data-letter='m']::after,
  &[data-letter='p']::after {
    content: "3";
  }
  
  &[data-letter='f']::after,
  &[data-letter='h']::after,
  &[data-letter='v']::after,
  &[data-letter='w']::after,
  &[data-letter='y']::after {
    content: "4";
  }
  
  &[data-letter='k']::after {
    content: "5";
  }
  
  &[data-letter='j']::after,
  &[data-letter='x']::after {
    content: "8";
  }
  
  &[data-letter='q']::after,
  &[data-letter='z']::after {
    content: "10";
  }
`