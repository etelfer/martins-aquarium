import { database } from './aquariumData.js';

export const locationList = () => {
    // Generate an HTML representation of each location

    let locationHTML = '';


   locationHTML += '<article class="locations">'
    locationHTML += ` <h2 class="locations_title">Locations</h2>`


    for (const location of database.locations) {
        locationHTML += `
            <section class="location">
            <h2 class="location_name">${location.name}</h2>
            <p class="location_country">${location.country}</p>
            <p class="location_description">${location.description}</p>
            </section>
        `;
    }

      locationHTML+= '</article>'
      
    return locationHTML
};
