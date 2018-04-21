function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
	let n = 0;
	let money = 0
	while (startPriceNew > money + startPriceOld) {
		startPriceNew = Number((startPriceNew * 0.01*(100 - percentLossByMonth)).toFixed(2));
		startPriceOld = Number((startPriceOld * 0.01*(100 - percentLossByMonth)).toFixed(2));
		money += savingperMonth;
		percentLossByMonth += (1 - ++n % 2)*0.5;
	}
	return [n, Math.round(startPriceOld + money - startPriceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766]);
console.log(nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000]);