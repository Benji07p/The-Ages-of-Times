onEvent('recipes', event => {

    function Chaudron(level1, level2){
        event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                    "item": "the_ages_of_times:fluidbladderfilled"
            },
            "block_in": {
                "blocks": ["water_cauldron"],
                "state": {
                    "level": level1
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "item": "the_ages_of_times:fluidbladderempty"
                },
                {
                    "type": "place",
                    "block": {
                        "blocks": ["water_cauldron"],
                        "state": {
                            "level": level2
                        }
                    }
                }
            ]
        }
    )}

    function ClicDroitfr(iteminput, blockinput, blockoutput, itemoutput){
        event.custom(
            {
                "type": "lychee:block_interacting",
                "item_in": {
                    "item": iteminput
                },
                "block_in": blockinput,
                "post": [
                    {
                        "type": "place",
                        "block": blockoutput
                    },
                    {
                        "type": "drop_item",
                        "item": itemoutput
                    }
                ]
            }
        )
    }

    ClicDroitfr("the_ages_of_times:fluidbladderempty", "the_ages_of_times:fluid_barrel", "the_ages_of_times:barrel", "the_ages_of_times:fluidbladderfilled")
    ClicDroitfr("the_ages_of_times:fluidbladderfilled", "the_ages_of_times:barrel", "the_ages_of_times:fluid_barrel", "the_ages_of_times:fluidbladderempty")
    Chaudron(1, 2)
    Chaudron(2, 3)

    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": [
                {
                    "item": "the_ages_of_times:fluidbladderempty"
                }
            ],
            "block_in": "water",
            "post": [
                {
                    "type": "drop_item",
                    "item": "the_ages_of_times:fluidbladderfilled"
                },
                {
                    "type": "place",
                    "block": "air"
                }
            ]
        }
    )

    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                    "item": "the_ages_of_times:fluidbladderfilled"
            },
            "block_in": "cauldron",
            "post": [
                {
                    "type": "drop_item",
                    "item": "the_ages_of_times:fluidbladderempty"
                },
                {
                    "type": "place",
                    "block": {
                        "blocks": ["water_cauldron"],
                        "state": {
                            "level": 1
                        }
                    }
                }
            ]
        }
    )
    
})