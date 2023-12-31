onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:horse_power",
            "time": 40000,
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
                    "command": "/execute as @e[type=horse,distance=..2] at @s if blocks 424 -63 -132 424 -63 -132 424 -63 -132 all run tp @s ~1 ~ ~",
                    "permission": 2,
                    "phase": "crafting_tickable"
                },
                {
                    "type": "custommachinery:command",
                    "command": "/execute as @e[type=horse,distance=..2] at @s if blocks 424 -63 -132 424 -63 -132 424 -63 -132 all run tp @s ~ ~ ~-2",
                    "permission": 2,
                    "phase": "starting"
                }
			]
		}
	)

})