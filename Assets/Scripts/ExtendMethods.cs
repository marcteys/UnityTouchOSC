using UnityEngine;
using System.Collections;




public static class ExtensionMethods {
	
	
	
	public static float Map(this float value,  float low1,  float high1,  float low2,  float high2){ 

		float val = low2 + (value - low1) * (high2 - low2) / (high1 - low1);
		if (val > high2) {
			val = high2;
		}
		return val;

		
	}
	
	
	public static Vector3 RotatePointAroundPivot(this Vector3 point,Vector3 pivot, Vector3 angles) {
		Vector3 dir = point - pivot; // get point direction relative to pivot
		dir = Quaternion.Euler(angles) * dir; // rotate it
		point = dir + pivot; // calculate rotated point
		return point; // return it
	}
	
	
	//	public static float Round (float value, int digits) {
	
	//	float mult = Mathf.pow(10.0f, (float)digits);
	//	return Mathf.Round(value * mult) / mult;
	
	//	}
	
	
	
}
