onEvent('recipes', event => {

	function craftingRock(tag){

	event.custom(
		{
			"type": "lychee:block_interacting",
			"item_in": {
				"item":"lychee:always_true"
			},
			"block_in": "crafting_table",
			"post": {
				"type": "prevent_default"
			}
		}
    )

}

    craftingRock()


})