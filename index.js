let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
console.log(appleShelf)
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function Apple(){
    for (let c=0; c<fruit.length; c+=1){
        if (fruit[c] === "🍎"){
            appleShelf.textContent += fruit[c];
            
        }
    }
}
function Organe(){
       for (let c=0; c<fruit.length; c+=1){
        if (fruit[c] ==="🍊"){
            orangeShelf.textContent += fruit[c];
            
        }
    }

    
}

Apple();
Organe()
