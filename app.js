var resCounter = 0;
var collectionInterval= 0;
var clicker=0;
var clickerpower= clicker;

let clickupgrades={
    pickaxes:{
        price: 2,
        quantity:1,
        multiplier: 1,
    },
    superPickaxes:{
        price: 5,
        quantity:0,
        multiplier: 4,

    },
}
let passiveupgrades ={
    rovers:{
        price: 5,
        quantity: 0,
        multiplier: 20,
    }}
function clickpowersum(){

    let clicker=1
    if (clicker>=1) {
        clicker+=(clickupgrades.pickaxes.quantity*clickupgrades.pickaxes.multiplier)+
        clickupgrades.superPickaxes.multiplier*clickupgrades.superPickaxes.quantity
    }console.log(clicker)
}
function mine() {


if (clickupgrades.pickaxes.quantity>1 ||clickupgrades.superPickaxes.quantity>=1) {
    let a=(clickupgrades.pickaxes.multiplier*clickupgrades.pickaxes.quantity)
    let b=(clickupgrades.superPickaxes.multiplier*clickupgrades.superPickaxes.quantity)
    let clicker= (a + b ) 
     
     resCounter += (1 * clicker); console.log(clicker)
     
    update()
}else
resCounter +=1;

update()
}
function update(){
    let counter = resCounter
    // @ts-ignore
    document.getElementById("counter").innerText = counter
    
    let clickpower= clickupgrades.pickaxes.quantity
    // @ts-ignore
    document.getElementById("pickCounter").innerText =clickpower
    
    let passives= passiveupgrades.rovers.quantity
    // @ts-ignore
    document.getElementById("passives").innerText =passives
    let pickprice= clickupgrades.pickaxes.price
    document.getElementById("pickPrice").innerText =pickprice
    
    let superPickPrice= clickupgrades.superPickaxes.price;
    document.getElementById("superPickprice").innerText= superPickPrice
    
    let clickerdisplay= clickerpower
    document.getElementById("clickpower").innerText= clickerdisplay
    let superPicks= clickupgrades.superPickaxes.quantity
    document.getElementById("superPickaxe").innerText= superPicks
    clickpowersum();

}
// let pickaxe=
function buyPickaxe(){

    let cash= resCounter
    if(cash >= clickupgrades.pickaxes["price"]){
        // changes the price every purchase
        if(clickupgrades.pickaxes.quantity>=1){
            (resCounter-=clickupgrades.pickaxes.price)
            clickupgrades.pickaxes.price+= clickupgrades.pickaxes.price+ clickupgrades.pickaxes.price*0.25
        }
        // subtracts price of the pickaxe

         clickupgrades.pickaxes.quantity++
         console.log(clickupgrades.pickaxes.price)  
        // x+=1
        // for (let key in clickupgrades) {
        //     if ((clickupgrades[key], quantity)) {
        //         const element = clickupgrades[passiveupgrades][quantity];
                
        //     }
        // }
    }update()
    console.log(clickupgrades.pickaxes.price)
    
}


function buySuperPick(){
    let cash= resCounter
    if (cash>= clickupgrades.superPickaxes.price ) {
        (resCounter-=clickupgrades.superPickaxes.price)
        clickupgrades.superPickaxes.price+= clickupgrades.superPickaxes.price + clickupgrades.superPickaxes.price * 0.90
        clickupgrades.superPickaxes.quantity++
        console.log(clickupgrades.superPickaxes.quantity)
    }update(); 
}
function buyPassive(){
    let cash= resCounter
    if(passiveupgrades.rovers.quantity>=1){
        passiveupgrades.rovers.price+= passiveupgrades.rovers.price+ passiveupgrades.rovers.price*0.25
    }
    if (cash>= passiveupgrades.rovers.price){
        (resCounter-=passiveupgrades.rovers.price)
    passiveupgrades.rovers.quantity++
    }update()
}

// *passiveupgrades.rovers.multiplier
function startInterval() {
    collectionInterval = setInterval( collectPassiveUpgrades ,1000);
   
  }
function collectPassiveUpgrades() {
    
    for (let key in passiveupgrades) {
        console.log(key)
        if (passiveupgrades.rovers.quantity >=1) {
            resCounter += passiveupgrades.rovers.quantity * passiveupgrades.rovers.multiplier
            
        } update()
    }
    
}
startInterval()