// // CHALENGE 1: REVERSE A STRING
// // Return a string in reverse
// // ex. reverseString('hello') === 'olleh'

// function reversString(str){
// 	// const strArr = str.split('')
// 	// 			      .reverse('')
// 	// 			      .join('');

// 	// console.log(strArr);
// 	let reversString = '';
// 	for(let i = 0; i<=str.length - 1; i++){
// 		reversString = str[i] + reversString;
// 		// console.log(str[i]);
// 	}
// 	return reversString;
// }

// function isPalindrom(str){}

// const output = reversString('hello');

// // console.log(output);

// // function longestWord(sen){
// // 	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
	
// // }

// function capitalizeLetters(str) {
// // 	const strArr = str.toLowerCase().split(' ');
// // console.log(strArr);
// // 	for(let i = 0; i < strArr.length; i++){
// // 		console.log(strArr[i].substring(1));
// // 		strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
// // 		strArr[i].substring(1);
// // 	}
// // 	return strArr.join(' ');
// return str
// 	.toLowerCase()
// 	.split(' ')
// 	.map(function(word) {
// 		 word[0].toUpperCase() + word.substring(1);
// 		console.log(word[0]);
// 	})

// 	.join(' ');
// 	return;
// }

// const output1 = capitalizeLetters('i love javascript');

// console.log(output1);
// call function

// reverse string

function reversString(str) {
// return str.split('')
// 		  .reverse()
// 		  .join('');

/////////////////////////

// old school way :)

// let revString = '';
// for(let i = str.length - 1; i >= 0; i--){
// 	revString = revString + str[i];
// 	console.log(revString);
// }
// return revString;

	
// 	let revString = '';
// 	for(let i = 0; i <= str.length - 1; i++){
// 		revString = str[i] + revString;
// 		console.log(revString);
// 	}
// return revString;


/////////////////////////
// let revString = '';
// for(let char of str){
// 	revString = char + revString;
// }
// return revString;

// let revString = '';
// str.split('').forEach((char, i)  => 
// 	revString = i + revString);


// return revString;

return str.split('').reduce((char, revString) =>
	 revString + char);
}





// const output = reversString('Hello');

// console.log(output);

function isPalindrome(str){
	const revString = str.split('').reverse().join('');
	return str === revString;
}

const output1 = isPalindrome('madam');

// console.log(output1);

function reverseInteger(int){
const reverseInt = int.toString()
					  .split('')
					  .reverse()
					  .join('');
return parseInt(reverseInt) * Math.sign(int);
}

const ouptut2 = reverseInteger(-12345);

// console.log(ouptut2);

function capitalizeLetters(str){
	// strArr = str.toLowerCase()
	// 			.split(' ');
	// for(let i = 0; i < strArr.length; i++){
	// 	strArr[i] = strArr[i].substr(0, 1).toUpperCase() + strArr[i].substr(1);
	// 	console.log(strArr[i]);
	// }			
	// console.log(strArr);
	// return strArr.join(' ');

	// return str.toLowerCase()
	// 		  .split(' ')
	// 		  .map(word => word[0].toUpperCase() + word.substr(1))
	// 		  .join(' ');	

	return str.replace(/\b[a-z]/gi, function(char){
		return char.toUpperCase();
	});
}

const output3 = capitalizeLetters('i love javascript');

// console.log(output3);

function maxCharacter(str){
	const charMap = {};
	let charNum = 0;
	let charName = '';

	str.split('').forEach(function(char) {
		if(charMap[char]){
			charMap[char]++
		}else{
			charMap[char] = 1;
		}
	});
	//console.log(charMap);
	for(let ch in charMap){
debugger;
		if(charMap[ch] > charNum){
			charNum = charMap[ch];
			charName = ch;

		}
	}

	return charName + "=" + charNum;
}

const output4 = maxCharacter('javascriptttt');

// console.log(output4);

function fizzBuzz(){
	for(let i = 1; i <= 100; i++){
		if(i % 15 === 0){
			console.log('fizzBuzz');
		}
		else if(i % 3 === 0){
			console.log('fizz')
		}
		else if(i % 5 === 0){
			console.log('buzz');
		}
		else{
			console.log(i);
		}
	}
}

//fizzBuzz();

function longestWord(sen){
	// Create filtered arayy
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

	const sorted = wordArr.sort((a, b) => b.length - a.length);
;
//Sord by length
	

	// if multiple words, put into array
	const lengestWordArr = sorted.filter((word) =>  word.length === sorted[0].length);
	// console.log(lengestWordArr);


	// Check if more than one array val
	if(lengestWordArr.length === 1){
		return lengestWordArr[0];
	}else {
		return lengestWordArr;
	}
}

const output5 = longestWord('Hello my, name is   Georgi');

// console.log(output5);

function chunkArray(arr, split){
 //  chunkedArray = [];
 //  let i = 0;

	// while(i < arr.length){
	// 	chunkedArray.push(arr.slice(i, i + split));
	// 	i+=split;
	// }
	// return chunkedArray;

	const chunkedArray = [];

	arr.forEach(function(val){
		const last = chunkedArray[chunkedArray.length - 1];
		
		if(!last || last.length === split){
			chunkedArray.push([val]);
			 console.log(chunkedArray);
		}else {
			last.push(val);
		}
	});
	 //return chunkedArray;
}	

const output6 = chunkArray([1,2,3,4,5,6,7], 2);
console.log(output6);