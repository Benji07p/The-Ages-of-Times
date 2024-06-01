onEvent('recipes', event => {
    //Papyrus
    event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
              "item": "atum:papyrus_plant"
            },
            "transitionalItem": {
              "item": "atum:papyrus_plant"
            },
            "sequence": [
                {
                    "type": "create:filling",
                    "ingredients": [
                      {
                        "item": "atum:papyrus_plant"
                      },
                      {
                        "fluid": "the_ages_of_times:creative_fluid",
                        "amount": 250
                      }
                    ],
                    "results": [
                      {
                        "item": "atum:papyrus_plant"
                      }
                    ]
                  },
                  {
                    "type": "create:filling",
                    "ingredients": [
                      {
                        "item": "atum:papyrus_plant"
                      },
                      {
                        "fluid": "minecraft:water",
                        "amount": 250
                      }
                    ],
                    "results": [
                      {
                        "item": "atum:papyrus_plant"
                      }
                    ]
                  },
                  {
                    "type": "create:pressing",
                    "ingredients": [
                      {
                      "item": "atum:papyrus_plant"
                      }
                    ],
                    "results": [
                      {
                      "item": "atum:papyrus_plant"
                      }
                    ]
                  }
            ],
            "results": [
              {
                "item": "the_ages_of_times:papyrus",
                "chance": 1.0
              }
            ],
            "loops": 1
          }
    )

    //Papier
	event.custom(
    {
      "type": "create:sequenced_assembly",
      "ingredient": {
        "tag": "forge:stripped_logs"
      },
      "transitionalItem": {
        "item": "minecraft:flower_banner_pattern"
      },
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": "minecraft:flower_banner_pattern"
            },
            {
              "fluid": "the_ages_of_times:creative_fluid",
              "amount": 250
            }
          ],
          "results": [
            {
              "item": "minecraft:flower_banner_pattern"
            }
          ]
        },
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": "minecraft:flower_banner_pattern"
            },
            {
              "fluid": "the_ages_of_times:white_water",
              "amount": 250
            }
          ],
          "results": [
            {
              "item": "minecraft:flower_banner_pattern"
            }
          ]
        }
      ],
      "results": [
        {
          "item": "minecraft:globe_banner_pattern",
          "chance": 1.0
        }
      ],
      "loops": 1
    }
  )

  event.custom(
    {
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": "minecraft:globe_banner_pattern"
      },
      "transitionalItem": {
        "item": "minecraft:flower_banner_pattern"
      },
      "sequence": [
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": "minecraft:flower_banner_pattern"
            },
            {
              "fluid": "the_ages_of_times:creative_fluid",
              "amount": 250
            }
          ],
          "results": [
            {
              "item": "minecraft:flower_banner_pattern"
            }
          ]
        },
        {
          "type": "create:pressing",
          "ingredients": [
            {
              "item": "minecraft:flower_banner_pattern"
            }
          ],
          "results": [
            {
              "item": "minecraft:flower_banner_pattern"
            }
          ]
        }
      ],
      "results": [
        {
          "item": "minecraft:paper",
          "chance": 1.0
        }
      ],
      "loops": 1
    }
  )
})