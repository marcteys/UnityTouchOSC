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
	var mapX = (AccelerometerXYZ[0]+10)*18 - 90;
	var mapY = (AccelerometerXYZ[1]+10)*18 +180;
	var mapZ = (AccelerometerXYZ[2]+10)*18;
	
	var desiredRotation = Quaternion.Euler(mapY, mapX, mapZ);

	
	transform.rotation =
		  Quaternion.Slerp (transform.rotation, desiredRotation, Time.deltaTime * speed);
	


}


function GetData() {
	//update each local private values
	fader = oscData.fader;
	push = oscData.push;
	toggle = oscData.toggle;
	xyCoords = oscData.xyCoords;
	AccelerometerXYZ = oscData.AccelerometerXYZ;

}