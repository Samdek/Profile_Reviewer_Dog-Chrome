        /*========================
        ======DATA JAVASCRIPT====
        ========================*/
const dogs = {
    teddy: {
        name: 'Teddy',
        avatar: 'img/dog-teddy.jpg',
        age: 30,
        bio: 'How you doing?',
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    
    bella: {
        name: 'Bella',
        avatar: 'img/dog-bella.jpg',
        age: 43,
        bio: "Yup, that's my owner. U can meet him",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },

    rex: {
        name: 'Rex',
        avatar: 'img/dog-rex.jpg',
        age: 39,
        bio: "Yup, shey you dey okay today sha",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },

    dane: {
        name: 'Dane',
        avatar: 'img/dog-dane.png',
        age: 24,
        bio: "Wooo, life hard",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },

    many: {
        name: 'Many',
        avatar: 'img/dog-many.png',
        age: 34,
        bio: "What's up G33",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },

    bernard: {
        name: 'Saint Bernard',
        avatar: 'img/dog-bernard.png',
        age: 37,
        bio: "Yo! meet your next dog",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
}


        /*======================== 
        ======DOG JAVASCRIPT====
        ========================*/
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getCharacterHtml() {
    const {name, avatar, age, bio} = this 
        return `
            <img src="${avatar}" alt="dog 1" class="dog_image">
            <div class="dog_profile">
            <h4>${name}, ${age}</h4>
            <p>${bio}</p>
            </div> `
    }
}

    
    



        /*========================
        ======INDEX JAVASCRIPT====
        ========================*/
const acceptEl = document.getElementById('accept_img')
const rejectEl = document.getElementById('reject_img')
let dogArray = ['teddy', 'bella', 'rex', 'dane', 'many', 'bernard']

function getNewDog(){
    nextDogData = dogs[dogArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}


const toLike = (data) => {
    const {hasBeenLiked} = data
    if(!hasBeenLiked){
        acceptEl.classList.remove('remove-accept')
        data.hasBeenLiked = true
        toSwipe(data)
    }
}

const toReject = (data) => {
    const {hasBeenLiked} = data
    if(!hasBeenLiked){
        rejectEl.classList.remove('remove-reject')
        data.hasBeenLiked = true
        toSwipe(data)
    } 
}

document.getElementById('accept_btn').addEventListener('click', () => toLike(eachDog))
document.getElementById('reject_btn').addEventListener('click', () => toReject(eachDog))

eachDog = getNewDog()
document.getElementById('profile').innerHTML = eachDog.getCharacterHtml()



        /*========================
        ======TOSWIPE JAVASCRIPT====
        ========================*/
const toSwipe = (data) => {
    const {hasBeenSwiped} = data
    if(dogArray.length > 0 && !hasBeenSwiped){
        setTimeout(() => {
            eachDog = getNewDog()
            document.getElementById('profile').innerHTML = eachDog.getCharacterHtml()
            rejectEl.classList.add('remove-reject')
            acceptEl.classList.add('remove-accept')
        }, 2000)
        data.hasBeenSwiped = true
    }
    else{
        setTimeout(() => {
            document.body.classList.add('end-message')
            document.body.innerHTML = `<p>Thanks for reviewing all the dogs, all reviews are well welcomed <br><br><br> Get more code on my github profile <span><b>@Samdek</b></span>. All corrections are welcome too.... <br><br><br><br>Enjoy!!!</p>`
        }, 4000)
    }
}