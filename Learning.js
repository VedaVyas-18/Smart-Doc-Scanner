var a = 20;
var b = 30;
const sum = (a, b) => {
    return a + b;      //returns sum of a and b.
}
console.log(sum(a,b)); //prints sum of a and b.
let c = 40;
console.log(sum(a,c)); //prints sum of a and c.
x={name:"VedaVyas", age:18, college:"ANITS"}; //Object initialization(Dictionary)
console.log(Object.keys(x)); //displays all the keys in obj x
console.log(Object.values(x)); //displays all the values in obj x
console.log(x["name"]);
console.log(x.age);
var {name,age} = x; //Object destructor
console.log(x);
var arr = ["Apple", "Mango", "Orange"];
console.log(arr[0]); //Displays Apple(index 0).
var newarr = arr.slice(0, 2); //Copies and adds first two elements of arr to newarr
console.log(newarr);
arr.unshift("StrawBerry"); //adds element to the first.
newarr.shift(); //deletes first element.
console.log(arr);
console.log(newarr);
newarr.push("StrawBerry"); //adds element at the last.
arr.pop(); //deletes last element.
console.log(arr);
console.log(newarr);
for(i=0; i<5; i++){
    console.log(i+1);
}
i = 0;
while(i<5){
    console.log(i+1);
    i++;
}
i=0;
do{
    console.log(i+1);
    i++;
}while(i<5);