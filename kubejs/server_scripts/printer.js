onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:printer",
            "time": 100,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "minecraft:paper",
                    "amount": 3,
                    "slot": "input1"
                },
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "minecraft:black_dye",
                    "amount": 6,
                    "slot": "input2"
                },
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "tconstruct:pattern",
                    "amount": 2,
                    "slot": "input3"
                },
                {
                    "type": "custommachinery:item_transform",
                    "input": "minecraft:written_book",
                    "input_slot": "input4",
                    "output_slot": "output",
                    "output_amount": 2,
                    "copy_nbt": true
                }
			]
		}
	)
})