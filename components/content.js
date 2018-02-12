import React from 'react';

export function ContentSamsung(props) {
	// idee in props send vender (lg or samsung or ....)
	return (
		<ul>
			<h1>Samsung</h1>

			<li>Technology:		<span>{props.values[0]}</span> </li>
			<li>Location:		<span>{props.values[1]}</span> </li>
			<li>Size in inches: <span>	{props.values[2]}</span> </li>
			<li>Model year: 	<span>	{props.values[3]}</span> </li>
			<li>Serie: 			<span>	{props.values[4]}</span> </li>
			<li>Feature: 		<span>	{props.values[5]}</span> </li>
			<li>Manufacturing info: <span>{props.values[6]}</span> </li>
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
			},
			oldSamsungTechnology = {
				'LN':'LCD',
				'FP':'Plasma',
				'HP':'Plasma',
				'HL':'DLP',
				'TX':'CRT'
			},
			oldSamsungModel = {
				'T':'2007',
				'S':'2006',
				'R':'2005',
				'P':'2004',
				'N':'2003',
				'M':'2002'
			},
			sonyModel = {
				'R':'Primary',
				'W':'Middle',
				'S':'Premium',
				'X':'Premium'
			},
			sonyYear = {
				'A':'2013',
				'B':'2014',
				'C':'2015',
				'D':'2016',
				'E':'2017',
				'F':'2018'
			}, 
			panasonicYear = {
				'A':'2014',
				'C':'2015',
				'D':'2016',
				'E':'2017'
			},
			panasonicResolutions = {
				'S':'Full HD',
				'X':'UHD',
				'R':'Curved HD',
				'Z':'OLED'
			}, panasonicCountry = {
				'B':'United Kingdom or Brazil',
				'U':'USA',
				'E':'Spain, Poland',
				'A':'Australia',
				'N':'France, Portugal, Canada'
			}, lgNonOledType = {
				'S':'Super UHD, Nano Cell Matrix',
				'U':'UHD LED',
				'E':'OLED until 2016',
				'L':'LED',
				'P':'Plasma up to 2012'
			}, lgNonOledYear = {
				'J':'2017',
				'H':'2016',
				'F':'2015',
				'G':'2015',
				'B':'2014',
				'C':'2014',
				'N':'2013',
				'A':'2013',
				'W':'2012',
				'M':'2012',
				'S':'2012',
				'V':'2017'
			}, lgNonOledTuner = {
				'T':'DVB-T',
				'C':'DVB-C',
				'S':'DVB-S2/T/C',
				'V':'DVB-S2/T2/C',
				'U':'HD',
				'B':'HD',
				'0':'DVB-T/C'
			}