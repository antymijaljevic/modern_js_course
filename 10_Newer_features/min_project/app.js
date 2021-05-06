const data = [
    {
        name: 'Pero Peric',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Ivana Ivanic',
        age: 19,
        gender: 'female',
        lookingfor: 'male',
        location: 'Zadar CRO',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Sime Lavric',
        age: 35,
        gender: 'male',
        lookingfor: 'female',
        location: 'Split DA',
        image: 'https://randomuser.me/api/portraits/men/81.jpg'
    }
];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//next event
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile != undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class='list-group'>
            <li class='list-group-item'>Name: ${currentProfile.name}</li>
            <li class='list-group-item'>Age: ${currentProfile.age}</li>
            <li class='list-group-item'>Gender: ${currentProfile.gender}</li>
            <li class='list-group-item'>Looking for: ${currentProfile.lookingfor}</li>
            <li class='list-group-item'>Location: ${currentProfile.location}</li>
        </ul>
        `; 

        document.getElementById('imageDisplay').innerHTML = `
        <img src='${currentProfile.image}'></img>
        `;
    } else {
        // no more profiles
        window.location.reload();
    }
}

//profile iterator
 function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
 }





// data.forEach(user => {
//     console.log(user.name);
// });