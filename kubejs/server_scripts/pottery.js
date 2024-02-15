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

    pottery("notreepunching:clay_worked", "notreepunching:clay_large_vessel")
    pottery("notreepunching:clay_large_vessel", "notreepunching:clay_small_vessel")
    pottery("notreepunching:clay_small_vessel", "notreepunching:clay_bucket")
    pottery("notreepunching:clay_bucket", "notreepunching:clay_flower_pot")

})