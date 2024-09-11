const drugs = new Map([
   ['tylenol', {
        definition: 'acetaminophen',
        img:'./img/tylenol.jpg'
   }],

   ['epzicom', {
    definition: 'abacavir/lamivudine',
    img:'./img/epzicom.jpg'
   }],

   ['acetodote', {
    definition: 'acetylcysteine',
    img:'./img/Acetylcysteine.jpg'
   }],

   ['zovirax', {
    definition: 'acyclovir',
    img:'./img/zovirax.jpg'
   }],

   ['differin', {
    definition: 'adapalene',
    img:'./img/differin.jpg'
   }]


])
// Get the dropdown element
const drugSelect = document.getElementById('drug-select');

// Get all keys (drug names) from the Map, sort them alphabetically
const sortedDrugs = Array.from(drugs.keys()).sort();

// Populate the dropdown with sorted drug names
sortedDrugs.forEach((key) => {
    const option = document.createElement('option');
    option.value = key;
    option.text = key.charAt(0).toUpperCase() + key.slice(1);  // Capitalize the first letter
    drugSelect.add(option);
});

// Event listener for dropdown selection
drugSelect.addEventListener('change', () => {
    const selectedDrug = drugSelect.value;
    input.value = '';
    searchDrugs(selectedDrug);
});
const input = document.getElementById('input')
input.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        searchDrugs(input.value)
    }
})

const search = document.getElementById('search')
search.addEventListener('click', () =>{
    searchDrugs(input.value);
})

const info = document.getElementById('info')
const image = document.getElementById('image')

function searchDrugs(value) {
    value = value.toLowerCase();
    const entry = drugs.get(value);
    if (entry) {
        info.innerText = (entry.definition)
        image.src = (entry.img)
    }
    else {
        info.innerText = 'No drug found';
        image.src = '#';
    }
}
