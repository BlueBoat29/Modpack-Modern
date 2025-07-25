// priority: 0
"use strict";

function registerDiggerHelmetItemTags(event) {

	const DISABLED_ITEMS = [
		'diggerhelmet:eternal_candle',
		'diggerhelmet:wool_lining'
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

}