import System;
import System.Text.RegularExpressions;


public var targetName : String;
public var type : String;

public var toggle :boolean = false;
public var push:boolean = false;
public var xyCoords : float[] = new float[2];
public var fader : float = 0;


public var multiToggle : boolean; //same as toggle
public var multiFader : float; //same as fader



function Start () {
		//init
		
		type = targetName;
		type = Regex.Replace(type, "[^a-z]", "");
		
}

function Update () {

}

function OnOscMessage (args:ArrayList ) {

	//button detection
	
	if(type == "push" && args[0] == 1) {
			push = true;
	
	} else if(type == "toggle" && args[0] == 1 || type == "multitoggle" && args[0] == 1) {
		toggle = true;

	} else {
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
}