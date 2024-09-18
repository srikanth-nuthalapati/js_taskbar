let img = ["house5.jpg","house2.jpg","house3.jpg","house4.jpg"];
let img2 = ["house2.jpg","house5.jpg","house4.jpg","house3.jpg"];
let text = ["Summer House", "Brick House", "Renovated House","Barn House"];
let img_container = document.getElementById("one");
img_container.style.display = "flex";
img_container.style.flexWrap = "wrap";
img_container.style.columnGap = "15px";

for(let i=0;i<img.length;i++){
    let a = document.createElement("div");
    let b = document. createElement("span");
    a.style.backgroundImage = `url(${img[i]})`;
    a.style.backgroundSize = "cover";
    a.style.width = "24%";
    a.style.height = "250px";
    b.innerText = text[i];
    b.style.color = "white";
    b.style.backgroundColor = "black";
    b.style.display = "inline-block"
    b.style.padding = "10px";
    a.appendChild(b);
    img_container.appendChild(a);
}
for(let i=0;i<img2.length;i++){
    let a = document.createElement("div");
    let b = document.createElement("span");
    a.style.backgroundImage = `url(${img2[i]})`;
    a.style.backgroundSize = "cover";
    a.style.width = "24%";
    a.style.height = "250px";
    b.innerText = text[i];
    b.style.color = "white";
    b.style.backgroundColor = "black";
    b.style.display = "inline-block"
    b.style.padding = "10px";
    a.appendChild(b);
    img_container.appendChild(a);
}

let card_img = ["https://www.w3schools.com/w3images/team2.jpg","https://www.w3schools.com/w3images/team1.jpg","https://www.w3schools.com/w3images/team3.jpg","https://www.w3schools.com/w3images/team4.jpg"];
let card_text = ["John Doe", "Jane Doe", "Mike Ross", "Dane Star"];
let card_title = ["CEO & Founder","Architect","Architect","Architect"];
let card_container = document.getElementById("card-container");
card_container.style.display = "flex";
card_container.style.columnGap = "10px";
for(let i=0;i<4;i++){
    let card_box = document.createElement("div");
    card_box.style.width = "25%";
    card_box.style.height = "100%";
    // card_box.style.backgroundColor = "red";
    let img = document.createElement("img");
    img.src = card_img[i];
    img.alt = "image";
    img.style.height = "180px";
    img.style.width = "100%";
    card_box.appendChild(img);
    let title = document.createElement("h3");
    title.innerText = card_text[i];
    title.style.fontSize = "1.4em";
    card_box.appendChild(title);
    let role = document.createElement("div");
    role.innerText = card_title[i];
    role.style.fontSize = "1.3em";
    card_box.appendChild(role);
    let p = document.createElement("p");
    p.innerText = "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.";
    p.style.padding = "0";
    p.style.fontSize = "1.15em";
    p.style.textAlign = "justify";
    card_box.appendChild(p);
    let btn = document.createElement("button");
    btn.innerText = "Contact";
    btn.style.width = "100%";
    btn.style.padding = "8px";
    btn.style.border = "none";
    btn.style.backgroundColor = "lightblue";
    card_box.appendChild(btn);
    card_container.appendChild(card_box);
}