//write a function called reverseString that will accept a string, s, as an argument.


//Method 1
function reverseString(s) {
    let reverseString = [""];

    for (i=0; i<=s.length-1; i--);

    reverseString+=s[i];

    return reverseString;


}

//reverse() method

function reverseString(s) {
    let reverseString = s.split("");
    reverseString.reverse();

    return reverseString.join("");

}
