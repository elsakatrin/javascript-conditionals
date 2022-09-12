console.log("hello"); //Put this here at first to see if it was linked correctly
//Project: Javascript conditionals

//Here are the randomized data I got from the guides
//Made objects into array
let people = [
    {
    "name": "Kimberly Hallawell",
    "birthdate": new Date('3/05/1976'),
    "children": "3",
    "country": "Slovenia",
    "knowsProgramming": false,
    },
    {
        "name": "Corrina Ffoulkes",
        "birthdate": new Date('7/4/1994'),
        "children": "2",
        "country": "Peru",
        "knowsProgramming": true,
    },
    {
        "name": "Peggi Dominicacci",
        "birthdate": new Date('7/14/1981'),
        "children": "2",
        "country": "Greece",
        "knowsProgramming": false,
    },
    {
        "name": "Zebulen Milbourne",
        "birthdate": new Date('1/10/1998'),
        "children": "5",
        "country": "Fhilippines",
        "knowsProgramming": true,
    },
    {
        "name": "Nicholle Durrett",
        "birthdate": new Date('10/20/2001'),
        "children": "4",
        "country": "Albania",
        "knowsProgramming": false,
    }
]
//Here I filtered out the people that know how to program - the console will show who they are 
let programs = people.filter((person) => {
    return person.knowsProgramming  
})
console.log(programs);



//Here I find out which one is older, Kimberly or Nicholle 
let Kimberly = people[0] //Kimberly is the first one on the list of objects that why she's number 0
let Nicholle = people[4] //Nicholle is last and that why she's number 4
if (Kimberly.birthdate < Nicholle.birthdate){ //Here I ask the program to find out who's older. 
    console.log("Kimberly Is Older") //If kimberly is older this prints
}
else { //if the 'question' or statement above is not correct then this one is the answer
    console.log("Nicholle is older") //If nicholle is older this prints 
}



//Here I find out if Corrina and Peggi have the same amount of children 
let corrina = people[1]
let peggi = people [2]
if (corrina.children == peggi.children) { //corrina and peggi have the same amount of children
    console.log("Corrina and Peggi have the same amount of children") //if yes this prints 
}
else {
    console.log("Corrina and Peggi do not have the same amount of children") //if no this prints
}


//Here I find out if Kimberly and Zebulen both know how to program
let kimberly = people[0]
let zebulen = people [3]
if (kimberly.knowsProgramming == zebulen.knowsProgramming) {
    console.log("Yay!") //If both know how to program console prints Yay!
}
else {
    console.log("LMGTFY") //If both of them don't know how to program console prints LMGTFY
}



//Here the console log prints the greeting that's appropriate for the user depending on their nationality
//I used the switch statement 
let = corrina = people[1]
switch (corrina.country) {
    case "Iceland": //in case of Iceland the console log prints Hæ, same as with the others below
    console.log("Hæ")
    break;
    case "spain":
    console.log("Hola")
    break;
    case "Korea":
    console.log("여보세요")
    break;
    default: //Defult is the one that that prints if non of the above is approriate
    console.log("Hello")
}


//Find out if the persons name is longer than 5 characters
corrina //I've already made a 'let' for corrinas name and declared who she was in the array so i don't need to do it again (even i've already done it 2x but didn't know that javascript had such a good memory! I will remember it from now on :)  )
let answer = corrina.name.length <= 5 ? "name shorter than 6 letters":"name is longer than 5 letters" //I asked is corrinas name length shorter less than 5 (or is) letters?
//After the question mark basically means 'if' and after the ':' basically means else
console.log(answer)

