
function clickX() {
    const value = document.getElementById("input").value;
    const errorTAG = document.getElementById("errorTag");
  try {
    if (isNaN(value)) {
      throw "vuul information";
    } else if ( value > 10) {
      throw "vuul information abar";
    }
    errorTAG.innerHTML = ``;
  }
   catch (error) 
   {
    console.log("ERROR", error);
    errorTAG.innerHTML = `something is SUS`
  } 
  finally 
  {
    console.log("it will show even the data is correct or not");
  }
}
