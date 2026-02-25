 let emotion = [
    ["🤨","😎","🤔","🤓",],
    ["😶‍🌫️","😶‍🌫️","🤑","🤓",],
    ["😎","🤔","🤑","🤨",]
 ]


let firstCell = null;
let firstRow = -1;
let firstCol = -1;
let matches = 0;
let attempts = 0;

function playGame(){
        
    let html = "<table>"

for( let i=0; i<emotion.length; i++){
    //nested loop
    //table rows
    html += "<tr>"

    for(let j=0; j<emotion[i].length; j++){
        html += `<td onclick = "cellClicked(this, ${i}, ${j})">?</td>`
    } 
    html += "</tr>"
     
}
html += "</table>"
document.getElementById("grid").innerHTML = html;

    // reset counter and state
    firstCell = null;
    firstRow = -1;
    firstCol = -1;
    matches = 0;
    attempts = 0;
    displayStats();
    document.getElementById('message').innerHTML = "";
    }



function cellClicked(cell, row, col){

    if(cell.innerHTML !== "?"){
        return;

    }

    cell.innerHTML = emotion[row][col];
  

    if(firstRow === -1)
        {

        firstCell = cell;
        firstRow = row;
        firstCol = col;
        console.log(firstCell, firstRow, firstCol);
        document.getElementById("message").innerHTML = "";
    }
    else {
        attempts++;
    
    if(emotion[firstRow][firstCol] === emotion[row][col]){
                 matches++
                  document.getElementById("message").innerHTML = " ✅ Match Found"
                }
        else{
              firstCell.innerHTML = "?";
        cell.innerHTML = "?";
        document.getElementById("message").innerHTML = "❌ Try Again"
        }  
    
        firstCell = null;
        firstRow = -1;
         firstCol = -1;
         displayStats(); 
    }
 }
    
    
function displayStats(){
    document.getElementById("stats").innerHTML = 
    `Matches : ${matches} | Attempts: ${attempts}`;
}

