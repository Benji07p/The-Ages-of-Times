onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:computer",
            "time": 1000,
            //"hidden": true,
            "requirements": [
                {
                    "type": "custommachinery:structure",
                    "pattern": [
                        ["ABBBA","DBDDD","mDADA","DBDDD","ABBBA"],
                        ["DBBBD","BDDBB","DBDBD","BBDDB","DBBBD"],
                        ["DBBBD","BDDDB","DBDDD","BDDDB","DBBBD"],
                        ["ADDDA","DBBBD","BDDAB","DBBBD","ADDDA"],
                        ["ADDDA","BBBBB","ADDAB","BBBBB","ADDDA"] 
                    ],
                    "keys":{
                        "A":"create:gearbox",
                        "B": "create:andesite_casing",
                        "D": "create:cogwheel"
                    }
                },
                {
                    "type": "custommachinery:contraption",
                    "mode": "output",
                    "speed": 32,
                    "stress": 256
				},
                {
                    "type": "custommachinery:energy_per_tick",
                    "mode": "input",
                    "amount": 2
                }
			]
		}
	)

    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 5,
        "layers": [
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "d", "d", "d", "a"],
                ["b", "b", "b", "b", "b"],
                ["a", "d", "d", "a", "b"],
                ["b", "b", "b", "b", "b"],
                ["a", "d", "d", "d", "a"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "d", "d", "d", "a"],
                ["d", "b", "b", "b", "d"],
                ["b", "d", "d", "a", "b"],
                ["d", "b", "b", "b", "d"],
                ["a", "d", "d", "d", "a"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["d", "b", "b", "b", "d"],
                ["b", "d", "d", "d", "b"],
                ["d", "b", "d", "d", "d"],
                ["b", "d", "d", "d", "b"],
                ["d", "b", "b", "b", "d"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["d", "b", "b", "b", "d"],
                ["b", "b", "d", "d", "b"],
                ["d", "b", "d", "b", "d"],
                ["b", "d", "d", "b", "b"],
                ["d", "b", "b", "b", "d"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "b", "b", "b", "a"],
                ["d", "b", "d", "d", "d"],
                ["m", "d", "a", "d", "a"],
                ["d", "b", "d", "d", "d"],
                ["a", "b", "b", "b", "a"]
            ]
        }],
        "catalyst": {
            "id": "ae2:singularity",
            "Count": 1
        },
        "components": {
            "a": {
                "type": "compactcrafting:block",
                "block": "create:gearbox"
            },
            "b": {
                "type": "compactcrafting:block",
                "block": "create:andesite_casing"
            },
            "d": {
                "type": "compactcrafting:block",
                "block": "create:cogwheel"
            },
            "m": {
                "type": "compactcrafting:block",
                "block": "custommachinery:custom_machine_block"
            }
        },
        "outputs": [
            {
                "id": "the_ages_of_times:mechanicalprecisionmechanism",
                "Count": 1
            }
        ]
    })

})