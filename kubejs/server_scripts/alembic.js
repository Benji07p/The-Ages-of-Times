onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:alembic",
            "time": 80,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "chemlib:iron",
                    "amount": 3,
                    "slot": "input1"
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "fluid": "minecraft:water",
                    "amount": 100
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "fluid": "chemlib:hydrogen_fluid",
                    "amount": 200
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": "chemlib:iron_oxide",
                    "amount": 1,
                    "slot": "input5",
                    "chance": 0.5
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": "chemlib:iron_ii_oxide",
                    "amount": 1,
                    "slot": "input6",
                    "chance": 0.5
                }
			]
		}
	)

})