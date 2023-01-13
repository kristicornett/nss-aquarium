import { getFish } from './database.js'
import { FishList } from './fishList.js'

//let fishy = FishList()
//const allFish = getFish()

//for (const fish of allFish) {
//   console.log(fish)
//}

const parentHTMLElement = document.querySelector("#fishList")


parentHTMLElement.innerHTML = FishList()