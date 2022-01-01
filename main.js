// Open Dialog
function openDialog(dialogId) {
    document.getElementById(dialogId).classList.add("visible");
    document.getElementById("overlay").classList.add("visible");
}



// Close Dialog
function closeDialog(dialogId) {
    document.getElementById(dialogId).classList.remove("visible");
    document.getElementById("overlay").classList.remove("visible");
}



// Get Data from add Tag Dialog
var inputTagDialogTag = "";

function getAddTagData() {
    inputTagDialogTag = document.getElementById("inputTag").value;
}



// Get Data from add Game Dialog --> generateButtonGame()?????
var inputGameDialogGame = "";
var inputGameDialogTag1 = "";
var inputGameDialogTag2 = "";
var inputGameDialogTag3 = "";
var inputGameDialogTag4 = "";
var inputGameDialogTag5 = "";

function getAddGameData() {
    inputGameDialogGame = document.getElementById("inputGame").value;
    inputGameDialogTag1 = document.getElementById("inputGameTag1").value;
    inputGameDialogTag2 = document.getElementById("inputGameTag2").value;
    inputGameDialogTag3 = document.getElementById("inputGameTag3").value;
    inputGameDialogTag4 = document.getElementById("inputGameTag4").value;
    inputGameDialogTag5 = document.getElementById("inputGameTag5").value;
}

var quantityOfCreatedTags = 0

// Generate Button from input Tag dialog
function generateButtonTag() {
    quantityOfCreatedTags++;
    var createButtonTag = document.createElement("button");
    createButtonTag.innerHTML = inputTagDialogTag;
    createButtonTag.className = "generatedButtons";
    createButtonTag.id = "TagButton" + quantityOfCreatedTags;
    var getButton = quantityOfCreatedTags;
    var getButtonText = inputTagDialogTag;

    // Onclick get Games with same Tag
    createButtonTag.onclick = function getGamesWithTag() {
        console.log("Button Nr. " + getButton + " wurde gedrückt")
        for (var index = 0; index < quantityOfCreatedGames; index++) {
            var tag1 = document.getElementById((index + 1) + "." + 1).innerHTML
            var tag2 = document.getElementById((index + 1) + "." + 2).innerHTML
            var tag3 = document.getElementById((index + 1) + "." + 3).innerHTML
            var tag4 = document.getElementById((index + 1) + "." + 4).innerHTML
            var tag5 = document.getElementById((index + 1) + "." + 5).innerHTML

            if (getButtonText == tag1 || getButtonText == tag2 || getButtonText == tag3 || getButtonText == tag4 || getButtonText == tag5) {
                document.getElementById(index + 1).style.borderColor = "#E626FF";
                // document.getElementById(index + 1).style.borderWidth = "2px";
                // document.getElementById(index + 1).style.boxShadow = "5px 5px 25px 2px #E626FF"
            }
            
        }

    };

    // var removeButton = document.createElement("button");
    //     removeButton.innerHTML = inputTagDialogTag;
    //     removeButton.id = "RemoveButton" + quantityOfCreatedTags;
    //     // removeButton.onclick = function removeTag() {
    //     //     document.getElementById("TagButton" + quantityOfCreatedTags).parentNode.removeChild(document.getElementById("TagButton" + quantityOfCreatedTags));
    //     //     document.getElementById("RemoveButton" + quantityOfCreatedTags).parentNode.removeChild(document.getElementById("RemoveButton" + quantityOfCreatedTags));
    //     //     quantityOfCreatedTags--;
    //     // };

    var mainLeft = document.getElementById("mainLeft");
    mainLeft.appendChild(createButtonTag);

    // var removeTagDialog = document.getElementById("removeTagDialog");
    // removeTagDialog.appendChild(removeButton);
}

// var quantityOfCreatedGameButtons = 0;
var quantityOfCreatedGames = 0;

// Generate Button from input Game dialog -- eigentlich generateGame()
function generateButtonGame() {
    quantityOfCreatedGames++;

    var createGame = document.createElement("div");
    createGame.className = "createGame";
    createGame.id = quantityOfCreatedGames;
    
    var createGameH1 = document.createElement("h1");
    createGameH1.innerHTML = inputGameDialogGame;

    var createGameTag1 = document.createElement("p");
    createGameTag1.innerHTML = inputGameDialogTag1;
    createGameTag1.id = quantityOfCreatedGames + "." + "1";

    var createGameTag2 = document.createElement("p");
    createGameTag2.innerHTML = inputGameDialogTag2;
    createGameTag2.id = quantityOfCreatedGames + "." + "2";


    var createGameTag3 = document.createElement("p");
    createGameTag3.innerHTML = inputGameDialogTag3;
    createGameTag3.id = quantityOfCreatedGames + "." + "3";

    var createGameTag4 = document.createElement("p");
    createGameTag4.innerHTML = inputGameDialogTag4;
    createGameTag4.id = quantityOfCreatedGames + "." + "4";


    var createGameTag5 = document.createElement("p");
    createGameTag5.innerHTML = inputGameDialogTag5;
    createGameTag5.id = quantityOfCreatedGames + "." + "5";


    var mainRight = document.getElementById("mainRight");
    mainRight.appendChild(createGame);
    createGame.appendChild(createGameH1);
    createGame.appendChild(createGameTag1);
    createGame.appendChild(createGameTag2);
    createGame.appendChild(createGameTag3);
    createGame.appendChild(createGameTag4);
    createGame.appendChild(createGameTag5);
}



// Logic for Show & Hide Buttons
var getCreatedGames = document.getElementsByClassName("createGame");

function showTags() {
    for (let index = 0; index < quantityOfCreatedGames; index++) {
        getCreatedGames[index].classList.add("visible");
    }
}

function unshowTags() {
    for (let index = 0; index < quantityOfCreatedGames; index++) {
        getCreatedGames[index].classList.remove("visible");

    }
}


// Remove the highlight from the Games
function removeSelection() {
    var gameDiv = document.getElementsByClassName("createGame")
    for (let index = 0; index < quantityOfCreatedGames; index++) {
        gameDiv[index].style.borderColor = "black";
        gameDiv[index].style.boxShadow = "0px 0px 0px 0px #000000"
    }
}


// Remove the last created TagButton
function removeTag() {
    document.getElementById("TagButton" + quantityOfCreatedTags).parentNode.removeChild(document.getElementById("TagButton" + quantityOfCreatedTags));
    quantityOfCreatedTags--;
};

function removeGame() {
    document.getElementById(quantityOfCreatedGames).parentNode.removeChild(document.getElementById(quantityOfCreatedGames));
    quantityOfCreatedGames--;
}