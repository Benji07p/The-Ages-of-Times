onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:quantum_intriquer",
            "time": 120,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "ae2:singularity",
                    "amount": 1,
                    "slot": "input1"
                },
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "ae2:singularity",
                    "amount": 1,
                    "slot": "input2"
                },
                {
                    "type": "custommachinery:block",
                    "mode": "input",
                    "action": "replace_destroy",
                    "pos": [0, 0, -1, 0, 0, -1],
                    "block": "minecraft:redstone_wire[power=15]"
                }
			]
		}
	)

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:quantum_bedrock",
            "time": 1,
            "requirements": [
                {
                    "type": "custommachinery:block",
                    "mode": "input",
                    "action": "check",
                    "pos": [0, -1, 0, 0, -1, 0],
                    "filter": ["minecraft:redstone_wire[power=15]"],
                    "whitelist": true
                },
                {
                    "type": "custommachinery:block",
                    "mode": "output",
                    "action": "replace_destroy",
                    "pos": [0, -1, 0, 0, -1, 0],
                    "block": "minecraft:redstone_wire"
                }
			]
		}
	)
})