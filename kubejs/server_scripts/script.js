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

	//Fluid Bladder
	event.shaped('the_ages_of_times:fluidbladderempty', [
		'MNM',
		'SSS'
	], {
	M: 'minecraft:brown_dye',
	N: 'minecraft:black_dye',
	S: 'notreepunching:plant_string'
	})

	//Wooden Barrel
	event.shaped('the_ages_of_times:barrel', [
		'B B',
		'B B',
		'BSB'
	], {
	B: '#minecraft:planks',
	S: '#minecraft:wooden_slabs'
	})

	//Chest
	event.remove({ id: 'minecraft:chest' })
	event.shaped('minecraft:chest', [
		'SSS',
		'B B',
		'BBB'
	], {
	B: '#minecraft:planks',
	S: '#minecraft:wooden_slabs'
	})

	//Crafting Table
	event.remove({ id: 'mctb:spruce_crafting_table' })
	event.remove({ id: 'mctb:birch_crafting_table' })
	event.remove({ id: 'mctb:acacia_crafting_table' })
	event.remove({ id: 'mctb:jungle_crafting_table' })
	event.remove({ id: 'mctb:dark_oak_crafting_table' })
	event.remove({ id: 'mctb:crimson_crafting_table' })
	event.remove({ id: 'mctb:warped_crafting_table' })
	event.shaped('mctb:spruce_crafting_table', [
		' BB',
		' BB'
	], {
	B: '#minecraft:planks'
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

	//Plumb Line
	event.shaped('the_ages_of_times:plumb_line', [
		'  L',
		' L ',
		'F  '
	], {
	F: '#notreepunching:loose_rocks',
	L: 'minecraft:string'
	})

	//Lit en foin
	event.shaped(Item.of('multibeds:slab', '{BlockEntityTag:{blanket_item:{Count:1b,id:"multibeds:blanket_lime",tag:{pattern:"stripes"}},mirror:0b,pillow_item:{Count:1b,id:"multibeds:pillow",tag:{rgb16:3250s,rgbsimple:4b}},sheet_item:{Count:1b,id:"multibeds:sheet",tag:{rgb16:3250s,rgbsimple:4b}},texture_item:{Count:1b,id:"minecraft:hay_block"}}}'), [
		'   ',
		'LLL',
		'HHH'
	], {
	H: 'minecraft:hay_block',
	L: '#minecraft:leaves'
	})

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
	// Get the #tconstruct:casts and the #tconstruct:casts/empty/basin tags collection and add the Copper Platform to it
	event.get('tconstruct:casts/empty/basin').add('tconstruct:copper_platform')
	event.get('tconstruct:casts').add('tconstruct:copper_platform')

	// Get the #tconstruct:casts and the #tconstruct:casts/empty/basin tags collection and add the Stone Platform to it
	event.get('tconstruct:casts/empty/basin').add('the_ages_of_times:stone_platform')
	event.get('tconstruct:casts').add('the_ages_of_times:stone_platform')

	// Create the tags #forge:bed and add the Vanilla Bed
	event.add('forge:beds', ['minecraft:cyan_bed', 'minecraft:purple_bed', 'minecraft:blue_bed', 'minecraft:brown_bed', 'minecraft:green_bed', 'minecraft:red_bed', 'minecraft:black_bed', 'minecraft:white_bed', 'minecraft:orange_bed', 'minecraft:magenta_bed', 'minecraft:light_blue_bed', 'minecraft:yellow_bed', 'minecraft:lime_bed', 'minecraft:pink_bed', 'minecraft:gray_bed', 'minecraft:light_gray_bed'])

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:plates/copper').remove('chemlib:copper_plate')
})