import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({ text, value }) => (<div>{text} {value}</div>)

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const mean = (good - bad) / all
    const positive = good / all * 100

    if (all === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
    return (
        <div>
            <Statistic text={'good'} value={good} />
            <Statistic text={'neutral'} value={neutral} />
            <Statistic text={'bad'} value={bad} />
            <Statistic text={'mean'} value={mean.toFixed(1)} />
            <Statistic text={'positive'} value={positive.toFixed(1) + ' %'} />
        </div>
    )

}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button handleClick={handleGoodClick} text='good'> </Button>
                <Button handleClick={handleNeutralClick} text='neutral'></Button>
                <Button handleClick={handleBadClick} text='bad'></Button>
            </div>
            <h2> statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))