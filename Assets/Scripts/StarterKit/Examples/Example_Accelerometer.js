private var oscData : OSCSimpleTarget;

private var fader : float;
private var push : boolean;
private var toggle : boolean;
private var xyCoords : float[] = new float[2];
private var AccelerometerXYZ : float[] = new float[3];

var speed = 0.1;



function Start () {
	oscData = this.GetComponent(OSCSimpleTarget);
	//	oscData = this.GetComponent(OSCMultipleTarget); // <- change if you want to access to the SimpleTarget or MultipleTarget script
}


function Update () {
	//Get the data from OSCTarget script
	GetData();
	
	// your code goes there...
	var mapX = Remap(AccelerometerXYZ[0],-10,10,-180,180);
	var mapY = Remap(AccelerometerXYZ[1],-10,10,-180,180);
	var mapZ = Remap(AccelerometerXYZ[2],-10,10,-180,180);
	
	var desiredRotation = Quaternion.Euler(mapY, mapX, mapZ);

	
	transform.rotation =
		  Quaternion.Slerp (transform.rotation, desiredRotation, Time.deltaTime * speed);
	


}


 

function Remap ( val : float,  from1: float,  to1: float,  from2: float,  to2: float) {

    return (val - from1) / (to1 - from1) * (to2 - from2) + from2;

}


function GetData() {
	//update each local private values
	fader = oscData.fader;
	push = oscData.push;
	toggle = oscData.toggle;
	xyCoords = oscData.xyCoords;
	AccelerometerXYZ = oscData.AccelerometerXYZ;

}