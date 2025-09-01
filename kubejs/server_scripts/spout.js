onEvent('recipes', event => {

  event.custom(
    {
      "type": "create:haunting",
      "ingredients": [
        {
          "item": "the_ages_of_times:raw_ore_wolframite"
        }
      ],
      "results": [
        {
          "item": "minecraft:ancient_debris",
          "chance": 0.01
        },
      ]
    }
  )

  event.custom(
    {
      "type": "create:haunting",
      "ingredients": [
        {
          "item": "create:empty_blaze_burner"
        }
      ],
      "results": [
        {
          "item": "create:blaze_burner"
        },
      ]
    }
  )
  
  event.custom(
    {
      "type": "create:haunting",
      "ingredients": [
        {
          "item": "minecraft:stick"
        }
      ],
      "results": [
        {
          "item": "minecraft:blaze_rod",
          "chance": 0.1
        },
      ]
    }
  )
  
  function itemdrain(int, out, fluid, amount){
    event.custom(
      {
        "type": "create:emptying",
        "ingredients": [
          {
            "item": int
          }
        ],
        "results": [
          {
            "item": out
          },
          {
            "fluid": fluid,
            "amount": amount
          }
        ]
      }
    )
  }
  
  function spout(int, fluid, amount, out){
    event.custom(
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": int
          },
          {
            "fluid": fluid,
            "amount": amount
          }
        ],
        "results": [
          {
            "item": out
          }
        ]
      }
    )
  }
  
  function spoutender(int, out){
    event.custom(
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": int
          },
          {
            "fluid": "tconstruct:molten_ender",
            "amount": 1000
          }
        ],
        "results": [
          {
            "item": out
          }
        ]
      }
    )
  }
  
  function haunting(int, out){
    event.custom(
      {
        "type": "create:haunting",
        "ingredients": [
          {
            "item": int
          }
        ],
        "results": [
          {
            "item": out
          }
        ]
      }
    )
  }
  
  spout("nuclearscience:cellelectromagnetic", "the_ages_of_times:antimatter", 100, "the_ages_of_times:liquid_antimatter_cell")
  spout("nuclearscience:cellelectromagnetic", "the_ages_of_times:darkmatter", 100, "the_ages_of_times:liquid_darkmatter_cell")
  itemdrain("the_ages_of_times:liquid_antimatter_cell", "nuclearscience:cellelectromagnetic", "the_ages_of_times:antimatter", 100)
  itemdrain("the_ages_of_times:liquid_darkmatter_cell", "nuclearscience:cellelectromagnetic", "the_ages_of_times:darkmatter", 100)
  itemdrain("the_ages_of_times:liquid_sodium_hydroxide_bucket", "minecraft:bucket", "the_ages_of_times:liquid_sodium_hydroxide", 1000)
  itemdrain("the_ages_of_times:darkmatter_bucket", "minecraft:bucket", "the_ages_of_times:darkmatter", 1000)
  itemdrain("the_ages_of_times:tungstic_acid_fluid_bucket", "minecraft:bucket", "the_ages_of_times:tungstic_acid_fluid", 1000)
  itemdrain("the_ages_of_times:golden_water_bucket", "minecraft:bucket", "the_ages_of_times:golden_water", 1000)
  itemdrain("the_ages_of_times:wax_bucket", "minecraft:bucket", "the_ages_of_times:wax", 1000)
  itemdrain("the_ages_of_times:molten_dirt_bucket", "minecraft:bucket", "the_ages_of_times:molten_dirt", 1000)
  itemdrain("the_ages_of_times:white_water_bucket", "minecraft:bucket", "the_ages_of_times:white_water", 1000)
  itemdrain("the_ages_of_times:antimatter_bucket", "minecraft:bucket", "the_ages_of_times:antimatter", 1000)
  itemdrain("the_ages_of_times:hydrogen_oxygen_mix_bucket", "minecraft:bucket", "the_ages_of_times:hydrogen_oxygen_mix", 1000)

  spoutender("minecraft:stone", "minecraft:end_stone")
  spoutender("minecraft:oxeye_daisy", "minecraft:chorus_flower")
  spoutender("minecraft:turtle_helmet", "minecraft:shulker_shell")
  spoutender("beyond_earth:ostrum_ingot", "extendedcrafting:ender_ingot")
  
  haunting("minecraft:end_stone", "minecraft:netherrack")
  haunting("chemlib:water", "minecraft:ghast_tear")
  haunting("minecraft:wheat_seeds", "minecraft:nether_wart")
  
  event.remove({ id: 'extendedcrafting:ender_ingot'})
  
  event.custom(
    {
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": "minecraft:egg"
      },
      "transitionalItem": {
        "item": "minecraft:egg"
      },
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": "minecraft:egg"
            },
            {
              "fluid": "tconstruct:molten_ender",
              "amount": 1000
            }
          ],
          "results": [
            {
              "item": "minecraft:egg"
            }
          ]
        }
      ],
      "results": [
        {
          "item": "minecraft:dragon_egg",
          "chance": 0.01
        },
        {
          "item": "minecraft:air",
          "chance": 0.99
        }
      ],
      "loops": 1
    }
  )
})