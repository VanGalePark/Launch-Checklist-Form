// Write your JavaScript code here!

window.addEventListener("load", function() {
  let form = document.querySelector("form")

  let launchStatusCheck = document.getElementById("launchStatusCheck")
  let missionTargetDiv = document.getElementById("missionTarget")

  let pilotNameInput = document.getElementById("pilotName")
  let copilotNameInput = document.getElementById("copilotName")
  let fuelLevelInput = document.getElementById("fuelLevel")
  fuelLevelInput.setAttribute("type", "number")
  let cargoMassInput = document.getElementById("cargoMass")
  cargoMassInput.setAttribute("type", "number")

  let faultyItemsDiv = document.getElementById("faultyItems")
  let pilotStatus = document.getElementById("pilotStatus")
  let copilotName = document.getElementById("copilotStatus")
  let fuelStatus = document.getElementById("fuelStatus")
  let cargoStatus = document.getElementById("cargoStatus")

  form.addEventListener("submit", function(event) {
    if (pilotNameInput.value === "" || isNaN(pilotNameInput.value) === false) {
      event.preventDefault()
      window.alert("Please enter a valid input for Pilot Name.")
    } else if (copilotNameInput.value === "" || isNaN(copilotNameInput.value) === false) {
      event.preventDefault()
      window.alert("Please enter a valid input for Co-pilot Name.")
    } else if (fuelLevelInput.value === "") {
      event.preventDefault()
      window.alert("Please enter a valid input for Fuel Level.")
    } else if (cargoMassInput.value === "") {
      event.preventDefault()
      window.alert("Please enter a valid input for Cargo Mass.")
    }

  })
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
