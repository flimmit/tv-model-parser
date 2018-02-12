import React, { Component } from 'react';
import { ContentSamsung } from './content';
import { functions } from './functions';

class Input extends Component { 

	constructor(props) {
		super(props);
		
		this.state = { input: '', value: '', typ: '' };
	}

	render() {
		/**
		 * [REGEX]
		 * @type {RegExp}
		 */
		const samsung = /^([QUPLHK]{1})([NEA]{1})([0-9]{2})([A-FQMLKHFUS]{1,2})([0-9]{4})([A-Z]{1})([A-Z]{3})$/;
		const samsungOld = /^([LNFPHTX]{2})?([-]{1})?([TSRPN]{1})([0-9]{2})([0-9]{2})([A-Z]{1})([A-Z]{1})([/A-Z0-9]{3})$/;
		const lgNonOled = /^([0-9]{2})([SUELP]{1})([JHFGBCNAWMSV]{1})([0-9]{1})([0-9]{1})([0-9]{1})([TCUSVB0]{1})$/;
		const lgOled = /^([OLED]{4})([0-9]{2})([A-Z]{1})([0-9]{1})([TCSVUBt0]{1})$/;
		const sonyNew = /^([KD]){2}?([L]){1}?([-]{1})?([0-9]{2})([RWSX]{1})([ABCDEFG]{1})([0-9]{1})([0-9]{1})([0-9]{2})([A-Z]{4})?$/;
		const sonyOld = /^([0-9]{2})([RWSX]{1})([0-9]{1})([0-9]{1})([0-9]{2})([A-Z]{1})$/;
		const panasonic = /^([TX]{2})?([-]{1})?([0-9]{2})([ABCDEFG]{1})([SXRZW]{1})([0-9]{1})([0-9]{2})([A-Z0-9]{1})$/;
		
		const isInputCorrect = this.state.input;
		var input = isInputCorrect.toUpperCase();
		var regex = [samsung, samsungOld, lgOled, lgNonOled, sonyOld, sonyNew, panasonic];
		var testInput = false;

		if (input) {
			for (var i = 0; i <= regex.length - 1; i++) {
				let match = input.match(regex[i]);

				if (match) { // add samsungOld
					if (match[0].length == '14' || match[0].length == '13' ) {
						regex = samsung;
					} else if (match[0].length == '9') {
						regex = lgOled;
					} else if (match[0].length == '8' && isNaN(match[3]) ) {
						regex = lgNonOled;
					} else if (match[0].length == '11' && match[0] == "KD") {
						regex = sonyNew;
					} else if (match[0].length == '8' && !isNaN(match[3]) ) {
						regex = sonyOld;
					} else if (match[0].length == '11' && match[0] == "TX") {
						regex = panasonic;
					}
					testInput = regex.test(input);
				}
			}
		}
		
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
				return (
					<div>
						<p>Please insert TV Model Number to input.</p>
						<p>Samsung = UE55MU6400UXZG</p>
						<p>Samsung old = LN-T4681FX/XA</p>
						<p>LG OLED = OLED55C7V</p>
						<p>LG = 43LF540V</p>
						<p>Sony = KD-55X8507C</p>
						<p>Sony old = 65S8005C</p>
						<p>Panasonic = TX-58DX902B</p>
					</div>
				); 
			}
		}

		return (
			<div>
				<input
					type="text"
					onChange={event => this.setState({ input: event.target.value })}
					value={this.state.input}
				/>

				<GetData data={this.state.typ} isInputCorrect={false} />
			</div>
		);
	}
}

export default Input;
