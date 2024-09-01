onEvent('recipes', event => {

    function spectroscopie(item3, chance, dim, time){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:telescope",
            "time": 100,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "quark:clear_shard",
                    "amount": 1,
                    "slot": "input1",
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
                    "weather": "clear",
                    "onmachine": false
                },
                {
                    "type": "custommachinery:time",
                    "range": time
                }
			]
		}
	)}

    function spectroscopie2(item2, item3, chance){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:telescope",
                "time": 100,
                "requirements": [
                    {
                        "type": "custommachinery:item",
                        "mode": "input",
                        "item": "quark:clear_shard",
                        "amount": 1,
                        "slot": "input1",
                        "chance": 0
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

    function telescope1(item2, item3, dim){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:telescope",
                "time": 100,
                "requirements": [
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
                    }
                ]
            }
        )
    }

    function spacetelescope(item3, dim){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:telescope",
                "time": 100,
                "requirements": [
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

    function telescope(item2, item3, dim, time){
        event.custom(
            {
                "type": "custommachinery:custom_machine",
                "machine": "taotmachinery:telescope",
                "time": 100,
                "requirements": [
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
                        "weather": "clear",
                        "onmachine": false
                    },
                    {
                        "type": "custommachinery:time",
                        "range": time
                    }
                ]
            }
        )
    }

    spectroscopie("chemlib:helium", 0.01, "minecraft:overworld", "(6000, 12000)")
    spectroscopie("chemlib:neon", 0.01, "minecraft:overworld", "(6000, 12000)")
    spectroscopie("chemlib:argon", 0.01, "minecraft:overworld", "(6000, 12000)")
    spectroscopie("chemlib:krypton", 0.01, "minecraft:overworld", "(6000, 12000)")
    spectroscopie("chemlib:xenon", 0.01, "minecraft:overworld", "(6000, 12000)")

    spectroscopie2("minecraft:water_bucket", "chemlib:cesium", 0.01)
    spectroscopie2("electrodynamics:raworelepidolite", "chemlib:rubidium", 0.01)
    spectroscopie2("create:zinc_ore", "chemlib:indium", 0.01)
    spectroscopie2("minecraft:copper_ore", "chemlib:indium", 0.01)
    spectroscopie2("create:raw_zinc", "chemlib:gallium", 0.01)
    spectroscopie2("chemlib:tellurium_dust", "chemlib:thallium", 0.01)
    spectroscopie2("chemlib:erbium_dust", "chemlib:holmium", 0.01)
    spectroscopie2("chemlib:erbium_dust", "chemlib:thulium", 0.01)
    
    spacetelescope("the_ages_of_times:moon_coordinates", "beyond_earth:earth_orbit")


})