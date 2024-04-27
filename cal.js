// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
// }

// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function calculate() {
//     try {
//         var result = eval(document.getElementById('display').value);
//         document.getElementById('display').value = result;
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }


let appendToDisplay = ( numbers)=>{
    console.log("value",numbers)
 document.getElementById('display').value +=numbers

}
let clearDisplay =()=>{
    console.log("the function is running")
    document.getElementById('display').value = '';
}

let calculate =()=>{ 

    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }

}



