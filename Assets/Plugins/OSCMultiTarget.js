import System;
import System.Text.RegularExpressions;
import System.Collections.Generic;



var targetName : List.<String> = new List.<String>();  // declaration


public var type : String;
public var toggle :boolean = false;
public var push:boolean = false;
public var xyCoords : float[] = new float[2];
public var fader : float = 0;
public var AccelerometerXYZ : float[] = new float[3];


function Start () {
	
}

function Update () {

}

function OnOscMessage (args:ArrayList ) {


			if(type == "push" && args[0] == 1) {
					push = true;
			
			} else if(type == "toggle" && args[0] == 1 || type == "multitoggle" && args[0] == 1) {
				toggle = true;
		
			} else  if(type == "toggle" && args[0] == 1 || type == "multitoggle" && args[0] == 1) {
				push = false;
				toggle = false;
			} 
			
			//fader value
			if(type == "rotary" || type == "fader" || type == "multifader" || type == "encoder") {
				fader = args[0];
			}
				
			//type = xy
			if(type =="xy") {
				xyCoords[0] = args[0];
				xyCoords[1] = args[1];
			}	
			
			//accelerometer
			if(type =="accxyz") {
				AccelerometerXYZ[0] = args[0];
				AccelerometerXYZ[1] = args[1];
				AccelerometerXYZ[2] = args[2];
			}	


}