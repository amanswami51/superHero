//Object.keys(takeobject) :- This method convert object to array.


//search by name:- "https://www.superheroapi.com/api.php/320666043629812/search/batman"
//search by id:- /245


const inputName = document.getElementById('inputName');
const searchBynameBtn = document.getElementById('searchBynameBtn');
const searchByIdBtn = document.getElementById('searchByIdBtn');
const imgDiv = document.getElementById('imgDiv');



const AccessToken = '320666043629812'
const BaseURL = `https://www.superheroapi.com/api.php/${AccessToken}`;


//**************search by name**************
const searchByNameFun = (name)=>{
    fetch(`${BaseURL}/search/${name}`).then((res)=>{return res.json()}).then((json)=>{
        showSuperHero(json.results[0])
    })
}
searchBynameBtn.onclick = ()=>{
    searchByNameFun(`${inputName.value}`)
}

//**************search by id**************
const searchByIdFun = (id)=>{
    fetch(`${BaseURL}/${id}`).then((res)=>{return res.json()}).then((json)=>{
        showSuperHero(json);
    })
}
const getRandomId = ()=>{
    let a = 731
    let idRandom = Number( 1 + (a-1)*Math.random() ).toFixed(0);
    return idRandom
}
searchByIdBtn.onclick  = ()=>{
    searchByIdFun(getRandomId());
}


const showSuperHero = (json)=>{
    let heroName = `<h1>${json.name}</h1>`;
    let heroPowerstats = Object.keys(json.powerstats).map((element)=>{
        return `<p>${element}: ${json.powerstats[element]}</p>`
    })

    imgDiv.innerHTML = `<p>${heroName}<img src=${json.image.url} width="250px" height="350px" alt="">${heroPowerstats.join('')} `;
}


