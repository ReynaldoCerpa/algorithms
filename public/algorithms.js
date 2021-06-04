


/* //URLify
URLify("Mr John Smith");

function URLify(text){
    let str = "";
    for(let x in text){
        if(text.charAt(x) == " "){
            str += "%20";
        } else {
            str += text.charAt(x);
        }
    }
    console.log(str);
}
*/

/*
// Reverse string
reverseString("hello");

function reverseString(text){
    let reverse = "";
    let x;
    let length = text.length;
    
    for(x in text){
        reverse += text.charAt((length-x)-1);
    }
    console.log(reverse);
} */ 
