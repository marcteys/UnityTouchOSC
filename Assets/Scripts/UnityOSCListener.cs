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
		  

		//get the type of button
		string  type = address.Replace("/", string.Empty);
		type = Regex.Replace(type, @"\d", string.Empty);
		
		
		foreach(GameObject tmpObj in GameObject.FindGameObjectsWithTag("OSCTarget")){
			
			//send data for simple target game objects
			if(tmpObj.GetComponent<OSCSimpleTarget>()!= null) {
							if(tmpObj.GetComponent<OSCSimpleTarget>().targetName == address) {
							target = tmpObj;
							tmpObj.GetComponent<OSCSimpleTarget>().type = type;
							target.SendMessage ("OnOscMessage", args);
					}
			} 
			
			//send data for multiple target game objects

			if(tmpObj.GetComponent<OSCMultiTarget>()!= null) {
				for(var i =0; i < tmpObj.GetComponent<OSCMultiTarget>().targetName.Count ;i++) {
					

					if(tmpObj.GetComponent<OSCMultiTarget>().targetName[i] == address) {
						
							target = tmpObj;
						
							tmpObj.GetComponent<OSCMultiTarget>().type = type;
							target.SendMessage ("OnOscMessage", args);
					}
				}
	
			}
			
		}
	}
}
