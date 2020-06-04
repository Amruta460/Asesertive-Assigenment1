
		  const findMinMax = (inputArr) => {
		  let min = inputArr[0], max = inputArr[0];

		  for (let i = 1; i < inputArr.length; i++) {
			let value = inputArr[i]
			min = (value < min) ? value : min
			max = (value > max) ? value : max
		  }
		  return [min, max];
		}

	function fun() {
		//First Test case
		let firstArray = [37,-5,-15,-37,5,15];
		let [firstArrayMin, firstArrayMax] = findMinMax(firstArray);
		console.log(`Minimum: ${firstArrayMin}, Maximum: ${firstArrayMax}`) ;
		
		document.getElementById('min1').innerHTML=firstArrayMin;
		document.getElementById('max1').innerHTML=firstArrayMax;

		//Second Test case
		 let secondArray = [6,9,5,45,33,78];
		const [secondArrayMin, secondArrayMax] = findMinMax(secondArray);
		console.log(`Minimum: ${secondArrayMin}, Maximum: ${secondArrayMax}`) ;
		document.getElementById('min2').innerHTML=secondArrayMin;
		document.getElementById('max2').innerHTML=secondArrayMax;

		//Third test case
		const thirdArray = [9,21,15,97,59,25];
		const [thirdArrayMin,thirdArrayMax] = findMinMax(thirdArray);
		console.log(`Minimum: ${thirdArrayMin}, Maximum: ${thirdArrayMax}`);
		document.getElementById('min3').innerHTML=thirdArrayMin;
		document.getElementById('max3').innerHTML=thirdArrayMax;
	}