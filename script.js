//compteur de message

var countMessage=document.getElementsByClassName('row').length;
var newText= document.createTextNode(countMessage);
document.getElementById('count').appendChild(newText);

//gestion poubelle
for(var i =0;i<document.getElementsByClassName('trash').length;i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",function(){
        this.parentNode.remove();
        document.getElementsByClassName('row')[document.getElementsByClassName('row').length-1].style.borderBottom = "1px solid #DADADA";
        nbrMessage = document.getElementsByClassName('row').length;
        document.getElementById('count').textContent = nbrMessage;

    });
}
//gestion bouton add
document.getElementById("btn-add").addEventListener("click",function(){
    console.log(document.getElementById("add-message").value);
})

//creation fonction qui créer une row message avec avatar and co
