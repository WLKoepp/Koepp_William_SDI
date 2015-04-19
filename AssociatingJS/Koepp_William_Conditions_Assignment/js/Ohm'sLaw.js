/**
 * Created by williamkoepp on 4/17/15.
  Koepp_William_Conditions_Assignment*/

var inputMess = ["Input Voltage:","Input Ohms:","Input Amperage:"]; //array for inputs
var volt = 0;                                                       //initializing voltage variable
var ohm = 0;                                                        //initializing ohm variable
var amp = 0;                                                        //initializing amperage variable
var watt = 0;                                                       //initializing wattage variable
var hp = 0;                                                         //initializing Horsepower variable
//==================================================================================================================
alert("Please enter 2 of the three ohms law values. \nValues must be numbers only without Engineering notation.");
volt = prompt(inputMess[0]);                    //input for the volts value
ohm = prompt(inputMess[1]);                     //input for the ohms value
amp = prompt(inputMess[2]);                     //input for the amps value
//console.log(volt);                              //for debugging, input values will appear in console
//console.log(ohm);                               //for debugging, input values will appear in console
//console.log(amp);                               //for debugging, input values will appear in console
var error = (volt > 0 && ohm > 0 && amp > 0)? "You input 3 values, please try again and input only two":"You input less than 2 values, please try again and input at least two";
//==================================================================================================================
if (volt == 0 && ohm > 0 && amp > 0 ){          //checks for proper input
    volt = ohm * amp;                           //ohms law for volts
    watt = volt * amp;                          //formula for wattage
    hp = watt / 746;                            //formula for horsepower(simple)
}else if(ohm == 0 && volt > 0 && amp > 0){      //checks for proper input
    ohm = volt / amp;                           //ohms law for ohms
    watt = volt * amp;                          //formula for wattage
    hp = watt / 746;                            //formula for horsepower(simple)
}else if(amp == 0 && volt > 0 && ohm > 0){      //checks for proper input
    amp = volt / ohm;                           //ohms law for amperage
    watt = volt * amp;                          //formula for wattage
    hp = watt / 746;                            //formula for horsepower(simple)
}else{
    alert (error);                              /*if none of the proper conditions are met then an error message...
     is displayed */
    //console.log("Error value:" + error);        //for debugging, string value will appear in console
}
//==================================================================================================================
if (watt == 0){                                 //this comparison will end the program if proper values are not put in.

}else {
// solution alert below, displays all of the calculated values from the inputs.
    alert("Voltage:" + volt + "\nOhms:" + ohm + "\nAmperage:" + amp + "\nWattage:" + watt + "\nHorsepower:" + hp);
}
//==================================================================================================================

// test number 1
/* voltage 208, ohm 0(unknown), amperage 15
   ohm = 13.86  watt = 3120 horsepower = 4.18...
 */
// test number 2
/* voltage 12, ohm 460, amperage 0(unknown)
   amperage = 0.026... watt = 0.313... horsepower = 0.0004...
 */
// test number 3
/* voltage 0(unknown) ohm 0(unknown) amperage 20
  "There must be at least 2 known values!!!"
 */
// test number 4
/* voltage (no entry) ohm (no entry) amp 5
  "There must be at least 2 known values!!!"
 */
//test number 5
/* voltage (no entry) ohm 460 amp 0.026
   voltage = 11.959... watt = 0.3109... horsepower = 0.0004
 */
//test number 6
/* entering 3 values leads to the error message, instead of altering the program to allow this
it will be left alone to prevent bad calculations from impossible values i.e. 12 volts, 12 ohms, 15 000 amps
 This would lead to a physically impossible solution.
 */
