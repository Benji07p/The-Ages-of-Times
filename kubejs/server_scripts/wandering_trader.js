onEvent("morejs.wanderer.trades", (event) => {
    const trade = event.addTrade(1, ["the_ages_of_times:market"], "farmingforblockheads:market");
})


onEvent('recipes', event => {

    function wandering(inb, count, out){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:wandering_trader",
            "time": 0,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": inb,
                    "amount": count,
                    "slot": "input1"
                },
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": "the_ages_of_times:wandering_traders_block",
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

    wandering("the_ages_of_times:market", 1, "farmingforblockheads:market")

})