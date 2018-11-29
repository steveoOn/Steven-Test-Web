import * as React from 'react'
import styled from 'styled-components'

const Contanier = styled.div`
  height: 100px;
  width: 100px;
  background: url(${props => props.image});
  background-size: cover;
  border-radius: ${props => props.radius}px;
  border: ${props => props.borderWidth}px solid rgba(255, 255, 255, 0.85);
`

// Define type of property
interface Props {
  radius: string
  borderWidth: number
}

interface State {
  photo: string
}

export class Avatar extends React.Component<Props, State> {
  // Set default propertie
  static defaultProps = {
    radius: 5,
    borderWidth: 2,
  }

  state = {
    photo: 'https://uinames.com/api/photos/male/8.jpg',
  }

  componentDidMount = () => {
    const url = 'https://uinames.com/api/?ext'
    fetch(url).then(response =>
      response.json().then(response => {
        console.log(response.photo)
        this.setState({
          photo: response.photo,
        })
      })
    )
  }

  render() {
    return (
      <Contanier
        image={this.state.photo}
        radius={this.props.radius}
        borderWidth={this.props.borderWidth}
      />
    )
  }
}

export default Avatar
