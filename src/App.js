import React from 'react'
import './App.css'
import Counter from './components/Counter'
import CounterFour from './components/CounterFour'
import CounterThree from './components/CounterThree'
import CounterTwo from './components/CounterTwo'
import ComponentC from './components/contextComopnents/ComponentC'
import CounterUseReducer from './components/CounterUseReducer'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
	return (
		<div className="App">
			<Counter />
			<CounterTwo />
			<CounterThree />
			<CounterFour />
			<UserContext.Provider value={'Monika'}>
				<ChannelContext.Provider value={'codeevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
			<CounterUseReducer />
		</div>
	)
}

export default App
