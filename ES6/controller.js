const url='https://randomuser.me/api/?inc=name,picture,location,nat=us&results=8';
const parent = document.getElementsByClassName("page_content_gallery_images");

fetch(url)
 .then((resp)=>resp.json())
.then(function(data){
  let profiles = data.results;
  return profiles.map(function(profile){
    let card = document.createElement("div");
    let container = document.createElement("div");
    let img= document.createElement("img");
    img.src=profile.picture.large;
    img.alt = "profile image";
    let h4= document.createElement("h4");
    h4.textContent= `${profile.name.first} ${profile.name.last}`;
    let p= document.createElement("p");
    p.textContent = `${profile.location.state}`;
    card.appendChild(img);
    card.className="card_images";
    container.appendChild(h4);
    container.appendChild(p);
    container.className="card_images";
    card.appendChild(container);
    parent[0].appendChild(card);
  })
})
.catch(function(error){
  console.log(error);
}
);
