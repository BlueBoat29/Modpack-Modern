
const ammoIndexLogic = (event) => {
	const id = event.getId().toString();
	
	if (!(id in global.TACZ_ENABLED_AMMO)) {
		
		return event.removeAmmo();
	}
	
	
	
	
}