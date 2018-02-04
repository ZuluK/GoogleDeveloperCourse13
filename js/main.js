

//Persistent data structures for efficient immutablity

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    solved = true;
    suspect = "Mr. Parkes";
} else if (room === "gallery") {
    weapon = "trophy"
    solved = true;
    suspect = "Ms. Van Cleve";
} else if (room == "ballroom") {
    weapon = "poison";
    solved = true;
    suspect = "Mr. Kalehoff";
} else {
    weapon = "pool stick";
    solved = true;
    suspect = "Mrs. Sparr";

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num=99;

while (num>=1) {
    // check value of num
    if (num>2){
        console.log(num+ " bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+(num-1)+ " bottles of juice on the wall!");
    }
    else if (num==2){
        console.log(num+ " bottles of juice on the wall! "+num+ " bottles of juice! Take one down, pass it around... "+(num-1)+ " bottle of juice on the wall!");
    }
    else{
        console.log(num+ " bottle of juice on the wall! "+num+ " bottle of juice! Take one down, pass it around... "+(num-1)+ " bottles of juice on the wall!");
    }
    
