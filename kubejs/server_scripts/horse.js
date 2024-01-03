onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:horse_power",
            "time": 4000,
            "requirements": [
                {
                    "type": "custommachinery:entity",
                    "mode": "input",
                    "amount": 1,
                    "radius": 7,
                    "action": "check_amount",
                    "filter": ["minecraft:horse"],
                    "whitelist": true
                },
                {
                    "type": "custommachinery:contraption",
                    "mode": "output",
                    "speed": 32,
                    "stress": 256
				},
                {
                    "type": "custommachinery:command",
                    "command": "/execute as @e[type=horse,distance=..7] run tp @s ~ ~ ~2",
                    "permission": 2,
                    "phase": "crafting_tickable"
                }
			]
		}
	)

})