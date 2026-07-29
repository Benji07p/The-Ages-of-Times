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
    fusion("nuclearscience:plutonium239", "chemlib:helium", "chemlib:curium")
    fusion("chemlib:americium", "chemlib:helium", "chemlib:berkelium")
    fusion("chemlib:curium", "chemlib:helium", "chemlib:californium")

    fusion("nuclearscience:uranium238", "chemlib:neon", "chemlib:nobelium")

    fusion("chemlib:lead", "chemlib:chromium", "chemlib:seaborgium")
    fusion("chemlib:bismuth", "chemlib:chromium", "chemlib:bohrium")
    fusion("chemlib:lead", "chemlib:iron", "chemlib:hassium")
    fusion("chemlib:bismuth", "chemlib:iron", "chemlib:meitnerium")
    fusion("chemlib:lead", "chemlib:nickel", "chemlib:darmstadtium")
    fusion("chemlib:bismuth", "chemlib:nickel", "chemlib:roentgenium")
    fusion("chemlib:lead", "chemlib:zinc", "chemlib:copernicium")
    fusion("chemlib:bismuth", "chemlib:zinc", "chemlib:nihonium")
})