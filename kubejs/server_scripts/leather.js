onEvent('recipes', event => {

    function Chaudron(item_in1, item_in2, level_in, item_out, level_out){
    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": [
                {
                    "item": item_in1
                },
                {
                    "item": item_in2
                }
            ],
            "block_in": {
                "blocks": ["water_cauldron"],
                "state": {
                    "level": level_in
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "item": item_out
                },
                {
                    "type": "place",
                    "block": {
                        "blocks": ["water_cauldron"],
                        "state": {
                            "level": level_out
                        }
                    }
                }
            ]
        }
    )}

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

    function mixercreate(item_in1, fluid, amount, item_in2, out){
        event.custom(
            {
                "type": "create:mixing",
                "ingredients": [
                  {
                    "item": item_in1
                  },
                  {
                    "fluid": fluid,
                    "nbt": {},
                    "amount": amount
                  },
                  {
                    "item": item_in2
                  }
                ],
                "results": [
                  {
                    "item": out,
                    "count": 1
                  }
                ],
                "heatRequirement": "none"
              }
        )
    }

    function emptyChaudron(item_in1, item_in2, item_out){
        event.custom(
            {
                "type": "lychee:item_inside",
                "item_in": [
                    {
                        "item": item_in1
                    },
                    {
                        "item": item_in2
                    }
                ],
                "block_in": {
                    "blocks": ["water_cauldron"],
                    "state": {
                        "level": 1
                    }
                },
                "post": [
                    {
                        "type": "drop_item",
                        "item": item_out
                    },
                    {
                        "type": "place",
                        "block": "cauldron"
                    }
                ]
            }
        )}

        function nulChaudron(item_in, level_in, item_out, level_out){
            event.custom(
                {
                    "type": "lychee:item_inside",
                    "item_in": [
                        {
                            "item": item_in
                        }
                    ],
                    "block_in": {
                        "blocks": ["water_cauldron"],
                        "state": {
                            "level": level_in
                        }
                    },
                    "post": [
                        {
                            "type": "drop_item",
                            "item": item_out
                        },
                        {
                            "type": "place",
                            "block": {
                                "blocks": ["water_cauldron"],
                                "state": {
                                    "level": level_out
                                }
                            }
                        }
                    ]
                }
            )}
        
            function nulEmptyChaudron(item_in, item_out){
                event.custom(
                    {
                        "type": "lychee:item_inside",
                        "item_in": [
                            {
                                "item": item_in
                            }
                        ],
                        "block_in": {
                            "blocks": ["water_cauldron"],
                            "state": {
                                "level": 1
                            }
                        },
                        "post": [
                            {
                                "type": "drop_item",
                                "item": item_out
                            },
                            {
                                "type": "place",
                                "block": "cauldron"
                            }
                        ]
                    }
                )}

        function mixingChaudron(item_in, item_in2, block_out){
            event.custom(
                {
                    "type": "lychee:item_inside",
                    "item_in": [
                        {
                            "item": item_in
                        },
                        {
                            "item": item_in2
                        }
                    ],
                    "block_in": {
                        "blocks": ["water_cauldron"],
                        "state": {
                            "level": 3
                        }
                    },
                    "post": [
                        {
                            "type": "place",
                            "block": block_out
                        }
                    ]
                }
            )
        }
    
        function nulEmptymixingChaudron(item_in, block_in, item_out){
            event.custom(
                {
                    "type": "lychee:item_inside",
                    "item_in": [
                        {
                            "item": item_in
                        }
                    ],
                    "block_in": {
                        "blocks": block_in
                    },
                    "post": [
                        {
                            "type": "drop_item",
                            "item": item_out
                        },
                        {
                            "type": "place",
                            "block": "cauldron"
                        }
                    ]
                }
            )}

    function ItemtoRack(item, block){
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": item
            },
            "block_in": "butchersdelight:rack",
            "post": [
                {
                    "type": "place",
                    "block": block
                }
            ]
        }
    )}

    function RacktoItem(item, block){
        event.custom(
            {
                "type": "lychee:block_interacting",
                "item_in": {
                    "item": "woodenshears:wooden_shears"
                },
                "block_in": block,
                "post": [
                    {
                        "type": "damage_item",
                        "damage": 1
                    },
                    {
                        "type": "place",
                        "block": "butchersdelight:rack"
                    },
                    {
                        "type": "drop_item",
                        "item": item
                    }
                ]
            }
        )}

    ItemtoRack("the_ages_of_times:hide_tanned", "butchersdelight:rackcow")
    ItemtoRack("the_ages_of_times:hide_salted", "the_ages_of_times:racksalted")
    ItemtoRack("the_ages_of_times:hide_clean", "the_ages_of_times:rackraw")
    ItemtoRack("the_ages_of_times:white_leather", "the_ages_of_times:white_leather_rack")
    RacktoItem("the_ages_of_times:hide_dried", "the_ages_of_times:racksalted")
    RacktoItem("the_ages_of_times:hide_raw", "the_ages_of_times:rackraw")
    RacktoItem("atum:scroll", "the_ages_of_times:white_leather_rack")

    Chaudron("the_ages_of_times:hide_raw", "electrodynamics:dustsalt", 3, "the_ages_of_times:hide_salted", 2)
    Chaudron("the_ages_of_times:hide_raw", "electrodynamics:dustsalt", 2, "the_ages_of_times:hide_salted", 1)
    Chaudron("the_ages_of_times:hide_wet", "farmersdelight:tree_bark", 3, "the_ages_of_times:hide_tanned", 2)
    Chaudron("the_ages_of_times:hide_wet", "farmersdelight:tree_bark", 2, "the_ages_of_times:hide_tanned", 1)
    emptyChaudron("the_ages_of_times:hide_raw", "electrodynamics:dustsalt", "the_ages_of_times:hide_salted")
    emptyChaudron("the_ages_of_times:hide_wet", "farmersdelight:tree_bark", "the_ages_of_times:hide_tanned")
    nulChaudron("the_ages_of_times:hide_dried", 3, "the_ages_of_times:hide_wet", 2)
    nulChaudron("the_ages_of_times:hide_dried", 2, "the_ages_of_times:hide_wet", 1)
    nulEmptyChaudron("the_ages_of_times:hide_dried", "the_ages_of_times:hide_wet")
    mixingChaudron("minecraft:white_dye", "minecraft:yellow_dye", "the_ages_of_times:white_cauldron")
    nulEmptymixingChaudron("minecraft:leather", ["the_ages_of_times:white_cauldron"], "the_ages_of_times:white_leather")

    spout("minecraft:leather", "the_ages_of_times:white_water", 1000, "the_ages_of_times:white_leather")
    spout("the_ages_of_times:hide_dried", "minecraft:water", 333, "the_ages_of_times:hide_wet")
    mixercreate("the_ages_of_times:hide_raw", "minecraft:water", 333, "electrodynamics:dustsalt", "the_ages_of_times:hide_salted")
    mixercreate("the_ages_of_times:hide_wet", "minecraft:water", 333, "farmersdelight:tree_bark", "the_ages_of_times:hide_tanned")

    //Mouton
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "tag": "forge:tools/knives"
            },
            "block_in": "butchersdelight:racksheep",
            "post": [
                {
                    "type": "damage_item",
                    "damage": 1
                },
                {
                    "type": "place",
                    "block": "butchersdelight:rack"
                },
                {
                    "type": "drop_item",
                    "item": "the_ages_of_times:hide_raw"
                },
                {
                    "type": "drop_item",
                    "item": "multibeds:woolen_cloth"
                }
            ]
        }
    )

    //Cleaner
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
              {
                "item": "butchersdelight:cow_hide"
              }
            ],
            "tool": {
              "tag": "forge:tools/knives"
            },
            "result": [
              {
                "item": "the_ages_of_times:hide_clean"
              },
              {
                "item": "tconstruct:blood_slime_ball"
              }
            ]
          }
    )
})