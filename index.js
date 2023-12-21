const countries = []
fetch("https://restcountries.com/v3.1/all").then((responsive) =>{
  return responsive.json()
}).then(data => {
  countries.push(...data)
  render(data)
} )
let elList = document.querySelector(".countries__list")

let countriesList= document.querySelectorAll(".countries__item")
const elInput = document.querySelector(".form__wrapp-input")



function render(param1){
  elList.textContent = ""
  param1.forEach(function(country){
      const elNewItem = document.createElement("li");
      elNewItem.setAttribute("class", "countries__item")
    
      const countryImg = document.createElement("img")
      countryImg.setAttribute("src", country.flags.png)
      countryImg.setAttribute("class", "countries__item-img")
      elNewItem.appendChild(countryImg)
    
      const countryTitle = document.createElement("h2")
      countryTitle.setAttribute("class", "countries__item-heading")
      countryTitle.textContent = country.name.common
    
      const countryDl = document.createElement("dl")
      countryDl.setAttribute("class", "countries__info")
      
    
      const countryDt1 = document.createElement("dt")
      countryDt1.setAttribute("class", "dt")
      countryDt1.textContent = "Population: "
      const countryDd1 = document.createElement("dd")
      countryDd1.setAttribute("class", "dd")
      countryDd1.textContent = country.population
    
      const countryDt2 = document.createElement("dt")
      countryDt2.setAttribute("class", "dt")
      countryDt2.textContent = "Region: "
      const countryDd2 = document.createElement("dd")
      countryDd2.setAttribute("class", "dd")
      countryDd2.textContent = country.region
    
      const countryDt3 = document.createElement("dt")
      countryDt3.setAttribute("class", "dt")
      countryDt3.textContent = "Capital: "
      const countryDd3 = document.createElement("dd")
      countryDd3.setAttribute("class", "dd")
      countryDd3.textContent = country.capital
    
      
      countryDl.appendChild(countryDt1)
      countryDl.appendChild(countryDd1)
      countryDl.appendChild(countryDt2)
      countryDl.appendChild(countryDd2)
      countryDl.appendChild(countryDt3)
      countryDl.appendChild(countryDd3)
    
      elList.appendChild(elNewItem)
      elNewItem.appendChild(countryTitle)
      elNewItem.appendChild(countryDl)
  })
}

elInput.addEventListener("input", function(){
  fetch(`https://restcountries.com/v3.1/name/${elInput.value.toLowerCase()}`).then((responsive) =>{
    return responsive.json()
  }).then(data => {
    console.log(data)
    data.forEach(function(item){
      if(item.name.common.toLowerCase().includes(elInput.value.trim().toLowerCase())){
        return(item)
      }else{
        const notFound = document.createElement("h1")
        notFound.textContent = "Not Found"
        notFound.setAttribute("class", "not-found")
        body.appendChild(notFound)
      }
      })
    render(data)
  })
})

const elSelect = document.querySelector(".form__selector")

elSelect.addEventListener("change", function(event){
  fetch(`https://restcountries.com/v3.1/region/${event.target.value}`).then((responsive) =>{
    return responsive.json()
  }).then(data => {
    render(data)
  })
})