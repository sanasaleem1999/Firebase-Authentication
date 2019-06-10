document.addEventListener('DOMContentLoaded',function(){
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});

//auth state changed
auth.onAuthStateChanged(function(user){
    if(user){
        collapse.style.display = 'block';
        console.log(user);
    }
    else{
        collapse.style.display = 'none';
    }
})

//sign upp form
const signUp = document.querySelector('#signupform');
signUp.addEventListener('submit',createAccount);
function createAccount(event){
    event.preventDefault();
    const email = document.getElementById('youremail').value;
    const password = document.getElementById('yourpassword').value;
    console.log(email);
    console.log(password);
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        let modal = document.querySelector('#modal-signin');
        M.Modal.getInstance(modal).close();
        signUp.reset();
    });
};

//log in
const collapse = document.querySelector('#showcollapse');
const logIn = document.querySelector('#login-form');
logIn.addEventListener('submit',logAccount);
function logAccount(event){
    event.preventDefault();
    const logmail = document.getElementById('logemail').value;
    const logpass = document.getElementById('logpassword').value;
   console.log(logmail);
   console.log(logpass);
   auth.signInWithEmailAndPassword(logmail, logpass).then(cred => {
       console.log(cred.user);
       //close the modal here
       const logModal = document.querySelector('#modal-login');
       M.Modal.getInstance(logModal).close();
       logIn.reset();
   });
};//log in function ends here

//log out
const exit = document.querySelector('#logout');
exit.addEventListener('click',logOutAccount);
function logOutAccount(event){
    event.preventDefault();
    auth.signOut();
}

//append list
/*const cafeList = document.querySelector('#cafe-list');
cafeList.innerHTML = 'hello';
db.collection('clothing').get().then((item) => {                      //item = snapshots
    item.docs.forEach(show => {                                       //show = doc
        console.log(show.data());
        makeList(show);


    });
});

let html = [];
 let guide = html.push(1);
 console.log(html);*/

/*function makeList(doc){
    const li = document.createElement('li');
    const name = document.createElement('span');
    const city = document.createElement('span');
    let cross = document.createElement('div');
    cross.textContent = 'x';
    li.setAttribute('data-id',doc.id);
    name.textContent = (doc.data().name);
    city.textContent = (doc.data().city);
    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    cafeList.appendChild(li);

    //to delete the data
     cross.addEventListener('click',deleteData);
     function deleteData(event){
         event.stopPropagation();
         let id = event.target.parentElement.getAttribute('data-id');
         db.collection('clothing').doc(id).delete();
     };
}

signUp.addEventListener('submit', addData);
function addData(event){
    event.preventDefault();
    db.collection('clothing').add({
        name: signUp.name.value,
        city: signUp.city.value,
    });
    signUp.name.value = '';
    signUp.city.value = '';
};*/

