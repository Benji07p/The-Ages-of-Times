onEvent('recipes', event => {

	//Steel
	event.remove({ id: 'electrodynamics:ingotsteel_ingot_smelting'})
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
	event.remove({ id: 'woodenbucket:wooden_bucket' })
	event.shaped('the_ages_of_times:barrel', [
		'B B',
		'B B',
		'BSB'
	], {
	B: '#minecraft:planks',
	S: '#minecraft:wooden_slabs'
	})

	//Slicer

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
	event.remove({ id: 'tconstruct:smeltery/melting/scorched/casting'})
	event.remove({ id: 'tconstruct:smeltery/scorched/nether_grout'})

	//Papyrus Plant to Papyrus
	event.shapeless('atum:papyrus', ['atum:papyrus_plant'])

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
				"nbt": '{SequencedAssembly:{Step:1,id:"create:kjs_1biqhb1s8dycggyk5s8dep429"}}'
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
							"id": "create:kjs_1biqhb1s8dycggyk5s8dep429"
						}
					}
                }
            ],
            "block_in": "water",
            "post": [
                {
                    "type": "drop_item",
                    "item": "atum:papyrus_plant",
					"nbt": '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_1biqhb1s8dycggyk5s8dep429"}}'
                }
            ]
        }
    )

	//Scroll
	event.remove({ id: 'atum:scroll'})

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

	//Book
	event.remove({ id: 'minecraft:book'})
	event.remove({ id: 'atum:book'})

	//Horse Power Generator
	event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"taotmachinery:horse_power"}'), [
		'WAW',
		'ARA',
		'WAW'
	], {
	W: 'the_ages_of_times:wooden_sheat',
	A: 'minecraft:andesite',
	R: 'create:shaft',
	})

	//Map
	event.remove({ id: 'minecraft:map'})

	//Iron Bucket
	event.remove({ id: 'minecraft:bucket'})
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:bucket_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "forge:molten_iron",
			  "amount": 270
			},
			"result": "minecraft:bucket",
			"cooling_time": 25
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "tag": "forge:bucket_cast"
			},
			"cast_consumed": true,
			"fluid": {
			  "tag": "forge:molten_gold",
			  "amount": 90
			},
			"result": "the_ages_of_times:bucket_cast",
			"cooling_time": 25
		  }
	)

	//Wax Tablet
	event.remove({ id: 'create:crafting/appliances/clipboard'})
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:wooden_sheat"
			},
			"cast_consumed": true,
			"fluid": {
			  "tag": "forge:wax",
			  "amount": 90
			},
			"result": "create:clipboard",
			"cooling_time": 90
		  }
	)

	//Wax
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
		  "item": "minecraft:honeycomb"
		},
		"result": {
		  "fluid": "the_ages_of_times:wax",
		  "amount": 90
		},
		"temperature": 65,
		"time": 90
	})

	//Wooden Sheat
	event.custom(
		{
			"type": "create:pressing",
			"ingredients": [
			  {
				"item": "minecraft:oak_planks"
			  }
			],
			"results": [
			  {
				"item": "the_ages_of_times:wooden_sheat"
			  }
			]
		}
	)

	//Minecolonies
	event.remove({ id: 'minecolonies:blockhutfarmerstone'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "WPP",
			  "GAA"
			],
			"key": {
			  "W": {
				"item": "the_ages_of_times:written_papyrus"
			  },
			  "P": {
				"item": "atum:scroll"
			  },
			  "G": {
				"item": "the_ages_of_times:glue"
			  },
			  "A": {
				"item": "tconstruct:pattern"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:letter_book"
			}
		  }
	)
	event.remove({ id: 'minecolonies:blockhutblacksmith'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "  X",
			  " X ",
			  "X  "
			],
			"key": {
			  "X": {
				"item": "minecraft:stick"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:long_stick"
			}
		  }
	)
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "X  ",
			  " X ",
			  "X X"
			],
			"key": {
			  "X": {
				"item": "beyond_earth:iron_stick"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:pitchfork"
			}
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_basin",
			"cast": {
			  "item": "minecraft:anvil"
			},
			"cast_consumed": true,
			"fluid": {
			  "tag": "forge:molten_iron",
			  "amount": 900
			},
			"result": "minecolonies:blockhutblacksmith",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:pitchfork_gold_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "forge:molten_iron",
			  "amount": 540
			},
			"result": "the_ages_of_times:pitchfork",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:pitchfork"
			},
			"cast_consumed": true,
			"fluid": {
			  "tag": "forge:molten_gold",
			  "amount": 90
			},
			"result": "the_ages_of_times:pitchfork_gold_cast",
			"cooling_time": 90
		  }
	)
	event.shaped('magistuarmory:pitchfork', [
		' G',
		'S '
	], {
	S: 'the_ages_of_times:long_stick',
	G: 'the_ages_of_times:pitchfork'
	})

	//Blacksmith
	event.remove({mod: 'magistuarmory'})

	//Cartographer
	event.remove({ id: 'minecolonies:blockhutcrusher'})

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
	event.remove({ id: 'farmersdelight:barbecue_stick'})

	//Antique Atlas
	event.remove({ id: 'antiqueatlas:empty_atlas'})
	event.remove({ id: 'antiqueatlas:empty_atlas_new'})

	//Paper
	event.remove({ id: 'minecraft:paper'})
	event.remove({ id: 'immersiveengineering:crafting/paper_from_sawdust'})
	event.remove({ id: 'farmersdelight:paper_from_tree_bark'})
	event.remove({ id: 'create:pressing/sugar_cane'})
	event.custom(
		{
			"type": "create:milling",
			"ingredients": [
			  {
				"tag": "forge:stripped_logs"
			  }
			],
			"results": [
			  {
				"item": "minecraft:flower_banner_pattern",
				"count": 1,
				"nbt": '{SequencedAssembly:{Step:1,id:"create:kjs_45eywbg20jp29iiwkyomhp6fm"}}'
			  }
			],
			"processingTime": 100
		  }
	)
	event.custom(
        {
            "type": "lychee:item_inside",
			"time": 5,
            "item_in": [
                {
					"type": "forge:nbt",
                    "item": "minecraft:flower_banner_pattern",
					"nbt": {
						
						"SequencedAssembly":{
							"Step": 1,
							"id": "create:kjs_45eywbg20jp29iiwkyomhp6fm"
						}
					}
                }
            ],
            "block_in": "the_ages_of_times:white_water",
            "post": [
                {
                    "type": "drop_item",
                    "item": "minecraft:globe_banner_pattern"
                }
            ]
        }
    )
	event.custom(
		{
			"type": "create:emptying",
			"ingredients": [
			  {
				"item": "minecraft:globe_banner_pattern"
			  }
			],
			"results": [
			  {
				"item": "minecraft:flower_banner_pattern",
				"nbt": '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_eviuw7vnkazdvtsvev6xo5ahf"}}'
			  },
			  {
				"fluid": "minecraft:water",
				"amount": 200
			  }
			]
		  }
	)
	event.custom(
        {
            "type": "lychee:item_inside",
			"time": 20,
            "item_in": {
				"item": "globe_banner_pattern"
			},
            "block_in": "air",
            "post": [
                {
                    "type": "drop_item",
                    "item": "flower_banner_pattern",
					"nbt": '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_eviuw7vnkazdvtsvev6xo5ahf"}}'
                }
            ]
        }
    )
	
	//Verrerie de Laboratoire
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:beaker_gold_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "tconstruct:molten_glass",
			  "amount": 100
			},
			"result": "the_ages_of_times:beaker",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:erlenmeyer_gold_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "tconstruct:molten_glass",
			  "amount": 100
			},
			"result": "the_ages_of_times:erlenmeyer",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:gas_test_tube_gold_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "tconstruct:molten_glass",
			  "amount": 100
			},
			"result": "the_ages_of_times:gas_test_tube",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:glass_ampul_gold_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "tconstruct:molten_glass",
			  "amount": 100
			},
			"result": "the_ages_of_times:glass_ampul",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:test_tube_gold_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "tconstruct:molten_glass",
			  "amount": 100
			},
			"result": "the_ages_of_times:test_tube",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:watch_glass_gold_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "tconstruct:molten_glass",
			  "amount": 100
			},
			"result": "the_ages_of_times:watch_glass",
			"cooling_time": 90
		  }
	)
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "the_ages_of_times:balloon_gold_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "tconstruct:molten_glass",
			  "amount": 100
			},
			"result": "the_ages_of_times:balloon",
			"cooling_time": 90
		  }
	)

	//Telescope
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "  A",
			  " B ",
			  "A C"
			],
			"key": {
			  "A": {
				"item": "the_ages_of_times:lens"
			  },
			  "B": {
				"item": "createaddition:brass_rod"
			  },
			  "C": {
				"item": "the_ages_of_times:long_stick"
			  }
			},
			"result": {
			  "item": "custommachinery:custom_machine_item",
			  "nbt": '{machine:"taotmachinery:telescope"}'
			}
		  }
	)

	//Alembic
	event.custom(
		  {
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "A    ",
			  "BCCC ",
			  "E   D",
			  "EEEEE",
			  "EEEEE"
			],
			"key": {
			  "A": {
				"item": "the_ages_of_times:erlenmeyer"
			  },
			  "B": {
				"item": "minecraft:blast_furnace"
			  },
			  "C": {
				"item": "tconstruct:seared_faucet"
			  },
			  "D": {
				"item": "the_ages_of_times:beaker"
			  },
			  "E": {
				"item": "minecraft:spruce_planks"
			  }
			},
			"result": {
			  "item": "custommachinery:custom_machine_item",
			  "nbt": '{machine:"taotmachinery:alembic"}'
			}
		  }
	)

	//Mercury Thermometer
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "  A  ",
			  "  A  ",
			  "  A  ",
			  " ABA ",
			  "  A  "
			],
			"key": {
			  "A": {
				"item": "minecraft:glass"
			  },
			  "B": {
				"item": "chemlib:mercury_bucket"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:thermometer"
			}
		  }
	)

	//Microscope
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "   AB",
			  "  A B",
			  " BBBB",
			  "    B",
			  "BBBBB"
			],
			"key": {
			  "A": {
				"item": "the_ages_of_times:lens"
			  },
			  "B": {
				"item": "electrodynamics:plateiron"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:microscope"
			}
		  }
	)

	//Lens
	event.shaped('the_ages_of_times:lens', [
		'VVV',
		'VVV',
		'VVV'
	], {
	V: 'minecraft:glass_pane'
	})

	//Quadrant
	event.shaped('the_ages_of_times:quadrant', [
		'PP ',
		'PPP',
		'PPP'
	], {
	P: '#minecraft:planks'
	})

	//Compass
	event.remove({ id: 'minecraft:compass'})
	event.shaped('minecraft:compass', [
		'PPP',
		'PCP',
		'PPP'
	], {
	C: '#forge:compasss',
	P: 'electrodynamics:plateiron'
	})

	//Printer
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "ABA",
			  "ACA",
			  "AAA"
			],
			"key": {
			  "A": {
				"item": "minecraft:iron_block"
			  },
			  "B": {
				"item": "create:mechanical_press"
			  },
			  "C": {
				"item": "the_ages_of_times:press_plate"
			  }
			},
			"result": {
			  "item": "custommachinery:custom_machine_item",
			  "nbt" : '{machine:"taotmachinery:printer"}'
			}
		  }
	)

	//Star Parchment
	event.shapeless('the_ages_of_times:empty_parchment', ['atum:scroll', 'multibeds:embroidery_thread'])

	//Advanced Crafting Table
	event.remove({ id: 'extendedcrafting:advanced_table'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "ABA",
			  "CDC",
			  "AEA"
			],
			"key": {
			  "A": {
				"item": "extendedcrafting:advanced_component"
			  },
			  "B": {
				"item": "extendedcrafting:advanced_catalyst"
			  },
			  "C": {
				"item": "extendedcrafting:basic_table"
			  },
			  "D": {
				"item": "the_ages_of_times:star_observation_book"
			  },
			  "E": {
				"item": "extendedcrafting:black_iron_slate"
			  }
			},
			"result": {
			  "item": "extendedcrafting:advanced_table"
			}
		  }
	)
	
	//3-Cylinder
	event.remove({ id: 'car:engine_3_cylinder'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "ABCBA",
			  "DKFKD",
			  "DGGGD",
			  "DHIHD",
			  "JFEFJ"
			],
			"key": {
			  "A": {
				"item": "car:screw_driver"
			  },
			  "B": {
				"item": "car:wrench"
			  },
			  "C": {
				"item": "car:hammer"
			  },
			  "D": {
				"item": "electrodynamics:plateiron"
			  },
			  "E": {
				"item": "electrodynamics:pipecopper"
			  },
			  "F": {
				"item": "create:cogwheel"
			  },
			  "G": {
				"item": "car:engine_piston"
			  },
			  "H": {
				"item": "minecraft:water_bucket"
			  },
			  "I": {
				"item": "minecraft:charcoal"
			  },
			  "J": {
				"item": "car:repair_kit"
			  },
			  "K": {
				"item": "beyond_earth:iron_stick"
			  }
			},
			"result": {
			  "item": "car:engine_3_cylinder"
			}
		  }
	)

	//Light Enginneer Block
	event.remove({ id: 'immersiveengineering:crafting/component_iron'})
	event.remove({ id: 'immersiveengineering:crafting/light_engineering'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABAA",
			  "AABAA",
			  "BBCBB",
			  "AABAA",
			  "AABAA"
			],
			"key": {
			  "A": {
				"item": "immersiveengineering:sheetmetal_iron"
			  },
			  "B": {
				"item": "immersiveengineering:component_iron"
			  },
			  "C": {
				"item": "minecraft:copper_ingot"
			  }
			},
			"result": {
			  "item": "immersiveengineering:light_engineering"
			}
		  }
	)

	//Heavy Enginneer Block
	event.remove({ id: 'immersiveengineering:crafting/component_steel'})
	event.remove({ id: 'immersiveengineering:crafting/heavy_engineering'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABAA",
			  "AABAA",
			  "BBCBB",
			  "AABAA",
			  "AABAA"
			],
			"key": {
			  "A": {
				"item": "immersiveengineering:sheetmetal_steel"
			  },
			  "B": {
				"item": "immersiveengineering:component_steel"
			  },
			  "C": {
				"item": "immersiveengineering:ingot_electrum"
			  }
			},
			"result": {
			  "item": "immersiveengineering:heavy_engineering"
			}
		  }
	)

	//Redstone Engineer Block
	event.remove({ id: 'immersiveengineering:crafting/rs_engineering'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABAA",
			  "AABAA",
			  "BBCBB",
			  "AABAA",
			  "AABAA"
			],
			"key": {
			  "A": {
				"item": "immersiveengineering:sheetmetal_iron"
			  },
			  "B": {
				"item": "minecraft:redstone"
			  },
			  "C": {
				"item": "minecraft:copper_ingot"
			  }
			},
			"result": {
			  "item": "immersiveengineering:rs_engineering"
			}
		  }
	)

	//Steel Scafolding
	event.remove({ id: 'immersiveengineering:crafting/steel_scaffolding_standard'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABAA",
			  "AB BA",
			  "B   B",
			  "AB BA",
			  "AABAA"
			],
			"key": {
			  "A": {
				"item": "electrodynamics:platesteel"
			  },
			  "B": {
				"item": "electrodynamics:rodsteel"
			  }
			},
			"result": {
			  "item": "immersiveengineering:steel_scaffolding_standard",
			  "count": 16
			}
		}
	)

	//Radiator
	event.remove({ id: 'immersiveengineering:crafting/radiator'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABAA",
			  "AABAA",
			  "BBCBB",
			  "AABAA",
			  "AABAA"
			],
			"key": {
			  "A": {
				"item": "immersiveengineering:sheetmetal_steel"
			  },
			  "B": {
				"tag": "forge:plates/copper"
			  },
			  "C": {
				"item": "electrodynamics:titaniumheatcoil"
			  }
			},
			"result": {
			  "item": "immersiveengineering:radiator"
			}
		}
	)

	//Generator
	event.remove({ id: 'immersiveengineering:crafting/generator'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAA",
			  "AABAA",
			  "ABCBA",
			  "AABAA",
			  "AAAAA"
			],
			"key": {
			  "A": {
				"item": "immersiveengineering:sheetmetal_steel"
			  },
			  "B": {
				"item": "immersiveengineering:coil_mv"
			  },
			  "C": {
				"item": "immersiveengineering:component_iron"
			  }
			},
			"result": {
			  "item": "immersiveengineering:generator"
			}
		}
	)

	//Steel Sheetmetal
	event.remove({ id: 'immersiveengineering:crafting/sheetmetal_steel'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAA",
			  "A   A",
			  "A   A",
			  "A   A",
			  "AAAAA"
			],
			"key": {
			  "A": {
				"item": "electrodynamics:platesteel"
			  }
			},
			"result": {
			  "item": "immersiveengineering:sheetmetal_steel",
			  "count": 16
			}
		  }
	)

	//Iron Sheetmetal
	event.remove({ id: 'immersiveengineering:crafting/sheetmetal_iron'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAA",
			  "A   A",
			  "A   A",
			  "A   A",
			  "AAAAA"
			],
			"key": {
			  "A": {
				"tag": "forge:plates/iron"
			  }
			},
			"result": {
			  "item": "immersiveengineering:sheetmetal_iron",
			  "count": 16
			}
		  }
	)

	//Piston
	event.remove({ id: 'minecraft:piston'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAA",
			  "BCB",
			  "BDB"
			],
			"key": {
			  "A": {
				"tag": "minecraft:wooden_slabs"
			  },
			  "B": {
				"tag": "forge:cobblestone"
			  },
			  "C": {
				"item": "create:piston_extension_pole"
			  },
			  "D": {
				"tag": "forge:plates/iron"
			  }
			},
			"result": {
			  "item": "minecraft:piston"
			}
		  }
	)

	//Alternator
	event.remove({ id: 'createaddition:mechanical_crafting/alternator'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABAA",
			  "ACDCA",
			  "CDEDC",
			  "ACFCA",
			  "AAGAA"
			],
			"key": {
			  "A": {
				"item": "electrodynamics:platesteel"
			  },
			  "B": {
				"item": "create:andesite_alloy"
			  },
			  "C": {
				"item": "beyond_earth:iron_plate"
			  },
			  "D": {
				"item": "createaddition:copper_spool"
			  },
			  "E": {
				"item": "beyond_earth:iron_stick"
			  },
			  "F": {
				"item": "createaddition:capacitor"
			  },
			  "G": {
				"item": "electrodynamics:motor"
			  }
			},
			"result": {
			  "item": "createaddition:alternator"
			}
		  }
	)

	//Electric Motor
	event.remove({ id: 'createaddition:mechanical_crafting/electric_motor'})
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "AABAA",
		  "ACDCA",
		  "CDEDC",
		  "ACFCA",
		  "AAGAA"
		],
		"key": {
		  "A": {
			"item": "create:golden_sheet"
		  },
		  "B": {
			"item": "create:andesite_alloy"
		  },
		  "C": {
			"item": "create:brass_sheet"
		  },
		  "D": {
			"item": "createaddition:copper_spool"
		  },
		  "E": {
			"item": "beyond_earth:iron_stick"
		  },
		  "F": {
			"item": "createaddition:capacitor"
		  },
		  "G": {
			"item": "electrodynamics:motor"
		  }
		},
		"result": {
		  "item": "createaddition:electric_motor"
		}
	})

	//Liquid Dirt
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
		  "item": "minecraft:dirt"
		},
		"result": {
		  "fluid": "the_ages_of_times:molten_dirt",
		  "amount": 1000
		},
		"temperature": 100,
		"time": 90
	})
	event.custom(
		{
			"type": "tconstruct:casting_basin",
			"fluid": {
			  "tag": "forge:molten_dirt",
			  "amount": 1000
			},
			"result": "minecraft:dirt",
			"cooling_time": 90
		}
	)

	//Plastic
	event.remove({ id: 'pneumaticcraft:heat_frame_cooling/plastic'})
	event.remove({ id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel'})
	event.remove({ id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'})
	event.custom(
		{
			"type": "alchemistry:atomizer",
			"group": "alchemistry:atomizer",
			"input": {
			  "fluid": "pneumaticcraft:plastic",
			  "amount": "1000"
			},
			"result": {
			  "item": "pneumaticcraft:plastic",
			  "count": 1
			}
		  }
	)
	event.custom(
		{
			"type": "alchemistry:liquifier",
			"group": "alchemistry:liquifier",
			"input": {
			  "ingredient": {
				"item": "pneumaticcraft:plastic"
			  },
			  "count": 1
			},
			"result": {
			  "fluid": "pneumaticcraft:plastic",
			  "amount": "1000"
			}
		  }
	)

	//Polyethylene
	event.custom(
		{
			"type": "alchemistry:atomizer",
			"group": "alchemistry:atomizer",
			"input": {
			  "fluid": "the_ages_of_times:polyethylene",
			  "amount": "1000"
			},
			"result": {
			  "item": "electrodynamics:sheetplastic",
			  "count": 1
			}
		  }
	)
	event.custom(
		{
			"type": "alchemistry:liquifier",
			"group": "alchemistry:liquifier",
			"input": {
			  "ingredient": {
				"item": "electrodynamics:sheetplastic"
			  },
			  "count": 1
			},
			"result": {
			  "fluid": "the_ages_of_times:polyethylene",
			  "amount": "500"
			}
		  }
	)

	//Lithium
	event.custom(
		{
			"type": "alchemistry:atomizer",
			"group": "alchemistry:atomizer",
			"input": {
			  "fluid": "the_ages_of_times:lithium_sulfate",
			  "amount": "1000"
			},
			"result": {
			  "item": "electrodynamics:crystallithium",
			  "count": 1
			}
		  }
	)
	event.custom(
		{
			"type": "alchemistry:liquifier",
			"group": "alchemistry:liquifier",
			"input": {
			  "ingredient": {
				"item": "electrodynamics:crystallithium"
			  },
			  "count": 1
			},
			"result": {
			  "fluid": "the_ages_of_times:lithium_sulfate",
			  "amount": "200"
			}
		  }
	)

	//Aluminium
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/ore_singular'})
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/raw'})
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/raw_block'})
	event.remove({ id: 'tconstruct:smeltery/melting/metal/aluminum/dust'})
	event.remove({ id: 'create:splashing/immersiveengineering/crushed_raw_aluminum'})
	event.remove({ id: 'immersiveengineering:arcfurnace/dust_aluminum'})
	event.remove({ id: 'immersiveengineering:arcfurnace/ore_aluminum'})
	event.remove({ id: 'immersiveengineering:arcfurnace/raw_ore_aluminum'})
	event.remove({ id: 'immersiveengineering:arcfurnace/raw_block_aluminum'})

	//Elite Crafting Table
	event.remove({ id: 'extendedcrafting:elite_table'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABAA",
			  "CCCCC",
			  "DCCCD",
			  "ECCCE",
			  " CCC "
			],
			"key": {
			  "A": {
				"item": "extendedcrafting:elite_component"
			  },
			  "B": {
				"item": "extendedcrafting:elite_catalyst"
			  },
			  "C": {
				"item": "pneumaticcraft:plastic"
			  },
			  "D": {
				"item": "extendedcrafting:advanced_table"
			  },
			  "E": {
				"item": "electrodynamics:sheetplastic"
			  }
			},
			"result": {
			  "item": "extendedcrafting:elite_table"
			}
		  }
	)

	//Duroplast Sheet
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "item": "tconstruct:plate_cast"
			},
			"cast_consumed": false,
			"fluid": {
			  "tag": "forge:phenolic_resin",
			  "amount": 250
			},
			"result": "immersiveengineering:plate_duroplast",
			"cooling_time": 100
		  }
	)

	//Circuit
	event.remove({ id: 'electrodynamics:circuitbasic'})
	event.remove({ id: 'electrodynamics:circuitadvanced'})

	//Nuke
	event.remove({ id: 'ballistix:nuclear'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABCBAA",
			  "ABBDBBA",
			  "BBEFEBB",
			  "CDFGFDC",
			  "BBEFEBB",
			  "ABBDBBA",
			  "AABCBAA"
			],
			"key": {
			  "A": {
				"item": "ballistix:obsidian"
			  },
			  "B": {
				"item": "ballistix:landmine"
			  },
			  "C": {
				"item": "ballistix:emp"
			  },
			  "D": {
				"item": "nuclearscience:fuelheuo2",
			  },
			  "E": {
				"item": "nuclearscience:fuelleuo2",
			  },
			  "F": {
				"item": "nuclearscience:fuelplutonium",
			  },
			  "G": {
				"item": "ballistix:thermobaric"
			  }
			},
			"result": {
			  "item": "ballistix:nuclear"
			}
		  }
	)

	//Particle Injector
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABBBAA",
			  "AABBBAA",
			  "CDCECDC",
			  "FCFGFCF",
			  "CDCECDC",
			  "AABBBAA",
			  "AABBBAA"
			],
			"key": {
			  "A": {
				"item": "nuclearscience:electromagnet"
			  },
			  "B": {
				"item": "electrodynamics:platelead"
			  },
			  "C": {
				"item": "electrodynamics:dustobsidian"
			  },
			  "D": {
				"item": "electrodynamics:platesteel"
			  },
			  "E": {
				"item": "chemlib:osmium_ingot"
			  },
			  "F": {
				"item": "electrodynamics:circuitadvanced"
			  },
			  "G": {
				"item": "minecraft:dispenser"
			  }
			},
			"result": {
			  "item": "nuclearscience:particleinjector"
			}
		  }
	)

	//Fuel
	event.remove({ id: 'beyond_earth:fuel_refining/fuel_from_curde_oil'})

	//Computer Circuit
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "ABCCCBA",
			  "BDEFEDB",
			  "CEGHGEC",
			  "CFHIHFC",
			  "CEGHGEC",
			  "BDEFEDB",
			  "ABCCCBA"
			],
			"key": {
			  "A": {
				"item": "immersiveengineering:logic_circuit"
			  },
			  "B": {
				"item": "electrodynamics:circuitbasic"
			  },
			  "C": {
				"item": "createaddition:capacitor"
			  },
			  "D": {
				"item": "electrodynamics:wirecopper"
			  },
			  "E": {
				"item": "pneumaticcraft:capacitor"
			  },
			  "F": {
				"item": "pneumaticcraft:transistor"
			  },
			  "G": {
				"item": "pneumaticcraft:printed_circuit_board"
			  },
			  "H": {
				"item": "electrodynamics:circuitadvanced"
			  },
			  "I": {
				"item": "immersiveengineering:circuit_board"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:computer_circuit"
			}
		  }
	)

	//Computer
	event.remove({ id: 'computercraft:computer_normal'})
	event.shaped('computercraft:computer_normal', [
		'SHS',
		'HGH',
		'SCS'
	], {
	S: 'pneumaticcraft:printed_circuit_board',
	G: 'computercraft:monitor_normal',
	H: 'pneumaticcraft:module_expansion_card',
	C: 'the_ages_of_times:computer_circuit'
	})

	//Sputnik
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "A BBB A",
			  " BCCCB ",
			  "BCDEDCB",
			  "BCEFECB",
			  "BCDGDCB",
			  " BCCCB ",
			  "A BBB A"
			],
			"key": {
			  "A": {
				"item": "immersiveengineering:toolupgrade_powerpack_antenna"
			  },
			  "B": {
				"item": "electrodynamics:platealuminum"
			  },
			  "C": {
				"item": "the_ages_of_times:nitrogen"
			  },
			  "D": {
				"item": "pneumaticcraft:pressure_gauge"
			  },
			  "E": {
				"type": "forge:nbt",
				"item": "electrodynamics:battery",
				"count": 1,
				"nbt": "{joules:1666666.0d}"
			  },
			  "F": {
				"item": "beyond_earth:engine_fan"
			  },
			  "G": {
				"item": "electrodynamics:circuitadvanced"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:spoutnik"
			}
		  }
	)

	//Basic Satellite
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "       ",
			  "       ",
			  "   A   ",
			  "BBBCBBB",
			  "   A   ",
			  "       ",
			  "       "
			],
			"key": {
			  "A": {
				"item": "electrodynamics:platealuminum"
			  },
			  "B": {
				"item": "electrodynamics:solarpanelplate"
			  },
			  "C": {
				"item": "the_ages_of_times:spoutnik"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:basic_satellite"
			}
		  }
	)

	//Mechanic Hut
	event.remove({ id: 'minecolonies:blockhutmechanic'})
	event.remove({ id: 'pneumaticcraft:amadron/assembly_program_laser'})
	event.remove({ id: 'pneumaticcraft:amadron/pcb_blueprint'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAAAA",
			  "B     B",
			  "BCDEFGB",
			  "BAAAAAB",
			  "BHHHHHB",
			  "BAAAAAB",
			  "B     B"
			],
			"key": {
			  "A": {
				"item": "minecraft:petrified_oak_slab"
			  },
			  "B": {
				"item": "quark:oak_vertical_slab"
			  },
			  "C": {
				"item": "immersiveengineering:toolbox"
			  },
			  "D": {
				"item": "immersiveengineering:screwdriver"
			  },
			  "E": {
				"item": "electrodynamics:circuitadvanced"
			  },
			  "F": {
				"type": "forge:nbt",
				"item": "immersiveengineering:wirecutter",
				"count": 1,
				"nbt": "{Damage:0}"
			  },
			  "G": {
				"type": "forge:nbt",
				"item": "immersiveengineering:hammer",
				"count": 1,
				"nbt": "{Damage:0}"
			  },
			  "H": {
				"item": "minecraft:redstone_block"
			  }
			},
			"result": {
			  "item": "minecolonies:blockhutmechanic"
			}
		}
	)

	//Satellite Rocket
	event.custom(
		{
		  "type": "lychee:block_interacting",
		  "item_in": {
			"item": "the_ages_of_times:satellite_rocket"
		  },
		  "block_in": {
			"blocks": ["beyond_earth:rocket_launch_pad"],
			"state": {
				"lit": true
			}
		  },
		  "post": [
			{
			  "type": "execute",
			  "command": "summon pig ~ ~ ~ {Silent:1b,CustomNameVisible:0b,DeathLootTable:\"minecraft:empty\",CustomName:'{\"text\":\"x9795652153\"}',ActiveEffects:[{Id:14b,Amplifier:1b,Duration:100000}],Passengers:[{id:\"beyond_earth:rocket_t1\",Passengers:[{id:\"the_ages_of_times:satellite\"}]}]}",
			  "hide": true
			}
		  ]
		}
	)

	//Monitor
	event.remove({ id: 'computercraft:monitor_normal'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAABAAA",
			  "ACDECDA",
			  "ACDECDA",
			  "ACDECDA",
			  "FCDECDF",
			  "FCDECDF",
			  "FFFGFFF"
			],
			"key": {
			  "A": {
				"item": "minecraft:light_gray_concrete"
			  },
			  "B": {
				"item": "electrodynamics:circuitadvanced"
			  },
			  "C": {
				"item": "minecraft:blue_stained_glass_pane"
			  },
			  "D": {
				"item": "minecraft:green_stained_glass_pane"
			  },
			  "E": {
				"item": "minecraft:red_stained_glass_pane"
			  },
			  "F": {
				"item": "minecraft:white_concrete"
			  },
			  "G": {
				"item": "immersiveengineering:toolupgrade_shield_flash"
			  }
			},
			"result": {
			  "item": "computercraft:monitor_normal"
			}
		  }
	)

	//Rocket Launcher
	event.shaped('the_ages_of_times:rocket_launcher', [
		"SSS",
		"PLP",
		"SSS"
	], {
	S: '#forge:ingots/steel',
	L: 'minecraft:lever',
	P: '#forge:plates/iron'
	})

	//Rocket Charger
	event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"taotmachinery:rocket_charger"}'), [
		"SSS",
		"PLP",
		"SSS"
	], {
	S: '#forge:ingots/steel',
	L: 'beyond_earth_giselle_addon:fuel_loader',
	P: '#forge:plates/iron'
	})

	//Wireless Modem
	event.remove({ id: 'computercraft:wireless_modem_normal'})
	event.remove({ id: 'computercraft:wired_modem'})
	event.shaped('computercraft:wireless_modem_normal', [
		'A',
		'M',
		'C'
	], {
	A: 'immersiveengineering:toolupgrade_powerpack_antenna',
	M: 'computercraft:wired_modem',
	C: 'electrodynamics:circuitadvanced'
	})
	event.shaped('computercraft:wired_modem_full', [
		'LGL',
		'GCG',
		'LGL'
	], {
	L: 'minecraft:light_gray_concrete',
	G: 'minecraft:gray_concrete',
	C: 'electrodynamics:circuitadvanced'
	})

	//NASA Workbench Tier 2
	event.custom(
		{
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "beyond_earth:nasa_workbench"
			  },
			  {
				"item": "the_ages_of_times:moon_coordinates"
			  }
			],
			"results": [
			  {
				"item": "custommachinery:custom_machine_item",
				"nbt": "{machine:\"taotmachinery:nasa_workbench_tier_2\"}"
			  }
			]
		}
	)

	//Quantum Intriquer
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "  AAAAA  ",
			  " ABCCCBA ",
			  "ABBDCDBBA",
			  "ACDECEDCA",
			  "ACCCFCCCA",
			  "ACDECEDCA",
			  "ABBDCDBBA",
			  " ABCCCBA ",
			  "  AAGAA  "
			],
			"key": {
			  "A": {
				"item": "create:industrial_iron_block"
			  },
			  "B": {
				"item": "ae2:singularity"
			  },
			  "C": {
				"item": "electrodynamics:coil"
			  },
			  "D": {
				"type": "forge:nbt",
				"item": "immersiveengineering:logic_circuit",
				"count": 1,
				"nbt": "{inputs:[\"WHITE\"],operator:\"NOT\",output:\"WHITE\"}"
			  },
			  "E": {
				"type": "forge:nbt",
				"item": "immersiveengineering:logic_circuit",
				"count": 1,
				"nbt": "{inputs:[\"WHITE\",\"WHITE\"],operator:\"AND\",output:\"WHITE\"}"
			  },
			  "F": {
				"type": "forge:nbt",
				"item": "immersiveengineering:logic_circuit",
				"count": 1,
				"nbt": "{inputs:[\"WHITE\",\"WHITE\"],operator:\"OR\",output:\"WHITE\"}"
			  },
			  "G": {
				"type": "forge:nbt",
				"item": "custommachinery:custom_machine_item",
				"count": 1,
				"nbt": "{machine:\"taotmachinery:quantum_intriquer\"}"
			  }
			},
			"result": {
			  "item": "the_ages_of_times:quantum_intriquer_structure"
			}
		}
	)

	//5 x 5 Crafting Table
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"tier": 4,
			"pattern": [
			  "ABA",
			  "CDC",
			  "ABA"
			],
			"key": {
			  "A": {
				"item": "extendedcrafting:black_iron_ingot"
			  },
			  "B": {
				"item": "extendedcrafting:redstone_component"
			  },
			  "C": {
				"item": "extendedcrafting:advanced_auto_table"
			  },
			  "D": {
				"item": "extendedcrafting:ultimate_auto_table"
			  }
			},
			"result": {
			  "item": "custommachinery:custom_machine_item",
			  "nbt":'{machine:"taotmachinery:5x5_craft"}'
			}
		}
	)

	//Ultimate Crafting Table
	event.remove({ id: 'extendedcrafting:ultimate_table'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAAAA",
			  "AAABAAA",
			  "AAAAAAA",
			  "  CDC  ",
			  "  AEA  ",
			  "  FFF  ",
			  "  FGF  "
			],
			"key": {
			  "A": {
				"item": "extendedcrafting:ultimate_component"
			  },
			  "B": {
				"item": "extendedcrafting:ultimate_catalyst"
			  },
			  "C": {
				"item": "extendedcrafting:elite_table"
			  },
			  "D": {
				"item": "beyond_earth:desh_block"
			  },
			  "E": {
				"item": "extendedcrafting:black_iron_slate"
			  },
			  "F": {
				"item": "extendedcrafting:pedestal"
			  },
			  "G": {
				"item": "the_ages_of_times:computer_circuit"
			  }
			},
			"result": {
			  "item": "extendedcrafting:ultimate_table"
			}
		}
	)

	//ME Controller
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAAAAAA",
			  "ABBBBBBBA",
			  "ABCCCCCBA",
			  "ABCDEDCBA",
			  "ABCEFECBA",
			  "ABCDEDCBA",
			  "ABCCCCCBA",
			  "ABBBBBBBA",
			  "AAAAAAAAA"
			],
			"key": {
			  "A": {
				"item": "ae2:smooth_sky_stone_block"
			  },
			  "B": {
				"item": "ae2:quantum_ring"
			  },
			  "C": {
				"item": "ae2:crafting_unit"
			  },
			  "D": {
				"item": "the_ages_of_times:quantum_circuit"
			  },
			  "E": {
				"item": "ae2:fluix_block"
			  },
			  "F": {
				"item": "ae2:energy_acceptor"
			  }
			},
			"result": {
			  "item": "ae2:controller"
			}
		}
	)

	//Condenser
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"tier": 4,
			"pattern": [
			  "ABBBA",
			  "BCDCB",
			  "BDEDB",
			  "BCDCB",
			  "ABBBA"
			],
			"key": {
			  "A": {
				"item": "ae2:smooth_sky_stone_block"
			  },
			  "B": {
				"item": "ae2:quantum_ring"
			  },
			  "C": {
				"item": "ae2:crafting_unit"
			  },
			  "D": {
				"item": "ae2:fluix_block"
			  },
			  "E": {
				"item": "ae2:energy_acceptor"
			  }
			},
			"result": {
			  "item": "ae2:condenser"
			}
		}
	)

	//Quantum Link
	event.shapeless('ae2:quantum_link', ['ae2:quartz_glass', 'ae2:quantum_ring'])

	//Mechanical Computer
	event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"taotmachinery:computer"}'), [
		'LLL',
		'RMR',
		'WCW'
	], {
	L: 'immersiveengineering:light_bulb',
	R: 'create:brass_casing',
	M: 'car:engine_3_cylinder',
	W: 'create:cogwheel',
	C: 'createaddition:capacitor'
	})

	//Antimatter and Darkmatter
	event.smelting('nuclearscience:cellantimatterverylarge', 'the_ages_of_times:liquid_antimatter_cell')
	event.smelting('nuclearscience:celldarkmatter', 'the_ages_of_times:liquid_darkmatter_cell')

	//Quantum Computer
	event.remove({ id: 'computercraft:computer_advanced_upgrade'})
	event.remove({ id: 'computercraft:computer_advanced'})
	event.remove({ id: 'computercraft:monitor_advanced'})
	event.shapeless('computercraft:monitor_advanced', ['computercraft:monitor_normal', 'the_ages_of_times:quantum_circuit'])
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"tier": 4,
			"pattern": [
			  "ABA",
			  "CDC",
			  "EFE"
			],
			"key": {
			  "A": {
				"item": "pneumaticcraft:module_expansion_card"
			  },
			  "B": {
				"item": "the_ages_of_times:mechanicalprecisionmechanism"
			  },
			  "C": {
				"item": "pneumaticcraft:heat_frame"
			  },
			  "D": {
				"item": "computercraft:monitor_advanced"
			  },
			  "E": {
				"item": "pneumaticcraft:printed_circuit_board"
			  },
			  "F": {
				"item": "the_ages_of_times:quantum_circuit"
			  }
			},
			"result": {
			  "item": "computercraft:computer_advanced"
			}
		  }
	)

	//Heat Frame
	event.remove({ id: 'pneumaticcraft:heat_frame'})
	event.shaped('pneumaticcraft:heat_frame', [
		'CCC',
		'CHC',
		'CCC'
	], {
	H: 'electrodynamics:titaniumheatcoil',
	C: 'pneumaticcraft:ingot_iron_compressed'
	})

	//Dragon Head
	event.custom(
		{
			"type": "minecraft:stonecutting",
			"ingredient": {
			  "item": "tconstruct:dragon_scale"
			},
			"result": "minecraft:dragon_head",
			"count": 1
		  }
	)

	//Netherack
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "minecraft:netherrack"
			},
			{
			  "item": "minecraft:warped_fungus"
			}
		  ],
		  "results": [
			{
			  "item": "minecraft:warped_nylium"
			}
		  ]
		}
	)
	event.custom(
		{
		  "type": "create:item_application",
		  "ingredients": [
			{
			  "item": "minecraft:netherrack"
			},
			{
			  "item": "minecraft:crimson_fungus"
			}
		  ],
		  "results": [
			{
			  "item": "minecraft:crimson_nylium"
			}
		  ]
		}
	)

	//Neural Processor
	event.shapeless('the_ages_of_times:neural_processor', ['ae2:engineering_processor', 'ae2:logic_processor', 'ae2:calculation_processor'])

	//Ender Crafter
	event.remove({ id: 'extendedcrafting:ender_crafter'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"tier": 4,
			"pattern": [
			  "ABA",
			  "CDC",
			  "AEA"
			],
			"key": {
			  "A": {
				"item": "extendedcrafting:ender_component"
			  },
			  "B": {
				"item": "extendedcrafting:ender_catalyst"
			  },
			  "C": {
				"type": "forge:nbt",
				"item": "custommachinery:custom_machine_item",
				"count": 1,
				"nbt": "{machine:\"taotmachinery:5x5_craft\"}"
			  },
			  "D": {
				"item": "extendedcrafting:ender_ingot_block"
			  },
			  "E": {
				"item": "extendedcrafting:black_iron_slate"
			  }
			},
			"result": {
			  "item": "extendedcrafting:ender_crafter"
			}
		  }
	)

	//Miniaturisation
	event.remove({ id: 'compactcrafting:field_projector'})
	event.remove({ id: 'compactcrafting:projector_dish'})
	event.remove({ id: 'compactcrafting:base'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_ender_crafter",
			"pattern": [
			  "AB"
			],
			"key": {
			  "A": {
				"item": "compactcrafting:projector_dish"
			  },
			  "B": {
				"item": "compactcrafting:base"
			  }
			},
			"result": {
			  "item": "compactcrafting:field_projector"
			}
		  }
	)
	event.custom(
		{
			"type": "extendedcrafting:shaped_ender_crafter",
			"pattern": [
			  "ABA",
			  "BCB",
			  "DBD"
			],
			"key": {
			  "A": {
				"item": "electrodynamics:circuitelite"
			  },
			  "B": {
				"item": "the_ages_of_times:lens"
			  },
			  "C": {
				"item": "extendedcrafting:enhanced_ender_catalyst"
			  },
			  "D": {
				"item": "the_ages_of_times:quantum_circuit"
			  }
			},
			"result": {
			  "item": "compactcrafting:projector_dish"
			}
		  }
	)
	event.custom(
		{
			"type": "extendedcrafting:shaped_ender_crafter",
			"pattern": [
			  "   ",
			  "ABA",
			  "CCC"
			],
			"key": {
			  "A": {
				"item": "electrodynamics:circuitelite"
			  },
			  "B": {
				"item": "the_ages_of_times:quantum_circuit"
			  },
			  "C": {
				"item": "extendedcrafting:ender_ingot_block"
			  }
			},
			"result": {
			  "item": "compactcrafting:base"
			}
		  }
	)

	//Elite Circuit
	event.remove({ id: 'electrodynamics:circuitelite'})
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAAAAAA",
			  "AABBBBBAA",
			  "ABACCCABA",
			  "ABCDEDCBA",
			  "ABCFGFCBA",
			  "ABCDEDCBA",
			  "ABACCCABA",
			  "AABBBBBAA",
			  "AAAAAAAAA"
			],
			"key": {
			  "A": {
				"item": "createaddition:diamond_grit"
			  },
			  "B": {
				"item": "pneumaticcraft:printed_circuit_board"
			  },
			  "C": {
				"item": "pneumaticcraft:module_expansion_card"
			  },
			  "D": {
				"item": "extendedcrafting:elite_component"
			  },
			  "E": {
				"item": "the_ages_of_times:computer_circuit"
			  },
			  "F": {
				"item": "electrodynamics:circuitadvanced"
			  },
			  "G": {
				"item": "extendedcrafting:elite_catalyst"
			  }
			},
			"result": {
			  "item": "electrodynamics:circuitelite"
			}
		}
	)

	//Black Iron Frame
	event.remove({ id: 'extendedcrafting:frame' })
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "a", "a"],
                ["a", "b", "a"],
                ["a", "a", "a"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "b", "a"],
                ["b", "-", "b"],
                ["a", "b", "a"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "a", "a"],
                ["a", "b", "a"],
                ["a", "a", "a"]
            ]
        }],
        "catalyst": {
            "id": "ae2:singularity",
            "Count": 1
        },
        "components": {
            "a": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:black_iron_block"
            },
            "b": {
                "type": "compactcrafting:block",
                "block": "create:framed_glass"
            }
        },
        "outputs": [
            {
                "id": "extendedcrafting:frame",
                "Count": 1
            }
        ]
    })

	//Coin Cast
	event.custom(
		{
			"type": "tconstruct:casting_table",
			"cast": {
			  "tag": "forge:coin_cast"
			},
			"cast_consumed": true,
			"fluid": {
			  "tag": "forge:molten_gold",
			  "amount": 90
			},
			"result": "tconstruct:coin_cast",
			"cooling_time": 25
		  }
	)
	event.custom(
		{
			"type": "tconstruct:molding_table",
			"material": {
			  "item": "tconstruct:blank_red_sand_cast"
			},
			"pattern": {
			  "tag": "forge:coin_cast"
			},
			"result": "tconstruct:coin_red_sand_cast"
		  }
	)
	event.custom(
		{
			"type": "tconstruct:molding_table",
			"material": {
			  "item": "tconstruct:blank_sand_cast"
			},
			"pattern": {
			  "tag": "forge:coin_cast"
			},
			"result": "tconstruct:coin_sand_cast"
		  }
	)

	//Crafting Core
	event.remove({ id: 'extendedcrafting:crafting_core' })
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABBCBBAA",
			  "ABBCDCBBA",
			  "BBBDCDBBB",
			  "BCDEDEDCB",
			  "CDCDFDCDC",
			  "BCDEDEDCB",
			  "BBBDCDBBB",
			  "ABBCDCBBA",
			  "AABBCBBAA"
			],
			"key": {
			  "A": {
				"item": "extendedcrafting:black_iron_ingot"
			  },
			  "B": {
				"item": "extendedcrafting:black_iron_slate"
			  },
			  "C": {
				"item": "extendedcrafting:elite_catalyst"
			  },
			  "D": {
				"item": "extendedcrafting:elite_component"
			  },
			  "E": {
				"item": "extendedcrafting:frame"
			  },
			  "F": {
				"item": "extendedcrafting:enhanced_ender_catalyst"
			  }
			},
			"result": {
			  "item": "extendedcrafting:crafting_core"
			}
		}
	)

	//Quantum Compressor
	event.remove({ id: 'extendedcrafting:compressor' })
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AABBCBBAA",
			  "ABBDEDBBA",
			  "BBDEDEDBB",
			  "BDEFGFEDB",
			  "CEDGHGDEC",
			  "BDEFGFEDB",
			  "BBDEDEDBB",
			  "ABBDEDBBA",
			  "AABBCBBAA"
			],
			"key": {
			  "A": {
				"item": "extendedcrafting:black_iron_ingot"
			  },
			  "B": {
				"item": "extendedcrafting:black_iron_slate"
			  },
			  "C": {
				"item": "compactcrafting:field_projector"
			  },
			  "D": {
				"item": "extendedcrafting:elite_component"
			  },
			  "E": {
				"item": "extendedcrafting:elite_catalyst"
			  },
			  "F": {
				"item": "ae2:singularity"
			  },
			  "G": {
				"item": "ae2:condenser"
			  },
			  "H": {
				"item": "ae2:controller"
			  }
			},
			"result": {
			  "item": "extendedcrafting:compressor"
			}
		  }
	)

	//Skeleton
	function skeletton(int){
		event.custom(
			{
			  "type": "lychee:block_interacting",
			  "item_in": {
				"item": "the_ages_of_times:neural_processor"
			  },
			  "block_in": int,
			  "post": [
				{
				  "type": "execute",
				  "command": "summon minecraft:skeleton ~ ~ ~",
				  "hide": true
				},
				{
					"type": "place",
					"block": {
						"blocks": ["air"]
					}
				}
			  ]
			}
	)}
	
	skeletton("davebuildingmod:skeleton_1")
	skeletton("davebuildingmod:skeleton_2")
	skeletton("davebuildingmod:skeleton_3")
	skeletton("davebuildingmod:skeleton_4")
	skeletton("davebuildingmod:skeleton_5")
	skeletton("davebuildingmod:skeleton_6")

	//Nether Star
	event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": [
                {
                    "item": "the_ages_of_times:plasma_singularity"
                }
            ],
            "block_in": {
                "blocks": ["nuclearscience:plasma"]
            },
            "post": [
                {
                    "type": "drop_item",
                    "item": "minecraft:nether_star"
                }
            ]
        }
    )

	//Plasma Singularity
	event.custom(
		{
		  "type": "extendedcrafting:compressor",
		  "powerCost": 500000,
		  "inputCount": 10,
		  "ingredient": {
			"item": "ae2:singularity"
		  },
		  "catalyst": {
			"item": "extendedcrafting:ultimate_catalyst"
		  },
		  "result": {
			"item": "the_ages_of_times:plasma_singularity"
		  }
		}
	)

	//Tempad
	event.remove({ id: 'tempad:tempad' })
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"tier": 4,
			"pattern": [
			  "     ",
			  "ABABA",
			  "CADAC",
			  "ABABA",
			  "     "
			],
			"key": {
			  "A": {
				"item": "the_ages_of_times:space_time_circuit"
			  },
			  "B": {
				"item": "the_ages_of_times:plasma_singularity"
			  },
			  "C": {
				"type": "forge:nbt",
				"item": "extendedcrafting:singularity",
				"count": 1,
				"nbt": "{Id:\"extendedcrafting:creative\"}"
			  },
			  "D": {
				"item": "computercraft:computer_advanced"
			  }
			},
			"result": {
			  "item": "tempad:tempad"
			}
		  }
	)
	
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

	//Compass Craft Tags
	event.add('forge:compasss', ['the_ages_of_times:compasss_16', 'the_ages_of_times:compasss_8', 'the_ages_of_times:compasss_0', 'the_ages_of_times:compasss_24'])

	//Bucket Cast
	event.add('forge:bucket_cast', ['the_ages_of_times:barrel', 'ceramics:unfired_clay_bucket', 'ceramics:empty_clay_bucket', 'minecraft:bucket'])

	//Coin Cast
	event.add('forge:coin_cast', ['atum:coin_gold', 'atum:coin_dirty'])
})