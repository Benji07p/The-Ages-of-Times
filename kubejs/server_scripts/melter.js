onEvent('recipes', event => {
	// Melter Recipes
	event.recipes.melterMelting(Fluid.of('tconstruct:molten_copper', 90),"minecraft:raw_copper").processingTime(1000);
    event.recipes.melterMelting(Fluid.of('tconstruct:molten_silver', 90),"electrodynamics:raworesilver").processingTime(1000);
    event.recipes.melterMelting(Fluid.of('tconstruct:molten_tin', 90),"electrodynamics:raworetin").processingTime(1000);
    event.recipes.melterMelting(Fluid.of('tconstruct:molten_lead', 90),"electrodynamics:raworelead").processingTime(1000);
})