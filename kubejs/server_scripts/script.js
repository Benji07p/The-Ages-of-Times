onEvent('recipes', event => {

	//Steel Unification
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

	//Sleeping Bag
	event.remove({ id: 'sleeping_bags:brown_sleeping_bag' })
	event.shaped('sleeping_bags:brown_sleeping_bag', [
		'  F',
		' L ',
		'L  '
	], {
	F: 'multibeds:feather_pile',
	L: 'minecraft:leather'
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

	//Flakes Bones
	event.custom(
		{
			"type": "lychee:block_interacting",
			"item_in": {
				"item": "bone"
			},
			"block_in": "stone",
			"post": [
                {
                    "type": "drop_item",
                    "item": "the_ages_of_times:flakes_bones"
                },
                {
                    "type": "drop_item",
                    "item": "the_ages_of_times:bone_weapon"
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

	//Grout
	event.remove({ id: 'tconstruct:smeltery/seared/seared_brick'})
	event.remove({ id: 'tconstruct:smeltery/seared/seared_brick_kiln'})
	event.custom(
		{
			"type": "create:milling",
			"ingredients": [
			  {
				"item": "tconstruct:grout"
			  }
			],
			"results": [
			  {
				"item": "the_ages_of_times:grout_dust"
			  }
			],
			"processingTime": 70
		  }
	)
	event.custom(
		{
			"type": "ceramics:kiln",
			"ingredient": {
			  "item": "the_ages_of_times:grout_dust"
			},
			"result": "tconstruct:seared_brick",
			"experience": 0.3,
			"cookingtime": 100
		  }
	)
	event.smelting('tconstruct:seared_brick', 'the_ages_of_times:grout_dust')

	//Porcelain
	event.remove({ id: 'ceramics:porcelain_brick_smelting'})
	event.remove({ id: 'ceramics:porcelain_brick_kiln'})
	event.shapeless('ceramics:unfired_porcelain', ['minecraft:flint', 'minecraft:clay_ball', 'minecraft:bone_meal'])
	event.custom(
		{
			"type": "create:milling",
			"ingredients": [
			  {
				"item": "ceramics:unfired_porcelain"
			  }
			],
			"results": [
			  {
				"item": "the_ages_of_times:porcelain_dust",
			  }
			],
			"processingTime": 70
		  }
	)
	event.custom(
		{
			"type": "ceramics:kiln",
			"ingredient": {
			  "item": "the_ages_of_times:porcelain_dust"
			},
			"result": "ceramics:porcelain_brick",
			"experience": 0.3,
			"cookingtime": 100
		  }
	)
	event.smelting('ceramics:porcelain_brick', 'the_ages_of_times:porcelain_dust')

	//Clay Bucket
	event.remove({ id: 'ceramics:empty_clay_bucket_smelting'})
	event.remove({ id: 'ceramics:empty_clay_bucket_kiln'})

	//Remove Enchanter from Minecolonies
	event.remove({ id: 'minecolonies:blockhutenchanter'})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:wires/copper').add('electrodynamics:wirecopper')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:plates/copper').remove('chemlib:copper_plate')
})