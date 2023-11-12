onEvent('recipes', event => {
    //Poudre d'Os
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