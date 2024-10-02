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

    function printer1(int, out){
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
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": int,
                        "amount": 1,
                        "slot": "input4"
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": out,
                        "amount": 1,
                        "slot": "output"
                    }
                ]
            }
        )
    }

    //Printer
    function printer(int){
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
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": int,
                        "amount": 1,
                        "slot": "input4"
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": int,
                        "amount": 2,
                        "slot": "output"
                    }
                ]
            }
        )
    }



    printer1("the_ages_of_times:sky_parchment", "the_ages_of_times:star_observation_book")
    printer("the_ages_of_times:star_observation_book")
    printer("the_ages_of_times:quantum_physics_book")
    printer("the_ages_of_times:letter_book")
    printer("the_ages_of_times:gunpowder_recipes_book")
    printer("the_ages_of_times:paper_recipe_book")
    printer("the_ages_of_times:thermodynamics_laws_book")
    printer("the_ages_of_times:general_relativity")
})