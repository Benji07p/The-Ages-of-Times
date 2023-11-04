onEvent('gamephases.initialize', event => {
	event.phase('one')
		.block('minecraft:copper_ore', 'minecraft:stone')
})

onEvent('recipes', event => {

	//Steel Unification
	event.custom(
		{
			"type": "minecraft:stonecutting",
			"ingredient": {
			  "item": "immersiveengineering:ingot_steel"
			},
			"result": "electrodynamics:ingotsteel",
			"count": 1
		  }
	)
	event.custom(
		{
			"type": "minecraft:stonecutting",
			"ingredient": {
			  "item": "electrodynamics:resourceblocksteel"
			},
			"result": "immersiveengineering:storage_steel",
			"count": 1
		  }
	)
	event.custom(
		{
			"type": "minecraft:stonecutting",
			"ingredient": {
			  "item": "immersiveengineering:storage_steel"
			},
			"result": "electrodynamics:resourceblocksteel",
			"count": 1
		  }
	)

	//Shears
	event.remove({ id: 'minecraft:shears' })
	event.shaped('ceramicshears:ceramic_shears', [
		' F ',
		'F  ',
		'   '
	], {
	F: 'minecraft:iron_ingot'
	})
	
	//Crafting Table Base
	event.custom(
		{
			"type": "lychee:block_interacting",
			"item_in": {
				"item": "air"
			},
			"block_in": "crafting_table",
			"post": {
				"type": "prevent_default"
			}
		}
    )

	//Cutting board
	event.custom(
		{
			"type": "lychee:block_interacting",
			"item_in": {
				"item": "notreepunching:flint_axe"
			},
			"block_in": "stripped_oak_log",
			"post": [
                {
                    "type": "damage_item",
                    "damage": 1
                },
                {
                    "type": "place",
                    "block": "oak_slab"
                },
                {
                    "type": "drop_item",
                    "item": "farmersdelight:cutting_board"
                }
			]
		}
    )

	//Désactiver Atum
	event.remove({output: 'atum:scarab'})

	//Arbres
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

	//Rock Crafting Table
	event.remove({output: 'minecraft:crafting_table'})
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "minecraft:stone"
			},
			{
			  "item": "notreepunching:flint_shard"
			}
		  ],
		  "results": [
			{
			  "item": "minecraft:crafting_table"
			}
		  ]
		}
	)

	//Campfire
	event.remove({ id: 'minecraft:campfire'})
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "the_ages_of_times:extinguished_campfire"
			},
			{
			  "item": "notreepunching:flint_shard"
			}
		  ],
		  "results": [
			{
			  "item": "minecraft:campfire"
			}
		  ]
		}
	)
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:wires/copper').add('electrodynamics:wirecopper')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:plates/copper').remove('chemlib:copper_plate')
})