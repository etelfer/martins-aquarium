import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import {  mostHolyFish, mostSoldierFish, justRegularFish } from './holySoldierRegular.js'


// Generate the fish list
const holyFish = mostHolyFish()

const soldierFish = mostSoldierFish()

const regularFish = justRegularFish()

const holyFishHTML = fishList(holyFish)
const soldierFishHTML = fishList(soldierFish)
const regularFishHTML = fishList(regularFish)


// // Generate the care tips
const tipHTML = tipList()

// // Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element

document.getElementById('fishList').innerHTML = `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`;

  document.getElementById('tipList').innerHTML = tipHTML

   document.getElementById('locationList').innerHTML = locationHTML