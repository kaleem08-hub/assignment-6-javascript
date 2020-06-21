//===CHAPTER 21-25===Task 1===
{/* <script>
    var FirstName=prompt('Enter your First Name');
    var LastName=prompt('Enter your Last Name');
    var FullName= FirstName +" "+ LastName;
    alert(' Welcome Dear ' + FullName)
</script> */}

//===CHAPTER 21-25===Task 2===
{/* <script>
    var FavCellphoneName=prompt('Enter your Favourite Cellphone Name');
    var a=FavCellphoneName.length;
    document.write('My Favourite Phone is '+FavCellphoneName+'<br/>');
    document.write('Length of String is '+a)
</script> */}

//===CHAPTER 21-25===Task 3===
{/* <script>
    var str='Pakistani';
    var a=str.indexOf('n');
    document.write('String: '+str+'<br/>');
    document.write('Index of "n": '+a)
</script> */}


//===CHAPTER 21-25===Task 4===
{/* <script>
    var str='Hello World';
    var a=str.lastIndexOf('l');
    document.write('String: '+str+'<br/>');
    document.write('Last Index of "l": '+a)
</script> */}


//===CHAPTER 21-25===Task 5===
{/* <script>
    var str='Pakistani';
    var a=str.charAt(3);
    document.write('String: '+str+'<br/>');
    document.write('Character Index at 3: '+a)
</script> */}


//===CHAPTER 21-25===Task 6===
{/* <script>
        var FirstName=prompt('Enter your First Name');
        var LastName=prompt('Enter your Last Name');
        var FullName= FirstName.concat(' '+LastName);
        alert(' Welcome Dear ' + FullName)
    </script> */}

//===CHAPTER 21-25===Task 7===
{/* <script>
        var CityName='Hyderabad';
        var ReplacedName=CityName.replace('Hyder','Islam');
        document.write('City: ' +CityName+'<br/>');
        document.write('After Replacement: ' + ReplacedName);
    </script> */}

//===CHAPTER 21-25===Task 8===
{/* <script>
        var message = 'Ali and Sami are best friends. They play cricket and football together. ';
        var ReplacedMessage = message.replace(/and/g,'&');
        document.write(ReplacedMessage);
    </script> */}


//===CHAPTER 21-25===Task 9===
{/* <script>
        var string='472';
        var number=Number('472');
        typeof '472';
        typeof number;
        document.write('Value: '+string+'<br/>Type: '+typeof '472'+'<br/>');
        document.write('Value: '+number+'<br/>Type: '+typeof number+'<br/>');
    </script> */}


//===CHAPTER 21-25===Task 10===
{/* <script>
        var input=prompt('Please Input any Single Word:');
        var output=input.toUpperCase();
        document.write('User Input: '+input+'<br/>');
        document.write('Upper Case: '+output);
    </script> */}


//===CHAPTER 21-25===Task 11===



//===CHAPTER 21-25===Task 12===
{/* <script>
        var number=35.36;
        var convert=number.toString();
        var removedot=convert.replace(".","");
        document.write("Number: "+number+"<br>");
        document.write('Result: '+removedot);
    </script> */}


//===CHAPTER 21-25===Task 13===


//===CHAPTER 21-25===Task 14===
{/* <script>
        var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
        var input=prompt("Welcome to ABC Bakery, What do you want to order Sir/Ma'am?");
        var lower=input.toLowerCase();
        for(i=0; i<A.length; i++){
            var index=A.indexOf(input);
            if(lower===A[i]){
                alert(input+" is available at index "+i+" in our bakery");
                break
            }
            else{
                alert("We are sorry "+input+" is not available in our bakery")
                break;
            }
        }
    </script> */}




//===CHAPTER 21-25===Task 15===


//===CHAPTER 21-25===Task 16===
{/* <script>
       var university = 'University of Karachi';
       var a=university.split("");
       document.write(a)
    </script> */}

