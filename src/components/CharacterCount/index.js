import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import Word from '../Word'

class CharacterCount extends Component{
    state = {
        userInput: "",
        inputList: []
    }

    onChangeUserInput = event => {
        this.setState({userInput: event.target.value})
    }

    onSubmitForm = event => {
        event.preventDefault()

        const {userInput} = this.state

        const word = {
            id: v4(),
            text: userInput,
            textLength: userInput.length
        }

        this.setState(prevState => ({inputList: [...prevState.inputList, word], userInput: ''}))
    }

    render(){
        const {userInput, inputList} = this.state
        const listLength = inputList.length !== 0

        return(
            <div className="bg-container">
                <div className="responsive-container">
                    <div className="character-count-container">
                        <div className='left-container'>
                            <div className="heading-container">
                                <h1 className="heading"> Count the characters like a Boss...</h1>
                            </div>
                            {listLength? 
                                ( <ul className="words-list"> {inputList.map(item => <Word key={item.id} details={item} />)} </ul>
                                ) : 
                                (<img className='img' src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png" 
                                    alt="no user inputs" />)
                            }
                        </div>
                        <div className="right-container">
                            <div className="right-heading-container">
                                <h1 className="right-heading"> Character Counter</h1>
                            </div>
                            <form onSubmit={this.onSubmitForm} className="input-container">
                                <input value={userInput}
                                    onChange={this.onChangeUserInput} className='input' type="text" placeholder="Enter the Characters here" />
                                <button type="submit" className="btn"> Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterCount