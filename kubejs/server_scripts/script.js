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

	//Anvil
	event.remove({ id: 'minecraft:anvil' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/anvil'})
	event.remove({ id: 'alchemistry:dissolver/anvil'})
	event.custom(
		{
			"type": "minecraft:stonecutting",
			"ingredient": {
			  "item": "minecraft:stone"
			},
			"result": "minecraft:anvil",
			"count": 1
		  }
	)
	event.shaped('minecraft:anvil', [
		'BBB',
		' T ',
		'TTT'
	], {
	B: 'minecraft:stone',
	T: 'minecraft:stone_button'
	})

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
	event.remove({output: 'tconstruct:crafting_station'})
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
			  "item": "tconstruct:crafting_station"
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

	//Bronze Dust Remove
	event.remove({ id: 'electrodynamics:dustbronze'})

	//Melter Remove
	event.remove({ id: 'melter:melting/cobble_melting'})
	event.remove({ id: 'melter:melting/snow_melting'})
	event.remove({ id: 'melter:melting/ice_block_melting'})
	event.remove({ id: 'melter:crafting/melter_block'})

	//Ingot Smelting Remove
	event.remove({ id: 'minecraft:copper_ingot_from_blasting_raw_copper'})
	event.remove({ id: 'minecraft:copper_ingot_from_smelting_raw_copper'})
	event.remove({ id: 'minecraft:iron_ingot_from_blasting_raw_iron'})
	event.remove({ id: 'minecraft:iron_ingot_from_smelting_raw_iron'})
	event.remove({ id: 'minecraft:gold_ingot_from_blasting_raw_gold'})
	event.remove({ id: 'minecraft:gold_ingot_from_smelting_raw_gold'})
	event.remove({ id: 'electrodynamics:ingotsilver_raw_blasting'})
	event.remove({ id: 'electrodynamics:ingotsilver_raw_smelting'})
	event.remove({ id: 'electrodynamics:ingottin_raw_blasting'})
	event.remove({ id: 'electrodynamics:ingottin_raw_smelting'})
	event.remove({ id: 'electrodynamics:ingotlead_raw_smelting'})
	event.remove({ id: 'electrodynamics:ingotlead_raw_blasting'})

	//Remove Hammering Crushing
	event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_copper'})
	event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_iron'})
	event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_gold'})
	event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_silver'})
	event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_tin'})
	event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_lead'})

	//Seared Heater
	event.remove({ id: 'tconstruct:smeltery/seared/heater'})
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "the_ages_of_times:porcelain_heater"
			},
			{
			  "item": "the_ages_of_times:seared_upgrade"
			}
		  ],
		  "results": [
			{
			  "item": "tconstruct:seared_heater"
			}
		  ]
		}
	)

	//Seared Melter
	event.remove({ id: 'tconstruct:smeltery/seared/melter'})
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "melter:melter"
			},
			{
			  "item": "the_ages_of_times:seared_upgrade"
			}
		  ],
		  "results": [
			{
			  "item": "tconstruct:seared_melter"
			}
		  ]
		}
	)

	//Seared Basin
	event.remove({ id: 'tconstruct:smeltery/seared/basin'})
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "tconstruct:scorched_basin"
			},
			{
			  "item": "the_ages_of_times:seared_upgrade"
			}
		  ],
		  "results": [
			{
			  "item": "tconstruct:seared_basin"
			}
		  ]
		}
	)

	//Seared Casting Table
	event.remove({ id: 'tconstruct:smeltery/seared/table'})
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "tconstruct:scorched_table"
			},
			{
			  "item": "the_ages_of_times:seared_upgrade"
			}
		  ],
		  "results": [
			{
			  "item": "tconstruct:seared_table"
			}
		  ]
		}
	)

	//Seared Faucet
	event.remove({ id: 'tconstruct:smeltery/seared/faucet'})
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "ceramics:porcelain_faucet"
			},
			{
			  "item": "the_ages_of_times:seared_upgrade"
			}
		  ],
		  "results": [
			{
			  "item": "tconstruct:seared_faucet"
			}
		  ]
		}
	)

	//Porcelain Melter
	event.shaped('melter:melter', [
		'PHP',
		'PKP',
		'PCP'
	], {
	K: 'ceramics:kiln',
	H: 'woodenhopper:wooden_hopper',
	P: 'ceramics:porcelain_brick',
	C: 'minecraft:chest'
	})

	//Porcelain Heater
	event.shaped('the_ages_of_times:porcelain_heater', [
		'PCP',
		'PCP',
		'PKP'
	], {
	K: 'ceramics:kiln',
	P: 'ceramics:porcelain_brick',
	C: 'ceramics:terracotta_cistern'
	})

	//Lead
	event.remove({ id: 'minecraft:lead'})
	event.remove({ id: 'tconstruct:common/slime/lead'})
	event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
              {
                "item": "minecraft:leather"
              }
            ],
            "tool": {
              "tag": "forge:tools/knives"
            },
            "result": [
              {
                "item": "the_ages_of_times:leather_strip",
				"count": 9
              }
            ]
          }
    )

	//Andesite Alloy
	event.remove({ id: 'create:crafting/materials/andesite_alloy'})
	event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	event.remove({ id: 'create:mixing/andesite_alloy'})
	event.remove({ id: 'create:mixing/andesite_alloy_from_zinc'})
	event.remove({ id: 'tconstruct:compat/create/andesite_alloy_iron'})
	event.remove({ id: 'tconstruct:compat/create/andesite_alloy_zinc'})
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "notreepunching:andesite_loose_rock"
			},
			"cast_consumed": true,
			"fluid": {
			  "tag": "forge:molten_copper",
			  "amount": 90
			},
			"result": "create:andesite_alloy",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "notreepunching:andesite_loose_rock"
			},
			"cast_consumed": true,
			"fluid": {
			  "tag": "forge:molten_iron",
			  "amount": 20
			},
			"result": "create:andesite_alloy",
			"cooling_time": 25
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "notreepunching:andesite_loose_rock"
			},
			"cast_consumed": true,
			"fluid": {
			  "tag": "forge:molten_zinc",
			  "amount": 10
			},
			"result": "create:andesite_alloy",
			"cooling_time": 10
		  }
	)

	//Shaft
	event.shaped('8x create:shaft', [
		' C ',
		' C ',
		'   '
	], {
	C: '#forge:cobblestone'
	})

	//Turntable
	event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"taotmachinery:turntable"}'), [
		'DSD',
		'GCG',
		'GRG'
	], {
	D: 'minecraft:polished_deepslate_slab',
	S: 'minecraft:slime_ball',
	R: 'the_ages_of_times:andesite_shaft',
	G: 'electrodynamics:gearcopper',
	C: 'create:andesite_casing'
	})
	
	//Millstone
	event.remove({ id: 'create:crafting/kinetics/millstone'})
	event.shaped('create:millstone', [
		'AWA',
		'AQA',
		'AAA'
	], {
	Q: 'atum:quern',
	A: 'minecraft:polished_andesite',
	W: 'astikorcarts:wheel'
	})

	//Stonecutter
	event.remove({ id: 'minecraft:stonecutter'})
	event.shaped('minecraft:stonecutter', [
		'   ',
		' Q ',
		'AAA'
	], {
	Q: 'electrodynamics:geariron',
	A: 'minecraft:stone'
	})
	event.shaped('minecraft:stonecutter', [
		'   ',
		' Q ',
		'AAA'
	], {
	Q: 'the_ages_of_times:flint_gear',
	A: 'minecraft:stone'
	})

	//Mechanical Saw
	event.remove({ id: 'create:crafting/kinetics/mechanical_saw'})
	event.shaped('create:mechanical_saw', [
		' S ',
		'CAC',
		'LBL'
	], {
	S: 'minecraft:stonecutter',
	C: 'electrodynamics:gearcopper',
	A: 'create:andesite_casing',
	B: 'electrodynamics:gearbronze',
	L: 'the_ages_of_times:leather_belt'
	})

	//Flint Gear
	event.remove({ id: 'notreepunching:flint_from_gravel'})
	event.shaped('the_ages_of_times:flint_gear', [
		' S ',
		'STS',
		' S '
	], {
	S: 'notreepunching:flint_shard',
	T: 'electrodynamics:geartin'
	})

	//Scorched Remove
	event.remove({ id: 'tconstruct:smeltery/casting/scorched/brick_composite'})
	event.remove({ id: 'tconstruct:smeltery/casting/scorched/polished_from_magma'})
	event.remove({ id: 'tconstruct:smeltery/casting/scorched/stone_from_magma'})
	event.remove({ id: 'tconstruct:smeltery/scorched/nether_grout'})

	//Papyrus to Papyrus Plant
	event.shapeless('atum:papyrus_plant', ['atum:papyrus'])

	//Papyrus One
	event.custom(
		{
			"type": "create:pressing",
			"ingredients": [
			  {
				"item": "atum:papyrus"
			  }
			],
			"results": [
			  {
				"item": "atum:papyrus_plant",
				"nbt": '{SequencedAssembly:{Step:1,id:"create:kjs_1diuw7fkgct2c5wwf93ei83zh"}}'
			  }
			]
		}
	)

	//Papyrus Two
	event.custom(
        {
            "type": "lychee:item_inside",
			"time": 20,
            "item_in": [
                {
					"type": "forge:nbt",
                    "item": "atum:papyrus_plant",
					"nbt": {
						"SequencedAssembly":{
							"Step": 1,
							"id": "create:kjs_1diuw7fkgct2c5wwf93ei83zh"
						}
					}
                }
            ],
            "block_in": "water",
            "post": [
                {
                    "type": "drop_item",
                    "item": "atum:papyrus_plant",
					"nbt": '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_1diuw7fkgct2c5wwf93ei83zh"}}'
                }
            ]
        }
    )

	//Scroll
	event.remove({ id: 'atum:scroll'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "PPP",
			  "SPS",
			  "PPP"
			],
			"key": {
			  "P": {
				"item": "the_ages_of_times:hide_raw"
			  },
			  "S": {
				"tag": "balm:wooden_rods"
			  }
			},
			"result": {
			  "item": "atum:scroll"
			}
		}
	)

	//Cauldron
	event.remove({ id: 'minecraft:cauldron'})
	event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/cauldron'})
	event.shaped('minecraft:cauldron', [
		'B B',
		'B B',
		'BBB'
	], {
	B: 'minecraft:oak_log'
	})

	//Stone Platform
	event.shaped('the_ages_of_times:stone_platform', [
		'BTB',
		'T T',
		'BTB'
	], {
	B: 'minecraft:stone',
	T: 'minecraft:stone_button'
	})

	//Water Wheel
	event.remove({ id: 'create:crafting/kinetics/large_water_wheel'})
	event.remove({ id: 'create:crafting/kinetics/water_wheel'})
	event.shaped('create:large_water_wheel', [
		'SSS',
		'SGS',
		'SSS'
	], {
	S: 'minecraft:spruce_slab',
	G: 'electrodynamics:gearcopper'
	})

	//Black Iron
	event.remove({ id: 'extendedcrafting:black_iron_ingot'})
	event.custom(
		{
			"type":"immersiveengineering:alloy",
			"time": 50,
			"result":{
				"base_ingredient":{
					"item":"extendedcrafting:black_iron_ingot"
				}
			},
			"input0":{
				"base_ingredient":{
					"item":"minecraft:iron_ingot"
				}
			},
			"input1":{
				"item":"minecraft:black_dye"
			}
		}
	)

	//Seared Upgrade
	event.shaped('the_ages_of_times:seared_upgrade', [
		'SSS',
		'SGS',
		'SSS'
	], {
	S: 'tconstruct:seared_brick',
	G: 'functionalstorage:copper_upgrade'
	})

	//String
	event.remove({ id: 'notreepunching:smelting/string_from_plant_string'})
	event.custom(
		{
			"type":"atum:spinning_wheel",
			"ingredient":{
				"item":"notreepunching:plant_string"
			},
			"result":"minecraft:string",
			"rotations":1
		}
	)
	event.custom(
		{
			"type":"atum:spinning_wheel",
			"ingredient":{
				"item":"multibeds:woolen_cloth"
			},
			"result":"minecraft:string",
			"rotations":2
		}
	)

	//Laine
	event.remove({ id: 'minecraft:white_wool_from_string'})
	event.custom(
		{
			"type":"atum:spinning_wheel",
			"ingredient":{
				"item":"atum:linen_white",
				"count": 2
			},
			"result":"minecraft:white_wool",
			"rotations":1
		}
	)

	//Tissu
	event.custom(
		{
			"type":"atum:spinning_wheel",
			"ingredient":{
				"item":"immersiveengineering:hemp_fabric",
				"count": 2
			},
			"result":"atum:cloth_scrap",
			"rotations":2
		}
	)

	//Verre
	event.remove({ id: 'minecraft:glass'})
	event.remove({ id: 'ceramics:glass_kiln'})
	event.smelting('minecraft:glass', 'tconstruct:clear_glass')

	//Embroidery Thread
	event.remove({ id: 'multibeds:embroidery_thread'})
	event.shaped('multibeds:embroidery_thread', [
		'FB'
	], {
	B: 'minecraft:black_dye',
	F: 'minecraft:feather'
	})

	//Worked Clay
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "ceramics:clay_cistern"
			},
			{
			  "item": "minecraft:clay"
			}
		  ],
		  "results": [
			{
			  "item": "notreepunching:clay_worked"
			}
		  ]
		}
	)

	//Baker
	event.remove({ id: 'minecraft:cake'})
	event.remove({ id: 'bucketlib:cake'})
	event.remove({ id: 'atum:cake'})
	event.remove({ id: 'ceramics:cake'})
	event.remove({ id: 'create:crafting/curiosities/cake'})
	event.remove({ id: 'farmersdelight:cake_from_milk_bottle'})
	event.remove({ id: 'farmersdelight:honey_cookie'})
	event.remove({ id: 'farmersdelight:sweet_berry_cookie'})
	event.remove({ id: 'farmersdelight:chocolate_pie'})
	event.remove({ id: 'farmersdelight:sweet_berry_cheesecake'})
	event.remove({ id: 'farmersdelight:apple_pie'})
	event.remove({ id: 'farmersdelight:bread_from_smelting'})
	event.remove({ id: 'farmersdelight:bread_from_smoking'})
	event.remove({output: 'farmersdelight:wheat_dough'})
	event.remove({ id: 'bucketlib:create/dough'})
	event.remove({ id: 'create:crafting/appliances/dough'})
	event.remove({ id: 'minecolonies:baked_bread_campfire_cooking'})
	event.remove({ id: 'minecolonies:baked_bread'})
	event.remove({ id: 'minecolonies:baked_bread_smoking'})
	event.remove({ id: 'create:campfire_cooking/bread'})
	event.remove({ id: 'create:smelting/bread'})
	event.remove({ id: 'create:smoking/bread'})
	event.remove({ id: 'minecraft:bread'})
	event.remove({ id: 'farmersdelight:pie_crust'})
	event.remove({ id: 'farmersdelight:fruit_salad'})
	event.remove({ id: 'farmersdelight:mixed_salad'})
	event.remove({ id: 'farmersdelight:nether_salad'})
	event.remove({ id: 'farmersdelight:egg_sandwich'})
	event.remove({ id: 'farmersdelight:cod_roll'})
	event.remove({ id: 'farmersdelight:salmon_roll'})
	event.remove({ id: 'farmersdelight:kelp_roll'})
	event.remove({ id: 'farmersdelight:bacon_and_eggs'})
	event.remove({ id: 'farmersdelight:roasted_mutton_chops'})
	event.remove({ id: 'farmersdelight:steak_and_potatoes'})
	event.remove({ id: 'farmersdelight:rice_roll_medley_block'})
	event.remove({ id: 'farmersdelight:roast_chicken_block'})
	event.remove({ id: 'farmersdelight:honey_glazed_ham_block'})
	event.remove({ id: 'farmersdelight:horse_feed'})
	event.remove({ id: 'farmersdelight:hamburger'})
	event.remove({ id: 'farmersdelight:bacon_sandwich'})
	event.remove({ id: 'farmersdelight:grilled_salmon'})
	event.remove({ id: 'farmersdelight:chicken_sandwich'})
	event.remove({ id: 'farmersdelight:shepherds_pie_block'})
	event.remove({ id: 'farmersdelight:stuffed_potato'})
	event.remove({ id: 'farmersdelight:mutton_wrap'})
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

	// Create the tags #forge:superglue and add Glue and Slime
	event.add('forge:superglue', ['the_ages_of_times:glue', 'minecraft:slime_ball'])

	// Add Flint Axe to #forge:tools/axe
	event.add('forge:tools/axe', ['notreepunching:flint_axe'])

	//Logs Tag for Quest
	event.add('forge:log', ['minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log', 'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log'])

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	event.get('forge:dough').remove('farmersdelight:wheat_dough')
	event.get('forge:dough/wheat').remove('farmersdelight:wheat_dough')
})