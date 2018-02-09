import React, { Component } from 'react';
import PutSamsungData from './samsung.js';

class Input extends Component { 

	constructor(props) {
		super(props);

		this.state = { input: '', value: '' };

		this.handleChangeInSelect = this.handleChangeInSelect.bind(this);
	}

	handleChangeInSelect(event) {
	    this.setState({value: event.target.value});
	}


	render() { console.log(PutSamsungData);
		const valueFromSelect = this.state.value;
		const isInputCorrect = this.state.input;
		const samsung_regex = /^[QUPLHKquplhk]{1}[NEAnea]{1}[0-9]{2}[A-FQMLKHFa-fqmlkhf]{1}([USus]{1})?[0-9]{4}[a-zA-Z]{1}[a-zA-Z]{3}$/g;
		const testInput = samsung_regex.test(isInputCorrect);

		function GetData(props) {
			if (testInput) {
				return <PutSamsungData />;
			} else {
				return <p>Please insert TV Model Number to input.</p>;
			}
		}

		return (
			<div>

				<p>
					<select value={this.state.value?this.state.value:"samsung_regex"} onChange={this.handleChangeInSelect} >
						<option value="samsung_regex">Samsung</option>
						<option value="lg_regex">LG</option>
						<option value="sony_regex">Sony</option>
						<option value="panasonic_regex">Panasonic</option>
					</select>
				</p>
				<input
					type="text"
					value={ this.state.input }
					onChange={event => this.setState({ input: event.target.value }) }
					autoFocus
				/>

				<GetData isInputCorrect={false} />
			</div>
		);
	}
};

export default Input;
