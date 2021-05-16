import { BrowserRouter, Switch, Route } from "react-router-dom"
import AddMarks from "./AddMarks"
import LeaderBoard from "./LeaderBoard"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={LeaderBoard} />
				<Route path="/add" exact component={AddMarks} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
