// priority: 0
"use strict";

const registerTFGItems = (event) => {

	registerTFGDeprecatedItems(event)
	registerTFGFoodItems(event)

	// #region Electronics
	event.create('tfg:unfinished_electron_tube', 'create:sequenced_assembly')
	event.create('tfg:unfinished_vacuum_tube', 'create:sequenced_assembly')
	event.create('tfg:unfinished_basic_electronic_circuit', 'create:sequenced_assembly')
	event.create('tfg:unfinished_inscriber_accumulation_press')
	event.create('tfg:vitrified_pearl')
	event.create('tfg:cryo_fluix_pearl')
		.translationKey('tfg:cryo_fluix_pearl')
	// #endregion

	// #region Space

	// Orbit dimension markers
	event.create('tfg:marker/earth_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/moon_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/mars_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/venus_orbit').tag('c:hidden_from_recipe_viewers')
	event.create('tfg:marker/mercury_orbit').tag('c:hidden_from_recipe_viewers')

	global.AD_ASTRA_WOOD.forEach(wood => {
		event.create(`tfg:wood/lumber/${wood.name}`)
			.translationKey(`item.tfg.${wood.name}_lumber`)
			.tag('tfc:lumber')
	})
	// #endregion

	// #region Paper making
	event.create('tfg:hardwood_strip')
		.translationKey('item.tfg.hardwood_strip')

	event.create('tfg:soaked_hardwood_strip')
		.translationKey('item.tfg.soaked_hardwood_strip')

	event.create('tfg:soaked_unrefined_paper')
		.translationKey('item.tfg.soaked_unrefined_paper')
	
	event.create('tfg:terra_firma_greg')
		.translationKey('item.tfg.terra_firma_greg')
		.tag('c:hidden_from_recipe_viewers')
	
	//#region chalk creation
	event.create('tfg:unfired_chalk')
		.translationKey('item.tfg.unfired_chalk')

	Color.DYE.forEach((dyeName, dye) =>
	{
		event.create(`tfg:wet_${dyeName}_chalk`)
		.translationKey(`item.tfg.wet_${dyeName}_chalk`)
		.textureJson({
			layer0: 'tfg:item/unfired_chalk'
		})
		.color(0, dye.getHexJS());
	});
	//#endregion


	// #region Molds
	global.TFG_EXTRUDER_MOLDS.forEach(id => event.create(id))

	global.TFG_CASTING_MOLDS.forEach(id => event.create(id))
	// #endregion

	// #region Stone bricks and dusts
	event.create('tfg:brick/deepslate')
		.translationKey('item.tfg.brick.deepslate')
	event.create('tfg:brick/moon_stone')
		.translationKey('item.tfg.brick.moon_stone')
	event.create('tfg:brick/mars_stone')
		.translationKey('item.tfg.brick.mars_stone')
	event.create('tfg:brick/venus_stone')
		.translationKey('item.tfg.brick.venus_stone')
	event.create('tfg:brick/mercury_stone')
		.translationKey('item.tfg.brick.mercury_stone')
	event.create('tfg:brick/glacio_stone')
		.translationKey('item.tfg.brick.glacio_stone')
	event.create('tfg:brick/permafrost')
		.translationKey('item.tfg.brick.permafrost')
	// #endregion

	// #region Primitive rubber gloves
	event.create('tfg:prepared_leather_gloves')
		.translationKey('item.tfg.prepared_leather_gloves')

	event.create('tfg:latex_soaked_gloves')
		.translationKey('item.tfg.latex_soaked_gloves')
	// #endregion

	//#region Medicine

	const pill = [
		'haste',
		'night_vision',
		'poison',
		'regeneration',
		'slowness',
		'speed',
		'water_breathing',
		'weakness',
	]
	const pill_names = [
		'Haste',
		'Night Vision',
		'Poison',
		'Regeneration',
		'Slowness',
		'Speed',
		'Water Breathing',
		'Weakness',
	]

	pill.forEach((pill_array, index) => {
		const pill_names_array = pill_names[index];

		event.create(`tfg:${pill_array}_pill`)
			.translationKey(`item.tfg.${pill_array}_pill`)
			.tooltip(`§9${pill_names_array} (08:00)`)

		event.create(`tfg:${pill_array}_tablet`)
			.translationKey(`item.tfg.${pill_array}_tablet`)
			.tooltip(`§9${pill_names_array} (30:00)`)
	})

	event.create(`tfg:antipoison_pill`)
		.translationKey(`item.tfg.antipoison_pill`)
		.tooltip(`§9Cures Poison`)

	event.create(`tfg:antipoison_tablet`)
		.translationKey(`item.tfg.antipoison_tablet`)
		.tooltip(`§9Cures All Harmful Effects`)   

	//salvos

	const salvo = [
		'absorption',
		'fire_resistance',
		'invisibility',
		'luck',
		'resistance',
	]
	const salvo_names = [
		'Absorption',
		'Fire Resistance',
		'Invisibility',
		'Luck',
		'Resistance',
	]

	salvo.forEach((salvo_array, index) => {
		const salvo_names_array = salvo_names[index];

		event.create(`tfg:${salvo_array}_salvo`)
			.translationKey(`item.tfg.${salvo_array}_salvo`)
			.tooltip(`§9${salvo_names_array} (08:00)`)
	})

	event.create(`tfg:instant_health_salvo`)
		.translationKey(`item.tfg.instant_health_salvo`)
		.tooltip(`§9Instant Health II`)
	//#endregion

	//#region Misc
	event.create('tfg:paraffin_wax')
	event.create('tfg:conifer_rosin')
	event.create('tfg:foil_pack')
	event.create('tfg:clean_foil_pack')
	event.create('tfg:flint_club_head')
	//#endregion

	//#region Cloth & String
	event.create('tfg:polycaprolactam_fabric')
		.translationKey('item.tfg.polycaprolactam_fabric')

	event.create('tfg:polycaprolactam_string')
		.translationKey('item.tfg.polycaprolactam_string')

	event.create('tfg:phantom_silk')
		.translationKey('item.tfg.phantom_silk')

	event.create('tfg:phantom_thread')
		.translationKey('item.tfg.phantom_thread')

	event.create('tfg:space_suit_fabric')
		.translationKey('item.tfg.space_suit_fabric')
	//#endregion

	//#region Tools
	event.create('tfg:flint_arrow_head')
		.translationKey('item.tfg.flint_arrow_head')

	event.create('tfg:fletching')
		.translationKey('item.tfg.fletching')

	event.create('tfg:armor_stand_arms')
		.translationKey('item.tfg.armor_stand_arms')

	event.create('tfg:harvest_basket')
		.translationKey('item.tfg.harvest_basket')
		.parentModel('tfg:item/harvest_basket')
		.maxDamage(128)

	event.create('tfg:aluminium_harvest_basket')
		.translationKey('item.tfg.aluminium_harvest_basket')
		.parentModel('tfg:item/aluminium_harvest_basket')
		.unstackable()

	//Fishing Nets
	event.create('tfg:fishing_net/wood')
		.translationKey('item.tfg.fishing_net.wood')
		.parentModel('tfg:item/fishing_nets/wood_fishing_net')
		.texture('tfg:item/fishing_nets/wood_fishing_net')
		.maxDamage(112)

	event.create('tfg:fishing_net/brass')
		.translationKey('item.tfg.fishing_net.brass')
		.parentModel('tfg:item/fishing_nets/brass_fishing_net')
		.texture('tfg:item/fishing_nets/brass_fishing_net')
		.maxDamage(326)

	event.create('tfg:fishing_net/rose_gold')
		.translationKey('item.tfg.fishing_net.rose_gold')
		.parentModel('tfg:item/fishing_nets/rose_gold_fishing_net')
		.texture('tfg:item/fishing_nets/rose_gold_fishing_net')
		.maxDamage(380)

	event.create('tfg:fishing_net/sterling_silver')
		.translationKey('item.tfg.fishing_net.sterling_silver')
		.parentModel('tfg:item/fishing_nets/sterling_silver_fishing_net')
		.texture('tfg:item/fishing_nets/sterling_silver_fishing_net')
		.maxDamage(380)

	event.create('tfg:fishing_net/invar')
		.translationKey('item.tfg.fishing_net.invar')
		.parentModel('tfg:item/fishing_nets/invar_fishing_net')
		.texture('tfg:item/fishing_nets/invar_fishing_net')
		.maxDamage(740)

	event.create('tfg:fishing_net/tin_alloy')
		.translationKey('item.tfg.fishing_net.tin_alloy')
		.parentModel('tfg:item/fishing_nets/tin_alloy_fishing_net')
		.texture('tfg:item/fishing_nets/tin_alloy_fishing_net')
		.maxDamage(710)

	event.create('tfg:fishing_net/cupronickel')
		.translationKey('item.tfg.fishing_net.cupronickel')
		.parentModel('tfg:item/fishing_nets/cupronickel_fishing_net')
		.texture('tfg:item/fishing_nets/cupronickel_fishing_net')
		.maxDamage(560)

	event.create('tfg:fishing_net/magnalium')
		.translationKey('item.tfg.fishing_net.magnalium')
		.parentModel('tfg:item/fishing_nets/magnalium_fishing_net')
		.texture('tfg:item/fishing_nets/magnalium_fishing_net')
		.maxDamage(1830)

	//#endregion

	//#region Immersive Aircraft Impl
	event.create('tfg:scaffolding_frame')
		.translationKey('item.tfg.scaffolding_frame')

	event.create('tfg:airship_hull')
		.translationKey('item.tfg.airship_hull')

	event.create('tfg:airship_balloon')
		.translationKey('item.tfg.airship_balloon')
		
	event.create('tfg:lv_aircraft_engine')
		.translationKey('item.tfg.lv_aircraft_engine')
	
	event.create('tfg:hv_aircraft_engine')
		.translationKey('item.tfg.hv_aircraft_engine')

	event.create('tfg:ev_aircraft_engine')
		.translationKey('item.tfg.ev_aircraft_engine')

	event.create('tfg:black_steel_plated_airplane_propeller')
		.translationKey('item.tfg.black_steel_plated_airplane_propeller')

	event.create('tfg:redblu_steel_plated_airplane_propeller')
		.translationKey('item.tfg.redblu_steel_plated_airplane_propeller')

	event.create('tfg:stainless_steel_plated_airplane_propeller')
		.translationKey('item.tfg.stainless_steel_plated_airplane_propeller')

	event.create('tfg:titanium_plated_airplane_propeller')
		.translationKey('item.tfg.titanium_plated_airplane_propeller')

	event.create('tfg:redblu_steel_landing_gear')
		.translationKey('item.tfg.redblu_steel_landing_gear')

	event.create('tfg:aluminium_landing_gear')
		.translationKey('item.tfg.aluminium_landing_gear')

	event.create('tfg:stainless_steel_landing_gear')
		.translationKey('item.tfg.stainless_steel_landing_gear')

	event.create('tfg:titanium_landing_gear')
		.translationKey('item.tfg.titanium_landing_gear')

	event.create('tfg:redblu_steel_hull_reinforcement')
		.translationKey('item.tfg.redblu_steel_hull_reinforcement')

	event.create('tfg:aluminium_hull_reinforcement')
		.translationKey('item.tfg.aluminium_hull_reinforcement')
		
	event.create('tfg:stainless_steel_hull_reinforcement')
		.translationKey('item.tfg.stainless_steel_hull_reinforcement')

	event.create('tfg:titanium_hull_reinforcement')
		.translationKey('item.tfg.titanium_hull_reinforcement')
	//#endregion
	
	//Tacz Helper Region
	event.create('tfg:flintlock_mechanism')
		.translationKey('item.tfg.flintlock_mechanism')
	event.create('tfg:advanced_clockwork_mechanism')
		.translationKey('item.tfg.advanced_clockwork_mechanism')
	event.create('tfg:certus_mechanism')
		.translationKey('item.tfg.certus_mechanism')

	event.create('tfg:small_bullet_casing')
		.translationKey('tfg:small_bullet_casing')
	event.create('tfg:shell_bullet_casing')
		.translationKey('tfg:shell_bullet_casing')
	event.create('tfg:large_bullet_casing')
		.translationKey('tfg:large_bullet_casing')
	event.create('tfg:nitrocellulose')
		.translationKey('tfg:nitrocellulose')
	//endregion
	
	//RockWool
	event.create('tfg:aes_wool')
		.translationKey('tfg:aes_wool')
	event.create('tfg:aes_compressed_wool')
		.translationKey('tfg:aes_compressed_wool')
	event.create('tfg:aes_insulation_sheet')
		.translationKey('tfg:aes_insulation_sheet')
	event.create('tfg:aes_insulation_roll')
		.translationKey('tfg:aes_insulation_roll')
	//endregion
	
	//Tier 2 Rocket Parts
	event.create('tfg:rocket_fin_t2')
		.translationKey('tfg:rocket_fin_t2')
	event.create('tfg:rocket_cone_t2')
		.translationKey('tfg:rocket_cone_t2')
	//endregion
}

	

