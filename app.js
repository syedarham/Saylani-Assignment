
// 1.function to reverse a number

// function reverse(num){
// let x = num.toString().split("");
// let reversed = x.reverse().join("");
// return reversed;
// } 
// console.log(reverse(456))

// 2. function that checks whether a passed string is palindrome or not

// function pal()
// {
//    var x = document.getElementById("a").value;
//    var res = "";
//     for(i=x.length-1 ; i>=0 ; i--)
//         {
//            res += x[i]; 
//        }
//     if(x == res)
//         {
//             alert("Palindrome String");
//        }
//    else
//         {
//             alert("Not Palindrome");
//         }
//     }

// 3. Write a JavaScript function that generates all combinations of a string.

// function combination_Of_String(str){
// var list_of_String = [];
// for (var i = 0 ; i < str.length ; i ++){
//     for (var j = i + 1 ; j < str.length + 1 ; j ++){
//         list_of_String.push(str.slice(i,j))
//    }
// }
// return list_of_String;
// }
// console.log(combination_Of_String("dog"));

// 4.  Write a JavaScript function that returns a passed string with letters in alphabetical order.

// function alph_order(str){
//     return str.split("").sort().join("")
//      }
// console.log(alph_order("webmaster"))

// 5. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  

//     function longWord(string){
    //     var newString = string.split(" ");
    //     newString.sort(function(a, b){return b.length - a.length});
    //     return newString[0]
    //   }
    //   console.log(longWord("saylani mass comunication"));
    
    // 6. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

    //       function countVowels(str){
//     return (str.match(/[aiueo]/gi) || []).length
// }
// console.log(countVowels("The quick brown fox"))   

      // 7 . Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

//       function test_prime(n)
// {
//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }
// console.log(test_prime(3));

  // 8.Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

//   function second_lowest_and_second_greatest(arr1){
//    arr1.sort();
//     var n = arr1.length;
//     var lowest_number = arr1[1];
//     var greatest_number = arr1[n-2];
//     console.log("Second lowest number is: " + lowest_number + " " + "and " + " Second greatest number is: " + greatest_number) }
//      second_lowest_and_second_greatest([5,8,9,6,3,2,1,0]);

    // 9. Write a JavaScript function which accepts an argument and returns the type.

//     function data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }    
//     return typeof value;
// }
// console.log(data_type(13));
// console.log(data_type('saylani'));
// console.log(data_type(true));
// console.log(data_type(function (my_name){}));
// console.log(data_type());

    // 10. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("saylani gulshan campus"));