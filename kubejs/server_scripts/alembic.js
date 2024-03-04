onEvent('recipes', event => {

    function distillation(input, amount1, input7, amount7, fluidinput, amount2, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:alembic",
            "time": 80,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": input,
                    "amount": amount1,
                    "slot": "input1"
                },
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": input7,
                    "amount": amount7,
                    "slot": "input2"
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "fluid": fluidinput,
                    "amount": amount2
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "fluid": fluidoutput,
                    "amount": amount3
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output1,
                    "amount": amount4,
                    "slot": "input5",
                    "chance": chance1
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output2,
                    "amount": amount5,
                    "slot": "input6",
                    "chance": chance2
                }
			]
		}
	)}
    function meltingdistillation(input, amount1, input9, amount9, fluidinput, amount2, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:alembic",
                "time": 80,
                "requirements": [
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": input,
                        "amount": amount1,
                        "slot": "input1"
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": input9,
                        "amount": amount9,
                        "slot": "input3"
                    },
                    {
                        "type": "custommachinery:fluid",
                        "mode": "input",
                        "fluid": fluidinput,
                        "amount": amount2
                    },
                    {
                        "type": "custommachinery:fluid",
                        "mode": "output",
                        "fluid": fluidoutput,
                        "amount": amount3
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": output1,
                        "amount": amount4,
                        "slot": "input5",
                        "chance": chance1
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": output2,
                        "amount": amount5,
                        "slot": "input6",
                        "chance": chance2
                    },
                    {
                        "type": "custommachinery:fuel"
                    }
                ]
            }
        )}
        function oxydoreduction(input, amount1, input45, amount45, input9, amount9, fluidinput, amount2, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
            event.custom(
                {
                    "type": "custommachinery:custom_machine",
                    "machine": "taotmachinery:alembic",
                    "time": 80,
                    "requirements": [
                        {
                            "type": "custommachinery:item",
                            "mode": "input",
                            "item": input,
                            "amount": amount1,
                            "slot": "input1"
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "input",
                            "item": input45,
                            "amount": amount45,
                            "slot": "input2"
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "input",
                            "item": input9,
                            "amount": amount9,
                            "slot": "input3"
                        },
                        {
                            "type": "custommachinery:fluid",
                            "mode": "input",
                            "fluid": fluidinput,
                            "amount": amount2
                        },
                        {
                            "type": "custommachinery:fluid",
                            "mode": "output",
                            "fluid": fluidoutput,
                            "amount": amount3
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "output",
                            "item": output1,
                            "amount": amount4,
                            "slot": "input5",
                            "chance": chance1
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "output",
                            "item": output2,
                            "amount": amount5,
                            "slot": "input6",
                            "chance": chance2
                        },
                        {
                            "type": "custommachinery:fuel"
                        }
                    ]
                }
            )}

            function melter(input, amount1, input45, amount45, input9, amount9, output1, amount4, chance1, output2, amount5, chance2){
                event.custom(
                    {
                        "type": "custommachinery:custom_machine",
                        "machine": "taotmachinery:alembic",
                        "time": 80,
                        "requirements": [
                            {
                                "type": "custommachinery:item",
                                "mode": "input",
                                "item": input,
                                "amount": amount1,
                                "slot": "input1"
                            },
                            {
                                "type": "custommachinery:item",
                                "mode": "input",
                                "item": input45,
                                "amount": amount45,
                                "slot": "input2"
                            },
                            {
                                "type": "custommachinery:item",
                                "mode": "input",
                                "item": input9,
                                "amount": amount9,
                                "slot": "input3"
                            },
                            {
                                "type": "custommachinery:item",
                                "mode": "output",
                                "item": output1,
                                "amount": amount4,
                                "slot": "input5",
                                "chance": chance1
                            },
                            {
                                "type": "custommachinery:item",
                                "mode": "output",
                                "item": output2,
                                "amount": amount5,
                                "slot": "input6",
                                "chance": chance2
                            },
                            {
                                "type": "custommachinery:fuel"
                            }
                        ]
                    }
                )}

    function melting(input45, amount45, input, amount1, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:alembic",
                "time": 80,
                "requirements": [
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": input45,
                        "amount": amount45,
                        "slot": "input1"
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": input,
                        "amount": amount1,
                        "slot": "input3"
                    },
                    {
                        "type": "custommachinery:fluid",
                        "mode": "output",
                        "tank": "output1",
                        "fluid": fluidoutput,
                        "amount": amount3
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": output1,
                        "amount": amount4,
                        "slot": "input5",
                        "chance": chance1
                    },
                    {
                        "type": "custommachinery:item",
                        "mode": "output",
                        "item": output2,
                        "amount": amount5,
                        "slot": "input6",
                        "chance": chance2
                    },
                    {
                        "type": "custommachinery:fuel"
                    }
                ]
            }
        )}

        function melter2(input9, amount9, output1, amount4, chance1, output2, amount5, chance2){
            event.custom(
                {
                    "type": "custommachinery:custom_machine",
                    "machine": "taotmachinery:alembic",
                    "time": 80,
                    "requirements": [
                        {
                            "type": "custommachinery:item",
                            "mode": "input",
                            "item": input9,
                            "amount": amount9,
                            "slot": "input3"
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "output",
                            "item": output1,
                            "amount": amount4,
                            "slot": "input5",
                            "chance": chance1
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "output",
                            "item": output2,
                            "amount": amount5,
                            "slot": "input6",
                            "chance": chance2
                        },
                        {
                            "type": "custommachinery:fuel"
                        }
                    ]
                }
            )}

