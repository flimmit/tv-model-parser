import React, { Component } from 'react';
import { ContentSamsung, technologyArray, locationArray, 
		modelArray, Aaa } from "./samsung";

class Input extends Component { 

	constructor(props) {
		super(props);
		
		this.handleChangeInSelect = this.handleChangeInSelect.bind(this);
		this.state = { input: '', value: '', typ: "" };
	}

	handleChangeInSelect(event) {
		this.setState({ typ: event.target.value });
	}

	render() {
		const isInputCorrect = this.state.input;
		const samsungRegex = /^[QUPLHKquplhk]{1}[NEAnea]{1}[0-9]{2}[A-FQMLKHFa-fqmlkhf]{1}([USus]{1})?[0-9]{4}[a-zA-Z]{1}[a-zA-Z]{3}$/g;
		let regex = "";
		if (this.state.typ === "lg") {
			regex = samsungRegex;
		} else if (this.state.typ === "samsung") {
			regex = samsungRegex;
		} else if (this.state.typ === "panasonic") {
			regex = samsungRegex;
		} else {
			regex = samsungRegex;
		}
		const testInput = regex.test(isInputCorrect);

		function PutData(props) {
			const input = isInputCorrect.toUpperCase();
			const arr = Array.from(input);
			// console.log(props.data.data);

			<Aaa values={[techValue, locValue, modelValue, inches, serie, feature, info]} />

			var inches = arr[2] + arr[3],
				serie = arr[5] + arr[6] + arr[7] + arr[8],
				feature = arr[9],
				info = arr[10] + arr[11] + arr[12];

			if (isNaN(arr[5])) {
				var serie = arr[6] + arr[7] + arr[8] + arr[9],
					feature = arr[10],
					info = arr[11] + arr[12] + arr[13],
					model = arr[4] + arr[5];
			} else {
				var model = arr[4];
			}

			if (arr[0] in technologyArray) {
				for (let i = Object.keys(technologyArray).length - 1; i >= 0; i--) {
					if (Object.keys(technologyArray)[i] === arr[0]) {
						var techValue = Object.values(technologyArray)[i];
					}
				}
			}

			if (arr[1] in locationArray) {
				for (let i = Object.keys(locationArray).length - 1; i >= 0; i--) {
					if(Object.keys(locationArray)[i] === arr[1]) {
						var locValue = Object.values(locationArray)[i];
					}
				}
			}

			if (model in modelArray) {
				for (let i = Object.keys(modelArray).length - 1; i >= 0; i--) {
					if (Object.keys(modelArray)[i] === model) {
						var modelValue = Object.values(modelArray)[i];
					}
				}
			}

			return (
				<ContentSamsung 
					values={[techValue, locValue, modelValue, inches, serie, feature, info]}
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
