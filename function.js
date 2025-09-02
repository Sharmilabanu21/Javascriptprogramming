//function 
var favactor="Vijai" //variable created
var favactress="sai" //variable created
var favmovie="ghilli" //variable created
function favorite() //function created
{ //block start
    console.log("My favorite actor is "+favactor) //write in function
    console.log("My favorite actress is "+favactress)//write in function
    console.log("My favorite movie is "+favmovie)//write in function
}
favorite() //function call

//__________________________________________________________________//

//function Parameter
function add(a, b) //create a variable in function(a,b is a Parameter)
 {
  console.log(a + b) //Read
}
add(10, 20) //call function with variables

//__________________________________________________________________//

function area(l, b) //create a variable in function(a,b is a Parameter)
 {
    var a=l*b //variable created
    console.log("Area is "+a) //Read
 }
 var length=10 //variable created no need
 var breadth=20 //variable created no ned
 area(length, breadth) //call function with variables

 //__________________________________________________________________//

 //Return keyword in function

 function myname()
  {
     return "sharmi"
 }
var a=myname() //function call and the func will return sharmi string
console.log(a) //print the value

//__________________________________________________________________//

function be(a,b)
{
    return a+b
}
var total=be(10,20) //function call
console.log(total) //print 