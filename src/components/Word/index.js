import './index.css'

const Word = props => {
    const {details} = props

    return(
        <li> 
            <p className="word">{details.text} : {details.textLength} </p>
        </li>
    )
}

export default Word