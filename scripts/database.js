/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            image: "https://s7d2.scene7.com/is/image/TWCNews/Red_Drum_chesapeake-bay-program-crop",
            food: "shrimp, crab, mullets",
            size: "51cm",
            species: "Redfish",
            harvested: "New Zealand",
            water: "salt"

        },
        {
            name: "Bob",
            image: "https://www.monaconatureencyclopedia.com/wp-content/uploads/2021/01/1-Sphyraena-barracuda.jpg",
            food: "small tuna, mullets, groupers, etc",
            size: "4-6 feet",
            species: 'Barracuda',
            harvested: 'Brazil',
            water: "salt"
        },

        {
            name: "Beth",
            image: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQJaFfIWJivdbQD7iRqyMmDkg0XvXQgubTOLWUl9jokDhLc4CXYvGts6FNV6FPG3BHJhJs60-FOCAEzrcE",
            food: "fish, crab, shrimp, etc",
            size: "12-15 inches",
            species: "Lionfish",
            harvested: 'South Pacific Ocean',
            water: 'salt'
        },

        {
            name: "Barb",
            image: "https://enviearth.com/yello-perch_1/",
            food: "zooplankton",
            size: "7-10 inches",
            species: "Perch",
            harvested: "Lake Erie",
            water: "fresh"
        },

        {   name: "Bertha",
            image: "https://caseagrant.ucsd.edu/sites/default/files/styles/800px/public/importedFiles/pacific-mackerel-robertson.jpg",
            food: "small fish, crustaceans",
            size: "30cm",
            species: "Mackerel",
            harvested: "North Atlantic Ocean",
            water: "salt"

        }
    ]
}



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
    
}