const testSingleRecipe = [
    {
        "id": 1,
        "title": "Easy Pancakes",
        "description": "Learn a skill for life with our foolproof easy crepe recipe that ensures perfect pancakes every time - elaborate flip optional.",
        "image_url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=375,341",
        "web_link": "https://www.bbcgoodfood.com/recipes/easy-pancakes",
        "sectionValues": {
            "1": "Pancake"
        },
        "extraInformation": {
            "prepTime": {
                "minutes": 10,
                "hours": 0
            },
            "cookTime": {
                "minutes": 20,
                "hours": 0
            },
            "servings": 12,
            "nutritionalInformation": {
                "calories": {
                    "perServing": 61
                },
                "fat": {
                    "perServing": 2
                },
                "saturates": {
                    "perServing": 1
                },
                "carbs": {
                    "perServing": 7
                },
                "sugar": {
                    "perServing": 1
                },
                "fibre": {
                    "perServing": 0
                },
                "protein": {
                    "perServing": 3
                },
                "salt": {
                    "perServing": 0.1
                }
            }
        },
        "isVegetarian": true,
        "isVegan": false,
        "isSeasonal": true,
        "isOccasional": false,
        "categoryIds": [
            3
        ],
        "type": "Food",
        "tags": [
            "pancake",
            "dessert"
        ],
        "author": "Test Author"
    }
];

const testMultipleRecipes = [
    {
        "id": 1,
        "title": "Easy Pancakes",
        "description": "Learn a skill for life with our foolproof easy crepe recipe that ensures perfect pancakes every time - elaborate flip optional.",
        "image_url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=375,341",
        "web_link": "https://www.bbcgoodfood.com/recipes/easy-pancakes",
        "sectionValues": {
            "1": "Pancake"
        },
        "extraInformation": {
            "prepTime": {
                "minutes": 10,
                "hours": 0
            },
            "cookTime": {
                "minutes": 20,
                "hours": 0
            },
            "servings": 12,
            "nutritionalInformation": {
                "calories": {
                    "perServing": 61
                },
                "fat": {
                    "perServing": 2
                },
                "saturates": {
                    "perServing": 1
                },
                "carbs": {
                    "perServing": 7
                },
                "sugar": {
                    "perServing": 1
                },
                "fibre": {
                    "perServing": 0
                },
                "protein": {
                    "perServing": 3
                },
                "salt": {
                    "perServing": 0.1
                }
            }
        },
        "isVegetarian": true,
        "isVegan": false,
        "isSeasonal": true,
        "isOccasional": false,
        "categoryIds": [
            3
        ],
        "type": "Food",
        "tags": [
            "pancake",
            "dessert"
        ],
        "author": "Test Author"
    },
    {
        "id": 2,
        "title": "Passion Fruit Martini",
        "description": "This easy passion fruit cocktail is bursting with zingy flavours and is perfect for celebrating with friends. Top with prosecco for a special drink.",
        "image_url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/passionfruit-pornstar-martini-df3bbfb.jpg?quality=90&webp=true&resize=300,272",
        "web_link": "https://www.bbcgoodfood.com/recipes/passionfruit-pornstar-martini",
        "sectionValues": {
            "1": "Drink"
        },
        "extraInformation": {
            "prepTime": {
                "minutes": 5,
                "hours": 0
            },
            "cookTime": {
                "minutes": 0,
                "hours": 0
            },
            "servings": 2,
            "nutritionalInformation": {
                "calories": {
                    "perServing": 224
                },
                "fat": {
                    "perServing": 0
                },
                "saturates": {
                    "perServing": 0
                },
                "carbs": {
                    "perServing": 16
                },
                "sugar": {
                    "perServing": 16
                },
                "fibre": {
                    "perServing": 2
                },
                "protein": {
                    "perServing": 1
                },
                "salt": {
                    "perServing": 0.03
                }
            }
        },
        "isVegetarian": true,
        "isVegan": false,
        "isSeasonal": false,
        "isOccasional": true,
        "categoryIds": [
            26,
            28,
            29
        ],
        "type": "Drink",
        "tags": [
            "drink",
            "cocktail",
            "alcoholic",
            "passion fruit",
            "martini"
        ],
        "author": "Test Author"
    }
]

module.exports = {
    testSingleRecipe,
    testMultipleRecipes
};