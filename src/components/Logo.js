import React from 'react'
import styled from 'styled-components'

export default ({ size, color, linked, ...props }) => {
  const LogoImg = styled.img`
    width: ${size};
    fill: #207aee;
  `
  return (
    <>
      {linked ? (
        <a href="/">
          <LogoImg src={`/logo${color ? `-${color}` : ''}.svg`} />
        </a>
      ) : (
        <LogoImg src={`/logo${color ? `-${color}` : ''}.svg`} />
      )}
    </>
  );
}