//===CHAPTER 21-25===Task 17===
{/* <script>
       var input=prompt("Enter any Single Word");
       var result=input.charAt(input.length-1);
       document.write("User Input is: "+input+"<br/>");
       document.write("Last Character of input: "+result)
    </script> */}

//===CHAPTER 21-25===Task 18===
{/* <script>
       var str="The quick brown fox jumps over the lazy dog";
       var lower=str.toLowerCase();
       var count = (lower.match(/the/g) || []).length;
       alert(count);
    </script> */}


//===CHAPTER 26-30===Task 1===
{/* <script>
       var input=prompt("Enter Any Number: ");
       if(input>0){
           document.write("Number: "+input+"<br>");
           document.write("Round Off Value: "+(Math.round(input))+"<br>");
           document.write("Floor Value: "+(Math.floor(input))+"<br>");
           document.write("Ceil Value: "+(Math.ceil(input))+"<br>");
       }
    </script> */}


//===CHAPTER 26-30===Task 2===
{/* <script>
       var input=prompt("Enter Any Number: ");
       if(parseFloat(input)<0){
           document.write("Number: "+input+"<br>");
           document.write("Round Off Value: "+(Math.round(input))+"<br>");
           document.write("Floor Value: "+(Math.floor(input))+"<br>");
         document.write("Ceil Value: "+(Math.ceil(input))+"<br>");
       }
    </script> */}


//===CHAPTER 26-30===Task 3===
{/* <script>
       var input=prompt("Enter Any Number: ");
       document.write("The absolute value of "+input+" is "+(Math.abs(input)));
    </script> */}


//===CHAPTER 26-30===Task 4===
{/* <script>
        var a=((Math.random() *6 ) +1);
        var b=Math.floor(a);
       document.write("Random Dice Value is " +b);
    </script> */}

//===CHAPTER 26-30===Task 5===
{/* <script>
        var a=((Math.random() *2 ) +1);
        var b=Math.floor(a);
        if(b==1){
            document.write(+b+"<br>Random Coin Value: Tails");
        }
        else{
            document.write(+b+"<br>Random Coin Value: Heads")
        }
    </script> */}

//===CHAPTER 26-30===Task 6===
{/* <script>
        var a=((Math.random() * 100) + 1);
        var b=Math.floor(a);
        document.write("random number between 1 and 100: "+b);
    </script> */}


//===CHAPTER 26-30===Task 7===
{/* <script>
        var a=prompt("Enter your weight in kilograms");
        var b=parseFloat(a);
        var c=["50","50kgs","50.2kgs","50.2kilograms"];
        for(i=0; i<c.length;i++)
        if(a===c[i]){
        document.write("The weight of User is: "+b+" kilograms");
        }
    </script> */}



//===CHAPTER 26-30===Task 8===
{/* <script>
        var a=((Math.random() * 10) + 1);
        var b=Math.floor(a);
        var c=prompt("Input a Number betwenn 1 & 10")
        document.write("The random No. is: "+b+"<br>The User Input No. is: "+c);
        if(b==c){
            alert("COngratulations! You have made it.")
        }
        else{
            alert("Sorry! Try Again")
        }
    </script> */}



//===CHAPTER 31-34===Task 1===
{/* <script>
        var d = new Date();
        document.write(d);
    </script> */}


//===CHAPTER 31-34===Task 2===
{/* <script>
        var d = new Date();
        var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
        var currentMonth=month[d.getMonth()];
        alert("Current Month is: "+currentMonth);
    </script> */}

//===CHAPTER 31-34===Task 3===
{/* <script>
        var d = new Date();
        var weekday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        var currentday=weekday[d.getDay()];
        alert("Today is: "+currentday);
    </script> */}


//===CHAPTER 31-34===Task 4===
{/* <script>
        var d = new Date();
        var weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var currentday=weekday[d.getDay()];
        if(currentday=== "Saturday" || "Sunday"){
        alert("Today is: "+currentday);
        alert("It's a Fun day")}
    </script> */}

