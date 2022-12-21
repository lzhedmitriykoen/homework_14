const palindromeInput = document.getElementById('palindrome_input');
const palindromeRes = document.getElementById('palindrome_res');
function checkPalindrome(){
    const  text = palindromeInput.value;
    console.log(`text - ${text}`);
    const res =isPalindrome(text);
    palindromeRes.textContent = (res===true)?'it is palindrome':'Not a palindrome';
}

function isPalindrome(str){
    const  palindromeText = str.trim().toLowerCase();
    return reverseStringcalc(palindromeText) === palindromeText;

}
const teverseInput = document.getElementById('reverse_input');
const reverseInput = document.getElementById('reverse_result');

function reverseString(){
    const text = reverseInput.value;
    const res =reverseStringcalc(text);
    reverseInput.textContent = res;
}

function reverseStringcalc(str){
    return str.split('').reverse().join('');
  //  if (str==="") {
   //     return "";
   // }else {
  //      console.log(str.substr('1'));
   //     console.log(str.charAt(0));
   //     return reverseStringcalc(str.substr('1')) + str.charAt(0);
  //  }
}

const stringValueInput = document.getElementById('string_value');
const characterValueInput = document.getElementById('cahracter_value');
const  resCalc = document.getElementById('re_calc');


function getCount(){
    const text = stringValueInput.value;
    const character = characterValueInput.value;
    resCalc.textContent = res.toString();
}

function countChar(str,c){
    let result = 0;
    for(let i =0; i<str.length;i++){
        if (str.charAt(i)===c){
            result++;
        }


    }
return result;
}

