//burger menu

const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header-nav');
const body = document.querySelector('body');
const headerNavAbout = document.querySelector('.header-nav__about-i'); 

const description__button = document.querySelector('.description__button');
const petsButton = document.querySelector('.pets-button');

let burgerIsNotOpen = true;
let burgerIsNotHidden = false;

headerBurger.onclick = () => {
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    body.classList.toggle('lock');

    if(burgerIsNotOpen) {
    let div = document.createElement('div');
    div.className = 'burger-bg';
    div.style.background = 'rgba(41, 41, 41, 0.6)';
    div.style.width = '100%';
    div.style.height= '100%';
    div.style.position = 'absolute';
    div.onclick = () => {
        headerBurger.classList.toggle('active');
        headerNav.classList.toggle('active');
        body.classList.toggle('lock');
        burgerIsNotOpen = true;
        div.remove();
    }

    body.prepend(div);
    burgerIsNotOpen = false;
    burgerIsNotHidden = true;
    } else {
        document.querySelector('.burger-bg').remove();
        burgerIsNotOpen = true;
    }
}

headerNavAbout.onclick = () => {
    if (burgerIsNotHidden) {
        headerBurger.classList.toggle('active');
        headerNav.classList.toggle('active');
        body.classList.toggle('lock');
        document.querySelector('.burger-bg').remove();
        burgerIsNotOpen = true;
        burgerIsNotHidden = false;
        div.remove();
    }
}

description__button.onclick = () => {
    document.location.href = '../pets/index.html';
}

petsButton.onclick = () => {
    document.location.href = '../pets/index.html';
}

///////////////
//slider

 

const petsArrow = document.querySelector('.pets-arrow');

let setNewSluderItems = async () => {
    
    
}

petsArrow.addEventListener('click', () => {

});

//////////
//popup

const petCardBtn = document.querySelectorAll('.pet-card__button');

const petPopup = document.querySelector('.pet-popup');
const popupContainer = document.querySelector('.popup-container');
const petPopupCloseBtn = document.querySelector('.pet-popup__close-btn');

const popupContainerImg = document.querySelector('.popup-container__img'); 
const petInfoName = document.querySelector('.pet-info__name');
const petInfoTypeBreed = document.querySelector('.pet-info__type-breed');
const petInfoDesc = document.querySelector('.pet-info__desc');
const petInfoListAge = document.querySelector('.pet-info-list__age');
const petInfoListInoculations  = document.querySelector('.pet-info-list__inoculations');
const petInfoListDiseases = document.querySelector('.pet-info-list__diseases');
const petInfoListParasites = document.querySelector('.pet-info-list__parasites');


let setPetInfo = (petBtn) => {
    let pet = pets.find((el) => {if(petBtn.previousElementSibling.textContent === el.name) return el;});
    popupContainerImg.src = pet.img;
    petInfoName.textContent = pet.name;
    petInfoTypeBreed.textContent = `${pet.type} - ${pet.breed}`;
    petInfoDesc.textContent = pet.description;
    petInfoListAge.innerHTML = `<b>Age:</b> ${pet.age}`;
    petInfoListInoculations.innerHTML = `<b>Inoculations:</b> ${pet.inoculations.map((el) => {return ' '+ el;})}`;
    petInfoListDiseases.innerHTML = `<b>Diseases:</b> ${pet.diseases.map((el) => {return ' '+ el;})}`;
    petInfoListParasites.innerHTML = `<b>Parasites:</b> ${pet.parasites.map((el) => {return ' '+ el;})}`;
}

petCardBtn.forEach((el) => {
    el.onclick = () => {
        petPopup.style.display = 'flex';
        body.classList.toggle('lock');
        setPetInfo(el);
    }
})

let bgClick = (e) => {
    if (e.target === e.currentTarget) {
        petPopup.style.display = 'none';
        body.classList.toggle('lock');
    }
}

petPopupCloseBtn.onclick = () => {
    petPopup.style.display = 'none';
    body.classList.toggle('lock');
}

petPopup.addEventListener('click', bgClick);