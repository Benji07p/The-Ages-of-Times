// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.information', event=> {
	event.add('minecraft:leather', ['Use a ceramic shears on a leather tanner with a tanned hide'])
})

onEvent('jei.hide.items', event => {
	// Unification
	event.hide(['chemlib:tin_metal_block', 'immersiveengineering:nugget_copper', 'create:copper_nugget', 'tconstruct:copper_nugget', 'chemlib:tin_nugget', 'immersiveengineering:dust_copper', 'chemlib:copper_dust', 'chemlib:tin_dust', 'immersiveengineering:wire_copper', 'createaddition:copper_wire', 'chemlib:copper_plate', 'chemlib:tin_ingot', 'immersiveengineering:storage_aluminum', 'chemlib:aluminum_dust', 'chemlib:aluminum_metal_block', 'immersiveengineering:storage_lead', 'chemlib:lead_dust', 'chemlib:lead_metal_block', 'immersiveengineering:ingot_aluminum', 'chemlib:aluminum_ingot', 'chemlib:gold_plate', 'immersiveengineering:plate_gold', 'immersiveengineering:ingot_lead', 'immersiveengineering:raw_lead', 'chemlib:lead_ingot', 'chemlib:aluminum_nugget', 'chemlib:gold_dust', 'immersiveengineering:dust_gold', 'immersiveengineering:plate_lead', 'chemlib:lead_nugget', 'immersiveengineering:plate_aluminum', 'chemlib:aluminum_plate', 'immersiveengineering:dust_lead', 'chemlib:lead_plate', 'immersiveengineering:storage_silver', 'chemlib:silver_metal_block', 'chemlib:titanium_metal_block', 'chemlib:nickel_dust', 'chemlib:nickel_metal_block', 'immersiveengineering:nugget_steel', 'chemlib:iron_dust', 'chemlib:zinc_ingot', 'immersiveengineering:ingot_silver', 'immersiveengineering:raw_silver', 'chemlib:titanium_plate', 'chemlib:nickel_ingot', 'beyond_earth:steel_nugget', 'immersiveengineering:plate_steel', 'chemlib:cobalt_nugget', 'immersiveengineering:dust_iron', 'chemlib:iron_plate', 'immersiveengineering:nugget_silver', 'chemlib:silver_plate', 'chemlib:silver_ingot', 'chemlib:nickel_nugget', 'beyond_earth:steel_ingot', 'immersiveengineering:dust_steel', 'chemlib:cobalt_ingot', 'immersiveengineering:plate_iron', 'chemlib:zinc_metal_block', 'immersiveengineering:dust_silver', 'chemlib:silver_dust', 'chemlib:silver_nugget', 'chemlib:nickel_plate', 'beyond_earth:steel_block', 'immersiveengineering:ingot_steel', 'chemlib:cobalt_metal_block', 'chemlib:zinc_nugget', 'chemlib:titanium_ingot', 'chemlib:molybdenum_ingot', 'chemlib:vanadium_dust', 'chemlib:lithium_dust', 'chemlib:chromium_ingot', 'chemlib:lithium_plate', 'chemlib:chromium_metal_block', 'chemlib:lithium_ingot', 'chemlib:molybdenum_dust', 'chemlib:vanadium_ingot'])
	event.hide(['immersiveengineering:dust_sulfur', 'chemlib:sulfur_dust', 'immersiveengineering:dust_saltpeter', 'butchersdelight:item_salt', 'createaddition:gold_wire', 'createaddition:electrum_ingot', 'createaddition:electrum_nugget', 'createaddition:electrum_sheet', 'createaddition:electrum_wire', 'magistuarmory:steel_ingot', 'magistuarmory:steel_nugget', 'magistuarmory:steel_plate', 'immersiveengineering:stick_steel', 'immersiveengineering:stick_iron', 'createaddition:iron_rod', 'car:iron_stick', 'chemlib:zinc_plate', 'createaddition:iron_wire'])
})

onEvent('jei.add.items', event => {
	//Papyrus
	event.add('atum:papyrus_plant')
})

