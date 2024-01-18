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
                  }
            ],
            "results": [
              {
                "item": "atum:papyrus_plant",
                "chance": 1.0
              }
            ],
            "loops": 3
          }
    )
})