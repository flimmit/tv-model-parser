import React from 'react';

export function ContentSamsung(props) {
	return (
		<ul>
			<h1>Samsung</h1>

			<li>Technology: 		{props.values[0]} </li>
			<li>Location: 			{props.values[1]} </li>
			<li>Size in inches: 	{props.values[2]} </li>
			<li>Model year: 		{props.values[3]} </li>
			<li>Serie: 				{props.values[4]} </li>
			<li>Feature: 			{props.values[5]} </li>
			<li>Manufacturing info: {props.values[6]} </li>
		</ul>
	);
}

export var samsungTechnologyArray = {
				'Q':'QLED',
				'U':'LED',
				'P':'Plasma',
				'L':'LCD',
				'H':'DLP',
				'K':'OLED'
			},
			samsungLocationArray = {
				'N':'North America',
				'E':'Europe',
				'A':'Asia'
			}, 
			samsungModelArray = {
				'A':'2008',
				'B':'2009',
				'C':'2010',
				'D':'2011',
				'E':'2012',
				'F':'2013',
				'H':'2014',
				'HU':'2014 UHD',
				'L':'2015',
				'KU':'2016 UHD',
				'KS':'2016 SUHD',
				'M':'2017 HD',
				'MU':'2017 UHD',
				'Q':'2017 QLED'
			};