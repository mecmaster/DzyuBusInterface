
//Clock
    function clock() {
      let date = new Date();
      let hrs = date.getHours();
      let mins = date.getMinutes();
    
      hrs = hrs < 10 ? `0${hrs}` : hrs;
      mins = mins < 10 ? `0${mins}` : mins;
    
      let time = `${hrs}:${mins}`;
      setInterval(clock, 1000);
      document.getElementById("TimeNow").innerHTML = time;
    }
    
    clock();



// document.getElementById("LightsSalon1").style.opacity = 0.0;
// document.getElementById("LightsSalon2").style.opacity = 0.0;
// document.getElementById("LightsCoridor").style.opacity = 0.0;
// document.getElementById("LightsBedroomMain").style.opacity = 0.0;
// document.getElementById("LightsBedroom").style.opacity = 0.0;
// document.getElementById("LightsBath").style.opacity = 0.0;
// document.getElementById("LightsKitchen").style.opacity = 0.0;
// document.getElementById("LightsLeftPassanger").style.opacity = 0.0;
// document.getElementById("LightsRightPassanger").style.opacity = 0.0;
// document.getElementById("LightsNeon").style.opacity = 0.0;
// document.getElementById("LightsOutside").style.opacity = 0.0;

//document.getElementById("BathVentArrow").style.opacity = 0.0;
//document.getElementById("MainHeaterArrow").style.opacity = 0.0;
//document.getElementById("MainVentArrow").style.opacity = 0.0;
//document.getElementById("KitchenVentArrow").style.opacity = 0.0;
//document.getElementById("BedroomHeaterArrow").style.opacity = 0.0;

//document.getElementById("BedroomHeaterTank").style.opacity = 0.0;
//document.getElementById("WaterEmpty1").style.opacity = 0.0;
//document.getElementById("WaterEmpty").style.opacity = 0.0;
//document.getElementById("MainHeaterTank").style.opacity = 0.0;

//document.getElementById("BedroomFloorStair").style.opacity = 0.0;
//document.getElementById("BedroomFloorMain").style.opacity = 0.0;
//document.getElementById("BathroomFloor").style.opacity = 0.0;


// Lights Control
document.getElementById('LightsSalon1').onclick = function() {
      var element = document.getElementById('LightsSalon1');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsSalon2').onclick = function() {
      var element = document.getElementById('LightsSalon2');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsCoridor').onclick = function() {
      var element = document.getElementById('LightsCoridor');
      element.classList.toggle("lighton");
  };  

document.getElementById('LightsBedroomMain').onclick = function() {
      var element = document.getElementById('LightsBedroomMain');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsBedroom').onclick = function() {
      var element = document.getElementById('LightsBedroom');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsBath').onclick = function() {
      var element = document.getElementById('LightsBath');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsKitchen').onclick = function() {
      var element = document.getElementById('LightsKitchen');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsLeftPassanger').onclick = function() {
      var element = document.getElementById('LightsLeftPassanger');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsRightPassanger').onclick = function() {
      var element = document.getElementById('LightsRightPassanger');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsNeon').onclick = function() {
      var element = document.getElementById('LightsNeon');
      element.classList.toggle("lighton");
  };

document.getElementById('LightsOutside').onclick = function() {
      var element = document.getElementById('LightsOutside');
      element.classList.toggle("lighton");
  };

// Control Buttons

document.getElementById('MainVentButton').onclick = function() {
      var element = document.getElementById('MainVentStaus');
      var element2 = document.getElementById('MainVentArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('WaterStatusButton').onclick = function() {
      var element = document.getElementById('WaterStatus');
      element.classList.toggle("active");

  };

document.getElementById('WaterPumpButton').onclick = function() {
      var element = document.getElementById('Water1Status');
      element.classList.toggle("active");

  };

document.getElementById('KitchenVentButton').onclick = function() {
      var element = document.getElementById('KitchenVentStatus');
      var element2 = document.getElementById('KitchenVentArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('WaterHeaterButton').onclick = function() {
      var element = document.getElementById('WaterHeaterStatus');
      element.classList.toggle("active");

  };

document.getElementById('BedroomHeaterButton').onclick = function() {
      var element = document.getElementById('BedroomHeaterStatus');
      var element2 = document.getElementById('BedroomHeaterArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('BedroomFloorButton').onclick = function() {
      var element = document.getElementById('BedroomFloorHeaterStatus');
      var element2 = document.getElementById('BedroomFloorMain');
      var element3 = document.getElementById('BedroomFloorStair');
      element.classList.toggle("active");
      element2.classList.toggle("show");
      element3.classList.toggle("show");

  };

document.getElementById('BathVentButton').onclick = function() {
      var element = document.getElementById('BathVentStatus');
      var element2 = document.getElementById('BathVentArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('BathroomFloorButton').onclick = function() {
      var element = document.getElementById('BathroomFloorHeaterStatus');
      var element2 = document.getElementById('BathroomFloor');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };

document.getElementById('MainHeaterButton').onclick = function() {
      var element = document.getElementById('MainHeaterStatus');
      var element2 = document.getElementById('MainHeaterArrow');
      element.classList.toggle("active");
      element2.classList.toggle("show");

  };  




