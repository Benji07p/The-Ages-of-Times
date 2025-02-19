onEvent('recipes', event => {
	// Unification des craft
	event.remove({ id: 'tconstruct:common/materials/copper_ingot_from_nuggets' })
	event.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/uranium/ingot_gold_cast' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/uranium/ingot_sand_cast' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/uranium/nugget_gold_cast' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/uranium/nugget_sand_cast' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/uranium/plate_gold_cast' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/uranium/plate_sand_cast' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/uranium/ingot' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/uranium/nugget' })
	event.remove({ id: 'tconstruct:smeltery/melting/metal/uranium/plates' })
	event.remove({ id: 'create:crafting/materials/copper_nugget' })
	event.remove({ id: 'create:smelting/ingot_uranium_compat_immersiveengineering' })
	event.remove({ id: 'create:blasting/ingot_uranium_compat_immersiveengineering' })
	event.remove({ id: 'create:splashing/immersiveengineering/crushed_raw_uranium' })
	event.remove({ id: 'createaddition:crafting/electrum_ingot'})
	event.remove({ id: 'createaddition:crafting/electrum_nugget'})
	event.remove({ id: 'createaddition:pressing/uranium_ingot'})
	event.remove({ id: 'beyond_earth:steel_block' })
	event.remove({ id: 'beyond_earth:steel_ingot' })
	event.remove({ id: 'beyond_earth:steel_ingot_from_nugget' })
	event.remove({ id: 'beyond_earth:steel_nugget_from_ingot' })
	event.remove({ id: 'beyond_earth:steel_ingot_blasting' })
	event.remove({ id: 'car:iron_stick'})
	event.remove({ id: 'davebuildingmod:rec_steel_ingot'})
	event.remove({ id: 'davebuildingmod:rec_steel_block'})
	event.remove({ id: 'pneumaticcraft:amadron/kerosene_to_emerald'})
	event.remove({ id: 'pneumaticcraft:amadron/lubricant_to_emerald'})
	event.remove({ id: 'pneumaticcraft:amadron/gasoline_to_emerald'})
	event.remove({ id: 'pneumaticcraft:amadron/oil_to_emerald'})
	event.remove({ id: 'pneumaticcraft:amadron/diesel_to_emerald'})
	event.remove({ id: 'pneumaticcraft:amadron/lpg_to_emerald'})
	event.remove({ id: 'pneumaticcraft:amadron/emerald_to_lubricant'})
	event.remove({ id: 'pneumaticcraft:amadron/emerald_to_oil'})
	event.remove({ id: 'electrodynamics:plateiron'})
	event.remove({ id: 'electrodynamics:platebronze'})
	event.remove({ id: 'immersiveengineering:arcfurnace/dust_uranium' })
	event.remove({ id: 'immersiveengineering:arcfurnace/raw_block_uranium' })
	event.remove({ id: 'immersiveengineering:arcfurnace/ore_uranium' })
	event.remove({ id: 'immersiveengineering:arcfurnace/raw_ore_uranium' })
	event.remove({ id: 'immersiveengineering:crusher/ingot_uranium'})
	event.remove({ id: 'immersiveengineering:metalpress/plate_uranium'})
	event.remove({ id: 'immersiveengineering:crafting/nugget_copper_to_copper_ingot' })
	event.remove({ id: 'immersiveengineering:crafting/copper_ingot_to_nugget_copper' })
	event.remove({ id: 'immersiveengineering:crafting/ingot_lead_to_storage_lead' })
	event.remove({ id: 'immersiveengineering:crafting/storage_lead_from_slab' })
	event.remove({ id: 'immersiveengineering:crafting/storage_lead_to_ingot_lead' })
	event.remove({ id: 'immersiveengineering:crafting/storage_lead_to_slab' })
	event.remove({ id: 'immersiveengineering:crafting/raw_block_lead_to_raw_lead' })
	event.remove({ id: 'immersiveengineering:crafting/raw_lead_to_raw_block_lead' })
	event.remove({ id: 'immersiveengineering:crafting/nugget_silver_to_ingot_silver' })
	event.remove({ id: 'immersiveengineering:crafting/ingot_silver_to_nugget_silver' })
	event.remove({ id: 'immersiveengineering:crafting/ingot_silver_to_storage_silver' })
	event.remove({ id: 'immersiveengineering:crafting/storage_silver_to_ingot_silver' })
	event.remove({ id: 'immersiveengineering:crafting/storage_silver_to_slab' })
	event.remove({ id: 'immersiveengineering:crafting/storage_silver_from_slab' })
	event.remove({ id: 'immersiveengineering:crafting/raw_block_silver_to_raw_silver' })
	event.remove({ id: 'immersiveengineering:crafting/raw_silver_to_raw_block_silver' })
	event.remove({ id: 'immersiveengineering:crafting/ingot_aluminum_to_storage_aluminum' })
	event.remove({ id: 'immersiveengineering:crafting/storage_aluminum_to_ingot_aluminum' })
	event.remove({ id: 'immersiveengineering:crafting/storage_aluminum_from_slab' })
	event.remove({ id: 'immersiveengineering:crafting/storage_aluminum_to_slab' })
	event.remove({ id: 'immersiveengineering:crafting/ingot_steel_to_nugget_steel'})
	event.remove({ id: 'immersiveengineering:crafting/ingot_steel_to_storage_steel'})
	event.remove({ id: 'immersiveengineering:crafting/storage_steel_from_slab' })
	event.remove({ id: 'immersiveengineering:crafting/storage_steel_to_ingot_steel'})
	event.remove({ id: 'immersiveengineering:crafting/nugget_steel_to_ingot_steel'})
	event.remove({ id: 'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium'})
	event.remove({ id: 'immersiveengineering:crafting/ingot_uranium_to_storage_uranium'})
	event.remove({ id: 'immersiveengineering:crafting/storage_uranium_from_slab' })
	event.remove({ id: 'immersiveengineering:crafting/storage_uranium_to_ingot_uranium'})
	event.remove({ id: 'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium'})
	event.remove({ id: 'immersiveengineering:crafting/stick_iron'})
	event.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })
	event.remove({ id: 'immersiveengineering:crafting/sheetmetal_uranium' })
	event.remove({ id: 'immersiveengineering:crafting/raw_block_uranium_to_raw_uranium' })
	event.remove({ id: 'immersiveengineering:crafting/raw_uranium_to_raw_block_uranium' })
	event.remove({ id: 'immersiveengineering:smelting/ingot_lead_from_dust_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_lead_from_dust'})
	event.remove({ id: 'immersiveengineering:smelting/copper_ingot_from_dust'})
	event.remove({ id: 'immersiveengineering:smelting/copper_ingot_from_dust_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_lead_from_blasting3'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_lead3'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_silver_from_dust_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_silver_from_dust'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_silver_from_blasting3'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_silver3'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_aluminum'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_aluminum2'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_aluminum3'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_aluminum_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_aluminum_from_blasting2'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_aluminum_from_blasting3'})
	event.remove({ id: 'immersiveengineering:smelting/gold_ingot_from_dust'})
	event.remove({ id: 'immersiveengineering:smelting/gold_ingot_from_dust_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/iron_ingot_from_dust'})
	event.remove({ id: 'immersiveengineering:smelting/iron_ingot_from_dust_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_steel_from_dust'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_uranium_from_dust'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_uranium_from_dust_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_uranium'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_uranium2'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_uranium3'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_uranium_from_blasting'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_uranium_from_blasting2'})
	event.remove({ id: 'immersiveengineering:smelting/ingot_uranium_from_blasting3'})
	event.remove({ id: 'alchemistry:copper_ingot_from_blasting_copper_dust'})
	event.remove({ id: 'alchemistry:copper_ingot_from_smelting_copper_dust'})
	event.remove({ id: 'alchemistry:iron_ingot_from_smelting_iron_dust'})
	event.remove({ id: 'alchemistry:iron_ingot_from_blasting_iron_dust'})
	event.remove({ id: 'alchemistry:gold_ingot_from_smelting_gold_dust'})
	event.remove({ id: 'alchemistry:gold_ingot_from_blasting_gold_dust'})
	event.remove({ id: 'alchemistry:dissolver/ingots/uranium'})
	event.remove({ id: 'alchemistry:dissolver/nuggets/uranium'})
	event.remove({ id: 'alchemistry:dissolver/plates/uranium'})
	event.remove({ id: 'chemlib:tin_ingot_from_blasting_tin_dust'})
	event.remove({ id: 'chemlib:tin_ingot_from_smelting_tin_dust'})
	event.remove({ id: 'chemlib:lead_ingot_from_blasting_lead_dust'})
	event.remove({ id: 'chemlib:lead_ingot_from_smelting_lead_dust'})
	event.remove({ id: 'chemlib:silver_ingot_from_smelting_silver_dust'})
	event.remove({ id: 'chemlib:silver_ingot_from_blasting_silver_dust'})
	event.remove({ id: 'chemlib:aluminum_ingot_from_smelting_aluminum_dust'})
	event.remove({ id: 'chemlib:aluminum_ingot_from_blasting_aluminum_dust'})
	event.remove({ id: 'chemlib:nickel_ingot_from_smelting_nickel_dust'})
	event.remove({ id: 'chemlib:nickel_ingot_from_blasting_nickel_dust'})
	event.remove({ id: 'chemlib:molybdenum_ingot_from_smelting_molybdenum_dust'})
	event.remove({ id: 'chemlib:molybdenum_ingot_from_blasting_molybdenum_dust'})
	event.remove({ id: 'chemlib:lithium_ingot_from_smelting_lithium_dust'})
	event.remove({ id: 'chemlib:lithium_ingot_from_blasting_lithium_dust'})
	event.remove({ id: 'chemlib:vanadium_ingot_from_smelting_vanadium_dust'})
	event.remove({ id: 'chemlib:vanadium_ingot_from_blasting_vanadium_dust'})
	event.remove({ id: 'chemlib:thorium_ingot_from_smelting_thorium_dust'})
	event.remove({ id: 'chemlib:thorium_ingot_from_blasting_thorium_dust'})
	event.remove({ id: 'chemlib:uranium_ingot_from_smelting_uranium_dust'})
	event.remove({ id: 'chemlib:uranium_ingot_from_blasting_uranium_dust'})
	event.remove({ id: 'chemlib:tin_ingot_to_nugget'})
	event.remove({ id: 'chemlib:tin_nugget_to_ingot'})
	event.remove({ id: 'chemlib:tin_block_to_ingot'})
	event.remove({ id: 'chemlib:tin_ingot_to_block'})
	event.remove({ id: 'chemlib:lead_ingot_to_block'})
	event.remove({ id: 'chemlib:lead_block_to_ingot'})
	event.remove({ id: 'chemlib:lead_ingot_to_nugget'})
	event.remove({ id: 'chemlib:lead_nugget_to_ingot'})
	event.remove({ id: 'chemlib:silver_ingot_to_block'})
	event.remove({ id: 'chemlib:silver_block_to_ingot'})
	event.remove({ id: 'chemlib:silver_nugget_to_ingot'})
	event.remove({ id: 'chemlib:silver_ingot_to_nugget'})
	event.remove({ id: 'chemlib:aluminum_ingot_to_nugget'})
	event.remove({ id: 'chemlib:aluminum_nugget_to_ingot'})
	event.remove({ id: 'chemlib:aluminum_ingot_to_block'})
	event.remove({ id: 'chemlib:aluminum_block_to_ingot'})
	event.remove({ id: 'chemlib:nickel_ingot_to_nugget'})
	event.remove({ id: 'chemlib:nickel_nugget_to_ingot'})
	event.remove({ id: 'chemlib:nickel_ingot_to_block'})
	event.remove({ id: 'chemlib:nickel_block_to_ingot'})
	event.remove({ id: 'chemlib:zinc_nugget_to_ingot'})
	event.remove({ id: 'chemlib:zinc_ingot_to_nugget'})
	event.remove({ id: 'chemlib:zinc_ingot_to_block'})
	event.remove({ id: 'chemlib:zinc_block_to_ingot'})
	event.remove({ id: 'chemlib:cobalt_ingot_to_nugget'})
	event.remove({ id: 'chemlib:cobalt_nugget_to_ingot'})
	event.remove({ id: 'chemlib:cobalt_ingot_to_block'})
	event.remove({ id: 'chemlib:cobalt_block_to_ingot'})
	event.remove({ id: 'chemlib:titanium_ingot_to_block'})
	event.remove({ id: 'chemlib:titanium_block_to_ingot'})
	event.remove({ id: 'chemlib:chromium_ingot_to_block'})
	event.remove({ id: 'chemlib:chromium_block_to_ingot'})
	event.remove({ id: 'chemlib:uranium_ingot_to_block'})
	event.remove({ id: 'chemlib:uranium_block_to_ingot'})
	event.remove({ id: 'chemlib:uranium_ingot_to_nugget'})
	event.remove({ id: 'chemlib:uranium_nugget_to_ingot'})
	event.remove({ id: 'butchersdelight:re_saltcipe'})
})

