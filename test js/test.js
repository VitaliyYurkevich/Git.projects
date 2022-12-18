let products = ['Choo Choo Chocolate', ' Icy Mint', 'Cake Batter', 'Bubblegum']
let hasBubbleGum = [true, false, true, true];
for (let i=0; i<hasBubbleGum.length; i=i+1){
    if(hasBubbleGum[i]){
    console.log(products[i] + ' contains bubble gum');
}
}
