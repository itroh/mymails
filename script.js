//compteur de message

var countMessage=document.getElementsByClassName('row').length;
var newText= document.createTextNode(countMessage);
document.getElementById('count').appendChild(newText);

//gestion poubelle
for(var i =0;i<document.getElementsByClassName('trash').length;i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",function(){
        this.parentNode.remove();
        document.getElementsByClassName('row')[document.getElementsByClassName('row').length-1].style.borderBottom = "1px solid #DADADA";
        document.getElementById('count').textContent = document.getElementsByClassName('row').length;

    });
}



//gestion bouton add
document.getElementById("btn-add").addEventListener("click",function(){
    console.log(document.getElementById("add-message").value);
    nouveauMail(document.getElementById("add-message").value);
})

//creation fonction qui créer une row message avec avatar and co
function nouveauMail(contenuMessage){
    var newDiv=document.createElement("div");
    //ajout attr class="row" à cette nouvelle div
    var attrDivClass=document.createAttribute("class");
    attrDivClass.value="row";
    newDiv.setAttributeNode(attrDivClass);
   
    // Avatar
    var newImg=document.createElement("img");
    newImg.setAttribute("class","avatar");
    newImg.setAttribute("src","avatar-2.jpg");
    //newImg.className="avatar";
        //    var attrImgClass=document.createAttribute("class");
        //  attrImgClass.value="avatar";
            //newImg.setAttributeNode(attrImgClass);
    //newImg.src='avatar-2.jpg'
        // var attrImgSrc=document.createAttribute("src");
            //attrImgSrc.value="avatar-1.jpg";
            //newImg.setAttributeNode(attrImgSrc);
    //placement img ds div
    newDiv.appendChild(newImg);
        
    // gestion nom
    var newDiv2=document.createElement("div");
    var nomAvatar=document.createElement("h6")
    nomAvatar.textContent="Hortense Guéneau";
    newDiv2.appendChild(nomAvatar);

    //gestion texte du message
    var textMessage=document.createElement("p")
    var attrMsgClass=document.createAttribute("class");
    attrMsgClass.value="descr";
    textMessage.setAttributeNode(attrMsgClass);
    textMessage.textContent=contenuMessage;
    newDiv2.appendChild(textMessage);
    
    //ajout de la div
    var attrDiv2Class=document.createAttribute("class");
    attrDiv2Class.value="content";
    newDiv2.setAttributeNode(attrDiv2Class);
    newDiv.appendChild(newDiv2);

    //place la div au bon endroit
    var placement=document.getElementsByClassName("row")[0];
    document.body.insertBefore(newDiv,placement);
    //ajout trash
    var newTrash=document.createElement("img");
    var attrTrashClass=document.createAttribute("class");
    attrTrashClass.value="trash";
    newTrash.setAttributeNode(attrTrashClass);
    var attrTrashSrc=document.createAttribute("src");
    attrTrashSrc.value="trash.png";
    newTrash.setAttributeNode(attrTrashSrc);
    newTrash.addEventListener("click",function(){
        this.parentNode.remove();
        document.getElementsByClassName('row')[document.getElementsByClassName('row').length-1].style.borderBottom = "1px solid #DADADA";
        document.getElementById('count').textContent = document.getElementsByClassName('row').length;
    })
    newDiv.appendChild(newTrash);

    //MAJ compteur msg
    document.getElementById('count').textContent = document.getElementsByClassName('row').length;


}