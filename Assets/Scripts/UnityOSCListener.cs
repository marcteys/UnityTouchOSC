using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class UnityOSCListener : MonoBehaviour  {
		public GameObject target;
		public bool debugMode;
		public void OSCMessageReceived(OSC.NET.OSCMessage message){	
		string address = message.Address;
		ArrayList args = message.Values;
		if(debugMode) {
			Debug.Log ("adress : " + address);
		}
		foreach(GameObject tmpObj in GameObject.FindGameObjectsWithTag("button")){
			
			
			
			
			if(tmpObj.GetComponent<OSCSimpleTarget>()!= null) {
							if(tmpObj.GetComponent<OSCSimpleTarget>().targetName == address) {
							target = tmpObj;
							target.SendMessage ("OnOscMessage", args);
					}
			}
			
			//ajouter une emission pour multiple target
			
			
			
			
		}
	}
}
