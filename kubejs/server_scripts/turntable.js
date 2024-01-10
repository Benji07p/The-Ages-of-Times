onEvent('recipes', event => {

    function turntable(inb, out){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:turntable",
            "time": 40,
            "requirements": [
                {
                    "type": "custommachinery:block",
                    "mode": "output",
                    "action": "replace_destroy",
                    "pos": [0, 0, 0, 0, 1, 0],
                    "filter": inb,
                    "whitelist": true,
                    "block": out
                },
                {
                    "type": "custommachinery:contraption",
                    "mode": "input",
                    "speed": 32,
                    "stress": 256
				}
			]
		}
	)}

    turntable(["notreepunching:clay_worked"], "notreepunching:clay_large_vessel")
    turntable(["notreepunching:clay_large_vessel"], "notreepunching:clay_small_vessel")
    turntable(["notreepunching:clay_small_vessel"], "notreepunching:clay_bucket")
    turntable(["notreepunching:clay_bucket"], "notreepunching:clay_flower_pot")

})