//document.getElementById("count-el").innerText = 7
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//console.log(saveEl)


function increment(){
    count += 1
    countEl.innerText = count
    //console.log(count)

}

function save()  {
    let countStr = count + "-" 
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
    console.log(count)
    
}

//console.log(count)