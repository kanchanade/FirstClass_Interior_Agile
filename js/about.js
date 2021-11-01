function seeMDPicture(){
    document.getElementById('ceo-pic').classList.add("d-none");
    document.getElementById('md-pic').classList.remove("d-none");
}
function seeMDMessage(){
    document.getElementById('ceo-message').classList.add("d-none");
    document.getElementById('md-message').classList.remove("d-none");
}
function seeCEOPicture(){
    document.getElementById('md-pic').classList.add("d-none");
    document.getElementById('ceo-pic').classList.remove("d-none");
}
function seeCEOMessage(){
    document.getElementById('md-message').classList.add("d-none");
    document.getElementById('ceo-message').classList.remove("d-none");
}
function showButton(id){
    if(id) {
        let firstChild = id.firstElementChild;
        firstChild.classList.remove('d-none');
    }
}
function hideButton(id){
    if(id) {
        let firstChild = id.firstElementChild;
        firstChild.classList.add('d-none');
    }
}
function hideSection(id) {
    if(id) {
        let parent = id.parentElement;
        console.log(parent);
        parent.classList.add('d-none');
    }
}