onEvent('item.tags', event => {
	// Ajout de Tags
	event.get('forge:wires/copper').add('electrodynamics:wirecopper')
	event.get('immersiveengineering:circuits/solder').add('electrodynamics:wirecopper')
	event.get('forge:salt').add('electrodynamics:dustsalt')
	event.get('forge:wires').add('electrodynamics:wireiron')
	event.get('forge:wires/all_metal').add('electrodynamics:wireiron')
	event.get('forge:wires/iron').add('electrodynamics:wireiron')
	event.get('forge:wires').add('electrodynamics:wiregold')
	event.get('forge:wires/all_metal').add('electrodynamics:wiregold')
	event.get('forge:wires/gold').add('electrodynamics:wiregold')

	// Retiré les Tags
	//Cuivre
	event.get('forge:nuggets/copper').remove(['immersiveengineering:nugget_copper', 'tconstruct:copper_nugget', 'create:copper_nugget'])
	event.get('forge:dusts/copper').remove(['chemlib:copper_dust', 'immersiveengineering:dust_copper'])
	event.get('forge:wires/copper').remove(['immersiveengineering:wire_copper', 'createaddition:copper_wire'])
	event.get('immersiveengineering:circuits/solder').remove(['immersiveengineering:wire_copper', 'createaddition:copper_wire'])
	event.get('forge:plates/copper').remove(['chemlib:copper_plate', 'immersiveengineering:plate_copper'])

	//Tin
	event.get('forge:nuggets/tin').remove('chemlib:tin_nugget')
	event.get('forge:ingots/tin').remove('chemlib:tin_ingot')
	event.get('forge:dusts/tin').remove('chemlib:tin_dust')
	event.get('forge:storage_blocks/tin').remove('chemlib:tin_metal_block')

	//Aluminium
	event.get('forge:dusts/aluminum').remove('chemlib:aluminum_dust')
	event.get('forge:nuggets/aluminum').remove('chemlib:aluminum_nugget')
	event.get('forge:plates/aluminum').remove(['immersiveengineering:plate_aluminum', 'chemlib:aluminum_plate'])
	event.get('forge:storage_blocks/aluminum').remove(['immersiveengineering:storage_aluminum', 'chemlib:aluminum_metal_block'])
	event.get('forge:ingots/aluminum').remove(['chemlib:aluminum_ingot', 'immersiveengineering:ingot_aluminum'])

	//Lead
	event.get('forge:nuggets/lead').remove('chemlib:lead_nugget')
	event.get('forge:raw_materials/lead').remove('immersiveengineering:raw_lead')
	event.get('forge:storage_blocks/lead').remove(['immersiveengineering:storage_lead', 'chemlib:lead_metal_block'])
	event.get('forge:dusts/lead').remove(['immersiveengineering:dust_lead', 'chemlib:lead_dust'])
	event.get('forge:plates/lead').remove(['chemlib:lead_plate', 'immersiveengineering:plate_lead'])
	event.get('forge:ingots/lead').remove(['immersiveengineering:ingot_lead', 'chemlib:lead_ingot'])

	//Silver
	event.get('forge:ingots/silver').remove(['immersiveengineering:ingot_silver', 'chemlib:silver_ingot'])
	event.get('forge:nuggets/silver').remove(['chemlib:silver_nugget', 'immersiveengineering:nugget_silver'])
	event.get('forge:plates/silver').remove('chemlib:silver_plate')
	event.get('forge:dusts/silver').remove(['immersiveengineering:dust_silver', 'chemlib:silver_dust'])
	event.get('forge:storage_blocks/silver').remove(['immersiveengineering:storage_silver', 'chemlib:silver_metal_block'])
	event.get('forge:raw_materials/silver').remove('immersiveengineering:raw_silver')

	//Nickel
	event.get('forge:ingots/nickel').remove('chemlib:nickel_ingot')
	event.get('forge:nuggets/nickel').remove('chemlib:nickel_nugget')
	event.get('forge:plates/nickel').remove('chemlib:nickel_plate')
	event.get('forge:dusts/nickel').remove('chemlib:nickel_dust')
	event.get('forge:storage_blocks/nickel').remove('chemlib:nickel_metal_block')

	//Steel
	event.get('forge:nuggets/steel').remove(['magistuarmory:steel_nugget', 'immersiveengineering:nugget_steel', 'beyond_earth:steel_nugget'])
	event.get('forge:ingots/steel').remove(['magistuarmory:steel_ingot', 'immersiveengineering:ingot_steel', 'beyond_earth:steel_ingot', 'davebuildingmod:steel_ingot'])
	event.get('forge:dusts/steel').remove('immersiveengineering:dust_steel')
	event.get('forge:plates/steel').remove(['magistuarmory:steel_plate', 'immersiveengineering:plate_steel'])
	event.get('forge:rods/steel').remove('immersiveengineering:stick_steel')
	event.get('forge:storage_blocks/steel').remove(['beyond_earth:steel_block', 'immersiveengineering:storage_steel'])

	//Zinc
	event.get('forge:ingots/zinc').remove('chemlib:zinc_ingot')
	event.get('forge:storage_blocks/zinc').remove('chemlib:zinc_metal_block')
	event.get('forge:nuggets/zinc').remove('chemlib:zinc_nugget')
	event.get('forge:plates/zinc').remove('chemlib:zinc_plate')

	//Cobalt
	event.get('forge:nuggets/cobalt').remove('chemlib:cobalt_nugget')
	event.get('forge:storage_blocks/cobalt').remove('chemlib:cobalt_metal_block')
	event.get('forge:ingots/cobalt').remove('chemlib:cobalt_ingot')
	
	//Fer
	event.get('forge:plates/iron').remove(['immersiveengineering:plate_iron', 'chemlib:iron_plate', 'electrodynamics:plateiron', 'create:iron_sheet'])
	event.get('forge:dusts/iron').remove(['chemlib:iron_dust', 'immersiveengineering:dust_iron'])
	event.get('forge:rods/iron').remove(['immersiveengineering:stick_iron', 'createaddition:iron_rod', 'car:iron_stick'])
	event.get('forge:rods').remove('createaddition:iron_rod')
	event.get('forge:rods/all_metal').remove('createaddition:iron_rod')
	event.get('forge:wires').remove('createaddition:iron_wire')
	event.get('forge:wires/all_metal').remove('createaddition:iron_wire')
	event.get('forge:wires/iron').remove('createaddition:iron_wire')
	event.get('forge:plates').remove('create:iron_sheet')

	//Or
	event.get('forge:plates/gold').remove(['chemlib:gold_plate', 'immersiveengineering:plate_gold'])
	event.get('forge:dusts/gold').remove(['chemlib:gold_dust', 'immersiveengineering:dust_gold'])
	event.get('forge:wires').remove('createaddition:gold_wire')
	event.get('forge:wires/all_metal').remove('createaddition:gold_wire')
	event.get('forge:wires/gold').remove('createaddition:gold_wire')

	//Electrum
	event.get('forge:plates/electrum').remove('createaddition:electrum_sheet')
	event.get('forge:ingots/electrum').remove('createaddition:electrum_ingot')
	event.get('forge:wires/electrum').remove('createaddition:electrum_wire')
	event.get('forge:nuggets/electrum').remove('createaddition:electrum_nugget')
	event.get('forge:plates/all_metal').remove('createaddition:electrum_sheet')
	event.get('forge:ingots/all_metal').remove('createaddition:electrum_ingot')
	event.get('forge:wires/all_metal').remove('createaddition:electrum_wire')
	event.get('forge:nuggets/all_metal').remove('createaddition:electrum_nugget')

	//Sulfur
	event.get('forge:dusts/sulfur').remove(['chemlib:sulfur_dust', 'immersiveengineering:dust_sulfur'])

	//Sel
	event.get('forge:salt').remove('butchersdelight:item_salt')

	//Niter
	event.get('forge:dusts/saltpeter').remove('immersiveengineering:dust_saltpeter')

	//Molybdène
	event.get('forge:ingots/molybdenum').remove('chemlib:molybdenum_ingot')
	event.get('forge:dusts/molybdenum').remove('chemlib:molybdenum_dust')
	
	//Lithium
	event.get('forge:plates/lithium').remove('chemlib:lithium_plate')
	event.get('forge:dusts/lithium').remove('chemlib:lithium_dust')
	event.get('forge:ingots/lithium').remove('chemlib:lithium_ingot')

	//Vanadium
	event.get('forge:ingots/vanadium').remove('chemlib:vanadium_ingot')
	event.get('forge:dusts/vanadium').remove('chemlib:vanadium_dust')

	//Titanium
	event.get('forge:ingots/titanium').remove('chemlib:titanium_ingot')
	event.get('forge:plates/titanium').remove('chemlib:titanium_plate')
	event.get('forge:storage_blocks/titanium').remove('chemlib:titanium_metal_block')

	//Chromium
	event.get('forge:ingots/chromium').remove('chemlib:chromium_ingot')
	event.get('forge:storage_blocks/chromium').remove('chemlib:chromium_metal_block')

	//Thorium
	event.get('forge:dusts/thorium').remove('chemlib:thorium_dust')

	//Uranium
	event.get('forge:ingots/uranium').remove(['chemlib:uranium_ingot', 'immersiveengineering:ingot_uranium'])
	event.get('forge:storage_blocks/uranium').remove('chemlib:uranium_metal_block')
	event.get('forge:nuggets/uranium').remove(['chemlib:uranium_nugget', 'immersiveengineering:nugget_uranium'])
	event.get('forge:plates/uranium').remove(['chemlib:uranium_plate', 'immersiveengineering:plate_uranium'])
	event.get('forge:dusts/uranium').remove('chemlib:uranium_dust')
	event.get('forge:raw_materials/uranium').remove('immersiveengineering:raw_uranium')
	event.get('forge:storage_blocks/raw_uranium').remove('immersiveengineering:raw_block_uranium')
	event.get('forge:storage_blocks/raw_uranium').add('electrodynamics:raworeblockuranium')

	//Obsidian Powder
	event.get('forge:dusts/obsidian').remove('create:powdered_obsidian')
})

