onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:plasma_auto",
            "time": 1,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "the_ages_of_times:plasma_singularity",
                    "amount": 1,
                    "slot": "input"
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": "minecraft:nether_star",
                    "slot": "output",
                    "amount": 1
                }
			]
		}
	)
})