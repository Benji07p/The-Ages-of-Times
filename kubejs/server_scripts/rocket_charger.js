onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:rocket_charger",
            "time": 10,
            "requirements": [
                {
					"type": "custommachinery:energy_per_tick",
					"mode": "input",
					"amount": 100
				},
                {
					"type": "custommachinery:fluid",
					"mode": "input",
					"fluid": "beyond_earth:fuel",
					"amount": 1000
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": "beyond_earth:rocket_t1",
					"amount": 1,
					"slot": "input"
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": "the_ages_of_times:basic_satellite",
					"amount": 1,
					"slot": "input1"
                },
                {
					"type": "custommachinery:item",
					"mode": "output",
					"item": "the_ages_of_times:satellite_rocket",
					"amount": 1,
					"slot": "output"
				}
			]
		}
	)

})