//===CHAPTER 31-34===Task 5===
{/* <script>
        var d = new Date();
        var currentdate=d.getDate();
        if(currentdate<16){
        alert("First fifteen days of the month");}
        else{
            alert("Last days of the month");
        }
    </script> */}


//===CHAPTER 31-34===Task 6===
{/* <script>
        var d = new Date();
        var currentdate=d.setFullYear(2015, 11, 05);
        var backdate=d.setFullYear(1970, 00, 01);
        var midnightdate=d.setHours(0);
        var curdate= new Date(currentdate);
        var totalmiliseconds=(currentdate - midnightdate);
        var minutes=totalmiliseconds/(1000*60*60);
   document.write("Current Date: "+curdate+"<br>");
   document.write("Elapsed milliseconds since 01 Jan 1970 "+totalmiliseconds+"<br>");
   document.write("Elapsed minutes since 01 Jan 1970 "+minutes);
   </script> */}


//===CHAPTER 31-34===Task 7===
{/* <script>
        var d = new Date();
        var currenttime=d.getHours();
        document.write(currenttime)
        if(0<=currenttime<12){
        alert("It's AM");}
        else{
            alert("It's PM");
        }
    </script> */}


//===CHAPTER 31-34===Task 8===
{/* <script>
        var d = new Date();
        var time=d.setFullYear(2020, 11, 31);
        var date = new Date(time);
        var laterDate=date.toString();
        document.write("LaterDate: "+laterDate);
    </script> */}


//===CHAPTER 31-34===Task 9===
{/* <script>
        var d = new Date();
        var time=d.setFullYear(2015, 5, 18);
        var firstramzan = new Date(time);
        var currentdate=new Date();
        var totaldays=(currentdate - firstramzan);
        var convert=totaldays/(1000*60*60*24*12);
        document.write("First Ramzan is on: "+firstramzan+"<br>");
        document.write("Current Date is: "+currentdate+"<br>");
        document.write((Math.round(convert))+ " Days have been passed since 1st Ramzan 2015");
    </script> */}


//===CHAPTER 31-34===Task 10===
{/* <script>
        var d = new Date();
        var referencedate=d.setFullYear(2015, 11, 05);
        var beginning2015 =d.setFullYear(2015, 00, 01);
        var refdate= new Date(referencedate);
        var begdate= new Date(beginning2015);
        var totalseconds=(referencedate - beginning2015);
        var convert=totalseconds/(1000*60);
   document.write("On reference date: "+refdate+"<br>");
   document.write(convert+" seconds had passed since beginning of 2015");
   </script> */}


//===CHAPTER 31-34===Task 11===
{/* <script>
        var b= new Date();
        var d = new Date();
        var hours=b.setHours(-1);
   document.write("Current Date: "+d+"<br>");
   document.write("1 Hour ago, it was "+b+"<br>");
   </script> */}


//===CHAPTER 31-34===Task 12===
{/* <script>
        var b= new Date();
        var d = new Date();
        var hours=b.setFullYear(1920);
   alert("current time "+d);
   alert("100 years back, it was "+b);
   </script> */}


//===CHAPTER 31-34===Task 13===
{/* <script>
        var input=prompt("Please Enter your Age: ");
        var d= new Date();
        var Year=d.getFullYear();
        var calculateage=Year-input;
        document.write("Your age is: "+input+"<br>");
        document.write("Your birth Year is: "+calculateage);
    </script> */}


//===CHAPTER 31-34===Task 14===
{/* <script>
        var customername=prompt("Please Enter your Name: ");
        var d=new Date();
        var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
        var Month1=month[d.getMonth()-1];
        var units=prompt("Please Enter Number of Units: ");
        var chargesperunit=16;
        var NetAmountPayableWithinDueDate = units * chargesperunit;
        var LPS=NetAmountPayableWithinDueDate * 0.05 ;
        var GrossAmountPayableAfterDueDate = NetAmountPayableWithinDueDate + LPS ;
        document.write("<h1> K-Electric Bill</h1><br><br><br>")
        document.write("Customer Name: "+customername+"<br>");
        document.write("Month: "+Month1+"<br>");
        document.write("No: of Units: "+units+"<br>");
        document.write("Charges Per Unit: "+chargesperunit+"<br><br>");
        document.write("Net Amount Payable (within Due Date): "+NetAmountPayableWithinDueDate+"<br>");
        document.write("Late Payment Surcharges: "+LPS+"<br>");
        document.write("Gross Amount Payable (after Due Date): "+GrossAmountPayableAfterDueDate+"<br>");
    </script> */}


