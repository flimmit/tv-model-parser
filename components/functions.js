import { samsungTechnologyArray, samsungLocationArray, samsungModelArray } from './content';

export function functions(props) {
	var arr = props;

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

	if (arr[0] in samsungTechnologyArray) {
		for (let i = Object.keys(samsungTechnologyArray).length - 1; i >= 0; i--) {
			if (Object.keys(samsungTechnologyArray)[i] === arr[0]) {
				var techValue = Object.values(samsungTechnologyArray)[i];
			}
		}
	}

	if (arr[1] in samsungLocationArray) {
		for (let i = Object.keys(samsungLocationArray).length - 1; i >= 0; i--) {
			if(Object.keys(samsungLocationArray)[i] === arr[1]) {
				var locValue = Object.values(samsungLocationArray)[i];
			}
		}
	}

	if (model in samsungModelArray) {
		for (let i = Object.keys(samsungModelArray).length - 1; i >= 0; i--) {
			if (Object.keys(samsungModelArray)[i] === model) {
				var modelValue = Object.values(samsungModelArray)[i];
			}
		}
	}

	return { inches, serie, feature, info, model, techValue, locValue, modelValue };
}