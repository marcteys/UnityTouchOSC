import System;
import System.Text.RegularExpressions;


public var targetName : String;
public var type : String;

public var toggle :boolean = false;
public var push:boolean = false;
public var xyCoords : float[] = new float[2];
public var fader : float = 0;


public var multiToggle : boolean; //same as toggle
public var multiFadder : float; //same as fader



function Start () {
		//init
		
		type = targetName;
		type = Regex.Replace(type, "[^a-z]", "");
		
}

function Update () {

}

function OnOscMessage (args:ArrayList ) {
	if(type == "push" && args[0] == 1) {
			push = true;
	
	} else if(type == "toggle") {
	
	} 
	else {
		push = false;
		toggle = false;
	}
	
		
}