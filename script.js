// Write your JavaScript code here!
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

window.addEventListener("load", function() {

  fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    response.json().then( function(json) {
      const missionTarget = document.getElementById("missionTarget");
      let index = Math.round(Math.random()*5);
        missionTarget.innerHTML = `
        <div style="text-align:center">
          <h2>Mission Destination</h2>
          <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
          </ol>
          <img src="${json[index].image}"
        </div>
        `
    })
  })
  let button = document.querySelector("button")

  let pilotNameInput = document.getElementById("pilotName")
  let copilotNameInput = document.getElementById("copilotName")
  let fuelLevelInput = document.getElementById("fuelLevel")
  fuelLevelInput.setAttribute("type", "number")
  let cargoMassInput = document.getElementById("cargoMass")
  cargoMassInput.setAttribute("type", "number")

  let pilotStatus = document.getElementById("pilotStatus")
  let copilotName = document.getElementById("copilotStatus")
  let fuelStatus = document.getElementById("fuelStatus")
  let cargoStatus = document.getElementById("cargoStatus")


  button.addEventListener("click", function(event) {
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

    } else if (pilotNameInput.value && copilotNameInput.value && fuelLevelInput.value && cargoMassInput.value !== "") {
      event.preventDefault()
      document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready for liftoff!!`
      document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready for liftoff!!`

      if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is NOT Ready for the Launch!"
        document.getElementById("launchStatus").style.color = "red"
        faultyItems.style.visibility = "visible"

        if (fuelLevelInput.value < 10000) {
          document.getElementById("fuelStatus").innerHTML = "The fuel level is not high enough for the launch."
        }

        if (cargoMassInput.value > 10000) {
          document.getElementById("cargoStatus").innerHTML = "The cargo mass is too high to launch!!"
        }
      } else {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for the Launch!"
        document.getElementById("launchStatus").style.color = "green"
        faultyItems.style.visibility = "visible"
      }
    }

  })
})
