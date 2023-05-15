import React from 'react';
import { useReducer } from 'react';

export default function App() {

    const [state, dispatch] = useReducer(reducer, {
        score_1: 0,
        score_2: 0
    })

    function reducer(state, action) {
        switch (action.type) {
            case 'SCORE1':
                return {
                    score_1: state.score_1 + 1,
                    score_2: state.score_2
                }
            case 'SCORE2':
                return {
                    score_1: state.score_1,
                    score_2: state.score_2 + 1
                }
            case 'RESET':
                return {
                    score_1: 0,
                    score_2: 0
                }
            default:
                break;
        }
    }

    // --------------------------------
    function incrementar1() {
        dispatch({ type: "SCORE1" })
    }

    function incrementar2() {
        dispatch({ type: "SCORE2" })
    }

    function reset() {
        dispatch({ type: "RESET" })
    }

    return (
        <div>
            <h3>React Hooks - useReducer</h3>
            <hr />
            <h3>Player 1: {state.score_1}</h3>
            <h3>Player 2: {state.score_2}</h3>

            <button onClick={incrementar1}>Player1</button>
            <button onClick={incrementar2}>Player2</button>
            <button onClick={reset}>Reset Score</button>
        </div>
    )
}