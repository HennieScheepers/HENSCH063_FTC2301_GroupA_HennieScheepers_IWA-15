// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { [1]: first } = data.lists[0]
const { [1]: second} = data.lists[1]
const { [1]: third } = data.lists[2]

const result = []

const extractBiggest = () => {
	let biggest = 0
	let firstValue = first[first.length -1 ] === undefined ? 0 : first[first.length -1]
	let secondValue = second[second.length - 1] === undefined ? 0 : second[second.length - 1]
	let thirdValue = third[third.length - 1] === undefined ? 0 : third[third.length -1]

	if (firstValue > secondValue && firstValue > thirdValue ) {
		biggest = firstValue
		first.pop()
	}

	if (secondValue > firstValue && secondValue > thirdValue) {
		biggest = secondValue
		second.pop()
	}

	if (thirdValue > firstValue && thirdValue > secondValue) {
		biggest = thirdValue
		third.pop()
	}
	return biggest
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())	

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)