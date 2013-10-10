#pragma strict
private var oscData : OSCSimpleTarget;

private var fader : float;
private var push : boolean;
private var toggle : boolean;
private var xyCoords : float[] = new float[2];




function Start () {
	oscData = this.GetComponent(OSCSimpleTarget);
	Debug.Log(oscData.toggle);

}

function Update () {

	GetData();
	
	transform.position .z = fader*10;
	
	if(toggle) {
		transform.Rotate (0, 90 * Time.deltaTime, 0);
	}
            
}


function GetData() {

	fader = oscData.fader;
	push = oscData.push;
	toggle = oscData.toggle;
	xyCoords = oscData.xyCoords;
}