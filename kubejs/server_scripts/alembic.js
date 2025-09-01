onEvent('recipes', event => {
    function alembic( time,
        // inputs items
        input1, amount1, chance1, input1_enable,
        input2, amount2, chance2, input2_enable,
        input3, amount3, chance3, input3_enable,
        // fluid input/output
        fluidinput, fluidinputamount, fluidinputchance, fluidinput_enable,
        fluidoutput, fluidoutputamount, fluidoutputchance, fluidoutput_enable,
        // outputs
        output1, outputamount1, outputchance1,
        output2, outputamount2, outputchance2,
        output3, outputamount3, outputchance3,
        // fuel
        fuel_enable) {
            let requirements = [];

            // --- INPUT ITEMS ---
            if (input1_enable) {
                requirements.push({
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": input1,
                    "amount": amount1,
                    "chance": chance1,
                    "slot": "input1"
                });
            }
            if (input2_enable) {
                requirements.push({
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": input2,
                    "amount": amount2,
                    "chance": chance2,
                    "slot": "input2"
                });
            }
            if (input3_enable) {
                requirements.push({
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": input3,
                    "amount": amount3,
                    "chance": chance3,
                    "slot": "input3"
                });
            }

            // --- FLUID INPUT ---
            if (fluidinput_enable) {
                requirements.push({
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "fluid": fluidinput,
                    "amount": fluidinputamount,
                    "chance": fluidinputchance,
                    "tank": "input"
                });
            }
    
            // --- FLUID OUTPUT ---
            if (fluidoutput_enable) {
                requirements.push({
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "fluid": fluidoutput,
                    "amount": fluidoutputamount,
                    "chance": fluidoutputchance,
                    "tank": "output1"
                });
            }

            // --- OUTPUT ITEMS ---
            requirements.push({
                "type": "custommachinery:item",
                "mode": "output",
                "item": output1,
                "amount": outputamount1,
                "slot": "input5",
                "chance": outputchance1
            });
            requirements.push({
                "type": "custommachinery:item",
                "mode": "output",
                "item": output2,
                "amount": outputamount2,
                "slot": "input6",
                "chance": outputchance2
            });
            requirements.push({
                "type": "custommachinery:item",
                "mode": "output",
                "item": output3,
                "amount": outputamount3,
                "slot": "input7",
                "chance": outputchance3
            });

            // --- FUEL ---
            if (fuel_enable) {
                requirements.push({
                    "type": "custommachinery:fuel"
                });
            }

            // --- BUILD RECIPE ---
            event.custom({
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:alembic",
                "time": time,
                "requirements": requirements
            }
        );
    }


    //Hydrogen

    alembic(80, null, 0, 0, false,  null, 0, 0, false, "the_ages_of_times:gas_test_tube", 2, 1.0, true, "chemlib:hydrogen_fluid", 100, 1.0, true, "minecraft:water", 10, 1.0, true, "chemlib:hydrogen", 2, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)

    //Sulfuric Acid & Iron Sulfate
    alembic(80, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:nitrogen", 1, 1.0, true, "chemlib:oxygen_fluid", 200, 1.0, true, "chemlib:nitrogen_dioxide_fluid", 200, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "electrodynamics:dustsulfur", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "electrodynamics:oxidedisulfur", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "electrodynamics:oxidedisulfur", 1, 1.0, true, "chemlib:nitrogen_dioxide_fluid", 100, 1.0, true, "chemlib:nitric_oxide_fluid", 100, 1.0, true, "electrodynamics:oxidetrisulfur", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "electrodynamics:oxidetrisulfur", 1, 1.0, true, "minecraft:water", 100, 1.0, true, "chemlib:sulfuric_acid_fluid", 100, 1.0, true, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(10, "the_ages_of_times:balloon", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:nitrogen_dioxide_fluid", 63, 1.0, true, null, 0, 0, false, "chemlib:nitrogen_dioxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:nitrogen_dioxide", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:nitrogen_dioxide_fluid", 63, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:balloon", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:nitric_oxide_fluid", 63, 1.0, true, null, 0, 0, false, "chemlib:nitric_oxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:nitric_oxide", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:nitric_oxide_fluid", 63, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:erlenmeyer", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:sulfuric_acid_fluid", 63, 1.0, true, null, 0, 0, false, "chemlib:sulfuric_acid", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:sulfuric_acid", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:sulfuric_acid_fluid", 63, 1.0, true, "the_ages_of_times:erlenmeyer", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "the_ages_of_times:gas_test_tube", 2, 1.0, true, null, 0, 0, false, "minecraft:raw_iron", 1, 1.0, true, "chemlib:sulfuric_acid_fluid", 100, 1.0, true, "the_ages_of_times:iron_sulfate", 100, 1.0, true, "chemlib:hydrogen", 2, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)

    //Phosphorus
    alembic(10, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:iron_sulfate", 63, 1.0, true, null, 0, 0, false, "chemlib:iron_ii_sulfate", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:iron_ii_sulfate", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:iron_sulfate", 63, 1.0, true, "the_ages_of_times:beaker", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "the_ages_of_times:watch_glass", 1, 1.0, true, null, 0, 0, false, "chemlib:iron_ii_sulfate", 8, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:iron_ii_sulfate_dust", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:beaker", 8, 1.0, true)
    alembic(10, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:golden_water", 63, 1.0, true, null, 0, 0, false, "the_ages_of_times:gold_water", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:gold_water", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:golden_water", 63, 1.0, true, "the_ages_of_times:beaker", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "chemlib:iron_ii_sulfate_dust", 1, 1.0, true, "create:filter", 1, 1.0, true, null, 0, 0, false, "the_ages_of_times:golden_water", 100, 1.0, true, "chemlib:sulfuric_acid_fluid", 100, 1.0, true, "the_ages_of_times:vivianite_dust", 1, 1.0, "minecraft:air", 1, 0.01, "create:filter", 1, 1.0, false)
    alembic(80, "the_ages_of_times:test_tube", 3, 1.0, true, "the_ages_of_times:beaker", 2, 1.0, true, "the_ages_of_times:vivianite_dust", 1, 1.0, true, "chemlib:sulfuric_acid_fluid", 200, 0.0, true, "minecraft:water", 200, 1.0, true, "chemlib:phosphoric_acid", 2, 1.0, "chemlib:iron", 3, 1.0, "the_ages_of_times:watch_glass", 1, 1.0, true)

    //Bismuth
    alembic(80, "the_ages_of_times:test_tube", 1, 0.5, true, null, 0, 0, false, "electrodynamics:raworelead", 10, 1.0, true, "minecraft:water", 100, 1.0, true, "tconstruct:molten_lead", 900, 1.0, true, "chemlib:bismuth", 1, 0.5, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)

    //Carbon
    alembic(80, null, 0, 0, false,  null, 0, 0, false, "minecraft:charcoal", 1, 1.0, true, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 100, 1.0, true, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "minecraft:coal", 1, 1.0, true, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 100, 1.0, true, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "minecraft:diamond", 1, 1.0, true, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 100, 1.0, true, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(10, "the_ages_of_times:balloon", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 63, 1.0, true, null, 0, 0, false, "chemlib:carbon_dioxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:carbon_dioxide", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 63, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)

    //Chlorine
    alembic(80, "the_ages_of_times:watch_glass", 1, 0.1, true, null, 0, 0, false, "electrodynamics:crystalhalite", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:ammonium_chloride_dust", 1, 0.1, "minecraft:air", 1, 1.0, "electrodynamics:crystalhalite", 1, 1.0, true)
    alembic(80, "the_ages_of_times:erlenmeyer", 8, 1.0, true, "the_ages_of_times:balloon", 8, 1.0, true, "chemlib:ammonium_chloride_dust", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:hydrochloric_acid", 8, 1.0, "the_ages_of_times:watch_glass", 1, 1.0, "chemlib:ammonia", 8, 1.0, true)
    alembic(10, "chemlib:ammonia", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:ammonia_fluid", 63, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:balloon", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:ammonia_fluid", 63, 1.0, true, null, 0, 0, false, "chemlib:ammonia", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:hydrochloric_acid", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:hydrochloric_acid_fluid", 63, 1.0, true, "the_ages_of_times:erlenmeyer", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:erlenmeyer", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:hydrochloric_acid_fluid", 63, 1.0, true, null, 0, 0, false, "chemlib:hydrochloric_acid", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, "the_ages_of_times:gas_test_tube", 2, 1.0, true, "chemlib:manganese_oxide_dust", 1, 1.0, true, "chemlib:hydrochloric_acid_fluid", 250, 1.0, true, "minecraft:water", 125, 1.0, true, "the_ages_of_times:manganese_chloride_ii", 1, 1.0, "chemlib:chlorine", 2, 1.0, "the_ages_of_times:watch_glass", 1, 1.0, true)

    //Oxygen and Nitrogen
    alembic(80, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:beaker", 6, 1.0, true, "chemlib:mercury_fluid", 100, 1.0, true, "chemlib:nitrogen_fluid", 282, 1.0, true, "the_ages_of_times:mercury_oxide", 3, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:beaker", 3, 1.0, true)
    alembic(10, "the_ages_of_times:balloon", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:nitrogen_fluid", 126, 1.0, true, null, 0, 0, false, "the_ages_of_times:nitrogen", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:nitrogen", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:nitrogen_fluid", 126, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "the_ages_of_times:glass_ampul", 2, 1.0, true, null, 0, 0, false, "the_ages_of_times:mercury_oxide", 3, 1.0, true, null, 0, 0, false, "chemlib:oxygen_fluid", 76, 1.0, true, "the_ages_of_times:beaker", 3, 1.0, "minecraft:air", 1, 0.01, "chemlib:mercury", 2, 1.0, true)
    alembic(10, "the_ages_of_times:balloon", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:oxygen_fluid", 126, 1.0, true, null, 0, 0, false, "the_ages_of_times:oxygen_ballon", 1, 1.0, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:oxygen_ballon", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:oxygen_fluid", 126, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, "minecraft:air", 1, 0.01, false)

    //Lithium
    alembic(80, "the_ages_of_times:erlenmeyer", 2, 1.0, true, null, 0, 0, false, "electrodynamics:raworelepidolite", 1, 1.0, true, "chemlib:sulfuric_acid_fluid", 1000, 1.0, true, "the_ages_of_times:lithium_sulfate", 1000, 1.0, true, "chemlib:water", 2, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)

    //Aluminium and Sodium
    alembic(80, null, 0, 0, false, null, 0, 0, false, "chemlib:calcium_carbonate", 1, 1.0, true, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 100, 1.0, true, "chemlib:calcium_oxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(10, "chemlib:calcium_oxide", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "minecraft:water", 100, 1.0, true, null, 0, 0, false, "chemlib:calcium_hydroxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, "minecraft:calcite", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:calcium_carbonate", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, "the_ages_of_times:beaker", 8, 1.0, true, null, 0, 0, false, "minecraft:egg", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:calcium_carbonate", 8, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, "electrodynamics:dustsalt", 2, 1.0, true, null, 0, 0, false, "the_ages_of_times:beaker", 1, 1.0, true, "chemlib:sulfuric_acid_fluid", 100, 1.0, true, "chemlib:hydrochloric_acid_fluid", 200, 1.0, true, "chemlib:sodium_sulfate", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, "chemlib:sodium_sulfate", 1, 1.0, true, "minecraft:charcoal", 1, 1.0, true, "the_ages_of_times:balloon", 4, 1.0, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:sodium_sulfide", 1, 1.0, "minecraft:air", 1, 0.01, "chemlib:carbon_monoxide", 4, 1.0, false)
    alembic(80, "the_ages_of_times:sodium_sulfide", 1, 1.0, true, "chemlib:calcium_carbonate", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:sodium_carbonate", 1, 1.0, "minecraft:air", 1, 0.01, "chemlib:calcium_sulfide", 1, 1.0, false)
    alembic(10, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:liquid_sodium_hydroxide", 63, 1.0, true, null, 0, 0, false, "chemlib:sodium_hydroxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:sodium_hydroxide", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:liquid_sodium_hydroxide", 63, 1.0, true, "the_ages_of_times:beaker", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)

    alembic(10, "minecraft:bucket", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:liquid_sodium_hydroxide", 1000, 1.0, true, null, 0, 0, false, "the_ages_of_times:liquid_sodium_hydroxide_bucket", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:liquid_sodium_hydroxide_bucket", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:liquid_sodium_hydroxide", 1000, 1.0, true, "minecraft:bucket", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)

    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, "electrodynamics:oxidesodiumcarbonate", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:sodium_carbonate", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "chemlib:sodium_carbonate", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:beaker", 1, 1.0, "minecraft:air", 1, 0.01, "electrodynamics:oxidesodiumcarbonate", 1, 1.0, false)
    alembic(80, "chemlib:sodium_carbonate", 1, 1.0, true, "chemlib:calcium_hydroxide", 1, 1.0, true, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:sodium_hydroxide", 2, 1.0, "minecraft:air", 1, 0.01, "chemlib:calcium_carbonate", 1, 1.0, false)
    alembic(80, "chemlib:sodium_carbonate", 1, 1.0, true, "minecraft:coal", 2, 1.0, true, "immersiveengineering:dust_aluminum", 1, 1.0, true, "the_ages_of_times:liquid_sodium_hydroxide", 250, 1.0, true, "tconstruct:molten_iron", 20, 1.0, true, "the_ages_of_times:sodium_aluminate", 1, 1.0, "minecraft:air", 1, 0.01, "electrodynamics:dustsilica", 1, 1.0, true)
    alembic(80, "chemlib:sodium_carbonate", 1, 1.0, true, "immersiveengineering:coal_coke", 1, 1.0, true, "immersiveengineering:dust_aluminum", 1, 1.0, true, "the_ages_of_times:liquid_sodium_hydroxide", 250, 1.0, true, "tconstruct:molten_iron", 30, 1.0, true, "the_ages_of_times:sodium_aluminate", 1, 1.0, "minecraft:air", 1, 0.01, "electrodynamics:dustsilica", 2, 1.0, true)
    alembic(80, "chemlib:sodium_carbonate", 1, 1.0, true, "minecraft:coal", 2, 1.0, true, "create:crushed_raw_aluminum", 1, 1.0, true, "the_ages_of_times:liquid_sodium_hydroxide", 250, 1.0, true, "tconstruct:molten_iron", 20, 1.0, true, "the_ages_of_times:sodium_aluminate", 1, 1.0, "minecraft:air", 1, 0.01, "electrodynamics:dustsilica", 1, 1.0, true)
    alembic(80, "chemlib:sodium_carbonate", 1, 1.0, true, "immersiveengineering:coal_coke", 1, 1.0, true, "create:crushed_raw_aluminum", 1, 1.0, true, "the_ages_of_times:liquid_sodium_hydroxide", 250, 1.0, true, "tconstruct:molten_iron", 30, 1.0, true, "the_ages_of_times:sodium_aluminate", 1, 1.0, "minecraft:air", 1, 0.01, "electrodynamics:dustsilica", 2, 1.0, true)
    alembic(80, "the_ages_of_times:sodium_aluminate", 2, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 90, 1.0, true, "tconstruct:molten_aluminum", 90, 1.0, true, "electrodynamics:oxidesodiumcarbonate", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:beaker", 2, 1.0, false)

    //Chromium
    alembic(80, "electrodynamics:oxidesodiumcarbonate", 8, 1.0, true, "the_ages_of_times:beaker", 10, 1.0, true, "electrodynamics:raworechromium", 4, 1.0, true, "chemlib:oxygen_fluid", 1400, 1.0, true, "chemlib:carbon_dioxide_fluid", 800, 1.0, true, "the_ages_of_times:sodium_chromate", 8, 1.0, "minecraft:air", 1, 0.01, "chemlib:iron_oxide", 2, 1.0, true)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:sodium_chromate", 2, 1.0, true, "chemlib:sulfuric_acid_fluid", 100, 1.0, true, "minecraft:water", 100, 1.0, true, "the_ages_of_times:sodium_dichromate", 1, 1.0, "minecraft:air", 1, 0.01, "chemlib:sodium_sulfate", 1, 1.0, true)
    alembic(80, "minecraft:coal", 2, 1.0, true, null, 0, 0, false, "the_ages_of_times:sodium_dichromate", 1, 1.0, true, null, 0, 0, false, "chemlib:carbon_monoxide_fluid", 100, 1.0, true, "chemlib:chromium_oxide", 1, 1.0, "minecraft:air", 1, 0.01, "electrodynamics:oxidesodiumcarbonate", 4, 1.0, true)
    alembic(10, "the_ages_of_times:balloon", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:carbon_monoxide_fluid", 63, 1.0, true, null, 0, 0, false, "chemlib:carbon_monoxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:carbon_monoxide", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:carbon_monoxide_fluid", 63, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "electrodynamics:ingotaluminum", 2, 1.0, true, null, 0, 0, false, "chemlib:chromium_oxide", 1, 1.0, true, null, 0, 0, false, "tconstruct:molten_aluminum", 180, 1.0, true, "electrodynamics:ingotchromium", 2, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:beaker", 1, 1.0, true)

    //Tungsten
    alembic(80, "the_ages_of_times:raw_ore_wolframite", 1, 1.0, true, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, "chemlib:hydrochloric_acid_fluid", 200, 1.0, true, "the_ages_of_times:tungstic_acid_fluid", 100, 1.0, true, "the_ages_of_times:manganese_chloride_ii", 1, 0.5, "minecraft:air", 1, 0.01, "the_ages_of_times:iron_chloride", 1, 0.5, false)
    alembic(10, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:tungstic_acid_fluid", 63, 1.0, true, null, 0, 0, false, "the_ages_of_times:tungstic_acid", 1, 1.0,  "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "the_ages_of_times:tungstic_acid", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:tungstic_acid_fluid", 63, 1.0, true, "the_ages_of_times:beaker", 1, 1.0,  "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "the_ages_of_times:balloon", 3, 1.0, true, "minecraft:coal", 3, 1.0, true, "the_ages_of_times:erlenmeyer", 1, 1.0, true, "the_ages_of_times:tungstic_acid_fluid", 100, 1.0, true, "tconstruct:molten_tungsten", 90, 1.0, true, "chemlib:carbon_monoxide", 3, 1.0, "minecraft:air", 1, 0.01, "chemlib:water", 1, 1.0, true)

    //Titanium
    alembic(10, "the_ages_of_times:gas_test_tube", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:chlorine_fluid", 63, 1.0, true, null, 0, 0, false, "chemlib:chlorine", 1, 1.0,  "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(10, "chemlib:chlorine", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:chlorine_fluid", 63, 1.0, true, "the_ages_of_times:gas_test_tube", 1, 1.0,  "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, "minecraft:coal", 2, 1.0, true, "electrodynamics:raworetitanium", 1, 1.0, true, "chemlib:chlorine_fluid", 400, 1.0, true, "chemlib:carbon_monoxide_fluid", 200, 1.0, true, "the_ages_of_times:titanium_tetrachloride", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)

    //Nitric Acid
    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, "electrodynamics:dustniter", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:potassium_nitrate", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "chemlib:sulfuric_acid", 1, 1.0, true, "chemlib:potassium_nitrate", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:nitric_acid", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:potassium_bisulfate", 1, 1.0, false)

    //Silicon, Fluorine and Potassium
    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, "electrodynamics:raworefluorite", 1, 1.0, true, "chemlib:sulfuric_acid_fluid", 1000, 1.0, true, "the_ages_of_times:hydrofluoric_acid", 2000, 1.0, true, "chemlib:calcium_sulfate", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, "minecraft:beetroot", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:potassium_carbonate", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, "chemlib:potassium_carbonate", 1, 1.0, true, "chemlib:calcium_oxide", 1, 1.0, true, "the_ages_of_times:beaker", 1, 1.0, true, "minecraft:water", 100, 1.0, true, null, 0, 0, false, "chemlib:potassium_hydroxide", 2, 1.0, "minecraft:air", 1, 0.01, "chemlib:calcium_carbonate", 1, 1.0, true)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "chemlib:potassium", 16, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:potassium_dust", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:test_tube", 16, 1.0, true)
    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, "electrodynamics:dustsilica", 1, 1.0, true, "the_ages_of_times:hydrofluoric_acid", 400, 1.0, true, "minecraft:water", 200, 1.0, true, "the_ages_of_times:silicon_tetrafluoride", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    alembic(80, "chemlib:potassium_ingot", 4, 1.0, true, "the_ages_of_times:beaker", 48, 1.0, true, "the_ages_of_times:silicon_tetrafluoride", 16, 1.0, true, null, 0, 0, false, null, 0, 0, false, "ae2:silicon", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:potassium_fluoride", 64, 1.0, false)

    //Erbium, Terbium and Ytterbium
    alembic(80, "the_ages_of_times:yttrium_oxide", 1, 1.0, true, "create:filter", 1, 0.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:terbium_oxide", 1, 0.5, "minecraft:air", 1, 0.01, "the_ages_of_times:erbium_oxide", 1, 0.5, false)
    alembic(80, "the_ages_of_times:erbium_oxide", 1, 1.0, true, "create:filter", 1, 0.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:erbium_oxide", 1, 0.5, "minecraft:air", 1, 0.01, "the_ages_of_times:ytterbium_oxide", 1, 0.5, false)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:erbium_oxide", 8, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:erbium_dust", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:watch_glass", 8, 1.0, true)

    //Cerium, Lanthane, Praseodymium and Neodymium
    alembic(80, "the_ages_of_times:test_tube", 1, 1.0, true, "create:filter", 1, 0.0, true, "the_ages_of_times:cerium_oxide", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:cerium", 1, 0.5, "the_ages_of_times:didymium", 1, 1.0, "chemlib:lanthanum", 1, 0.5, false)
    alembic(80, "the_ages_of_times:didymium", 1, 1.0, true, "create:filter", 1, 0.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:praseodymium_oxide", 1, 0.5, "minecraft:air", 1, 0.01, "the_ages_of_times:neodymium_oxide", 1, 0.5, false)

    //Iridium, Osmium, Ruthenium, Rhodium and Palladium

    //Cadmium
    alembic(80, "the_ages_of_times:watch_glass", 1, 0.25, true, "the_ages_of_times:beaker", 1, 1.0, true, "create:raw_zinc", 1, 1.0, true, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 200, 1.0, true, "chemlib:zinc_oxide", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:cadmium_oxide", 1, 0.25, true)

    //Barium
    alembic(80, "chemlib:manganese_oxide_dust", 1, 1.0, true, "create:filter", 1, 0.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:manganese_oxide_dust", 1, 0.5, "minecraft:air", 1, 0.01, "chemlib:barium_oxide_dust", 1, 0.5, false)

    //Iodine and Bromine
    alembic(80, "the_ages_of_times:watch_glass", 1, 1.0, true, "the_ages_of_times:beaker", 1, 1.0, true, "minecraft:kelp", 1, 1.0, true, null, 0, 0, false, "minecraft:water", 100, 1.0, true, "chemlib:sodium_carbonate", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:iode_waste", 1, 1.0, true)
    alembic(80, "the_ages_of_times:test_tube", 2, 1.0, true, "the_ages_of_times:balloon", 1, 1.0, true, "the_ages_of_times:iode_waste", 1, 1.0, true, "chemlib:sulfuric_acid_fluid", 100, 1.0, true, "minecraft:water", 100, 1.0, true, "chemlib:sulfur_dioxide", 1, 1.0, "chemlib:iodine", 2, 1.0, "the_ages_of_times:watch_glass", 1, 1.0, true)
    alembic(80, null, 0, 0, false, null, 0, 0, false, "chemlib:ethanol", 2, 1.0, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:diethyl_ether", 1, 1.0, "minecraft:air", 1, 0.01, "chemlib:water", 1, 1.0, true)
    alembic(80, "the_ages_of_times:iode_waste", 1, 1.0, true, "the_ages_of_times:diethyl_ether", 1, 1.0, true, "the_ages_of_times:glass_ampul", 1, 0.25, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:watch_glass", 1, 1.0, "chemlib:bromine", 1, 0.25, "the_ages_of_times:erlenmeyer", 1, 1.0, false)

    //Tellurium
    alembic(80, null, 0, 0, false, null, 0, 0, false, "minecraft:raw_gold", 1, 1.0, true, null, 0, 0, false, "chemlib:carbon_dioxide_fluid", 3200, 1.0, true, "electrodynamics:dustgold", 1, 1.0, "minecraft:air", 1, 0.01, "chemlib:tellurium_dust", 2, 1.0, true)

    //Beryllium
    alembic(80, "chemlib:calcium_oxide", 1, 1.0, true, "the_ages_of_times:balloon", 3, 1.0, true, "chemlib:ammonium_chloride_dust", 2, 1.0, true, null, 0, 0, false, "minecraft:water", 100, 1.0, true, "chemlib:ammonia", 3, 1.0, "chemlib:calcium_chloride", 1, 1.0, "the_ages_of_times:watch_glass", 2, 1.0, true)
    alembic(80, "chemlib:calcium_chloride", 3, 1.0, true, null, 0, 0, false, "minecraft:emerald", 1, 1.0, true, "the_ages_of_times:hydrofluoric_acid", 3600, 1.0, true, "tconstruct:molten_emerald", 95, 1.0, true, "chemlib:beryllium_chloride", 3, 1.0, "minecraft:air", 1, 0.01, "electrodynamics:raworefluorite", 3, 1.0, true)
    alembic(80, "chemlib:potassium", 2, 1.0, true, "chemlib:beryllium_chloride", 1, 1.0, true, "the_ages_of_times:beaker", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:potassium_chloride", 2, 1.0, "chemlib:beryllium", 1, 1.0, "the_ages_of_times:test_tube", 1, 1.0, false)

    //Magnesium
    alembic(80, "the_ages_of_times:watch_glass", 1, 1.0, true, null, 0, 0, false, "minecraft:raw_iron", 1, 1.0, true, null, 0, 0, false, "tconstruct:molten_iron", 90, 1.0, true, "the_ages_of_times:magnesium_oxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)

    //Boron
    alembic(80, "the_ages_of_times:beaker", 2, 1.0, true, "the_ages_of_times:watch_glass", 4, 1.0, true, "the_ages_of_times:raw_ore_borax", 1, 1.0, true, "chemlib:hydrochloric_acid_fluid", 200, 1.0, true, "minecraft:water", 500, 1.0, true, "the_ages_of_times:boric_acid", 4, 1.0, "minecraft:air", 1, 0.01, "chemlib:sodium_chloride", 2, 1.0, true)

    //Dysprosium
    alembic(80, null, 0, 0, false, null, 0, 0, false, "chemlib:samarium", 16, 1.0, true, null, 0, 0, false, null, 0, 0, false, "chemlib:samarium_dust", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:test_tube", 16, 1.0, true)
    alembic(80, "the_ages_of_times:watch_glass", 1, 1.0, true, null, 0, 0, false, "chemlib:holmium", 16, 1.0, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:holmium_oxide", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:test_tube", 16, 1.0, true)
    alembic(80, "the_ages_of_times:holmium_oxide", 1, 1.0, true, "create:filter", 1, 0.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:holmium_oxide", 1, 0.5, "minecraft:air", 1, 0.01, "the_ages_of_times:dysprosium_oxide", 1, 0.5, false)
    alembic(80, "the_ages_of_times:watch_glass", 1, 1.0, true, null, 0, 0, false, "the_ages_of_times:dysprosium_oxide", 1, 1.0, true, "chemlib:hydrochloric_acid_fluid", 600, 1.0, true, "minecraft:water", 300, 1.0, true, "the_ages_of_times:dysprosium_chloride", 2, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)
    //Note : Revoir l'équilibre (verrerie) du craft
    //alembic(80, "chemlib:ammonia", 3, 1.0, "the_ages_of_times:watch_glass", 3, 1.0, "the_ages_of_times:dysprosium_chloride", 1, 1.0, "minecraft:water", 300, 1.0, "tconstruct:molten_glass", 300, 1.0, "the_ages_of_times:dysprosium_hydroxide", 1, 1.0, "chemlib:ammonium_chloride_dust", 3, 1.0, "the_ages_of_times:balloon", 3, 1.0,)

    //Selenium
    alembic(80, "minecraft:raw_iron", 1, 1.0, true, "create:filter", 1, 0.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "minecraft:raw_iron", 1, 0.99, "minecraft:air", 1, 0.01, "chemlib:selenium_dust", 1, 0.01, false)

    //Radon
    alembic(10, "chemlib:radium", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:radon_fluid", 10, 1.0, true, "the_ages_of_times:test_tube", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)

    //Lutetium
    alembic(80, "the_ages_of_times:ytterbium_oxide", 1, 0.99, true, "create:filter", 1, 0.0, true, "the_ages_of_times:test_tube", 1, 0.01, true, null, 0, 0, false, null, 0, 0, false, "the_ages_of_times:ytterbium_oxide", 1, 0.99, "minecraft:air", 1, 0.01, "chemlib:lutetium", 1, 0.01, false)

    //Hafmium
    alembic(80, "the_ages_of_times:raw_ore_zircon", 1, 1.0, true, "create:filter", 1, 0.0, true, "the_ages_of_times:test_tube", 1, 0.01, true, null, 0, 0, false, null, 0, 0, false, "chemlib:zirconium_dust", 1, 0.99, "minecraft:air", 1, 0.01, "chemlib:hafnium", 1, 0.01, false)

    //Rhenium
    alembic(80, "the_ages_of_times:test_tube", 1, 0.01, true, "create:filter", 1, 0.0, true, "electrodynamics:oremolybdenum", 64, 0.99, true, null, 0, 0, false, null, 0, 0, false, "electrodynamics:dustmolybdenum", 64, 0.99, "minecraft:air", 1, 0.01, "chemlib:rhenium", 1, 0.01, true)

    //Actinium and Protactinium
    alembic(80, "nuclearscience:fissiledust", 1, 1.0, true, "create:filter", 1, 0.0, true, "the_ages_of_times:test_tube", 1, 0.02, true, null, 0, 0, false, null, 0, 0, false, "nuclearscience:plutoniumoxide", 1, 0.02, "chemlib:actinium", 1, 0.01, "chemlib:protactinium", 1, 0.01, false)

    //Francium
    alembic(80, "chemlib:actinium", 1, 1.0, true, "create:filter", 1, 0.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:actinium", 1, 0.99, "minecraft:air", 1, 0.01, "chemlib:francium", 1, 0.01, false)

    //Copper Nitrate
    alembic(80, "the_ages_of_times:watch_glass", 16, 1.0, true, null, 0, 0, false, "minecraft:copper_ingot", 1, 1.0, true, "chemlib:nitric_acid_fluid", 200, 1.0, true, "minecraft:water", 100, 1.0, true, "chemlib:copper_nitrate_dust", 16, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, true)

    //Barium Nitrate
    alembic(80, "the_ages_of_times:beaker", 1, 1.0, true, "chemlib:barium_oxide_dust", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, null, 0, 0, false, "chemlib:barium_oxide", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:watch_glass", 1, 1.0, false)
    alembic(10, "chemlib:barium_oxide", 1, 1.0, true, null, 0, 0, false, null, 0, 0, false, "minecraft:water", 100, 1.0, true, null, 0, 0, false, "chemlib:barium_hydroxide", 1, 1.0, "minecraft:air", 1, 0.01, "minecraft:air", 1, 0.01, false)
    alembic(80, "the_ages_of_times:watch_glass", 1, 1.0, true, null, 0, 0, false, "chemlib:barium_hydroxide", 1, 1.0, true, "chemlib:carbon_dioxide_fluid", 100, 1.0, true, "minecraft:water", 100, 1.0, true, "chemlib:barium_carbonate_dust", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:beaker", 1, 1.0, true)
    alembic(80, "the_ages_of_times:balloon", 1, 1.0, true, null, 0, 0, false, "chemlib:barium_carbonate_dust", 1, 1.0, true, "chemlib:nitric_acid_fluid", 200, 1.0, true, "minecraft:water", 100, 1.0, true, "chemlib:barium_nitrate_dust", 1, 1.0, "minecraft:air", 1, 0.01, "chemlib:carbon_dioxide", 1, 1.0, true)

    //Glowstone
    alembic(80, null, 0, 0, false, null, 0, 0, false, "chemlib:phosphoric_acid", 4, 1.0, true, null, 0, 0, false, null, 0, 0, false, "minecraft:glowstone_dust", 1, 1.0, "minecraft:air", 1, 0.01, "the_ages_of_times:beaker", 4, 1.0, true)
})