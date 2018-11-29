import * as React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

const ButtonContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 40px;
  width: 112px;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  ${props =>
    props.type == 'primary' &&
    css`
      background: #53a600;
      color: white;

      &:hover {
        background: #6bbe19;
        cursor: pointer;
        box-shadow: 0 7px 12px rgba(0, 0, 0, 0.15);
        transform: scale(1.1, 1.1);
      }
    `}
  ${props =>
    props.type == 'secondary' &&
    css`
      background: white;
      color: #555;
      border: 1px solid #bbbbbb;

      &:hover {
        background: #f0f0f0;
        cursor: pointer;
        box-shadow: 0 7px 12px rgba(0, 0, 0, 0.15);
        transform: scale(1.1, 1.1);
      }
    `}
`

// Define type of property
interface Props {
  text: string
  type: string
}

export class Button extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: 'Button',
    type: 'primary',
  }

  render() {
    return (
      <ButtonContainer type={'secondary'}>{this.props.text}</ButtonContainer>
    )
  }
}

export default Button
