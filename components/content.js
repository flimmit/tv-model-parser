import React from 'react';


import DB from './db.js';


const getVendorInformations = (sVendor, arrValues = []) => {

	arrValues = arrValues || [];
	let resultObj = {};

	for (var key = arrValues.length - 1; key >= 0; key--) {

		let v = arrValues[key];

		if(DB[sVendor][key] && DB[sVendor][key]['values']) {	

			resultObj[DB[sVendor][key]['label']] = DB[sVendor][key]['values'][v];

		} else {
			resultObj[DB[sVendor][key]['label']] = v;
		}
	}
	return resultObj;
};

const Item = (props) => {
	var r = getVendorInformations(props.result.vendor, props.result.result);
	let keys = Object.keys(r);
	let values = Object.values(r);

	let element = <li>Nothing hier.</li>;

	for (var i = keys.length - 1; i >= 0; i--) {
		element = <li>{keys[i]}: <span>{values[i]}</span></li>;
	}

	console.log(element);

	return element;
	
};

export const OutputHandler = function(props) {

	return (
		<ul>
			<h1>{ props.vendor }</h1>

			<Item result={props} />

		</ul>
	);
}
