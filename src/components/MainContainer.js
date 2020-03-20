import React, {Component} from 'react'
import CardContainer from './CardContainer'
import ActiveCard from './ActiveCard'

export default class MainContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            character: {},
        }
    }

    changeActiveCard = (character) => {
        this.setState({
            character: character
        })
    } 

    render(){
        return(
            <div className='main-container'>
                <CardContainer changeActiveCard={this.changeActiveCard} characters={this.props.characters}/>
                {this.state.character.id
                    ? <ActiveCard character={this.state.character}/>
                    : 'No active card'}
            </div>
        )}
}