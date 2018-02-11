import React, { Component } from 'react';
import { ContentSamsung } from './content';
import { functions } from './functions';

class Input extends Component { 

	constructor(props) {
		super(props);
		
		this.handleChangeInSelect = this.handleChangeInSelect.bind(this);
		this.state = { input: '', value: '', typ: '' };
	}

	handleChangeInSelect(event) {
		this.setState({ typ: event.target.value });
	}

	render() {
		const isInputCorrect = this.state.input;
		const samsungRegex = /^[QUPLHKquplhk]{1}[NEAnea]{1}[0-9]{2}[A-FQMLKHFa-fqmlkhf]{1}([USus]{1})?[0-9]{4}[a-zA-Z]{1}[a-zA-Z]{3}$/g;
		const lgNonOled = /^[0-9]{2}[SUELPsuelp]{1}[JHFGBCNAWMSVjhfgbcnawmsv]{1}[0-9]{1}[0-9]{1}[0-9]{1}[TCUSVBtcusvb0]{1}$/g;
		let regex = '';
		if (this.state.typ === 'lg') {
			regex = samsungRegex;
		} else if (this.state.typ === 'samsung') {
			regex = samsungRegex;
		} else if (this.state.typ === 'panasonic') {
			regex = samsungRegex;
		} else {
			regex = samsungRegex;
		}
		const testInput = regex.test(isInputCorrect);

		function PutData(props) {
			const input = isInputCorrect.toUpperCase();
			const arr = Array.from(input);
			// console.log(props.data.data);

			var inches = 	functions(arr).inches,
				feature = 	functions(arr).feature,
				info = 		functions(arr).info,
				serie = 	functions(arr).serie,
				techValue = functions(arr).techValue,
				locValue = 	functions(arr).locValue,
				modelValue = functions(arr).modelValue;

			return (
				<ContentSamsung 
					values={[techValue, locValue, inches, modelValue, serie, feature, info]}
				/>
			);
		}

		function GetData(props) {
			if (testInput) { 
				return <PutData data={props} />;
			} else { 
				return <p>Please insert TV Model Number to input.</p>; 
			}
		}

		return (
			<div>
				<p>
					<select	onChange={this.handleChangeInSelect} >
						<option value=""></option>
						<option value="samsung">Samsung</option>
						<option value="lg">LG</option>
						<option value="sony">Sony</option>
						<option value="panasonic">Panasonic</option>
					</select>
				</p>

				<input
					type="text"
					value={this.state.input}
					onChange={event => this.setState({ input: event.target.value })}
				/>

				<GetData data={this.state.typ} isInputCorrect={false} />
			</div>
		);
	}
}

export default Input;
