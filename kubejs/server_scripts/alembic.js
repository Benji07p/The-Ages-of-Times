onEvent('recipes', event => {

    function alembic(input, amount1, fluidinput, amount2, fluidoutput, amount3, output1, amount4, chance1, output2, amount5, chance2){
    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "taotmachinery:alembic",
            "time": 80,
            "requirements": [
                {
                    "type": "custommachinery:item",
                    "mode": "input",
                    "item": input,
                    "amount": amount1,
                    "slot": "input1"
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "input",
                    "fluid": fluidinput,
                    "amount": amount2
                },
                {
                    "type": "custommachinery:fluid",
                    "mode": "output",
                    "fluid": fluidoutput,
                    "amount": amount3
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output1,
                    "amount": amount4,
                    "slot": "input5",
                    "chance": chance1
                },
                {
                    "type": "custommachinery:item",
                    "mode": "output",
                    "item": output2,
                    "amount": amount5,
                    "slot": "input6",
                    "chance": chance2
                }
			]
		}
	)}

    //Hydrogen
    alembic("chemlib:iron", 1, "minecraft:water", 100, "chemlib:hydrogen_fluid", 100, "chemlib:iron_ii_oxide", 1, 1, "minecraft:air", 1, 0.01)
    alembic("chemlib:iron", 2, "minecraft:water", 300, "chemlib:hydrogen_fluid", 300, "chemlib:iron_oxide", 1, 1, "minecraft:air", 1, 0.01)

    //Bismuth
    alembic("electrodynamics:raworelead", 10, "minecraft:water", 100, "tconstruct:molten_lead", 90, "chemlib:bismuth", 1, 0.5, "minecraft:air", 1, 0.01)

})