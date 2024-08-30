onEvent('recipes', event => {

    function nasa(output, one, two, three, four, five, six, seven, eight){
    event.custom({
        "type": "custommachinery:custom_machine",
        "machine": "taotmachinery:nasa_workbench_tier_2",
        "time": 1,
        "requirements": [
            {
                "slot": "output",
                "type": "custommachinery:item",
                "amount": 1,
                "item": output,
                "mode": "output"
            },
            {
                "slot": "input1",
                "type": "custommachinery:item",
                "amount": 1,
                "item": "beyond_earth:rocket_nose_cone",
                "mode": "input"
            },
            {
                "slot": "input2",
                "type": "custommachinery:item",
                "amount": 1,
                "item": one,
                "mode": "input"
            },
            {
                "slot": "input3",
                "type": "custommachinery:item",
                "amount": 1,
                "item": five,
                "mode": "input"
            },
            {
                "slot": "input4",
                "type": "custommachinery:item",
                "amount": 1,
                "item": one,
                "mode": "input"
            },
            {
                "slot": "input5",
                "type": "custommachinery:item",
                "amount": 1,
                "item": one,
                "mode": "input"
            },
            {
                "slot": "input6",
                "type": "custommachinery:item",
                "amount": 1,
                "item": six,
                "mode": "input"
            },
            {
                "slot": "input7",
                "type": "custommachinery:item",
                "amount": 1,
                "item": one,
                "mode": "input"
            },
            {
                "slot": "input8",
                "type": "custommachinery:item",
                "amount": 1,
                "item": one,
                "mode": "input"
            },
            {
                "slot": "input9",
                "type": "custommachinery:item",
                "amount": 1,
                "item": seven,
                "mode": "input"
            },
            {
                "slot": "input10",
                "type": "custommachinery:item",
                "amount": 1,
                "item": one,
                "mode": "input"
            },
            {
                "slot": "input11",
                "type": "custommachinery:item",
                "amount": 1,
                "item": one,
                "mode": "input"
            },
            {
                "slot": "input12",
                "type": "custommachinery:item",
                "amount": 1,
                "item": eight,
                "mode": "input"
            },
            {
                "slot": "input13",
                "type": "custommachinery:item",
                "amount": 1,
                "item": one,
                "mode": "input"
            },
            {
                "slot": "input14",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input15",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input16",
                "type": "custommachinery:item",
                "amount": 1,
                "item": three,
                "mode": "input"
            },
            {
                "slot": "input17",
                "type": "custommachinery:item",
                "amount": 1,
                "item": three,
                "mode": "input"
            },
            {
                "slot": "input18",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input19",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input20",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input21",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input22",
                "type": "custommachinery:item",
                "amount": 1,
                "item": three,
                "mode": "input"
            },
            {
                "slot": "input23",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input24",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input25",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input26",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input27",
                "type": "custommachinery:item",
                "amount": 1,
                "item": four,
                "mode": "input"
            },
            {
                "slot": "input28",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            },
            {
                "slot": "input29",
                "type": "custommachinery:item",
                "amount": 1,
                "item": two,
                "mode": "input"
            }
        ]
    })}

    nasa("beyond_earth:rocket_t2", "beyond_earth:compressed_steel", "beyond_earth:rocket_fin", "beyond_earth:steel_tank", "beyond_earth:steel_engine", "computercraft:wireless_modem_normal", "computercraft:computer_normal", "#create:seats", "ballistix:missilelongrange")
})