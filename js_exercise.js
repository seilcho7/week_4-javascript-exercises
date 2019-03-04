// Write a function hello which given a name, says hello to the name. Use the following template:

// function hello(name) {
//     console.log(`Hello, ${name}!`)
// }
// hello("Mustache");

// Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.

// function hello(name="world") {
//     console.log(`Hello, ${name}!`)
// }
// hello();

// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

// function madlib(name, subject) {
//     const intro = (`${name}'s favorite subject in school is ${subject}.`);
//     return intro;
// }
// madlib("Anushka", "art");

// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// function tipAmount(bill, service) {
//     let tip;
//     if (service === "good") {
//         tip = bill * 0.2;
//     }
//     else if (service === "fair") {
//         tip = bill * .15;
//     }
//     else if (service === "bad") {
//         tip = bill * .1;
//     }
//     return tip;
// }
// tipAmount(100, "good");
// tipAmount(40, "fair");
// tipAmount(100, "bad");

// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

// function totalAmount(bill, service) {
//     let tip;
//     if (service === "good") {
//         tip = bill * 0.2;
//     }
//     else if (service === "fair") {
//         tip = bill * .15;
//     }
//     else if (service === "bad") {
//         tip = bill * .1;
//     }
//     return tip + bill;
// }
// totalAmount(100, "good");

// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

function splitAmount(bill, service, numbers) {
    let tip;
    if (service === "good") {
        tip = bill * 0.2;
    }
    else if (service === "fair") {
        tip = bill * .15;
    }
    else if (service === "bad") {
        tip = bill * .1;
    }
    return (tip + bill) / numbers;
}
console.log(splitAmount(100, "good", 5));
console.log(splitAmount(40, "fair", 2));
console.log(splitAmount(100, "bad", 2));