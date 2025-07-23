<<<<<<< Updated upstream
"use strict";
=======
//IndexLogic is used mainly for the removal of tacz items
//	const json = JSON.parse(event.getStdJson());
//	console.log(json);
//	return event.setJson(JSON.stringify(json));
//This can be used to read what the json contains for any given id
>>>>>>> Stashed changes

const ammoIndexLogic = (event) => {
	const id = event.getId().toString();
/*	
	if (!global.TACZ_ENABLED_AMMO.includes(id)) {
		
		return event.removeAmmo();
	}
	*/
	
	
}

const attachmentIndexLogic = (event) => {
	const id = event.getId().toString();
	/*
	if (!global.TACZ_ENABLED_ATTACH.includes(id)) {
		
		return event.removeAttachment();
	}
	*/
}

const gunIndexLogic = (event) => {
	const id = event.getId().toString();
/*	
	if (!global.TACZ_ENABLED_GUNS.includes(id)) {
		
		return event.removeGun();
	}
	*/
	
}

const attachmentDataLogic = (event) => {
	
	
}

const gunDataLogic = (event) => {
	
}

const attachmentTagsLogic = (event) => {
	//If this works use it to stop the groved magazines from being used in other guns
	
}