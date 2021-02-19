import React, { useReducer } from 'react'
import './App.css'
import Counter from './components/Counter'
import CounterFour from './components/CounterFour'
import CounterThree from './components/CounterThree'
import CounterTwo from './components/CounterTwo'
import CounterUseReducer from './components/CounterUseReducer'
import CounterUseReducer1 from './components/CounterUseReducer1'
import CounterUseReducer2 from './components/CounterUseReducer2'
import ComponentA from './components/useReducerComponents/ComponentA'
import ComponentB from './components/useReducerComponents/ComponentB'
import ComponentC from './components/useReducerComponents/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

function App() {
	const [ count, dispatch ] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
			<div className="App">
				{/* <Counter />
			<CounterTwo />
			<CounterThree />
			<CounterFour />
			<UserContext.Provider value={'Monika'}>
				<ChannelContext.Provider value={'codeevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
			<CounterUseReducer />
			<CounterUseReducer1 />
			<CounterUseReducer2 /> */}
				Count - {count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</div>
		</CountContext.Provider>
	)
}

export default App
