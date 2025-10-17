const arr=[2,5,7,14,3,14,8,9,14]
let MAX=0
arr.forEach((item)=>{
    if(MAX<item){
        MAX=item
    }
})
// const Max_Hegight_Candle =Math.max(arr)
let count=0
arr.forEach((item)=>{
    if(MAX==item){
        count++
    }
})

console.log(count);


