

using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class UnityOSCListener : MonoBehaviour  {
			public GameObject target;

	public void OSCMessageReceived(OSC.NET.OSCMessage message){	
		string address = message.Address;
		ArrayList args = message.Values;
		
		string type = address;

	//	string type = Regex.Replace(adress, @"[\d-]", string.Empty);
		 type = type.Replace("/", string.Empty);
		type = Regex.Replace(type, @"\d", string.Empty);
		
		Debug.Log(type);
		
		
foreach(GameObject tmpObj in GameObject.FindGameObjectsWithTag("button"))
{
			if(tmpObj.GetComponent<OSCTarget>()!= null) {
							if(tmpObj.GetComponent<OSCTarget>().targetName == address) {
				
							target = tmpObj;
							if (target) {
            				    target.SendMessage ("OnOscMessage", args);
           					 }
					}
	
			}
}
		
		
		foreach( var item in args){
		//	Debug.Log(item);
		}
	}
}
