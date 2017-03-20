import React, {Component} from 'react'
import {BoardDiv, RackDiv, RackTile} from '../styles/Board'

export const Title = ({text}) => (
  <RackDiv>
    {
      text.split('').map((letter, idx) => (
        <RackTile key={`Title${idx}`} data-letter={letter}/>
      ))
    }
  </RackDiv>
)
