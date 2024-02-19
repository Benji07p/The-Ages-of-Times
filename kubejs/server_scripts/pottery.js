onEvent('recipes', event => {

    function pottery(inb, out){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:pottery",
            "time": 0,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": inb,
                    "amount": 1,
                    "slot": "input1"
                },
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "notreepunching:clay_tool",
                    "amount": 1,
                    "slot": "input2"
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": out,
                    "amount": 1,
                    "slot": "input3"
                }
			]
		}
	)}

    pottery("the_ages_of_times:intermediary_pottery_large_vessel", "notreepunching:clay_large_vessel")
    pottery("the_ages_of_times:intermediary_pottery_small_vessel", "notreepunching:clay_small_vessel")
    pottery("the_ages_of_times:intermediary_pottery_bucket", "notreepunching:clay_bucket")
    pottery("the_ages_of_times:intermediary_pottery_flower_pot", "notreepunching:clay_flower_pot")

})