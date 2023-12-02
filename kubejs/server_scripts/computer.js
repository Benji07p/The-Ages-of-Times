onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:horse_power",
            "time": 1000,
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
					"type": "custommachinery:command",
					"command": "/say it work",
					"permission": 2,
					"phase": "crafting_tickable"
				}
			]
		}
	)

})