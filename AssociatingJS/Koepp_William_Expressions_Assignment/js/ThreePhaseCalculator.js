/**
 * Created by williamkoepp on 4/13/15.
 */
/*------------------------------------------------------------------------------------------*/
//Initializing stage
var watts = 0;              /*this is three phase watts , which is Voltage Average * Amperage Average * Power Factor * 1.732
                            this is if a power factor is available. For rough estimates Voltage multiplied by Amperage will work.*/
var wattPhrase = "Please enter the measured motor wattage:";
var volts = 0;
var current = 0;
var Pf = 0;
var rms = 1.732;            //this is the root mean square value, half of Pi to represent half of a sinusoidal wave.
var Hp = 0;                 /* Hp is short for Horsepower. A standard measurement for foot pounds per second,
                            however this is in reference to electrical means, so 746 watts is 1 horsepower. */
var efficiency = 0;
var phrases = ["please enter the measured circuit voltage","Please enter the measured circuit current"];
/*------------------------------------------------------------------------------------------*/
//Input stage
alert ("Please enter all three values for Wattage, Voltage, and Amperage.");
watts = prompt (wattPhrase);
volts = prompt (phrases[0]);
current = prompt (phrases[1]);
/*------------------------------------------------------------------------------------------*/
//Formula & calculation stage
Pf = (watts / (volts * current * rms)) * 100;  /*formula for three phase power factor of AC motors.
                                                answered in a percentage */
Hp = watts / 746;
efficiency = ((Hp * 746) / (volts * current * Pf* rms)) * 100; //formula for 3 phase power efficiency.
/*------------------------------------------------------------------------------------------*/
//Output stage
alert ("Your efficiency is :" + efficiency +  "\n Your motor Horsepower is:" + Hp + " \n Your motor power factor is :" + Pf + "%");

/*-------------------------------------------------------------------------------------------
testing stage
Test 1
input               outputs(actual)     manufacture specified
208 Volts               x                   208V
15 Amps(current)        x                   15Amp
3730 Watts              x                      x
x                       69.024Pf               x
x                       5hp                    5hp
x                       1 eff.                  .895

Test 2
 input               outputs(actual)     manufacture specified
 230 Volts               x                   230V
 13.6 Amps(current)      x                   13.6Amp
 3730 Watts              x                      x
 x                       68.848Pf               x
 x                       5hp                    5hp
 x                       1 eff.                  .895

 Test 3
 input               outputs(actual)     manufacture specified
 460 Volts               x                   460V
 6.8 Amps(current)       x                   6.8Amp
 3730 Watts              x                      x
 x                       68.848Pf               x
 x                       5hp                    5hp
 x                       1 eff.                  .895

 these values are fictional and if to say the motor was at 460 Volt, the amperage could not exceed 5.25 Amp to have the
 efficiency specified of .895
 discovered issues with program as seen by the results, are that these perfect conditions which leads to the efficiency of 1
 which can be seen as 100%. granted energy can not be created nor destroyed this is not the scope of that,
 but to check the input power versus that of output power. All real applications will have heat losses from friction etc etc.
 */



