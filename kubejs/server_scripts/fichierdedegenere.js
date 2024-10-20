onEvent('entity.hurt', event =>{
    if (event.entity.type == 'minecraft:skeleton'){
        
        if (event.entity.block.id == "minecraft:wither_rose") {
            event.entity.remove()
            event.server.runCommandSilent(`execute in ${event.entity.level.dimension} run summon minecraft:wither_skeleton ${event.entity.x} ${event.entity.y} ${event.entity.z}`)
            event.entity.block.set("minecraft:air")
        }
    }
})

onEvent('recipes', event => {
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
})