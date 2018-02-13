import React, { Component } from 'react';
import { OutputHandler } from './content';

const regex = [
	{vendor: "samsung", pattern: /^([QUPLHK]{1})([NEA]{1})([0-9]{2})([A-FQMLKHFUS]{1,2})([0-9]{4})([A-Z]{1})([A-Z]{3})$/},
	{vendor: "samsungOld", pattern: /^([LNFPHTX]{2})?([-]{1})?([TSRPN]{1})([0-9]{2})([0-9]{2})([A-Z]{1})([A-Z]{1})([/A-Z0-9]{3})$/},
	{vendor: "lgNonOled", pattern: /^([0-9]{2})([SUELP]{1})([JHFGBCNAWMSV]{1})([0-9]{1})([0-9]{1})([0-9]{1})([TCUSVB0]{1})$/},
	{vendor: "lgOled", pattern: /^([OLED]{4})([0-9]{2})([A-Z]{1})([0-9]{1})([TCSVUBt0]{1})$/},
	{vendor: "sony", pattern: /^([KD]{2}([L]{1})?([-]{1})?)?([0-9]{2})([RWSX]{1})([A-Z]{1})?([0-9]{1})([0-9]{1})([0-9]{2})([A-Z]{4}?)$/},
	{vendor: "sonyOld", pattern: /^([0-9]{2})([RWSX]{1})([0-9]{1})([0-9]{1})([0-9]{2})([A-Z]{1})$/},
	{vendor: "panasonic", pattern: /^([TX]{2})?([-]{1})?([0-9]{2})([ABCDEFG]{1})([SXRZW]{1})([0-9]{1})([0-9]{2})([A-Z0-9]{1})$/}
];

class Input extends Component { 

	constructor(props) {
		super(props);
		this.state = { input: '', vendor: '', type: '', parsedResult: '' };
	}

	onInputValueChanged = (event) => {
		let input = event.target.value.toUpperCase();
		let vendor = regex.find((v) => input.match(v.pattern) != null) || { pattern: null };
		let parsedResult = input.match(vendor.pattern) || [];

		this.setState({input: input, vendor: vendor, parsedResult: parsedResult.splice(1)});
	}

	render() {

		function GetData(props) {
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

		return (
			<div>
				<input
					type="text"
					onChange={ this.onInputValueChanged}
					value={this.state.input}
				/>

				<OutputHandler vendor= { this.state.vendor.vendor } result = { this.state.parsedResult } />

				<GetData />
			</div>
		);
	}
}

export default Input;
