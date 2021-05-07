var AVJason;

if(!claims.device.avcheck) return false;

console.log(claims.device.avcheck);

try{
  	AVJason = JSON.parse(claims.device.avcheck.replace(/\\/g,"").replace(/"{/g,"{").replace(/}"/g,"}").replace(/\r\n/g,""));
  	for (var i = 0; i < AVJason.length; i++){
       var av = AVJason[i];
       
       //if( av["Name"] != "No av detected." )return true;   
       if( av["Name"] != "No av detected." && av["RealTimeProtectionStatus"] == "ON")return true;  
     }
  	 console.log("required state <> " + state);
  	 return false;
}
catch(err){
 	console.log(err);
 	return false;
}
return false;
