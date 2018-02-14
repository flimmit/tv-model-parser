import React from 'react';
import DB from './db.js';

const getVendorInformations = (sVendor, arrValues = []) => {

	arrValues = arrValues || [];
	let resultObj = {};

	for (var key = arrValues.length - 1; key >= 0; key--) {

		let v = arrValues[key];

		try {
			if(DB[sVendor][key] && DB[sVendor][key]['values']) {	

				resultObj[DB[sVendor][key]['label']] = DB[sVendor][key]['values'][v];

			} else {
				resultObj[DB[sVendor][key]['label']] = v;
			}
		} catch(error) {
				console.log(error);
		}
	}
	return resultObj;
};

export const OutputHandler = function(props) {

	if (props.result.length === 0) {
		return (
			<div>
				<h1>Please insert TV model number into input.</h1>
				<p>Example: UE55F8000AFXZ</p>
			</div>
		);
	}

	var r = getVendorInformations(props.vendor, props.result);
	const o = Object.keys(r).map( (k) => <li key={k}>{k}: <span className="value">{r[k]}</span></li>);

	return (
		<ul>
			<h1>{ props.manufactor }</h1>
			{ o }
		</ul>
	);
}
