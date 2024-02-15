onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:horse_power",
            "time": 3,
            "hidden": true,
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
                    "speed": 48,
                    "stress": 256
				},
                {
                    "type": "custommachinery:command",
                    "command": "/execute as @e[type=minecraft:armor_stand, distance=..1] at @s run execute as @e[type=minecraft:horse,distance=..3] run tp @s ^2 ^ ^ facing ^270 ^ ^",
                    "permission": 2,
                    "phase": "crafting_tickable"
                },
                {
                    "type": "custommachinery:command",
                    "command": "/execute as @e[type=minecraft:armor_stand, distance=..1] at @s run tp @s ~ ~ ~ facing ^-0.01 ^ ^",
                    "permission": 2,
                    "phase": "crafting_tickable"
                }
			]
		}
	)
})