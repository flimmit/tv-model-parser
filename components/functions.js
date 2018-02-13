import { samsungTechnologyArray, samsungLocationArray, samsungModelArray } from './content';

export function samsungFunction(props) {
	console.log(props);
	var arr = props;

	var inches = arr[3],
		serie = arr[5],
		feature = arr[6],
		info = arr[7];

	if (arr[1] in samsungTechnologyArray) {
		for (let i = Object.keys(samsungTechnologyArray).length - 1; i >= 0; i--) {
			if (Object.keys(samsungTechnologyArray)[i] === arr[1]) {
				var techValue = Object.values(samsungTechnologyArray)[i];
			}
		}
	}

	if (arr[2] in samsungLocationArray) {
		for (let i = Object.keys(samsungLocationArray).length - 1; i >= 0; i--) {
			if(Object.keys(samsungLocationArray)[i] === arr[2]) {
				var locValue = Object.values(samsungLocationArray)[i];
			}
		}
	}

	if (arr[4] in samsungModelArray) {
		for (let i = Object.keys(samsungModelArray).length - 1; i >= 0; i--) {
			if (Object.keys(samsungModelArray)[i] === arr[4]) {
				var modelValue = Object.values(samsungModelArray)[i];
			}
		}
	}

	return { inches, serie, feature, info, techValue, locValue, modelValue };
}