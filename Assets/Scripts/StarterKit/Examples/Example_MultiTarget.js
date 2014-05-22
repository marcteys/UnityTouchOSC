#pragma strict
private var oscData : OSCMultiTarget;

private var fader : float;
private var push : boolean;
private var toggle : boolean;
private var xyCoords : float[] = new float[2];



function Start () {
	oscData = this.GetComponent(OSCMultiTarget);
}

function Update () {

	//get the data from the OSC MultipleTarget
	GetData();
	
	
	//Code example //
	transform.position .z = fader*10;
	
	if(toggle) {
		transform.Rotate (0, 90 * Time.deltaTime, 0);
	} else {
		transform.Rotate (0, 0, 0);
	}

   
}


//Update each frame
function GetData() {
	fader = oscData.fader;
	push = oscData.push;
	toggle = oscData.toggle;
	xyCoords = oscData.xyCoords;
}