
function registerTACZAttachRecipes(event){
	
	event.shaped(Item.of('tacz:attachment', '{AttachmentId:"tacz:scope_1873_6x"}'), [
		'ABA',
		'BCB',
		'DEF'
	], {
		A: '#forge:rings/black_steel',
		B: 'tfc:lens',
		C: 'gtceu:brass_small_item_pipe',
		D: '#forge:tools/screwdrivers',
		E: '#forge:screws/black_steel',
		F: '#forge:tools/files'
		
	}).id('tacz:trapdoor_scope');
	
	
}