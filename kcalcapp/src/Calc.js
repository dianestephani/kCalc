let bodyWeightLbs = 135;
let activityMultiplier = 11;




//Print bodyweight in lbs
function firstWeight() {
    console.log(`Weight(lbs): ${bodyWeightLbs}`)
};


//Single calculation function
function calcMacros(){
  //converts bodyweight(lbs) to kilograms
  let kilos = bodyWeightLbs * 0.453592;
  console.log(`Weight(kg): ${kilos}`);

  
  //Finds maintenance cals
  let maintenanceCal = activityMultiplier * bodyWeightLbs;
  console.log(`Maintenance Calories: ${maintenanceCal}`);

  
  //Protein grams
  let proteinG = kilos * 1.8;
  console.log(`Protein(g): ${proteinG}`);
  //Protein calories
  let proteinCal = proteinG * 4;
  console.log(`Protein(cal): ${proteinCal}`);


  //Fat grams
  let fatG = kilos * 0.9;
  console.log(`Fat(g): ${fatG}`);
  //Fat calories
  let fatCal = fatG * 9;
  console.log(`Fat(cal): ${fatCal}`);

  //Carbs calories
  let carbsCal = maintenanceCal - (proteinCal + fatCal);
  //Carbs grams
  let carbsG = carbsCal / 4;

  console.log(`Carbs(g): ${carbsG}`);
  console.log(`Carbs(cal): ${carbsCal}`);

}



module.exports = {firstWeight, calcMacros};


// firstWeight();
// calcMacros();