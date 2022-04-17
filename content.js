function UpKey(event) {
	var keycode, keyChar;
	if(!event) var event=window.event;
	if (event.keyCode) keycode=event.keyCode;
	else if(event.which) keycode=event.which;
	var V=CurrentV;
	var G=CurrentG;
	for (var i=0; i<keys.length; i++) {
		if (keys[i]==46){
			if (!Fix[CurrentV-1][CurrentG-1]) {
				Scan[CurrentV-1][CurrentG-1].let=" ";
				storagename="scan"+id+'_'+(CurrentV-1)+'_'+(CurrentG-1);
				localStoragesetItem(storagename, " ");
			}
		}
	}
	switch(keycode){
        case 115:
		if ((CurrentV>0) && (CurrentG>0)){
			if (!Fix[CurrentV-1][CurrentG-1]) {					
				InsertLetter(Scan[CurrentV-1][CurrentG-1].ans);
			}
			else {
				if (!MayDir(VerDir)) VerDir=!VerDir;
				TryCheckError();
				NextLetter();
				DrawScanword();
				AutoScroll();
			}
		}
        	break;
	}
}

field.addEventListener("keyup", UpKey);
document.getElementById("keyboard").addEventListener("keyup", UpKey);