document.getElementById("para").innerHTML;
function len() {
    const lenghts = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti consequatur iusto dolor tempore necessitatibus impedit ipsum aperiam consequuntur eveniet doloremque, blanditiis expedita temporibus dignissimos accusantium, sequi perferendis deserunt odio."
    const result = lenghts.length
    document.getElementById("lenght").innerText = (`Paragraph lenght is = ${result}`)
}