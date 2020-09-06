const Fname = document.getElementById('Fname');
const Lname = document.getElementById('Lname');
const radio = document.getElementById('radios');
const display = document.getElementById('display');
const pass = document.getElementById('pass');
const mail = document.getElementById('mail');
let validFName = false;
let validLName = false;


// utility functions...

function makePasswordAlphabet(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function makePasswordNumeric(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function makePasswordSpecialCharacter(length) {
    var result = '';
    var characters = '!@#$%^&*';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function GeneratePassword(n) {
    let str;
    n = n - 3;
    str = makePasswordAlphabet(n / 2) + makePasswordSpecialCharacter(2) + makePasswordNumeric(n - (n / 2));
    return str;
}


// event listener.......



Fname.addEventListener('blur', () => {
    // console.log('blurred');
    // let regex = /[A-Z]{1}[a-zA-Z]{2,20}/;
    let regex = /^[A-Z]{1}([a-zA-Z]){2,20}$/;
    str = Fname.value;
    if (regex.test(str)) {
        console.log(str, 'is valid');
        Fname.classList.remove('is-invalid');
        small1.innerText = '';
        validFName = true;
    } else {
        let small1 = document.getElementById('small1');
        console.log('is invalid');
        small1.innerText = 'Your name must start with a Block Letter and should contains 3-20 characters and there shouldnot be any spacing between first and Last name..'
        Fname.classList.add('is-invalid')
        validFName = false;
    }
});
Lname.addEventListener('blur', () => {
    // console.log('blurred');
    // let regex = /[A-Z]{1}[a-zA-Z]{2,20}/;
    let regex = /^([a-zA-Z]){2,20}$/;
    str = Lname.value;
    if (regex.test(str)) {
        console.log(str, 'is valid');
        Lname.classList.remove('is-invalid');
        small2.innerText = '';

        validLName = true;
    } else {
        let small2 = document.getElementById('small2');
        console.log('is invalid');
        small2.innerText = 'Your name must start with a Block Letter and should contains 3-20 characters and there shouldnot be any spacing between first and Last name..'
        Lname.classList.add('is-invalid')
        validLName = false;
    }
});






const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();

    let dept = '';
    if (document.getElementById('Radios1').checked) {

        dept = 'frontend';
    } else if (document.getElementById('Radios2').checked) {

        dept = 'backend';

    } else if (document.getElementById('Radios3').checked) {

        dept = 'devops';
    }

    if (validFName && validLName && dept != '') {

        let str = `${Fname.value}.${Lname.value}.${dept}`.toLowerCase();
        mail.innerHTML = `<h2 > <span class="badge badge-pill badge-secondary"> Your newly Generated Email is </span>   =>  ${str}   @krishnacollege.ac.in  </h2>`;
        // console.log(str);
        // let elem = document.createElement('h2');
        // elem.classList('bg-secondary');
        // let txt = document.createTextNode('Your Generated Email is  =>' + str);
        // elem.append(txt);
        // display.append(elem);

        let pwd = GeneratePassword(10);
        pass.innerHTML = `<h2 > <span class="badge badge-pill badge-secondary"> Your newly Generated Password is </span>  =>  ${pwd}</h2> `;
    } else if (!validLName || !validFName) {

    }

})




{
    /* <span class="badge badge-pill badge-secondary">Secondary</span> */
}