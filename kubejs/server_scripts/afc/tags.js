"use strict";

/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerAFCItemTags = (event) => {
	global.AFC_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

    global.AFC_WOOD_TYPES.forEach(woodType => {
        event.add('minecraft:logs_that_burn', `#afc:${woodType}_logs`)
        event.add('tfg:default_chests', `afc:wood/chest/${woodType}`)
        event.add('tfg:trapped_chests', `afc:wood/trapped_chest/${woodType}`)
        
        event.add('firmalife:food_shelves', `afc:wood/food_shelf/${woodType}`)
        event.add('firmalife:hangers', `afc:wood/hanger/${woodType}`)
        event.add('firmalife:jarbnets', `afc:wood/jarbnet/${woodType}`)
        event.add('firmalife:big_barrels', `afc:wood/big_barrel/${woodType}`)
        event.add('firmalife:wine_shelves', `afc:wood/wine_shelf/${woodType}`)
        event.add('firmalife:stomping_barrels', `afc:wood/stomping_barrel/${woodType}`)
        event.add('firmalife:barrel_presses', `afc:wood/barrel_press/${woodType}`)
    })

	//Hardwood Tags
	global.AFC_HARDWOOD_TYPES.forEach(woodType => {
		event.add('tfg:hardwood', `#afc:${woodType}_logs`)
		event.add('tfg:stripped_hardwood', `afc:wood/stripped_log/${woodType}`)
		event.add('tfg:stripped_hardwood', `afc:wood/stripped_wood/${woodType}`)
	});

	//Softwood Tags
	global.AFC_SOFTWOOD_TYPES.forEach(woodType => {
		event.add('tfg:softwood', `#afc:${woodType}_logs`)
		event.add('tfg:stripped_softwood', `afc:wood/stripped_log/${woodType}`)
		event.add('tfg:stripped_softwood', `afc:wood/stripped_wood/${woodType}`)
	})

	// AFC saplings are missing the item tag for whatever reason
	global.AFC_SAPLINGS.forEach(x => {
		event.add('minecraft:saplings', `afc:wood/sapling/${x.sapling}`)
	})

	event.add("tfg:latex_logs", "#tfc:kapok_logs")
    event.add("tfg:latex_logs", "#afc:hevea_logs")
    event.add("tfg:latex_logs", "#afc:rubber_fig_logs")

	event.add("tfg:rosin_logs", "#tfc:aspen_logs")
	event.add("tfg:rosin_logs", "#tfc:spruce_logs")
	event.add("tfg:rosin_logs", "#tfc:white_cedar_logs")
	event.add("tfg:rosin_logs", "#tfc:douglas_fir_logs")

    event.add("tfg:rubber_saplings", "tfc:wood/sapling/kapok")
	event.add("tfg:rubber_saplings", "afc:wood/sapling/red_silk_cotton")
    event.add("tfg:rubber_saplings", "afc:wood/sapling/hevea")
    event.add("tfg:rubber_saplings", "afc:wood/sapling/rubber_fig")

    event.add("tfg:rubber_leaves", "tfc:wood/leaves/kapok")
	event.add("tfg:rubber_leaves", "afc:wood/leaves/red_silk_cotton")
    event.add("tfg:rubber_leaves", "afc:wood/leaves/hevea")
    event.add("tfg:rubber_leaves", "afc:wood/leaves/rubber_fig")

	event.add("tfg:rubber_plants", "tfc:plant/goldenrod")
	event.add("tfg:rubber_plants", "tfc:plant/dandelion")
}


/**
 * 
 * @param {TagEvent.Block} event 
 */
const registerAFCBlockTags = (event) => {
	global.AFC_DISABLED_ITEMS.forEach(block => {
		event.removeAllTagsFrom(block)
	})

	event.add("afc:tappable_logs", "tfc:wood/log/ancient_kapok")
	event.add("afc:tappable_logs", "tfc:wood/log/kapok")

	event.add("afc:tappable_logs", "tfc:wood/log/ancient_aspen")
	event.add("afc:tappable_logs", "tfc:wood/log/aspen")
	event.add("afc:tappable_logs", "tfc:wood/log/ancient_white_cedar")
	event.add("afc:tappable_logs", "tfc:wood/log/white_cedar")
	event.add("afc:tappable_logs", "tfc:wood/log/ancient_douglas_fir")
	event.add("afc:tappable_logs", "tfc:wood/log/douglas_fir")
	event.add("afc:tappable_logs", "tfc:wood/log/ancient_spruce")
	event.add("afc:tappable_logs", "tfc:wood/log/spruce")

    event.add("tfg:latex_logs", "#tfc:kapok_logs")
    event.add("tfg:latex_logs", "#afc:hevea_logs")
    event.add("tfg:latex_logs", "#afc:rubber_fig_logs")

    event.add("tfg:syrup_logs", "#tfc:maple_logs")
    event.add("tfg:syrup_logs", "#tfc:birch_logs")

	event.add("tfg:rosin_logs", "#tfc:aspen_logs")
	event.add("tfg:rosin_logs", "#tfc:spruce_logs")
	event.add("tfg:rosin_logs", "#tfc:white_cedar_logs")
	event.add("tfg:rosin_logs", "#tfc:douglas_fir_logs")
}

/**
 * 
 * @param {TagEvent.Fluid} event 
 */
const registerAFCFluidTags = (event) => {
	event.removeAllTagsFrom("afc:latex")
	event.add("c:hidden_from_recipe_viewers", "afc:latex")
}
