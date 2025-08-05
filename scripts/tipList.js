import { database } from './aquariumData.js';

export const tipList = () => {
    // Generate an HTML representation of each tip

    let tipHTML = '';

    tipHTML += '<ul class="tips">'
    tipHTML += ` <h2 class="tips_title">Tips</h2>`

    for (const tip of database.tips) {
        tipHTML += `

                <li class="tip">
                    <h1 class="tip_topic">${tip.topic}</h1>
                    <p class="tip_text">${tip.text}</p>
                </li>
        `;
        
    }

      tipHTML+= '</ul>'
      
    return tipHTML
};
