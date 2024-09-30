import {Component} from 'react'

import ButtonItem from '../ButtonItem'

import {AppMainContainer, ButtonsList, ImageWidth} from './styledComponents'

class Greetings extends Component {
  state = {activeButton: this.props.languageGreetingsList[0].id}

  changeActiveButton = id => {
    const {languageGreetingsList} = this.props
    const activeObject = languageGreetingsList.find(Item => Item.id === id)
    this.setState({activeButton: activeObject.id})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeButton} = this.state
    const activeButtonObject = languageGreetingsList.find(
      Item => Item.id === activeButton,
    )
    return (
      <AppMainContainer>
        <h1>Multilingual Greetings</h1>
        <ButtonsList>
          {languageGreetingsList.map(Item => (
            <ButtonItem
              key={Item.id}
              item={Item}
              isActive={Item.id === activeButton}
              changeActiveButton={this.changeActiveButton}
            />
          ))}
        </ButtonsList>
        <ImageWidth
          src={activeButtonObject.imageUrl}
          alt={activeButtonObject.imageAltText}
        />
      </AppMainContainer>
    )
  }
}

export default Greetings
