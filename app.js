var changeValue = 0;
var colour = 0;

total = () => {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var tot = num1 + num2;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Enter numbers");
  } else {
    document.getElementById("tot").value = tot;
  }
};

clear = () => {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("tot").value = "";
};

bmi = () => {
  var height = parseInt(document.getElementById("height").value);
  var weight = parseInt(document.getElementById("weight").value);
  var bmi = (weight / height / height) * 100 * 100;

  if (isNaN(bmi)) {
    console.log("BMI is:", bmi);
    alert("Inputs are not numbers or no inputs");
  } else {
    console.log("BMI is:", bmi);
    document.getElementById("bmi").value = bmi;
  }
};

clearBmi = () => {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmi").value = "";
};

downloadSave = () => {
  var savetext = document.getElementById("textVal").value;
  var saveblob = new Blob([savetext], { type: "text/plain" });
  var savepath = window.URL.createObjectURL(saveblob);
  var savename = document.getElementById("textVal").value;
  var savelink = document.createElement("a");
  savelink.download = savename;
  savelink.innerHTML = "Download File";
  savelink.href = savepath;
  savelink.onclick = destroyClickedElement;
  savelink.style.display = "none";
  document.body.appendChild(savelink);
  savelink.click();
};

tempatureValidate = val => {
  var validator = /^(?:\d*\.\d{1,2}|\d+)$/;
  if (validator.test(val)) {
    return true;
  } else {
    return false;
  }
};

c2f = () => {
  var a = document.getElementById("temp1").value;
  if (a == "") {
    alert("Please add a value for Celcius");
  } else {
    if (tempatureValidate(a) == true) {
      document.getElementById("temp2").value = ((a * 9) / 5 + 32).toFixed(2);
    } else {
      alert("Please add only till two decimal points");
    }
  }
};

f2c = () => {
  var a = document.getElementById("temp1").value;
  if (a == "") {
    alert("Please add a value for Fahrenheit");
  } else {
    if (tempValidate(a) == true) {
      document.getElementById("temp2").value = (((a - 32) * 5) / 9).toFixed(2);
    } else {
      alert("Please add only till two decimal points");
    }
  }
};

switchTemp = () => {
  if (changeValue == 1) {
    document.getElementById("temp1Lable").innerText = "Celcius";
    document.getElementById("temp2Lable").innerText = "Fahrenheit";
    document.getElementById("converterTemp").onclick = c2f;

    var tempvalue = document.getElementById("temp1").value;
    document.getElementById("temp1").value = document.getElementById(
      "temp2"
    ).value;
    document.getElementById("temp2").value = tempvalue;

    alert("Now Coverting Celcius to Fahrenheit");

    changeValue = 0;
  } else {
    document.getElementById("temp1Lable").innerText = "Celcius";
    document.getElementById("temp2Lable").innerText = "Fahrenheit";
    document.getElementById("converterTemp").onclick = f2c;

    var tempvalue = document.getElementById("temp1").value;
    document.getElementById("temp1").value = document.getElementById(
      "temp2"
    ).value;
    document.getElementById("temp2").value = tempvalue;
  }

  alert("Now Coverting Fahrenheit to Celcius");

  changeValue = 1;
};

retrieve = () => {
  document.getElementById("browsersave").value = localStorage.getItem(
    "fullname"
  );
  colour = localStorage.getItem("colorval");
  setsavedclr();
  passval();
  getweather();
};

browserstore = () => {
  var name = document.getElementById("browsersave").value;

  if (typeof Storage !== "undefined") {
    localStorage.setItem("fullname", name);
    console.log(document.getElementById("browsersave").value);
  } else {
    alert("Something wrong...");
  }
};

passval = () => {
  counterpass = 0;

  var x = document.getElementById("passwordval").value;
  if (x.length >= 15) {
    document.getElementById("passlength").style.display = "none";
    counterpass++;
  } else {
    document.getElementById("passlength").style.display = "block";
    counterpass--;
  }

  var val1 = /^(?=(.*[A-Z]){4,}).+/;
  if (val1.test(x) == true) {
    document.getElementById("passupper").style.display = "none";
    counterpass++;
  } else {
    document.getElementById("passupper").style.display = "block";
    counterpass--;
  }

  var val2 = /^(?=(.*[a-z]){4,}).+/;
  if (val2.test(x) == true) {
    document.getElementById("passlower").style.display = "none";
    counterpass++;
  } else {
    document.getElementById("passlower").style.display = "block";
    counterpass--;
  }

  var val3 = /^(?=(.*[0-9]){2,}).+/;
  if (val3.test(x) == true) {
    document.getElementById("passnum").style.display = "none";
    counterpass++;
  } else {
    document.getElementById("passnum").style.display = "block";
    counterpass--;
  }

  var val4 = /^(?=(.*[^A-Za-z0-9 ]){3,}).+/;
  if (val4.test(x) == true) {
    document.getElementById("passspecial").style.display = "none";
    counterpass++;
  } else {
    document.getElementById("passspecial").style.display = "block";
    counterpass--;
  }

  if (counterpass == 5) {
    console.log(counterpass);
    document.getElementById("doneval").style.display = "block";
  } else {
    document.getElementById("doneval").style.display = "none";
  }
};

setsavedclr = () => {
  if (colour == 0) {
    document.getElementById("banner").style.backgroundColor = "yellow";
  } else if (colour == 1) {
    document.getElementById("banner").style.backgroundColor = "red";
  } else if (colour == 2) {
    document.getElementById("banner").style.backgroundColor = "green";
  } else if ((colour = 3)) {
    document.getElementById("banner").style.backgroundColor = "blue";
  }
};

changeColour = () => {
  localStorage.setItem("colorval", colour);

  if (colour == 0) {
    document.getElementById("banner").style.backgroundColor = "yellow";
    colour = 1;
  } else if (colour == 1) {
    document.getElementById("banner").style.backgroundColor = "red";
    colour = 2;
  } else if (colour == 2) {
    document.getElementById("banner").style.backgroundColor = "green";
    colour = 3;
  } else if ((colour = 3)) {
    document.getElementById("banner").style.backgroundColor = "blue";
    colour = 0;
  }
};

function getweather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=ae4fe06579a79364db818382d52b17be"
  )
    .then(response => response.json())
    .then(data => {
      var tempval = data["main"]["temp"] - 273.15;

      document.getElementById("tempvalcol").innerHTML = tempval.toFixed(2);
    })

    .catch(err => alert("Something wrong!!!!"));
}
