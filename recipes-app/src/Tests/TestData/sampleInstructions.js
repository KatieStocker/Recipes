const testSingleInstruction = [
    {
        "id": 1,
        "recipeId": 1,
        "step": 1,
        "instruction": "Test instruction for a single step recipe",
        "instructionSection": 1
    }
];

const testMultipleInstructions = [
    {
        "id": 1,
        "recipeId": 1,
        "step": 1,
        "instruction": "Put 100g plain flour, 2 large eggs, 300ml milk, 1tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.",
        "instructionSection": 1
    },
    {
        "id": 2,
        "recipeId": 1,
        "step": 2,
        "instruction": "Set aside for 30 mins to rest if you have time, or start cooking straight away.",
        "instructionSection": 1
    },
    {
        "id": 3,
        "recipeId": 1,
        "step": 3,
        "instruction": "Set a medium frying pan or crepe pan over a medium heat and carefully wipe it with some oiled kitchen paper.",
        "instructionSection": 1
    },
    {
        "id": 4,
        "recipeId": 1,
        "step": 4,
        "instruction": "When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.",
        "instructionSection": 1
    },
    {
        "id": 5,
        "recipeId": 1,
        "step": 5,
        "instruction": "Serve with lemon wedges and caster sugar, or your favourite fillings. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.",
        "instructionSection": 1
    }
];

const testInstructions = [
    {
        "id": 1,
        "recipeId": 1,
        "step": 1,
        "instruction": "Put 100g plain flour, 2 large eggs, 300ml milk, 1tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.",
        "instructionSection": 1
    },
    {
        "id": 2,
        "recipeId": 1,
        "step": 2,
        "instruction": "Set aside for 30 mins to rest if you have time, or start cooking straight away.",
        "instructionSection": 1
    },
    {
        "id": 3,
        "recipeId": 2,
        "step": 1,
        "instruction": "Scoop the seeds from one of the passion fruits into the glass of a cocktail shaker, add the vodka, passoa, lime juice and sugar syrup. Add a handful of ice and shake well, strain into 2 martini glasses, top up with prosecco, then add half a passion fruit to each. Serve immediately.",
        "instructionSection": 1
    }
];

module.exports = {
    testSingleInstruction,
    testMultipleInstructions,
    testInstructions
};