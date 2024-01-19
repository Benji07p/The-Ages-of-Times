onEvent('recipes', event => {
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
})