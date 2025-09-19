

// 1) Fruits array
let fruits = ["ვაშლი", "მსხალი", "კივი", "ბანანი", "მსხალი"];

// ა) splice - წაშლა მეორე ელემენტის (ინდექსი 1)
fruits.splice(1, 1);
console.log("splice:", fruits); // ["ვაშლი", "კივი", "ბანანი", "მსხალი"]

// ბ) slice - "კივი" და "ბანანი"
let sliced = fruits.slice(1, 3);
console.log("slice:", sliced); // ["კივი", "ბანანი"]

// გ) reverse - უკუღმა
let reversed = fruits.slice().reverse();
console.log("reverse:", reversed);

// დ) concat - ["საზამთრო", "ყურძენი"]
let newFruits = fruits.concat(["საზამთრო", "ყურძენი"]);
console.log("concat:", newFruits);
// ე) join - ერთ სტრინგად, მძიმეებით გამოყოფილი
let joined = fruits.join(", ");
console.log("join:", joined);



// 2) Classes array
let classes = [
  ["გიორგი", "ნინო", "მარიამი"],
  ["ლუკა", "სალომე", "თამარი"]
];

// ა) "მარიამი"
console.log(classes[0][2]);

// ბ) "ლუკა" და "თამარი"
console.log(classes[1][0], classes[1][2]);

// გ) დაამატე "ანრი" მეორე მასივში
classes[1].push("ანრი");
console.log(classes);
 


// 3) String methods
let text = "   Hello JavaScript   ";

// ა) trim
console.log(text.trim());

// ბ) toUpperCase
console.log(text.trim().toUpperCase());

// გ) toLowerCase
console.log(text.trim().toLowerCase());

// დ) length
console.log(text.trim().length);

// ე) charAt(1)
console.log(text.trim().charAt(1));

// ვ) concat
console.log("Hello".concat(" ", "World"));

// ზ) replace
console.log(text.trim().replace("JavaScript", "JS"));

// თ) split(" ")
console.log(text.trim().split(" "));

// ი) includes("JS")
console.log(text.trim().includes("JS"));

// კ) substring(0, 5)
console.log(text.trim().substring(0, 5));

// ლ) slice(6)
console.log(text.trim().slice(6));



// 4) Conditional statements
let age = 20;

if (age < 18) {
  console.log("მცირეწლოვანი ხარ");
} else {
  console.log("ზრდასრული ხარ");
}

// იგივე ternary ოპერატორით
console.log(age < 18 ? "მცირეწლოვანი ხარ" : "ზრდასრული ხარ");

// Switch example
let day = 3;
switch (day) {
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  case 7:
    console.log("კვირა");
    break;
  default:
    console.log("არასწორი დღე");
}



// 5) Loops
// 1-დან 10-მდე
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// მხოლოდ ლუწი 1-დან 20-მდე
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

