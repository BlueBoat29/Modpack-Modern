
function registerTACZAttachRecipes(event){
	
	//Scopes
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
	
	event.recipes.gtceu.assembler('tacz:assembler/ca_reflex')
		.itemInputs('tfc:lens', '#forge:rings/brass', '#forge:plates/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_reflex"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10)
	event.recipes.gtceu.assembler('tacz:assembler/ca_standard')
		.itemInputs('2x tfc:lens','#forge:leather', '2x #forge:rings/brass', 
					'#forge:plates/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_standard"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10)
	event.recipes.gtceu.assembler('tacz:assembler/ca_medium')
		.itemInputs('3x tfc:lens', '#forge:leather', '4x #forge:rings/brass',
					'#forge:small_gears/brass', '#forge:plates/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_medium_distance"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10)
	event.recipes.gtceu.assembler('tacz:assembler/ca_telophoto')
		.itemInputs('6x tfc:lens', 'gtceu:brass_small_item_pipe','2x #forge:rings/steel',
					'2x #forge:small_gears/brass', '#forge:plates/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:scope_telephoto"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10)

	
	//Muzzles
	
	//Stock
	
	//Grip
	event.recipes.gtceu.assembler('tacz:assembler/wooden_grip')
		.itemInputs('gtceu:treated_wood_planks', '2x #forge:ingots/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_wooden"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10)
	event.recipes.gtceu.assembler('tacz:assembler/gantry_grip')
		.itemInputs('create:gantry_shaft', '2x #forge:ingots/steel')
		.itemOutputs(Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_wooden"}'))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10)
}