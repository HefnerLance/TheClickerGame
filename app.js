var resCounter = 0;

let clickupgrades={
    pickaxes:{
        price: 3,
        quantity:1,
        multiplier: 1,
    }}
let passiveupgrades ={
    rovers:{
        price: 5,
        quantity: 0,
        multiplier: 20,
    }}

function mine() {
if (clickupgrades.pickaxes.quantity>1) {
     let clickvalue= clickupgrades.pickaxes.multiplier*clickupgrades.pickaxes.quantity
     
     resCounter += 1 * clickvalue
     
    update()
}else
resCounter +=1;
console.log(resCounter)
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
}
// let pickaxe=
function buyPickaxe(){

    let cash= resCounter
    if(cash >= clickupgrades.pickaxes["price"]){
        if(clickupgrades.pickaxes.quantity>=1){
            clickupgrades.pickaxes.price+= clickupgrades.pickaxes.price*1.5
        }
        (resCounter-=clickupgrades.pickaxes.price)
         clickupgrades.pickaxes.quantity++
         console.log(clickupgrades.pickaxes.quantity)  
        // x+=1
        // for (let key in clickupgrades) {
        //     if ((clickupgrades[key], quantity)) {
        //         const element = clickupgrades[passiveupgrades][quantity];
                
        //     }
        // }
    }update()
    console.log(clickupgrades.pickaxes.quantity)
    
}
function buyPassive(){
    let cash= resCounter
    if (cash>= passiveupgrades.rovers.price){
        (resCounter-=passiveupgrades.rovers.price)
    passiveupgrades.rovers.quantity++
    }update()
}

// *passiveupgrades.rovers.multiplier