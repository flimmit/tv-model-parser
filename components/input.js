import React, { Component } from 'react';
import { OutputHandler } from './content';

const regex = [
	{ 	manufactor: "Samsung", 
		vendor: "samsung", 
		pattern: /^([QUPLHK]{1})([NEA]{1})([0-9]{2})([A-FQMLKHFUS]{1,2})([0-9]{4})([A-Z]{1})([A-Z]{3})$/
	},
	{ 	manufactor: "Samsung (older models)", 
		vendor: "samsungOld", 
		pattern: /^([LNFPHTX]{2})?([-]{1})?([TSRPN]{1})([0-9]{2})([0-9]{2})([A-Z]{1})([A-Z]{1})([/A-Z0-9]{3})$/
	},
	{ 	manufactor: "LG", 
		vendor: "lgNonOled", 
		pattern: /^([0-9]{2})([SUELP]{1})([JHFGBCNAWMSV]{1})([0-9]{1})([0-9]{1})([0-9]{1})([TCUSVB0]{1})$/
	},
	{ 	manufactor: "LG (OLED)", 
		vendor: "lgOled", 
		pattern: /^([OLED]{4})([0-9]{2})([A-Z]{1})([0-9]{1})([TCSVUBt0]{1})$/
	},
	{ 	manufactor: "Sony", 
		vendor: "sony", 
		pattern: /^([KD]{2}([L]{1})?([-]{1})?)?([0-9]{2})([RWSX]{1})([A-Z]{1})?([0-9]{1})([0-9]{1})([0-9]{2})([A-Z]{4}?)$/
	},
	{ 	manufactor: "Sony (older models)", 
		vendor: "sonyOld", 
		pattern: /^([0-9]{2})([RWSX]{1})([0-9]{1})([0-9]{1})([0-9]{2})([A-Z]{1})$/
	},
	{ 	manufactor: "Panasonic", 
		vendor: "panasonic", 
		pattern: /^([TX]{2})?([-]{1})?([0-9]{2})([ABCDEFG]{1})([SXRZW]{1})([0-9]{1})([0-9]{2})([A-Z0-9]{1})$/
	}
];

class Input extends Component { 

	constructor(props) {
		super(props);
		this.state = { input: '', vendor: '', parsedResult: '' };
	}

	onInputValueChanged = (event) => {
		let input = event.target.value.toUpperCase();
		let vendor = regex.find((v) => input.match(v.pattern) != null) || { pattern: null };
		let parsedResult = input.match(vendor.pattern) || [];

		this.setState({input: input, vendor: vendor, parsedResult: parsedResult.splice(1)});
	}

	render() {

		return (
			<div>
				<input
					type="text"
					onChange={ this.onInputValueChanged}
					value={this.state.input}
				/>

				<OutputHandler 	manufactor= { this.state.vendor.manufactor } 
								vendor= { this.state.vendor.vendor } 
								result = { this.state.parsedResult } 
				/>
			</div>
		);
	}
}

export default Input;
