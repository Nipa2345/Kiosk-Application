//Initialize Value
var Subtotal = 0;
var priceBiscuite = 0;
var priceChocolate = 0;
var priceMilk = 0;
var pricePaneer = 0;
var priceSugar = 0;

//Validation for Biscuite
function addBiscuite() 
{
    var Biscuite = prompt("Please enter Biscuite Quantity!");
    var numBiscuite = 0;
    while (isNaN(Biscuite))  // isNaN - Returns true if  is not a number
    {
        Biscuite = prompt('Please enter only number of Biscuite Quantity!');
    }
    if (Biscuite === null) 
    {
        Biscuite = 0;
    }
    numBiscuite = parseInt(Biscuite);  //convert string into number
    document.getElementById('Biscuite').innerHTML = `x ${numBiscuite}`;
    priceBiscuite = 5 * numBiscuite;
    document.getElementById('npBiscuite').innerHTML = numBiscuite;
    document.getElementById('priceBiscuite').innerHTML = `$ ${priceBiscuite}`;
}

//Validation for Sugar
function addSugar() 
{
    var numSugar = 0;
    var Sugar = prompt("Please enter Sugar Quantity!");
    while (isNaN(Sugar))  // isNaN - Returns true if  is not a number
    {
        Sugar = prompt('Please enter only number of Sugar Quantity!');
    }
    if (Sugar === null) 
    {
        Sugar = 0;
    }
    var numSugar = parseInt(Sugar);  //convert string into number
    document.getElementById('Sugar').innerHTML = `x ${numSugar}`;
    priceSugar = 8 * numSugar;
    document.getElementById('npSugar').innerHTML = numSugar;
    document.getElementById('priceSugar').innerHTML = `$ ${priceSugar}`;
}

//Validation for Milk
function addMilk() 
{
    var numMilk = 0;
    var Milk = prompt("Please enter Milk Quantity!");
    while (isNaN(Milk))  // isNaN - Returns true if  is not a number
    {
        Milk = prompt('Please enter only number of Milk Quantity!');
    }
    if (Milk === null) 
    {
        Milk = 0;
    }
    var numMilk = parseInt(Milk);  //convert string into number
    document.getElementById('Milk').innerHTML = `x ${numMilk}`;
    priceMilk = 10 * numMilk;
    document.getElementById('npMilk').innerHTML = numMilk;
    document.getElementById('priceMilk').innerHTML = `$ ${priceMilk}`;
}

//Validation for Paneer
function addPaneer() 
{
    var numPaneer = 0;
    var Paneer = prompt("Please enter Paneer Quantity!");
    while (isNaN(Paneer))  // isNaN - Returns true if  is not a number 
    {
        Paneer = prompt('Please enter only number of Paneer Quantity!');
    }
    if (Paneer === null) 
    {
        Paneer = 0;
    }
    var numPaneer = parseInt(Paneer);  //convert string into number
    document.getElementById('Paneer').innerHTML = `x ${numPaneer}`;
    pricePaneer = 5 * numPaneer;
    document.getElementById('npPaneer').innerHTML = numPaneer;
    document.getElementById('pricePaneer').innerHTML = `$ ${pricePaneer}`;
}

//Validation for Chocolate
function addChocolate() 
{
    var numChocolate = 0;
    var Chocolate = prompt("Please enter Chocolate Quantity!");
    while (isNaN(Chocolate))  // isNaN - Returns true if  is not a number
    {
        Chocolate = prompt('Please enter only number of Chocolate Quantity!');
    }
    if (Chocolate === null) 
    {
        Chocolate = 0;
    }
    var numChocolate = parseInt(Chocolate);  //convert string into number
    document.getElementById('Chocolate').innerHTML = `x ${numChocolate}`;
    priceChocolate = 2 * numChocolate;
    document.getElementById('npChocolate').innerHTML = numChocolate;
    document.getElementById('priceChocolate').innerHTML = `$ ${priceChocolate}`;
}

//Calculation for Receipt.
function checkout() 
{
    //Ask username from the User.
    var name = prompt('Please enter your name.');
    while (name === null) 
    {
        name = prompt('Please enter your name.');
    }
    document.getElementById('uname').innerHTML = name;

    //Sum of the all products and store total in SubTotal.
    var SubTotal = priceBiscuite + priceSugar + priceMilk + pricePaneer + priceChocolate;
    document.getElementById('SubSum').innerHTML = ` $ ${SubTotal} `;

    //Add GST @13% by using tofixed method. 
    var GST = SubTotal * 0.13;
    document.getElementById("GST.Tofixed() is : " + GST.toFixed(2));
    document.getElementById('GST').innerHTML = ` $ ${GST} `;

    //SubTotal and GST are stored in GrandTotal.
    var GrandTotal = SubTotal + GST;
    document.getElementById('GrandTotal').innerHTML = ` $ ${GrandTotal} `;
}
