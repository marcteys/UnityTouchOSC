using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class UnityOSCListener : MonoBehaviour  {
		public GameObject target;

		public void OSCMessageReceived(OSC.NET.OSCMessage message){	
		string address = message.Address;
		ArrayList args = message.Values;
		Debug.Log (address);
		foreach(GameObject tmpObj in GameObject.FindGameObjectsWithTag("button")){
			if(tmpObj.GetComponent<OSCTarget>()!= null) {
							if(tmpObj.GetComponent<OSCTarget>().targetName == address) {
							target = tmpObj;
							target.SendMessage ("OnOscMessage", args);
					}
	
			}
		}
	}
}