function melting2(input, amount1, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:alembic",
            "time": 80,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": input,
                    "amount": amount1,
                    "slot": "input3"
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "tank": "output1",
                    "fluid": fluidoutput,
                    "amount": amount3
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output1,
                    "amount": amount4,
                    "slot": "input5",
                    "chance": chance1
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output2,
                    "amount": amount5,
                    "slot": "input6",
                    "chance": chance2
                },
                {
                    "type": "custommachinery:fuel"
                }
            ]
        }
    )}

        function meltingfluid(input, amount1, fluidinput, amount2, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
            event.custom(
                {
                    "type": "custommachinery:custom_machine",
                    "machine": "taotmachinery:alembic",
                    "time": 80,
                    "requirements": [
                        {
                            "type": "custommachinery:item",
                            "mode": "input",
                            "item": input,
                            "amount": amount1,
                            "slot": "input3"
                        },
                        {
                            "type": "custommachinery:fluid",
                            "mode": "input",
                            "fluid": fluidinput,
                            "amount": amount2
                        },
                        {
                            "type": "custommachinery:fluid",
                            "mode": "output",
                            "tank": "output1",
                            "fluid": fluidoutput,
                            "amount": amount3
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "output",
                            "item": output1,
                            "amount": amount4,
                            "slot": "input5",
                            "chance": chance1
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "output",
                            "item": output2,
                            "amount": amount5,
                            "slot": "input6",
                            "chance": chance2
                        },
                        {
                            "type": "custommachinery:fuel"
                        }
                    ]
                }
            )}

        function fill(input, fluidinput, amount2, output1){
            event.custom(
                {
                    "type": "custommachinery:custom_machine",
                    "machine": "taotmachinery:alembic",
                    "time": 10,
                    "requirements": [
                        {
                            "type": "custommachinery:item",
                            "mode": "input",
                            "item": input,
                            "amount": 1,
                            "slot": "input1"
                        },
                        {
                            "type": "custommachinery:fluid",
                            "mode": "input",
                            "fluid": fluidinput,
                            "amount": amount2,
                            "tank": "input"
                        },
                        {
                            "type": "custommachinery:item",
                            "mode": "output",
                            "item": output1,
                            "amount": 1,
                            "slot": "input5"
                        }
                    ]
                }
            )}
    
            function unfill(input, fluidoutput, amount2, output1){
                event.custom(
                    {
                        "type": "custommachinery:custom_machine",
                        "machine": "taotmachinery:alembic",
                        "time": 10,
                        "requirements": [
                            {
                                "type": "custommachinery:item",
                                "mode": "input",
                                "item": input,
                                "amount": 1,
                                "slot": "input1"
                            },
                            {
                                "type": "custommachinery:fluid",
                                "mode": "output",
                                "fluid": fluidoutput,
                                "amount": amount2,
                                "tank": "output1"
                            },
                            {
                                "type": "custommachinery:item",
                                "mode": "output",
                                "item": output1,
                                "amount": 1,
                                "slot": "input5"
                            }
                        ]
                    }
                )}

    //Hydrogen
    distillation("chemlib:iron", 1, "the_ages_of_times:beaker", 1, "minecraft:water", 100, "chemlib:hydrogen_fluid", 100, "chemlib:iron_ii_oxide", 1, 1, "the_ages_of_times:test_tube", 1, 1)
    distillation("chemlib:iron", 2, "the_ages_of_times:beaker", 1, "minecraft:water", 300, "chemlib:hydrogen_fluid", 300, "chemlib:iron_oxide", 1, 1, "the_ages_of_times:test_tube", 2, 1)
    distillation("chemlib:iron", 3, "the_ages_of_times:beaker", 1, "minecraft:water", 400, "chemlib:hydrogen_fluid", 400, "the_ages_of_times:iron_oxide_iii", 1, 1, "the_ages_of_times:test_tube", 3, 1)
    meltingfluid("the_ages_of_times:gas_test_tube", 2, "chemlib:hydrogen_fluid", 100, "minecraft:water", 10, "chemlib:hydrogen", 2, 1, "minecraft:air", 1, 0.01)

    //Phosphorus
    fill("the_ages_of_times:beaker", "the_ages_of_times:iron_sulfate", 63, "chemlib:iron_ii_sulfate")
    unfill("chemlib:iron_ii_sulfate", "the_ages_of_times:iron_sulfate", 63, "the_ages_of_times:beaker")
    melter2("chemlib:iron_ii_sulfate", 8, "chemlib:iron_ii_sulfate_dust", 1, 1, "the_ages_of_times:beaker", 1, 1)

    //Bismuth
    meltingdistillation("the_ages_of_times:test_tube", 1, "electrodynamics:raworelead", 10, "minecraft:water", 100, "tconstruct:molten_lead", 900, "chemlib:bismuth", 1, 0.5, "minecraft:air", 1, 0.01)

    //Carbon
    melting2("minecraft:charcoal", 1, "chemlib:carbon_dioxide_fluid", 100, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)
    melting2("minecraft:coal", 1, "chemlib:carbon_dioxide_fluid", 100, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)
    melting2("minecraft:diamond", 1, "chemlib:carbon_dioxide_fluid", 100, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)
    fill("the_ages_of_times:balloon", "chemlib:carbon_dioxide_fluid", 63, "chemlib:carbon_dioxide")

    //Chlorine
    melter2("electrodynamics:crystalhalite", 1, "chemlib:ammonium_chloride_dust", 1, 0.1, "minecraft:air", 1, 1)
    melter("the_ages_of_times:erlenmeyer", 8, "the_ages_of_times:balloon", 8, "chemlib:ammonium_chloride_dust", 1, "chemlib:hydrochloric_acid", 8, 1, "chemlib:ammonia", 8, 1)
    unfill("chemlib:ammonia", "chemlib:ammonia_fluid", 63, "the_ages_of_times:balloon")
    unfill("chemlib:hydrochloric_acid", "chemlib:hydrochloric_acid_fluid", 63, "the_ages_of_times:erlenmeyer")
    oxydoreduction("the_ages_of_times:beaker", 1, "the_ages_of_times:gas_test_tube", 2, "chemlib:manganese_oxide_dust", 1, "chemlib:hydrochloric_acid_fluid", 250, "minecraft:water", 125, "the_ages_of_times:manganese_chloride_ii", 1, 1, "chemlib:chlorine", 2, 1)

    //Oxygen and Nitrogen
    meltingfluid("the_ages_of_times:beaker", 6, "chemlib:mercury_fluid", 100, "chemlib:nitrogen_fluid", 282, "the_ages_of_times:mercury_oxide", 3, 1, "the_ages_of_times:beaker", 3, 1)
    fill("the_ages_of_times:balloon", "chemlib:nitrogen_fluid", 63, "the_ages_of_times:nitrogen")
    melting("the_ages_of_times:glass_ampul", 2, "the_ages_of_times:mercury_oxide", 3, "chemlib:oxygen_fluid", 76, "the_ages_of_times:beaker", 3, 1, "chemlib:mercury", 2, 1)
    fill("the_ages_of_times:balloon", "chemlib:oxygen_fluid", 63, "the_ages_of_times:oxygen_ballon")
})