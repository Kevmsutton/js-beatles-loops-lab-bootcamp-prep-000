function theBeatlesPlay(musicians, instruments){
	let array = []
	for (let i = 0; i<musicians.length; i++){
		console.log(i)
		array.push(`${musicians[i]} plays ${instruments[i]}`)
	}
return array
}
console.log(theBeatlesPlay(["John Lennon", "Billy Briggs"], ["Drums", "Bongoes"]))

function johnLennonFacts(facts){
let array2 = []
let i = 0 
	while (i <facts.length){
// i should start at minus one and end 1 before the end 
array2.push(facts[i] + "!!!")	
	i++
}
return array2
}
function iLoveTheBeatles(num){
let array = []
let i = 0
do {
i = i + 1;
array.push("I love the Beatles!")	
}
while(i < 15 - num)
return (array)
}
console.log(iLoveTheBeatles(10))
