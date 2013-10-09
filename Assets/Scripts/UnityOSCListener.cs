

using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class UnityOSCListener : MonoBehaviour  {
	public void OSCMessageReceived(OSC.NET.OSCMessage message){	
		string address = message.Address;
		ArrayList args = message.Values;

		Debug.Log(address);
		foreach( var item in args){
			Debug.Log(item);
		}
	}
}
