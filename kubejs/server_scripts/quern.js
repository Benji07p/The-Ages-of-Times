onEvent('recipes', event => {
    //Poudre d'Os
	event.custom(
		{
			"type":"atum:quern",
			"ingredient":{
				"item":"the_ages_of_times:flakes_bones"
			},
			"result":{
				"item":"minecraft:bone_meal"
			},
			"rotations": 2
		}
	)

	//Colorant Marron
	event.custom(
		{
			"type":"atum:quern",
			"ingredient":{
				"item":"minecraft:cocoa_beans"
			},
			"result":{
				"item":"minecraft:brown_dye"
			},
			"rotations": 1
		}
	)

	//Colorant Noir
	event.custom(
		{
			"type":"atum:quern",
			"ingredient":{
				"item":"minecraft:ink_sac"
			},
			"result":{
				"item":"minecraft:black_dye"
			},
			"rotations": 1
		}
	)

	//Colorant Rouge
	event.custom(
		{
			"type":"atum:quern",
			"ingredient":{
				"item":"minecraft:red_tulip"
			},
			"result":{
				"item":"minecraft:red_dye"
			},
			"rotations": 1
		}
	)
	event.custom(
		{
			"type":"atum:quern",
			"ingredient":{
				"item":"minecraft:poppy"
			},
			"result":{
				"item":"minecraft:red_dye"
			},
			"rotations": 1
		}
	)

	//Colorant Orange
	event.custom(
		{
			"type":"atum:quern",
			"ingredient":{
				"item":"minecraft:orange_tulip"
			},
			"result":{
				"item":"minecraft:orange_dye"
			},
			"rotations": 1
		}
	)

	//Colorant Jaune
	event.custom(
		{
			"type":"atum:quern",
			"ingredient":{
				"item":"minecraft:dandelion"
			},
			"result":{
				"item":"minecraft:yellow_dye"
			},
			"rotations": 1
		}
	)
})