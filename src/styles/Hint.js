import React from 'react'
import styled from 'styled-components'

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
`

export const PopupDiv = styled.div`
  margin: 150px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 50%;
  position: relative;
  transition: all 5s ease-in-out;
  
  &:.content{
    max-height: 30%;
    overflow: auto;
  }
`

export const CloseButton = styled.a`
    position: absolute;
    top: -1px;
    right: 10px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    
    &:hover {
    color: #06D85F;
  }
`

export const HintItem = styled.div`
  margin: 10px 0px;
  border-bottom: 1px solid #dcd9d9;
  padding-bottom: 7px;
`