onEvent('fluid.tags', event => {
	// Ethanol
	event.get('forge:ethanol').remove(['electrodynamics:fluidethanol', 'immersiveengineering:ethanol', 'createaddition:flowing_bioethanol', 'pneumaticcraft:ethanol', 'pneumaticcraft:ethanol_flowing', 'createaddition:bioethanol'])
	event.get('forge:ethanol').add(['chemlib:ethanol_fluid', 'chemlib:ethanol_flowing'])

	// Oxygen
	event.get('forge:oxygen').remove('electrodynamics:fluidoxygen')
	event.get('forge:oxygen').add(['chemlib:oxygen_fluid', 'chemlib:oxygen_flowing'])

	// Hydrogen
	event.get('forge:hydrogen').remove('electrodynamics:fluidhydrogen')
	event.get('forge:hydrogen').add(['chemlib:hydrogen_fluid', 'chemlib:hydrogen_flowing'])

	// Sulfuric Acid
	event.get('forge:sulfuric_acid').remove('electrodynamics:fluidsulfuricacid')
	event.get('forge:sulfuric_acid').add(['chemlib:sulfuric_acid_fluid', 'chemlib:sulfuric_acid_flowing'])

	// Hydrofluoric Acid
	event.get('forge:hydrofluoric_acid').remove('electrodynamics:fluidhydrogenfluoride')
	event.get('forge:hydrofluoric_acid').add(['the_ages_of_times:hydrofluoric_acid', 'the_ages_of_times:flowing_hydrofluoric_acid'])

	// Ammonia
	event.get('forge:ammonia').remove('nuclearscience:fluidammonia')
	event.get('forge:ammonia').add(['chemlib:ammonia_fluid', 'chemlib:ammonia_flowing'])

	// Liquid Concrete
	event.get('forge:concrete').remove(['electrodynamics:fluidconcrete', 'immersiveengineering:concrete', 'immersiveengineering:concrete_flowing'])
	event.get('forge:concrete').add(['the_ages_of_times:liquid_concrete', 'the_ages_of_times:flowing_liquid_concrete'])

	// Copper Sulfate
	event.get('forge:copper_sulfate').remove('electrodynamics:fluidsulfatecopper')
	event.get('forge:copper_sulfate').add(['the_ages_of_times:copper_sulfate', 'the_ages_of_times:flowing_copper_sulfate'])

	// Gold Sulfate
	event.get('forge:gold_sulfate').remove('electrodynamics:fluidsulfategold')
	event.get('forge:gold_sulfate').add(['the_ages_of_times:gold_sulfate', 'the_ages_of_times:flowing_gold_sulfate'])

	// Silver Sulfate
	event.get('forge:silver_sulfate').remove('electrodynamics:fluidsulfatesilver')
	event.get('forge:silver_sulfate').add(['the_ages_of_times:silver_sulfate', 'the_ages_of_times:flowing_silver_sulfate'])

	// Tin Sulfate
	event.get('forge:tin_sulfate').remove('electrodynamics:fluidsulfatetin')
	event.get('forge:tin_sulfate').add(['the_ages_of_times:tin_sulfate', 'the_ages_of_times:flowing_tin_sulfate'])

	// Vanadium Sulfate
	event.get('forge:vanadium_sulfate').remove('electrodynamics:fluidsulfatevanadium')
	event.get('forge:vanadium_sulfate').add(['the_ages_of_times:vanadium_sulfate', 'the_ages_of_times:flowing_vanadium_sulfate'])

	// Lithium Sulfate
	event.get('forge:lithium_sulfate').remove('electrodynamics:fluidsulfatelithium')
	event.get('forge:lithium_sulfate').add(['the_ages_of_times:lithium_sulfate', 'the_ages_of_times:flowing_lithium_sulfate'])

	// Molybdenum Sulfate
	event.get('forge:molybdenum_sulfate').remove('electrodynamics:fluidsulfatemolybdenum')
	event.get('forge:molybdenum_sulfate').add(['the_ages_of_times:molybdenum_sulfate', 'the_ages_of_times:flowing_molybdenum_sulfate'])

	// Carbyne Sulfate
	event.get('forge:netherite_sulfate').remove('electrodynamics:fluidsulfatenetherite')
	event.get('forge:netherite_sulfate').add(['the_ages_of_times:carbyne_sulfate', 'the_ages_of_times:flowing_carbyne_sulfate'])

	// Lead Sulfate
	event.get('forge:lead_sulfate').remove('electrodynamics:fluidsulfatelead')
	event.get('forge:lead_sulfate').add(['the_ages_of_times:lead_sulfate', 'the_ages_of_times:flowing_lead_sulfate'])

	// Iron Sulfate
	event.get('forge:iron_sulfate').remove('electrodynamics:fluidsulfateiron')
	event.get('forge:iron_sulfate').add(['the_ages_of_times:iron_sulfate', 'the_ages_of_times:flowing_iron_sulfate'])

	// Hydraulic Fluid
	event.get('forge:hydraulic_fluid').remove('electrodynamics:fluidhydraulic')
	event.get('forge:hydraulic_fluid').add(['the_ages_of_times:hydraulic_fluid', 'the_ages_of_times:flowing_hydraulic_fluid'])

	// Liquid Clay
	event.get('forge:clay').remove('electrodynamics:fluidclay')
	event.get('forge:clay').add(['the_ages_of_times:liquid_clay', 'the_ages_of_times:flowing_liquid_clay'])

	// Polyethylene
	event.get('forge:polyethylene').remove('electrodynamics:fluidpolyethylene')
	event.get('forge:polyethylene').add(['the_ages_of_times:polyethylene', 'the_ages_of_times:flowing_polyethylene'])

	//Wax
	event.get('forge:wax').add('the_ages_of_times:wax')

	//Molten Dirt
	event.get('forge:molten_dirt').add('the_ages_of_times:molten_dirt')

	//Chlorine Fluid
	event.get('forge:chlorine_fluid').add('chemlib:chlorine_fluid')

	//Fuel
	event.get('forge:biodiesel').add('car:bio_diesel')
	event.get('forge:crude_oil').remove(['pneumaticcraft:oil', 'beyond_earth:oil'])
	event.get('forge:biodiesel').remove('pneumaticcraft:biodiesel')
	event.get('forge:diesel').remove('pneumaticcraft:diesel')
	event.get('forge:kerosene').remove('pneumaticcraft:kerosene')
	event.get('forge:gasoline').remove('pneumaticcraft:gasoline')
	event.get('forge:lubricant').remove('pneumaticcraft:lubricant')
	event.get('forge:plantoil').remove(['pneumaticcraft:vegetable_oil', 'createaddition:seed_oil'])

	//Nitric Acid
	event.get('forge:nitric_acid').add('chemlib:nitric_acid_fluid')
})