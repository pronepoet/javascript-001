function checkDriverAge(){
    var age = prompt("Enter your age: ");

    if (age < 18){
        alert('Sorry, you are too young to drive this car. Powering off');
    }
    else if(age === 18)
    {
        alert('Congratulations on your first year of driving. Enjoy the ride!');
    }
    else if (age > 18){
    alert('Powering On. Enjoy the ride!');
    }
    else
    {
        alert('Please try again!')
    }
}

//checkDriverAge();
   
//function expression
var checkDriverAge2 = function(){
    var age = prompt("Enter your age: ");

    if (age < 18){
        alert('Sorry, you are too young to drive this car. Powering off');
    }
    else if(age === 18)
    {
        alert('Congratulations on your first year of driving. Enjoy the ride!');
    }
    else if (age > 18){
    alert('Powering On. Enjoy the ride!');
    }
    else
    {
        alert('Please try again!')
    }

}

//adding arguments
function checkDriverAge(age){


    if (age < 18){
        return 'Sorry, you are too young to drive this car. Powering off';
    }
    else if(age === 18)
    {
        return 'Congratulations on your first year of driving. Enjoy the ride!';
    }
    else if (age > 18){
    return 'Powering On. Enjoy the ride!';
    }
    else
    {
        alert('Please try again!');
    }
}

//checkDriverAge();



//arrays
var list = ["Mouse","Keyboard","Laptop","Couch"];
console.log(list[0]);




//objects
var magician = {
name:"Phillip",
quirk:"Flames",
epxperience:"Frontlines",

}
console.log(magician.name);
