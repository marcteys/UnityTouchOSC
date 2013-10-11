#pragma strict
private var oscData : OSCSimpleTarget;

private var fader : float;
private var push : boolean;
private var toggle : boolean;
private var xyCoords : float[] = new float[2];
private var AccelerometerXYZ : float[] = new float[3];


function Start () {
	oscData = this.GetComponent(OSCSimpleTarget);
	//	oscData = this.GetComponent(OSCMultipleTarget); // <- change if you want to access to the SimpleTarget or MultipleTarget script
}

function Update () {
	//Get the data from OSCTarget script
	GetData();
	
	// your code goes there...
	
	

	var rotation = Quaternion.Euler(Vector3(AccelerometerXYZ[0], AccelerometerXYZ[1], AccelerometerXYZ[2]));
	transform.rotation = rotation;	
}


function GetData() {
	//update each local private values
	fader = oscData.fader;
	push = oscData.push;
	toggle = oscData.toggle;
	xyCoords = oscData.xyCoords;
	AccelerometerXYZ = oscData.AccelerometerXYZ;

}