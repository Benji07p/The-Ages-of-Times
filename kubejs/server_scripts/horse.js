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
                    
                    "type": "custommachinery:entity",
                    "mode": "input",
                    "amount": 1,
                    "radius": 7,
                    "action": "check_amount",
                    "filter": ["minecraft:leash_knot"],
                    "whitelist": true
                },
                {
                    "type": "custommachinery:structure",
                    "pattern": [
                        ["m"],
                        ["b"],
                        ["d"]
                    ],
                    "keys": {
                        "b": "create:shaft",
                        "d": "minecraft:oak_fence"
                    }
                },
                {
                    "type": "custommachinery:contraption",
                    "mode": "output",
                    "speed": 48,
                    "stress": 6
				},
                {
                    "type": "custommachinery:command",
                    "command": "/execute as @e[type=minecraft:armor_stand, distance=..1] at @s run execute as @e[type=minecraft:horse,distance=..3] run tp @s ^2 ^ ^ facing ^-90 ^-90 ^-90",
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
}),

onEvent('recipes', event => {
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:horse_power",
            "time": 1,
            "hidden": true,
            "requirements": [
                {
                    "type": "custommachinery:block",
                    "mode": "output",
                    "action": "check",
                    "pos": [0, -1, 0, 0, 0, 0],
                    "filter": ["custommachinery:custom_machine_block{\"machineID\":\"taotmachinery:horselol\"}"]
                },
                {
                    "type": "custommachinery:block",
                    "mode": "output",
                    "action": "replace_destroy",
                    "pos": [0, -1, 0, 0, 0, 0],
                    "filter": ["custommachinery:custom_machine_block", "minecraft:end_portal_frame", "minecraft:structure_block", "minecraft:structure_void", "minecraft:jigsaw", "minecraft:command_block", "minecraft:chain_command_block", "minecraft:repeating_command_block", "minecraft:bedrock", "minecraft:barrier"],
                    "block": "custommachinery:custom_machine_block{\"machineID\":\"taotmachinery:horselol\"}"
                }
			]
		}
    )
}),

onEvent('recipes', event => {
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:horselol",
            "time": 3000,
            "hidden": true,
            "requirements": [
                {
                    "type": "custommachinery:command",
                    "command": "/summon minecraft:armor_stand ~ ~1 ~ {Invisible:1}",
                    "permission": 2,
                    "phase": "starting"
                },
                {
                    "type": "custommachinery:command",
                    "command": "/kill @e[type=minecraft:armor_stand, distance=..1]",
                    "permission": 2,
                    "phase": "ending"
                }
			]
		}
    )
})