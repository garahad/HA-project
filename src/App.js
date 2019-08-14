import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Users from './routes/Users';
import Userspecific from './routes/Userspecific';
import Todos from './routes/Userspecific/Todos';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<div>
					<Switch>
						<Route exact path={`/users/:usernumber/todos`} component={Todos} />
						<Route
							exact
							path="/users/:usernumber"
							component={Userspecific}></Route>
						<Route exact path="/users" component={Users} />
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
