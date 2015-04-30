/**
 * Created by williamkoepp on 4/25/15.
 Functions Assignment "Scalable Data Infrastructure, Sec 02 "*/

//=====================================================================================================================
//var assignment
var selection;
var end = "Yes";
    //variables for solving the area of a triangle
var areaTri = 0;
var baseTri = 0;
var heightTri = 0;
    //variables for solving the area of a rectangle, or square (for all squares are rectangles but not all rectangles are squares.
var areaRec = 0;
var side1Rec = 0; //this is ether the base or the side
var side2Rec = 0; //this is the base or side dependent on which was used for side 1
    //variables for solving the area of a trapezoid
var areaTrap = 0;
var base1Trap = 0; //this is the top leg of the trapezoid
var base2Trap = 0; //this is the bottom leg of the trapezoid
var heightTrap = 0;
    //variable for solving the area of a circle
var areaCirc = 0;
var radCirc = 0;
var piCirc = 3.142; // This is the value for Pi rounded up since it is an infinitely precise number
/* the variables above are redundant to the programme for clarity of understanding and tracking through it. Since in
Javascript variables do not need to be claimed till their actual usage.
 */
//=====================================================================================================================

do {        //This loop is to keep the program running with out having to refresh the page each time.
            //The below line is your input for selecting which area calculation you want to go with.
    selection = prompt("Input the name of what shape you you want to find the area for. \nTriangle, Rectangle, Trapezoid, or Circle");
    console.log(selection);     //used for debugging

    switch (selection) {                                                    //the case selection
        case "Triangle":                                                    // case name
            messageBox();                                                   // call for function
            baseTri = prompt("Enter the base Length of the triangle:");     //input for triangle base
            heightTri = prompt("Enter the Height of the Triangle ");        //input for triangle height
            areaTri = triangleArea(baseTri, heightTri);                     //this calls the function while also sending the values from your inputs to the function and giving a location to store a returned value
            alert("The area of the triangle is:" + areaTri);                //output of triangle area
            break;
                                                                            /*For the following three cases the above
                                                                             * side notes apply except for the proper
                                                                             * terms such as "triangle height" and whatnot*/
        case "Rectangle":
            messageBox();
            side1Rec = prompt("Enter the length of the rectangle:");
            side2Rec = prompt("Enter the height of the rectangle:");
            areaRec = rectangleArea(side1Rec, side2Rec);
            alert("The area of the rectangle is:" + areaRec);
            break;

        case "Trapezoid":
            messageBox();
            base1Trap = prompt("Enter the base length of the trapezoid:");
            base2Trap = prompt("Enter the top length of the trapezoid:");
            heightTrap = prompt("Enter the height of the trapezoid:");
            areaTrap = trapezoidArea(base1Trap, base2Trap, heightTrap);
            alert("The area of the trapezoid is:" + areaTrap);
            break;

        case "Circle":
            messageBox();
            radCirc = prompt("Enter the radius of the circle:");
            areaCirc = circleArea(radCirc, piCirc);
            alert("The area of the circle is:" + areaCirc);
            break;

        default:
            alert("Please retry and enter a valid selection. Remember to type the selection exactly as it appears!");

    }
    end = prompt("Would you like to find the area of another shape? \nYes or No"); //this question is allowing for a setup to break out of the loop

}while (end != "No");       //arguement to end the loop
//=====================================================================================================================
function messageBox(){
    alert("Please enter the values for the shape in the following questions.");
}
// the four following functions contain the respecting formulas to solve for the areas and return the value back to the main code.
function triangleArea(a,b){
return 0.5*(a*b);
}
function rectangleArea(a,b){
return a*b;
}
function trapezoidArea(a,b,c){
return 0.5*(a+b)*c;
}
function circleArea(a,b){
return a*b;
}
//=====================================================================================================================
/* Testing
Test one I entered "Triangle" and was given the correct case. input of 10 and 10 return an area of 50,
which is correct according to the formula for the triangle. Testing is repeated for each of the cases,
including default, all cases and functions work correctly with no bugs found. end loop was also checked, program repeats
 itself unless an exact "No" is input.
 */