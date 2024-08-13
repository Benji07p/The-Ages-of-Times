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
    function distil(input, amount1, input7, amount7, output1, amount4, chance1, output2, amount5, chance2){
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
        function distil2(input, amount1, input7, amount7, input3, amount3, output1, amount4, chance1, output2, amount5, chance2){
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
                            "type": "custommachinery:item",
                            "mode": "input",
                            "item": input3,
                            "amount": amount3,
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
        function oxydoreduction(input, amount1, input45, amount45, input9, amount9, fluidinput, amount2, chance3, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
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
                            "amount": amount2,
                            "chance": chance3
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

        function melting84272724(input45, amount45, input8427, amount8427, input, amount1, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
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
                            "item": input8427,
                            "amount": amount8427,
                            "slot": "input2"
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

        function melter2(input45, amount45, input9, amount9, output1, amount4, chance1, output2, amount5, chance2){
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

            function fluidreaction(input, amount1, fluidinput, amount2, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
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
                            }
                        ]
                    }
                )}

            function meltingflui(input, amount1, output1, amount4, chance1, output2, amount5, chance2){
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

    //Sulfuric Acid & Iron Sulfate
    meltingfluid("the_ages_of_times:nitrogen", 1, "chemlib:oxygen_fluid", 200, "chemlib:nitrogen_dioxide_fluid", 200, "the_ages_of_times:balloon", 1, 1, "minecraft:air", 1, 0.01)
    meltingflui("electrodynamics:dustsulfur", 1, "electrodynamics:oxidedisulfur", 1, 1, "minecraft:air", 1, 0.01)
    meltingfluid("electrodynamics:oxidedisulfur", 1, "chemlib:nitrogen_dioxide_fluid", 100, "chemlib:nitric_oxide_fluid", 100, "electrodynamics:oxidetrisulfur", 1, 1, "minecraft:air", 1, 0.01)
    meltingfluid("electrodynamics:oxidetrisulfur", 1, "minecraft:water", 100, "chemlib:sulfuric_acid_fluid", 100, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)
    fill("the_ages_of_times:balloon", "chemlib:nitrogen_dioxide_fluid", 63, "chemlib:nitrogen_dioxide")
    unfill("chemlib:nitrogen_dioxide", "chemlib:nitrogen_dioxide_fluid", 63, "the_ages_of_times:balloon")
    fill("the_ages_of_times:balloon", "chemlib:nitric_oxide_fluid", 63, "chemlib:nitric_oxide")
    unfill("chemlib:nitric_oxide", "chemlib:nitric_oxide_fluid", 63, "the_ages_of_times:balloon")
    meltingfluid("minecraft:raw_iron", 1, "chemlib:sulfuric_acid_fluid", 100, "the_ages_of_times:iron_sulfate", 100, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)

    //Phosphorus
    fill("the_ages_of_times:beaker", "the_ages_of_times:iron_sulfate", 63, "chemlib:iron_ii_sulfate")
    unfill("chemlib:iron_ii_sulfate", "the_ages_of_times:iron_sulfate", 63, "the_ages_of_times:beaker")
    melter2("the_ages_of_times:watch_glass", 1, "chemlib:iron_ii_sulfate", 8, "chemlib:iron_ii_sulfate_dust", 1, 1, "the_ages_of_times:beaker", 8, 1)
    fill("the_ages_of_times:beaker", "the_ages_of_times:golden_water", 63, "the_ages_of_times:gold_water")
    unfill("the_ages_of_times:gold_water", "the_ages_of_times:golden_water", 63, "the_ages_of_times:beaker")
    distillation("chemlib:iron_ii_sulfate_dust", 1, "create:filter", 1, "the_ages_of_times:golden_water", 100, "chemlib:sulfuric_acid_fluid", 100, "the_ages_of_times:vivianite_dust", 1, 1, "create:filter", 1, 1)
    oxydoreduction("the_ages_of_times:test_tube", 3, "the_ages_of_times:beaker", 2, "the_ages_of_times:vivianite_dust", 1, "chemlib:sulfuric_acid_fluid", 200, 0.0, "minecraft:water", 200, "chemlib:phosphoric_acid", 2, 1, "chemlib:iron", 3, 1)

    //Bismuth
    meltingdistillation("the_ages_of_times:test_tube", 1, "electrodynamics:raworelead", 10, "minecraft:water", 100, "tconstruct:molten_lead", 900, "chemlib:bismuth", 1, 0.5, "minecraft:air", 1, 0.01)

    //Carbon
    melting2("minecraft:charcoal", 1, "chemlib:carbon_dioxide_fluid", 100, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)
    melting2("minecraft:coal", 1, "chemlib:carbon_dioxide_fluid", 100, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)
    melting2("minecraft:diamond", 1, "chemlib:carbon_dioxide_fluid", 100, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)
    fill("the_ages_of_times:balloon", "chemlib:carbon_dioxide_fluid", 63, "chemlib:carbon_dioxide")

    //Chlorine
    melter2("the_ages_of_times:watch_glass", 1, "electrodynamics:crystalhalite", 1, "chemlib:ammonium_chloride_dust", 1, 0.1, "minecraft:air", 1, 1)
    melter("the_ages_of_times:erlenmeyer", 8, "the_ages_of_times:balloon", 8, "chemlib:ammonium_chloride_dust", 1, "chemlib:hydrochloric_acid", 8, 1, "chemlib:ammonia", 8, 1)
    unfill("chemlib:ammonia", "chemlib:ammonia_fluid", 63, "the_ages_of_times:balloon")
    unfill("chemlib:hydrochloric_acid", "chemlib:hydrochloric_acid_fluid", 63, "the_ages_of_times:erlenmeyer")
    oxydoreduction("the_ages_of_times:beaker", 1, "the_ages_of_times:gas_test_tube", 2, "chemlib:manganese_oxide_dust", 1, "chemlib:hydrochloric_acid_fluid", 250, 1.0, "minecraft:water", 125, "the_ages_of_times:manganese_chloride_ii", 1, 1, "chemlib:chlorine", 2, 1)

    //Oxygen and Nitrogen
    meltingfluid("the_ages_of_times:beaker", 6, "chemlib:mercury_fluid", 100, "chemlib:nitrogen_fluid", 282, "the_ages_of_times:mercury_oxide", 3, 1, "the_ages_of_times:beaker", 3, 1)
    fill("the_ages_of_times:balloon", "chemlib:nitrogen_fluid", 126, "the_ages_of_times:nitrogen")
    unfill("the_ages_of_times:nitrogen", "chemlib:nitrogen_fluid", 126, "the_ages_of_times:balloon")
    melting("the_ages_of_times:glass_ampul", 2, "the_ages_of_times:mercury_oxide", 3, "chemlib:oxygen_fluid", 76, "the_ages_of_times:beaker", 3, 1, "chemlib:mercury", 2, 1)
    fill("the_ages_of_times:balloon", "chemlib:oxygen_fluid", 126, "the_ages_of_times:oxygen_ballon")
    unfill("the_ages_of_times:oxygen_ballon", "chemlib:oxygen_fluid", 126, "the_ages_of_times:balloon")

    //Lithium
    meltingfluid("electrodynamics:raworelepidolite", 1, "chemlib:sulfuric_acid_fluid", 1000, "the_ages_of_times:lithium_sulfate", 1000, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01)
    
    //Aluminium and Sodium
    melting2("chemlib:calcium_carbonate", 1, "chemlib:carbon_dioxide_fluid", 100, "chemlib:calcium_oxide", 1, 1, "minecraft:air", 1, 0.01)
    fill("chemlib:calcium_oxide", "minecraft:water", 100, "chemlib:calcium_hydroxide")
    melter2("the_ages_of_times:beaker", 1, "minecraft:calcite", 1, "chemlib:calcium_carbonate", 1, 1, "minecraft:air", 1, 0.01)
    melter2("the_ages_of_times:beaker", 1, "minecraft:egg", 1, "chemlib:calcium_carbonate", 8, 1, "minecraft:air", 1, 0.01)
    meltingdistillation("electrodynamics:dustsalt", 2, "the_ages_of_times:beaker", 1, "chemlib:sulfuric_acid_fluid", 100, "chemlib:hydrochloric_acid_fluid", 200, "chemlib:sodium_sulfate", 1, 1, "minecraft:air", 1, 0.01)
    distil2("chemlib:sodium_sulfate", 1, "minecraft:charcoal", 1, "the_ages_of_times:balloon", 4, "the_ages_of_times:sodium_sulfide", 1, 1, "chemlib:carbon_monoxide", 4, 1)
    distil("the_ages_of_times:sodium_sulfide", 1, "chemlib:calcium_carbonate", 1, "chemlib:sodium_carbonate", 1, 1, "chemlib:calcium_sulfide", 1, 1)
    fill("the_ages_of_times:beaker", "the_ages_of_times:liquid_sodium_hydroxide", 63, "chemlib:sodium_hydroxide")
    unfill("chemlib:sodium_hydroxide", "the_ages_of_times:liquid_sodium_hydroxide", 63, "the_ages_of_times:beaker")
    distil("the_ages_of_times:beaker", 1, "electrodynamics:oxidesodiumcarbonate", 1, "chemlib:sodium_carbonate", 1, 1, "minecraft:air", 1, 0.01)
    distil2("chemlib:sodium_carbonate", 1, "chemlib:calcium_hydroxide", 1, "the_ages_of_times:beaker", 1, "chemlib:sodium_hydroxide", 2, 1, "chemlib:calcium_carbonate", 1, 1)
    oxydoreduction("chemlib:sodium_carbonate", 1, "minecraft:coal", 2, "immersiveengineering:dust_aluminum", 1, "the_ages_of_times:liquid_sodium_hydroxide", 250, 1.0, "tconstruct:molten_iron", 20, "the_ages_of_times:sodium_aluminate", 1, 1, "electrodynamics:dustsilica", 1, 1)
    oxydoreduction("chemlib:sodium_carbonate", 1, "immersiveengineering:coal_coke", 1, "immersiveengineering:dust_aluminum", 1, "the_ages_of_times:liquid_sodium_hydroxide", 250, 1.0, "tconstruct:molten_iron", 30, "the_ages_of_times:sodium_aluminate", 1, 1, "electrodynamics:dustsilica", 2, 1)
    oxydoreduction("chemlib:sodium_carbonate", 1, "minecraft:coal", 2, "create:crushed_raw_aluminum", 1, "the_ages_of_times:liquid_sodium_hydroxide", 250, 1.0, "tconstruct:molten_iron", 20, "the_ages_of_times:sodium_aluminate", 1, 1, "electrodynamics:dustsilica", 1, 1)
    oxydoreduction("chemlib:sodium_carbonate", 1, "immersiveengineering:coal_coke", 1, "create:crushed_raw_aluminum", 1, "the_ages_of_times:liquid_sodium_hydroxide", 250, 1.0, "tconstruct:molten_iron", 30, "the_ages_of_times:sodium_aluminate", 1, 1, "electrodynamics:dustsilica", 2, 1)
    fluidreaction("the_ages_of_times:sodium_aluminate", 2, "chemlib:carbon_dioxide_fluid", 90, "tconstruct:molten_aluminum", 90, "electrodynamics:oxidesodiumcarbonate", 1, 1, "the_ages_of_times:beaker", 2, 1)

    //Chromium
    oxydoreduction("electrodynamics:oxidesodiumcarbonate", 8, "the_ages_of_times:beaker", 10, "electrodynamics:raworechromium", 4, "chemlib:oxygen_fluid", 1400, 1.0, "chemlib:carbon_dioxide_fluid", 800, "the_ages_of_times:sodium_chromate", 8, 1, "chemlib:iron_oxide", 2, 1)
    meltingfluid("the_ages_of_times:sodium_chromate", 2, "chemlib:sulfuric_acid_fluid", 100, "minecraft:water", 100, "the_ages_of_times:sodium_dichromate", 1, 1, "chemlib:sodium_sulfate", 1, 1)
    melting("minecraft:coal", 2, "the_ages_of_times:sodium_dichromate", 1, "chemlib:carbon_monoxide_fluid", 100, "chemlib:chromium_oxide", 1, 1, "electrodynamics:oxidesodiumcarbonate", 4, 1)
    fill("the_ages_of_times:balloon", "chemlib:carbon_monoxide_fluid", 63, "chemlib:carbon_monoxide")
    unfill("chemlib:carbon_monoxide", "chemlib:carbon_monoxide_fluid", 63, "the_ages_of_times:balloon")
    melting("electrodynamics:ingotaluminum", 2, "chemlib:chromium_oxide", 1, "tconstruct:molten_aluminum", 180, "electrodynamics:ingotchromium", 2, 1, "the_ages_of_times:beaker", 1, 1)

    //Tungsten
    distillation("the_ages_of_times:raw_ore_wolframite", 1, "the_ages_of_times:beaker", 1, "chemlib:hydrochloric_acid_fluid", 200, "the_ages_of_times:tungstic_acid_fluid", 100, "the_ages_of_times:manganese_chloride_ii", 1, 0.5, "the_ages_of_times:iron_chloride", 1, 0.5)
    fill("the_ages_of_times:beaker", "the_ages_of_times:tungstic_acid_fluid", 63, "the_ages_of_times:tungstic_acid")
    unfill("the_ages_of_times:tungstic_acid", "the_ages_of_times:tungstic_acid_fluid", 63, "the_ages_of_times:beaker")
    oxydoreduction("the_ages_of_times:balloon", 3, "minecraft:coal", 3, "the_ages_of_times:erlenmeyer", 1, "the_ages_of_times:tungstic_acid_fluid", 100, 1.0, "tconstruct:molten_tungsten", 90, "chemlib:carbon_monoxide", 3, 1, "chemlib:water", 1, 1)

    //Titanium
    fill("the_ages_of_times:gas_test_tube", "chemlib:chlorine_fluid", 63, "chemlib:chlorine")
    unfill("chemlib:chlorine", "chemlib:chlorine_fluid", 63, "the_ages_of_times:gas_test_tube")
    oxydoreduction("the_ages_of_times:beaker", 1, "minecraft:coal", 2, "electrodynamics:raworetitanium", 1, "chemlib:chlorine_fluid", 400, 1.0, "chemlib:carbon_monoxide_fluid", 200, "the_ages_of_times:titanium_tetrachloride", 1, 1, "minecraft:air", 1, 0.01)
    melting84272724("chemlib:sodium", 4, "the_ages_of_times:beaker", 3, "the_ages_of_times:titanium_tetrachloride", 1, "tconstruct:molten_glass", 400, "electrodynamics:ingottitanium", 1, 1, "chemlib:sodium_chloride", 4, 1)
})