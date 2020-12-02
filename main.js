

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


replaceAllButton.addEventListener("click", function(){
    let find = findInput.value;
    let replace = replaceInput.value;
    //console.log (find, replace)
    for(let i = 0; i <rowElements.length; i++){
        //console.log(rowElements[i])
        let cellElements = getCellElements(rowElements[i]);
       //console.log(cellElements);
       for(let j = 0; j<cellElements.length; j++){
           //console.log (cellElements[j].innerHTML)
           if(cellElements[j].innerHTML.includes(find)){
               cellElements[j].innerHTML = cellElements[j].innerHTML.replace(find, replace)


           }


       }

    }

})


