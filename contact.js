let Name = document.getElementById('name');
let email = document.getElementById('email');
let selection = document.getElementById('country');
let btn = document.getElementById('btn');
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let subject = document.getElementById('subject');
let textError = document.getElementById('textError');
let country = document.getElementById('country');
let selectionError = document.getElementById('selectionError');

/* name validation*/
Name.addEventListener('focus', e => {
    e.target.style.border = '2px solid green'
})
Name.addEventListener('blur', e => {
    e.target.style.border = '1px solid #ccc'
})
Name.addEventListener('input', e => {
    if ((/[1-9]/ig).test(e.target.value)) {
        nameError.innerText = 'cant append numbers in the name';
        nameError.style.display = 'block';
        e.target.style.border = '2px solid red'
    }
    else {
        e.target.style.border = '2px solid green';
        nameError.style.display = 'none';
    }
})


/*email validation */

email.addEventListener('focus', e => {
    e.target.style.border = '2px solid green'
})
email.addEventListener('blur', e => {
    e.target.style.border = '1px solid #ccc'
})
email.addEventListener('input', e => {
    if (!(/^[a-z0-9]{1,}@[a-z0-9]{1,}.com$/ig).test(e.target.value) && e.target.value != '') {
        emailError.innerText = 'Not valid email';
        emailError.style.display = 'block';
        e.target.style.border = '2px solid red';
    }
    else {
        emailError.style.display = 'none';
        e.target.style.border = '2px solid green'
    }
})


/* subject validation */

subject.addEventListener('input', e => {
    if (e.target.value.length > 20) {
        textError.innerText = 'message exceed the limitation';
        e.target.style.border = '2px solid red';
        textError.style.display = 'block';
    }
    else {
        e.target.style.border = '1px solid #ccc';
        textError.style.display = 'none';
    }
})


/* submit validation */

btn.addEventListener('click', () => {
    if (country.value == '') {
        selectionError.innerText = 'you must select your country';
        selectionError.style.display = 'block';
    }
    else
        selectionError.style.display = 'none';
})