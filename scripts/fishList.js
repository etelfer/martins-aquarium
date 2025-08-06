import { database } from './aquariumData.js';



export const fishList = (fishArray) => {
    // Generate an HTML representation of each fish

    let fishHTML = '';

    for (const fishy of fishArray) {
        fishHTML += `
            <article class="fish">
              
                <img src="${fishy.image}" alt="${fishy.name}" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__name">${fishy.name}</h2>
                    <p class="fish__species">Species- ${fishy.species}</p>
                    <p class="fish__length">Length- ${fishy.length}</p>
                    <p class="fish__location">Located at: ${fishy.location}</p>
                    <p class="fish__diet">Type of Diet- ${fishy.diet}</p>
                </div>
            </article>
        `;
        
        
    }
    return fishHTML
};
