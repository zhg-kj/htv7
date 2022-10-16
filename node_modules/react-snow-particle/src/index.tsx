import React from 'react'
import './index.css'
import styled from 'styled-components'

interface Props {
  height?: string
  backgroundColor?: string
  backgroundImage?: string
  size?: string
  color?: string
  particles?: any
}

const defaultProps: Props = {
  particles: 300,
}

export const Snow: React.FC<Props> = ({
  height,
  backgroundColor,
  backgroundImage,
  color,
  size,
  particles,
}) => {
  const Wraper = styled.div`
    width: 100%;
    height: ${height ? height : '100vh'};
    background-color: ${backgroundColor ? backgroundColor : null};
    filter: drop-shadow(0 0 10px rgb(252, 223, 223));
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    opacity: 1;
  `

  const Snow = styled.div`
    position: absolute;
    width: ${size ? size : '11px'};
    height: ${size ? size : '11px'};
    background: ${color ? color : 'white'};
    border-radius: 50%;
  `

  let snowSize = []
  for (let i = 0; i < particles; i++) {
    snowSize.push(i)
  }

  const snowRender = snowSize.map(item => (
    <Snow key={item} className="snow"></Snow>
  ))

  return <Wraper>{snowRender}</Wraper>
}

Snow.defaultProps = defaultProps
