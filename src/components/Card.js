import React, { Component } from "react"
import Attributes from "./Attributes"

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAttributes: false,
    }
  }

  handleClick = character => {
    this.setState({
      showAttributes: !this.state.showAttributes,
    })
    this.props.changeActiveCard(character)
  }

  render() {
    const { character } = this.props
    return (
      <div
        className="card"
        onClick={() => (this.props.id ? null : this.handleClick(character))}
      >
        <h3>{character.name}</h3>
        <img src={character.image} alt="name" />
        <Attributes character={this.props.character} />
      </div>
    )
  }
}
/* Paul note - In the line
onClick={() => (this.props.id ? null : this.handleClick(character))}
I dont need the conditional to invoke the function
 */
