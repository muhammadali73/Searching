document.getElementById("para").innerHTML;
const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti consequatur iusto dolor tempore necessitatibus impedit ipsum aperiam consequuntur eveniet doloremque, blanditiis expedita temporibus dignissimos accusantium, sequi perferendis deserunt odio."
function len() {
    console.clear();
    const result = para.length
    document.getElementById("lenght").innerText = (`Paragraph lenght is = ${result}`)
    console.log(result)
}
function upper(){
    console.clear();
    upr = document.getElementById("para").textContent = document.getElementById("para").textContent.toUpperCase();
    console.log(upr)
}
function lower(){
    console.clear();
    lwr = document.getElementById("para").textContent = document.getElementById("para").textContent.toLowerCase();
    console.log(lwr)
}
function search() {
    console.clear();
    const userInput = prompt("Enter a word to search:");
    const found = para.toUpperCase().includes(userInput.toUpperCase());
    if (found) {
        alert("Text found");
        console.log("text found")
    } else {
        alert("Text not found"); 
        console.log("text not found")
    }
}
