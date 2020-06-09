import React from 'react'
import styled from 'styled-components'
import {GlobalStyle} from 'theme'

const Div = styled.div`
  margin: 0;
  height: 100vh;
  overflow: hidden;
  iframe{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    border:0;
  }
`;

export default (props) => {
  return (
    <div>
      <a href="https://hack-the-cloud.devpost.com" target="_blank" rel="noopener noreferrer">
        External link
      </a>
    </div>
    )
};
