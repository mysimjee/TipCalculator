
const calculateBill = () => {
  let billtotalinput = Number(document.getElementById("billTotalInput").value)
  console.log(billtotalinput)

  let tipInput = Number(document.getElementById("tipInput").value) / 100
  console.log(tipInput)

  let tipamount = Number(billtotalinput * tipInput)
  console.log(tipamount)

  let totalamount = Number(tipamount + billtotalinput)
  console.log(totalamount)
  
  let billperperson = totalamount / numberofpeoples
  console.log(billperperson)

  let perpersoncost = document.getElementById("perPersonTotal")
  perpersoncost.innerText = billperperson.toFixed(1)

}

let nop = document.getElementById("numberOfPeople")
let numberofpeoples = 1
const increasePeople = () => {
    
    numberofpeoples += 1
    nop.innerText = numberofpeoples
    console.log(numberofpeoples)
    calculateBill()
}

const decreasePeople = () => {
calculateBill()
if (numberofpeoples > 1) {
  numberofpeoples -= 1
      nop.innerText = numberofpeoples
      console.log(numberofpeoples)
      calculateBill()
  } else {
    return window.alert("You cannot decrease more")
  }

}