import { getFish } from './database.js'

export const FishList = () => {
    
    const fishes = getFish()
    
    // Start building a string filled with HTML syntax
    let htmlString = '<article class="card">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

htmlString += ` 
<div class="innerCard">
  <section class="card_section" id="image">

    <div class="div_test"><img class="image_one" src="${fish.image}">
    </div>
  </section>
  <section class="fishlist" id="facts">
   <div class="fact_column">
      <div class="fact_row">
        Name: ${fish.name}
      </div>
      <div class="fact_row">
        Eats: ${fish.food}
      </div>
      <div class="fact_row">
        Grows up to ${fish.size}
      </div>
      <div class="fact_row">
        Harvested off ${fish.harvested}
      </div>
      <div class="fact_row">
        Lives in ${fish.water}water
      </div>
  </div>
</section>
</div>
`


        // Why is there a backtick used for this string?
       /* htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name fish__fact">${fish.name}</div>
            <div class="fish__species fish__fact">${fish.species}</div>
            <div class="fish__length fish__fact">${fish.size}</div>
            <div class="fish__location fish__fact">${fish.harvested}</div>
            <div class="fish__diet fish__fact">${fish.food}</div>
        </section>
`*/
    }
    htmlString += `</article>`

    return htmlString
    

}

