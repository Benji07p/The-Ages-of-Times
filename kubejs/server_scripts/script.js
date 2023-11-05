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