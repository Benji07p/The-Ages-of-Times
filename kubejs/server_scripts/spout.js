onEvent('recipes', event => {

    function itemdrain(int, out, fluid, amount){
        event.custom(
            {
                "type": "create:emptying",
                "ingredients": [
                    {
                        "item": int
                    }
                ],
                "results": [
                    {
                        "item": out
                    },
                    {
                        "fluid": fluid,
                        "amount": amount
                    }
                ]
            }
        )
    }
    
    function spout(int, fluid, amount, out){
        event.custom(
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": int
                    },
                    {
                        "fluid": fluid,
                        "amount": amount
                    }
                ],
                "results": [
                    {
                        "item": out
                    }
                ]
            }
        )
    }

    function spoutender(int, out){
        event.custom(
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": int
                    },
                    {
                        "fluid": "tconstruct:molten_ender",
                        "amount": 1000
                    }
                ],
                "results": [
                    {
                        "item": out
                    }
                ]
            }
        )
    }

    spout("nuclearscience:cellelectromagnetic", "the_ages_of_times:antimatter", 100, "the_ages_of_times:liquid_antimatter_cell")
    spout("nuclearscience:cellelectromagnetic", "the_ages_of_times:darkmatter", 100, "the_ages_of_times:liquid_darkmatter_cell")
    itemdrain("the_ages_of_times:liquid_antimatter_cell", "nuclearscience:cellelectromagnetic", "the_ages_of_times:antimatter", 100)
    itemdrain("the_ages_of_times:liquid_darkmatter_cell", "nuclearscience:cellelectromagnetic", "the_ages_of_times:darkmatter", 100)
    
    spoutender("minecraft:slime_ball", "minecraft:ender_pearl")
    spoutender("minecraft:stone", "minecraft:end_stone")
    spoutender("minecraft:oxeye_daisy", "minecraft:chorus_flower")
    spoutender("minecraft:turtle_helmet", "minecraft:shulker_shell")
})