//Tooltips ChemLib
onEvent('item.tooltip', tooltip => {

	function chemLib(name, text1, text2) {
		tooltip.addAdvanced(['#forge:ingots/' + name, '#forge:nuggets/' + name, '#forge:dusts/' + name, '#forge:plates/' + name, '#forge:storage_blocks/' + name], (item, advanced, text) => {
			text.add(1, Text.of('§3' + text1))
			text.add(2, Text.of('§7' + text2))
		})
	}
	chemLib('silver', 'Ag (47)', 'Transition Metals')
	chemLib('nickel', 'Ni (28)', 'Transition Metals')
	//chemLib('osmium', 'Os (76)', 'Transition Metals')
	chemLib('aluminum', 'Al (13)', 'Post-Transition Metals')
	chemLib('lead', 'Pb (82)', 'Post-Transition Metals')
	//chemLib('tin', 'Sn (50)', 'Post-Transition Metals')
	//chemLib('uranium', 'U (92)', 'Actinides')
	chemLib('iron', 'Fe (26)', 'Transition Metals')
	chemLib('gold', 'Au (79)', 'Transition Metals')
	chemLib('copper', 'Cu (29)', 'Transition Metals')
	chemLib('sulfur', 'S (16)', 'Reactive Non-Metals')
	//chemLib('cobalt', 'Co (27)', 'Transition Metals')

	tooltip.addAdvanced(['electrodynamics:dustlithium', 'electrodynamics:platelithium', 'electrodynamics:ingotlithium'], (item, advanced, text) => {
		text.add(1, Text.of('§3Li (3)'))
		text.add(2, Text.of('§7Alkali Metals'))
	})

	tooltip.addAdvanced(['the_ages_of_times:iron_oxide_iii'], (item, advanced, text) => {
		text.add(1, Text.of('§3Fe₃O₄'))
	})

	tooltip.addAdvanced(['the_ages_of_times:manganese_chloride_ii'], (item, advanced, text) => {
		text.add(1, Text.of('§3MnCl₂'))
	})

	tooltip.addAdvanced(['the_ages_of_times:nitrogen'], (item, advanced, text) => {
		text.add(1, Text.of('§3N₂'))
	})

	tooltip.addAdvanced(['the_ages_of_times:oxygen_ballon'], (item, advanced, text) => {
		text.add(1, Text.of('§3O₂'))
	})

	tooltip.addAdvanced(['the_ages_of_times:sodium_aluminate'], (item, advanced, text) => {
		text.add(1, Text.of('§3NaAlO₂'))
	})

	tooltip.addAdvanced(['the_ages_of_times:sodium_sulfide'], (item, advanced, text) => {
		text.add(1, Text.of('§3Na₂S'))
	})

	tooltip.addAdvanced(['the_ages_of_times:sodium_chromate'], (item, advanced, text) => {
		text.add(1, Text.of('§3Na₂CrO₄'))
	})

	tooltip.addAdvanced(['the_ages_of_times:sodium_dichromate'], (item, advanced, text) => {
		text.add(1, Text.of('§3Na₂Cr₂O₇'))
	})

	tooltip.addAdvanced(['the_ages_of_times:titanium_tetrachloride'], (item, advanced, text) => {
		text.add(1, Text.of('§3TiCl₄'))
	})

	tooltip.addAdvanced(['the_ages_of_times:tungstic_acid'], (item, advanced, text) => {
		text.add(1, Text.of('§3H₂WO₄'))
	})

	tooltip.addAdvanced(['the_ages_of_times:iron_chloride'], (item, advanced, text) => {
		text.add(1, Text.of('§3FeCl₂'))
	})

	tooltip.addAdvanced(['the_ages_of_times:mercury_oxide'], (item, advanced, text) => {
		text.add(1, Text.of('§3HgO'))
	})

	tooltip.addAdvanced(['the_ages_of_times:potassium_bisulfate'], (item, advanced, text) => {
		text.add(1, Text.of('§3KHSO₄'))
	})

	tooltip.addAdvanced(['the_ages_of_times:vivianite_dust'], (item, advanced, text) => {
		text.add(1, Text.of('§3Fe₃(PO₄)₂•8(H₂O)'))
	})

	tooltip.addAdvanced(['the_ages_of_times:gold_water', 'the_ages_of_times:golden_water_bucket'], (item, advanced, text) => {
		text.add(1, Text.of('§3H₈₈O₂₉N₄₃C₂₅K₆Cl₆S₂NaCaMg'))
	})

	tooltip.addAdvanced(['#forge:ingots/titanium', '#forge:storage_blocks/titanium', '#forge:plates/titanium'], (item, advanced, text) => {
		text.add(1, Text.of('§3Ti (22)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:ingotchromium', 'electrodynamics:resourceblockchromium'], (item, advanced, text) => {
		text.add(1, Text.of('§3Cr (24)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:ingotmolybdenum', 'electrodynamics:dustmolybdenum'], (item, advanced, text) => {
		text.add(1, Text.of('§3Mo (42)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:dustvanadium', 'electrodynamics:ingotvanadium'], (item, advanced, text) => {
		text.add(1, Text.of('§3V (23)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['#forge:ingots/tin', '#forge:nuggets/tin', '#forge:dusts/tin', '#forge:storage_blocks/tin'], (item, advanced, text) => {
		text.add(1, Text.of('§3Sn (50)'))
		text.add(2, Text.of('§7Post-Transition Metals'))
	})

	tooltip.addAdvanced(['#forge:ingots/cobalt', '#forge:nuggets/cobalt', '#forge:storage_blocks/cobalt'], (item, advanced, text) => {
		text.add(1, Text.of('§3Co (27)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['create:zinc_ingot', 'create:zinc_nugget', 'createaddition:zinc_sheet', 'create:zinc_block'], (item, advanced, text) => {
		text.add(1, Text.of('§3Zn (30)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['nuclearscience:thorianitedust'], (item, advanced, text) => {
		text.add(1, Text.of('§3Th (90)'))
		text.add(2, Text.of('§7Actinides'))
	})

	// Others Tooltips
	tooltip.addAdvanced(['the_ages_of_times:andesite_shaft'], (item, advanced, text) => {
		text.add(1, Text.of('Just for crafting'))
	})

})