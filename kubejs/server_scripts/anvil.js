onEvent('recipes', event => {
    function anvil(itemin, itemout){
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
                "item": itemout
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

    function anvilFall(itemin, itemout){
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
                        "count": 1
                    }
                ]
            }
        )}

    anvil("minecraft:copper_ingot", "create:copper_sheet")
    anvil("electrodynamics:ingottin", "chemlib:tin_plate")
    anvil("electrodynamics:ingotbronze", "electrodynamics:platebronze")
    anvil("electrodynamics:ingotsilver", "immersiveengineering:plate_silver")
    anvil("minecraft:gold_ingot", "create:golden_sheet")
    anvil("immersiveengineering:ingot_electrum", "immersiveengineering:plate_electrum")
    anvil("electrodynamics:ingotlead", "electrodynamics:platelead")
    anvil("minecraft:iron_ingot", "electrodynamics:plateiron")
    anvil("create:brass_ingot", "create:brass_sheet")
    anvil("immersiveengineering:ingot_nickel", "immersiveengineering:plate_nickel")
    anvil("create:zinc_ingot", "createaddition:zinc_sheet")
    anvilFall("minecraft:copper_ingot", "create:copper_sheet")
    anvilFall("electrodynamics:ingottin", "chemlib:tin_plate")
    anvilFall("electrodynamics:ingotbronze", "electrodynamics:platebronze")
    anvilFall("electrodynamics:ingotsilver", "immersiveengineering:plate_silver")
    anvilFall("minecraft:gold_ingot", "create:golden_sheet")
    anvilFall("immersiveengineering:ingot_electrum", "immersiveengineering:plate_electrum")
    anvilFall("electrodynamics:ingotlead", "electrodynamics:platelead")
    anvilFall("minecraft:iron_ingot", "electrodynamics:plateiron")
    anvilFall("create:brass_ingot", "create:brass_sheet")
    anvilFall("immersiveengineering:ingot_nickel", "immersiveengineering:plate_nickel")
    anvilFall("create:zinc_ingot", "createaddition:zinc_sheet")
})