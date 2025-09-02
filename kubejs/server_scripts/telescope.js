onEvent('recipes', event => {

    function spectroscopie(item1, chance1, item2, item3, chance, dim, time){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:telescope",
            "time": 100,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": item1,
                    "amount": 1,
                    "slot": "input1",
                    "chance": chance1
                },
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": item2,
                    "amount": 1,
                    "slot": "input2",
                    "chance": 0
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": item3,
                    "slot": "output",
                    "amount": 1,
                    "chance": chance
                },
                {
                    "type": "custommachinery:dimension",
                    "filter": dim
                },
                {
                    "type": "custommachinery:weather",
                    "weather": "clear"
                },
                {
                    "type": "custommachinery:time",
                    "range": time
                }
			]
		}
	)}

    function spectroscopie2(item1, chance1, item2, item3, chance){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:telescope",
                "time": 100,
                "requirements": [
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": item1,
                        "amount": 1,
                        "slot": "input1",
                        "chance": chance1
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": item2,
                        "amount": 1,
                        "slot": "input2",
                        "chance": 0
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": item3,
                        "slot": "output",
                        "amount": 1,
                        "chance": chance
                    }
                ]
            }
        )
    }

    function spacetelescope(item1, chance1, item2, item3, dim){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:telescope",
                "time": 100,
                "requirements": [
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": item1,
                        "amount": 1,
                        "slot": "input1",
                        "chance": chance1
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": item2,
                        "amount": 1,
                        "slot": "input2",
                        "chance": 0
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": item3,
                        "slot": "output",
                        "amount": 1
                    },
                    {
                        "type": "custommachinery:dimension",
                        "filter": dim
                    }
                ]
            }
        )
    }

    function telescope(item1, chance1, item2, item3, dim, time){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:telescope",
                "time": 100,
                "requirements": [
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": item1,
                        "amount": 1,
                        "slot": "input1",
                        "chance": chance1
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": item2,
                        "amount": 1,
                        "slot": "input2"
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": item3,
                        "slot": "output",
                        "amount": 1
                    },
                    {
                        "type": "custommachinery:dimension",
                        "filter": dim
                    },
                    {
                        "type": "custommachinery:weather",
                        "weather": "clear"
                    },
                    {
                        "type": "custommachinery:time",
                        "range": time
                    }
                ]
            }
        )
    }

    spectroscopie("the_ages_of_times:gas_test_tube", 0.01, "minecraft:glass_pane", "the_ages_of_times:unknown_element_4", 0.01, "minecraft:overworld", "(6000, 12000)")

    spectroscopie2("the_ages_of_times:test_tube", 0.01, "minecraft:water_bucket", "chemlib:cesium", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "electrodynamics:raworelepidolite", "chemlib:rubidium", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "create:zinc_ore", "chemlib:indium", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "minecraft:copper_ore", "chemlib:indium", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "create:raw_zinc", "chemlib:gallium", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "chemlib:tellurium_dust", "chemlib:thallium", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "chemlib:erbium_dust", "the_ages_of_times:unknown_element_2", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "the_ages_of_times:didymium", "chemlib:samarium", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "the_ages_of_times:ore_gadolinite", "the_ages_of_times:unknown_element_1", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "nuclearscience:polonium210", "chemlib:radium", 0.01)
    spectroscopie2("the_ages_of_times:test_tube", 0.01, "chemlib:samarium_dust", "chemlib:europium", 0.01)
    
    spacetelescope("minecraft:glass_pane", 0, "minecraft:glass_pane", "the_ages_of_times:moon_coordinates", "beyond_earth:earth_orbit")

    telescope("minecraft:glass_pane", 0, "the_ages_of_times:star_parchment", "the_ages_of_times:sky_parchment", "minecraft:overworld", "(12000,)")
})