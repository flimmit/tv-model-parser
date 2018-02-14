import React from 'react';
import ReactDOM from 'react-dom';
import Input from './../components/input';
import "./css/main.css";


const App = () => {
	return (
		<Input />
	);
};
ReactDOM.render(<App />, document.getElementById("container"));