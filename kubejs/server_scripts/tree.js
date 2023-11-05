onEvent('recipes', event => {
    //Remove Vanilla Recipes
	event.remove({ id: 'minecraft:oak_planks'})
	event.remove({ id: 'minecraft:spruce_planks'})
	event.remove({ id: 'minecraft:birch_planks'})
	event.remove({ id: 'minecraft:jungle_planks'})
	event.remove({ id: 'minecraft:acacia_planks'})
	event.remove({ id: 'minecraft:dark_oak_planks'})
	event.remove({ id: 'notreepunching:acacia_planks_with_flint_axe'})
	event.remove({ id: 'notreepunching:acacia_planks_with_saw'})
	event.remove({ id: 'notreepunching:birch_planks_with_flint_axe'})
	event.remove({ id: 'notreepunching:birch_planks_with_saw'})
	event.remove({ id: 'notreepunching:dark_oak_planks_with_flint_axe'})
	event.remove({ id: 'notreepunching:dark_oak_planks_with_saw'})
	event.remove({ id: 'notreepunching:jungle_planks_with_flint_axe'})
	event.remove({ id: 'notreepunching:jungle_planks_with_saw'})
	event.remove({ id: 'notreepunching:oak_planks_with_flint_axe'})
	event.remove({ id: 'notreepunching:oak_planks_with_saw'})
	event.remove({ id: 'notreepunching:spruce_planks_with_flint_axe'})
	event.remove({ id: 'notreepunching:spruce_planks_with_saw'})
	event.remove({ id: 'minecraft:stripped_oak_log_via_vanilla_stripping' })

    //Tree Bark
    event.custom(
		  {
			  "type": "lychee:block_interacting",
			  "item_in": {
				  "item": "notreepunching:flint_axe"
			  },
			  "block_in": "oak_log",
			  "post": [
                  {
                      "type": "damage_item",
                      "damage": 1
                  },
                  {
                      "type": "place",
                      "block": "stripped_oak_log"
                  },
                  {
                      "type": "drop_item",
                      "item": "farmersdelight:tree_bark"
                  }
			    ]
		  }
    )

    //Oak Planks
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
              {
                "item": "minecraft:stripped_oak_log"
              }
            ],
            "tool": {
              "tag": "forge:tools/axe"
            },
            "result": [
              {
                "item": "minecraft:oak_planks",
				        "count": 2
              }
            ]
        }
    )

    //Dark Oak Planks
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
              {
                "item": "minecraft:stripped_dark_oak_log"
              }
            ],
            "tool": {
              "tag": "forge:tools/axe"
            },
            "result": [
              {
                "item": "minecraft:dark_oak_planks",
				        "count": 2
              }
            ]
        }
    )

    //Acacia Planks
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
              {
                "item": "minecraft:stripped_acacia_log"
              }
            ],
            "tool": {
              "tag": "forge:tools/axe"
            },
            "result": [
              {
                "item": "minecraft:acacia_planks",
				        "count": 2
              }
            ]
        }
    )

    //Spruce Planks
    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
              {
                "item": "minecraft:stripped_spruce_log"
              }
            ],
            "tool": {
              "tag": "forge:tools/axe"
            },
            "result": [
              {
                "item": "minecraft:spruce_planks",
				        "count": 2
              }
            ]
        }
    )

    //Birch Planks
	  event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
              {
                "item": "minecraft:stripped_birch_log"
              }
            ],
            "tool": {
              "tag": "forge:tools/axe"
            },
            "result": [
              {
                "item": "minecraft:birch_planks",
				        "count": 2
              }
            ]
        }
    )

    //Jungle Planks
	event.custom(
      {
          "type": "farmersdelight:cutting",
          "ingredients": [
            {
              "item": "minecraft:stripped_jungle_log"
            }
          ],
          "tool": {
            "tag": "forge:tools/axe"
          },
          "result": [
            {
              "item": "minecraft:jungle_planks",
				      "count": 2
            }
          ]
      }
  )
})