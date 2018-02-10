import React, { Component } from 'react';

class Input extends Component { 

	constructor(props) {
		super(props);
		this.state = { input: '', value: '' };
		this.handleChangeInSelect = this.handleChangeInSelect.bind(this);
	}

	handleChangeInSelect(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		const isInputCorrect = this.state.input;
		const samsungRegex = /^[QUPLHKquplhk]{1}[NEAnea]{1}[0-9]{2}[A-FQMLKHFa-fqmlkhf]{1}([USus]{1})?[0-9]{4}[a-zA-Z]{1}[a-zA-Z]{3}$/g;
		const testInput = samsungRegex.test(isInputCorrect);
		
		function PutSamsungData() {
			const input = isInputCorrect.toUpperCase();
			const arr = Array.from(input);

			var technologyArray = {
				"Q":"QLED",
				"U":"LED",
				"P":"Plasma",
				"L":"LCD",
				"H":"DLP",
				"K":"OLED"
			},
			locationArray = {
				"N":"North America",
				"E":"Europe",
				"A":"Asia"
			}, 
			inches = arr[2] + arr[3],
			modelArray = {
				"A":"2008",
				"B":"2009",
				"C":"2010",
				"D":"2011",
				"E":"2012",
				"F":"2013",
				"H":"2014",
				"HU":"2014 UHD",
				"L":"2015",
				"KU":"2016 UHD",
				"KS":"2016 SUHD",
				"M":"2017 HD",
				"MU":"2017 UHD",
				"Q":"2017 QLED"
			},
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

			if (arr) {
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
					<ul>
						<h1>Samsung</h1>

						<li>Technology: 		{techValue} </li>
						<li>Location: 			{locValue} </li>
						<li>Size in inches: 	{inches} </li>
						<li>Model year: 		{modelValue} </li>
						<li>Serie: 				{serie} </li>
						<li>Feature: 			{feature} </li>
						<li>Manufacturing info: {info} </li>
					</ul>
				);
			}
		}

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
					<select value={this.state.value ? this.state.value: "samsungRegex"} 
							onChange={this.handleChangeInSelect} >
						<option value="samsungRegex">Samsung</option>
						<option value="lg_regex">LG</option>
						<option value="sony_regex">Sony</option>
						<option value="panasonic_regex">Panasonic</option>
					</select>
				</p>

				<input
					type="text"
					value={this.state.input}
					onChange={event => this.setState({ input: event.target.value })}
					autoFocus
				/>

				<GetData isInputCorrect={false} />
			</div>
		);
	}
}

export default Input;
