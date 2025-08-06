import { database } from './aquariumData.js'

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fishy of database.fish) {
        if (fishy.length % 3 === 0) {
            holyFish.push(fishy)
    }
    }

    return holyFish
}

export const mostSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
        const soldierFish = []

    for (const fishy of database.fish) {
        if (fishy.length % 5 === 0) {
            soldierFish.push(fishy)
    }
    }

    return soldierFish
}

export const justRegularFish = () => {
    // Any fish not a multiple of 3 or 5
        const regularFish= []

    for (const fishy of database.fish) {
        if (fishy.length % 3 !== 0 && fishy.length % 5 !== 0) {
        
        regularFish.push(fishy)
    }
    }

    return regularFish
}