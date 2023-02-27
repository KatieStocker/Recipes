const recipeTime = {
    "prepTime": {
        "minutes": 5,
        "hours": 1
    },
    "cookTime": {
        "minutes": 20,
        "hours": 2
    },
}

const prepZeroHourZeroMin = {
    "prepTime": {
        "minutes": 0,
        "hours": 0
    },
    "cookTime": {
        "minutes": 20,
        "hours": 2
    },
}

const cookZeroHourZeroMin = {
    "prepTime": {
        "minutes": 5,
        "hours": 1
    },
    "cookTime": {
        "minutes": 0,
        "hours": 0
    },
}

const onlyMins = {
    "prepTime": {
        "minutes": 10,
        "hours": 0
    },
    "cookTime": {
        "minutes": 20,
        "hours": 0
    },
}

const onlyHours = {
    "prepTime": {
        "minutes": 0,
        "hours": 1
    },
    "cookTime": {
        "minutes": 0,
        "hours": 3
    },
}

module.exports = {
    recipeTime,
    prepZeroHourZeroMin,
    cookZeroHourZeroMin,
    onlyMins,
    onlyHours
}