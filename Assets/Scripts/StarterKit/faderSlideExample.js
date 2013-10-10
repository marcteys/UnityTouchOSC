#pragma strict
private var oscData : OSCTarget;

private var fader : float;
private var push : boolean;
private var toggle : boolean;
private var xyCoords : float[] = new float[2];





function Start () {
	oscData = this.GetComponent(OSCTarget);
	Debug.Log(oscData.toggle);
	
}

function Update () {

	GetData();
	this.transform.position .z = fader*10;
}


function GetData() {

	fader = oscData.fader;
	push = oscData.push;
	toggle = oscData.toggle;
	xyCoords = oscData.xyCoords;
}