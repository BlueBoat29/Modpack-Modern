

function registerTACZMiscRecipes(event) {
	
	event.shaped('tfg:flintlock_mechanism', [
		'ABC',
		'DEF',
		'GHI'
	], {
		A: '#forge:tools/screwdrivers',
		B: '#forge:gems/flint',
		C: '#forge:tools/files',
		D: '#forge:springs/steel',
		E: '#forge:bolts/steel',
		F: '#forge:plates/steel',
		G: '#forge:tools/wire_cutters',
		H: '#forge:small_gears/steel',
		I: '#forge:tools/hammers'
	}).id('tfg:shaped/flintlock_mechanism');
	
	/*event.recipes.gtceu.assembler('tfg:clockwork_mechanism')
		.itemInputs('2x greate:steel_cogwheel', 'greate:rubber_belt_connector', '#forge:springs/steel', 
					'4x #forge:screws/steel', '#forge:rings/brass', '2x #forge:rings/rubber')
		.itemOutputs('tfg:clockwork_mechanism')
		.EUt(32)
		.duration(80)*/
	
	event.recipes.gtceu.assembler('tfg:advanced_clockwork_mechanism')
		.itemInputs('2x greate:aluminium_cogwheel', 'greate:silicone_rubber_belt_connector', '2x #forge:springs/aluminium', 
					'8x #forge:screws/aluminium', '#forge:gears/cobalt_brass', '3x #forge:rings/silicone_rubber')
		.itemOutputs('tfg:advanced_clockwork_mechanism')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(80)
		
	event.recipes.gtceu.assembler('tfg:certus_mechanism')
		.itemInputs('2x ae2:charged_certus_quartz_crystal', '2x #forge:gears/titanium', '2x #forge:springs/niobium_titanium', 
					'16x #forge:screws/titanium', '2x #forge:rods/titanium', '6x #forge:rings/styrene_butadiene_rubber',
					'16x #forge:fine_wires/red_alloy')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('tfg:certus_mechanism')
		.EUt(GTValues.VA[GTValues.EV])
		.duration(80)
}