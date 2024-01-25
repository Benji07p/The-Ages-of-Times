onEvent('recipes', event => {

    function turntablejei(inb, out){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:turntableinjei",
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
                    "item": "custommachinery:custom_machine_item",
                    "nbt": "{machine:\"taotmachinery:turntable\"}",
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

    turntablejei("notreepunching:clay_worked", "notreepunching:clay_large_vessel")
    turntablejei("notreepunching:clay_large_vessel", "notreepunching:clay_small_vessel")
    turntablejei("notreepunching:clay_small_vessel", "notreepunching:clay_bucket")
    turntablejei("notreepunching:clay_bucket", "notreepunching:clay_flower_pot")

})