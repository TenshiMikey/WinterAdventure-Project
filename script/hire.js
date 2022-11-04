
let button = document.getElementById("submit");
let total = document.getElementById("total");



button.addEventListener('click', () => {

let packageValue = document.getElementById("package").value; 
let x = Number(document.getElementById("skiBoots").value);
let y = Number(document.getElementById("snoowBoard").value);
let numPeople = x + y;

let disTotal = 0;
let xCost = 0;
let yCost = 0;
let cost = 0;

    if ( packageValue === 'eco'){
       
        xCost = x * 90;
        yCost =  y * 119;
        
        cost = xCost + yCost;

        if (numPeople >= 4){

            discount = .10;
            disTotal = cost - (cost * discount);
            cost = disTotal;
        }
    }

    if ( packageValue === 'int'){
       
        xCost = x * 120;
        yCost =  y * 145;
        
        cost = xCost + yCost;

        if (numPeople >= 4){

            discount = .10;
            disTotal = cost - (cost * discount);
            cost = disTotal;
        }
    }

    if ( packageValue === 'per'){
       
        xCost = x * 145;
        yCost =  y * 170;
        
        cost = xCost + yCost;

        if (numPeople >= 4){

            discount = .10;
            disTotal = cost - (cost * discount);
            cost = disTotal;
        }
    }
total.innerHTML = "TOTAL: £" + cost;

console.log(packageValue, cost, disTotal);

});

document.getElementById("del").addEventListener('click', () => {

    xCost = "";
    yCost = "";
    cost= 0;

 total.innerHTML = "TOTAL: £" + cost;
 
 console.log(cost);

});

