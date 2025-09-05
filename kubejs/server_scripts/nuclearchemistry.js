onEvent('recipes', event => {

    //Delete Element Recipes
    const array = ['chemlib:technetium', 'chemlib:promethium', 'chemlib:astatine', 'chemlib:neptunium', 'chemlib:americium', 'chemlib:curium', 'chemlib:berkelium', 'chemlib:californium', 'chemlib:einsteinium', 'chemlib:fermium', 'chemlib:mendelevium', 'chemlib:nobelium', 'chemlib:lawrencium', 'chemlib:rutherfordium', 'chemlib:dubnium', 'chemlib:seaborgium', 'chemlib:bohrium', 'chemlib:hassium', 'chemlib:meitnerium', 'chemlib:darmstadtium', 'chemlib:roentgenium', 'chemlib:copernicium', 'chemlib:nihonium', 'chemlib:flerovium', 'chemlib:moscovium', 'chemlib:livermorium', 'chemlib:tennessine', 'chemlib:oganesson']
    array.forEach(element => {
        console.log("Trying to remove: " + element)
        event.remove({output: element})
    })
    event.remove({ id: 'alchemistry:fission/francium' })
    event.remove({ id: 'alchemistry:fission/astatine' })
    event.remove({ id: 'alchemistry:fission/radon' })

    //Fission
    function fission(input, output1, output2) {
        event.custom({
            "type": "alchemistry:fission",
            "group": "fission",
            "input": {
                "item": input
            },
            "output1": {
                "item": output1
            },
            "output2": {
                "item": output2
            }
        })
    }

    //Fusion
    function fusion(input1, input2, output) {
        event.custom({
            "type": "alchemistry:fusion",
            "group": "fusion",
            "input1": {
                "item": input1
            },
            "input2": {
                "item": input2
            },
            "output": {
                "item": output
            }
        })
    }

    fission("nuclearscience:meltedreactor", "chemlib:molybdenum", "chemlib:technetium")
    fission("nuclearscience:uranium235", "chemlib:promethium", "chemlib:krypton")

    fusion("chemlib:bismuth", "chemlib:helium", "chemlib:astatine")
})