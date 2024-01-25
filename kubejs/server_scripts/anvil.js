onEvent('recipes', event => {
    function anvil(itemin, itemout, count){
    event.custom(
        {
            "type": "lychee:anvil_crafting",
            "item_in": [
                {
                    "item": "immersiveengineering:hammer"
                },
                {
                    "item": itemin
                }
            ],
            "item_out": {
                "item": itemout,
                "count": count
            },
            "level_cost": 1,
            "material_cost": 1,
            "post": [
                {
                    "type": "place",
                    "block": "anvil"
                },
                {
                    "type": "drop_item",
                    "item": "immersiveengineering:hammer"
                }
            ]
        }
    )}

    function anvilFall(itemin, itemout, count){
        event.custom(
            {
                "type": "lychee:block_crushing",
                "item_in": [
                    {
                        "item": itemin
                    }
                ],
                "post": [
                    {
                        "type": "drop_item",
                        "item": itemout,
                        "count": count
                    }
                ]
            }
        )}

    anvil("minecraft:copper_ingot", "create:copper_sheet", 1)
    anvil("electrodynamics:ingottin", "chemlib:tin_plate", 1)
    anvil("electrodynamics:ingotbronze", "electrodynamics:platebronze", 1)
    anvil("electrodynamics:ingotsilver", "immersiveengineering:plate_silver", 1)
    anvil("minecraft:gold_ingot", "create:golden_sheet", 1)
    anvil("immersiveengineering:ingot_electrum", "immersiveengineering:plate_electrum", 1)
    anvil("electrodynamics:ingotlead", "electrodynamics:platelead", 1)
    anvil("minecraft:iron_ingot", "electrodynamics:plateiron", 1)
    anvil("create:brass_ingot", "create:brass_sheet", 1)
    anvil("immersiveengineering:ingot_nickel", "immersiveengineering:plate_nickel", 1)
    anvil("create:zinc_ingot", "createaddition:zinc_sheet", 1)
    anvil("minecraft:copper_block", "minecraft:copper_ingot", 9)
    anvil("electrodynamics:resourceblocktin", "electrodynamics:ingottin", 9)
    anvil("electrodynamics:resourceblockbronze", "electrodynamics:ingotbronze", 9)
    anvil("electrodynamics:resourceblocksilver", "electrodynamics:ingotsilver", 9)
    anvil("minecraft:gold_block", "minecraft:gold_ingot", 9)
    anvil("immersiveengineering:storage_electrum", "immersiveengineering:ingot_electrum", 9)
    anvil("electrodynamics:resourceblocklead", "electrodynamics:ingotlead", 9)
    anvil("minecraft:iron_block", "minecraft:iron_ingot", 9)
    anvil("create:brass_block", "create:brass_ingot", 9)
    anvil("immersiveengineering:storage_nickel", "immersiveengineering:ingot_nickel", 9)
    anvil("create:zinc_block", "create:zinc_ingot", 9)
    anvilFall("minecraft:copper_ingot", "create:copper_sheet", 1)
    anvilFall("electrodynamics:ingottin", "chemlib:tin_plate", 1)
    anvilFall("electrodynamics:ingotbronze", "electrodynamics:platebronze", 1)
    anvilFall("electrodynamics:ingotsilver", "immersiveengineering:plate_silver", 1)
    anvilFall("minecraft:gold_ingot", "create:golden_sheet", 1)
    anvilFall("immersiveengineering:ingot_electrum", "immersiveengineering:plate_electrum", 1)
    anvilFall("electrodynamics:ingotlead", "electrodynamics:platelead", 1)
    anvilFall("minecraft:iron_ingot", "electrodynamics:plateiron", 1)
    anvilFall("create:brass_ingot", "create:brass_sheet", 1)
    anvilFall("immersiveengineering:ingot_nickel", "immersiveengineering:plate_nickel", 1)
    anvilFall("create:zinc_ingot", "createaddition:zinc_sheet", 1)
})