//===CHAPTER 35-38===Task 1===
{/* <script>
function currentdate(){
  var d= new Date();
  document.write(d)
}
currentdate()   
    </script> */}


//===CHAPTER 35-38===Task 2===
{/* <script>
function username(){
    var firstname=prompt("Enter your first name: ");
    var lastname=prompt("Enter your last name: ");
    var fullname=firstname +" "+ lastname;
    document.write("Welcome "+fullname)
}
username()    
    </script> */}



//===CHAPTER 35-38===Task 3===
{/* <script>
function sum(){
    var a=prompt("Enter first number: ");
    var b=prompt("Enter second number: ");
    var addition=Number(a) +Number(b);
    document.write("Sum is: "+addition)
}
sum()    
    </script> */}


//===CHAPTER 35-38===Task 4===
{/* <script>
function calculator(){
    var a=prompt("Enter first number: ");
    var b=prompt("Enter second number: ");
    var c=prompt("Enter operator: ");
    var d=['+','-', '*', '/','%'];
    for(i=0; i<d.length; i++){
        if(c=="+"){
            var addition=Number(a) + Number(b);
            document.write("result is: "+addition);
            break
        }
        else if(c=="-"){
            var subtraction=Number(a) - Number(b);
            document.write("result is: "+subtraction);
            break
        }
        else if(c=="*"){
            var multiply=Number(a) * Number(b);
            document.write("result is: "+multiply);
            break
        }
        else if(c=="/"){
            var divide=Number(a) / Number(b);
            document.write("result is: "+divide);
            break
        }
        else if(c=="%"){
            var modulus=Number(a) % Number(b);
            document.write("result is: "+modulus);
            break
        }
    }
    }
calculator()    
    </script> */}


//===CHAPTER 35-38===Task 5===
{/* <script>
function square(){
    var a=prompt("Enter number you want to square: ");
    var sqr= Number (a) * Number (a);
    document.write("Suare of your desired Number is: "+sqr)
    }
square()    
    </script> */}


//===CHAPTER 35-38===Task 6===
{/* <script>
function factorial() {
    var a=prompt("Enter any number: ");
  if (a === 0 || a === 1)
    return 1;
  for (var i = a - 1; i >= 1; i--) {
    a *= i;
  }
  document.write("Factorial of your number is "+a);
}
factorial();   
    </script> */}



//===CHAPTER 35-38===Task 7===
{/* <script>
function numbers() {
    var a=prompt("Enter any number: ");
    var b=prompt("Enter another number: ");
  for (var i = a; i <= b; i++)
  {document.write( " "+i+" ");
}
}
numbers();   
    </script> */}


//===CHAPTER 35-38===Task 8===
{/* <script>
function calchypotenuse() {
    var a=+prompt("Enter base value: ");
    var b=+prompt("Enter perpendicular value: ");
    var rectangle= Number(a) * Number(b);
    var Hypotenusesquare=Math.sqrt((a*a) + (b*b));
  document.write("Hypotenuse is: "+Hypotenusesquare+"<br>");
  function calcsquare(){
    var square=a*a;
    document.write("Square is "+square);
  }
calcsquare()
}
calchypotenuse()   
    </script> */}

//===CHAPTER 35-38===Task 9===
{/* <script>
  function areaofrectangle(width,height) {
      width=+prompt("Enter width: ");
      height=+prompt("Enter height: ");
      var rectangle=width * height;
    document.write(rectangle);
  }
  areaofrectangle();   
      </script> */}


//===CHAPTER 35-38===Task 10===