import React from 'react';
import ReactDOM from 'react-dom';
import Input from './../components/input';

const App = () => {
	return (
		<div>
			<Input />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector(".container"));