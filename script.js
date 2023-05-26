const ApiUrl = "https://api.pexels.com/v1/" 
const ApiKey = "UZcLV44kw86Oxsl0YE30jrH73WpjxKZk34Gc7ewi1QswqxjS3gbw4MzN"

const getAlbum = () => {
    fetch(ApiUrl + "search?query=nature" , {
        headers: {authorization: ApiKey}
    })
    .then((res) => {
        return res.json() // questo then converte l'api in un file json
    })
    .then((json) => {
        albumCard(json.photos); // questo serve a consologgare 
    })
    .catch((err) => {console.log(err);})
}

getAlbum();


const boardCard = document.getElementById('boardCard');




/*FUNZIONE PER CREARE GLI ELEMENTI HTML ITERANDO GLI ELEMENTI DELL'ARRAY     
 DERIVANTE DALLA RICERCA NELLA CHIAMA AJAX*/

let albumCard = (json) => {
  for (const photo of json) {
    const containerCard =document.createElement('div');
    boardCard.appendChild(containerCard);
    containerCard.classList.add('card');
    containerCard.classList.add('col-md-6');
    containerCard.classList.add('col-lg-3');
    containerCard.classList.add('col-12');
    containerCard.classList.add('mb-3');
    containerCard.classList.add('text-center');
    containerCard.classList.add('p-0');
    

    const imgCard =document.createElement('img');
    imgCard.src = photo.src.medium;
    containerCard.appendChild(imgCard);
    imgCard.classList.add('rounded');
    imgCard.classList.add('mb-2');
    imgCard.classList.add('p-0');
    imgCard.style.height = ('15rem');
  
    
    const imgTitle = document.createElement('span');
    imgTitle.innerText = "Photograph:"+ " " + photo.photographer;
    containerCard.appendChild(imgTitle)
    imgTitle.classList.add('mb-1');    
    }
}

//? ESEMPI DI .map E forEach

//? let albumCard = (json) => {
//?    const DomElements = photos.map(photos => {
    
//?     photos = photos.filter (photos => photos.width <= 4000)
//?        const imgCard =document.createElement('img');
//?        imgCard.src = photos.src.medium;
//?        return imgCard;
      
       
//?     });
//?     boardCard.append(...DomElements)
//?     console.log(DomElements);
   
//? }

//! const array = [1, 2, 3, 4, 5, 6, 7];
// array.forEach((item) => {
//     console.log(item);
// })


//! const arrayModificato = array.map (item => {
//     return item*2
//     })
//     console.log(arrayModificato);
