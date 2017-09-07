export function classify(key, value){
	if(value[0] === '-') value = key+value;
	return `${key} `+ value.split(' -').join(` ${key}-`);
}
