// priority: 0
"use strict";

function registerTFGStoneDustRecipes(event) {

	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_blackstone' })

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__diorite')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Diorite, 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Clay, 1), 4500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Mirabilite, 1), 2000, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 5))

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__marble')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Marble, 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcite, 1), 6000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Magnesium, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 12))

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__andesite')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Andesite, 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Asbestos, 1), 6000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Saltpeter, 1), 2000, 500)

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__basalt')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Basalt, 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Flint, 1), 5000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Olivine, 1), 1500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcite, 1), 1500, 500)

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__granite')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Granite, 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Redrock, 1), 2000, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 5))

	event.recipes.gtceu.centrifuge('gtceu:decomposition_centrifuging__deepslate')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Deepslate, 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Biotite, 1), 2000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Olivine, 1), 3500, 700)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 3500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 12))

	event.recipes.gtceu.centrifuge('blackstone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.Blackstone, 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Graphite, 1), 3500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Magnesium, 1), 4500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Gold, 1), 3500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 16))

	// TFC

	event.recipes.gtceu.centrifuge('gabbro_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('gabbro'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Magnetite, 1), 2500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Rutile, 1), 1500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 500)

	event.recipes.gtceu.centrifuge('shale_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('shale'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Sodium, 1), 6500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 16))

	event.recipes.gtceu.centrifuge('claystone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('claystone'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Clay, 1), 3000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Hematite, 1), 3500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Bauxite, 1), 2500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 5))

	event.recipes.gtceu.centrifuge('limestone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('limestone'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 5500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 36))

	event.recipes.gtceu.centrifuge('conglomerate_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('conglomerate'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Hematite, 1), 3500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.TricalciumPhosphate, 1), 3500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 5))

	event.recipes.gtceu.centrifuge('dolomite_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('dolomite'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Magnesium, 1), 6500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 5500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 3500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 16))

	event.recipes.gtceu.centrifuge('chert_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('chert'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Redrock, 1), 5500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 3500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 24))

	event.recipes.gtceu.centrifuge('chalk_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('chalk'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 6500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Carbon, 1), 3500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 12))

	event.recipes.gtceu.centrifuge('rhyolite_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('rhyolite'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Tantalite, 1), 1500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 500)

	event.recipes.gtceu.centrifuge('dacite_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('dacite'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Sodium, 1), 6500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 5500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Kyanite, 1), 3500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 12))

	event.recipes.gtceu.centrifuge('slate_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('slate'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Sapphire, 1), 1500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 24))

	event.recipes.gtceu.centrifuge('phyllite_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('phyllite'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Quartzite, 1), 5500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CalciumChloride, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 5))

	event.recipes.gtceu.centrifuge('schist_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('schist'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Mica, 1), 6500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Talc, 1), 5500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1), 500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 12))

	event.recipes.gtceu.centrifuge('gneiss_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('gneiss'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Quartzite, 1), 6500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Biotite, 1), 3500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 5))

	event.recipes.gtceu.centrifuge('dripstone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(480)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('dripstone'), 1))
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CalciumCarbonate, 1), 8500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CalciumHydroxide, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 12))

	// Ad astra

	event.recipes.gtceu.centrifuge('moon_stone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10 * 20)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('moon_stone'), 1))
		.chancedOutput('ae2:sky_dust', 5000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Ilmenite, 1), 1000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Magnetite, 1), 2000, 500)
		.outputFluids(Fluid.of('gtceu:helium_3', 200))

	event.recipes.gtceu.centrifuge('moon_deepslate_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10 * 20)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('moon_deepslate'), 1))
		.chancedOutput('ae2:sky_dust', 5000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Calcium, 1), 2000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Olivine, 1), 1500, 500)
		.outputFluids(Fluid.of('gtceu:helium_3', 200))

	event.recipes.gtceu.centrifuge('glacio_stone_dust_separation')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(10 * 20)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('glacio_stone'), 1))
		.chancedOutput('ae2:sky_dust', 3000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Sodium, 1), 4000, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Potassium, 1), 4000, 500)
		.outputFluids(Fluid.of('gtceu:oxygen', 50), Fluid.of('gtceu:helium_3', 300))

	// AE2

	event.recipes.gtceu.centrifuge('sky_dust_separation')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(100)
		.itemInputs('ae2:sky_dust')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.SiliconDioxide, 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.CertusQuartz, 1), 4500, 500)

	// Create

	event.recipes.gtceu.centrifuge('asurine_dust_separation')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(100)
		.itemInputs(ChemicalHelper.get(TagPrefix.dust, TFGHelpers.getMaterial('asurine'), 1))
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.CertusQuartz, 1), 4500, 500)
		.chancedOutput(ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.Zinc, 1), 3500, 500)

	// Misc dust

	event.recipes.gtceu.centrifuge('gtceu:quartz_sand_separation')
		.EUt(30)
		.duration(60)
		.itemInputs('2x gtceu:quartz_sand_dust')
		.itemOutputs('gtceu:quartzite_dust')
		.chancedOutput('#forge:dust/nether_quartz', 2000, 200)
}