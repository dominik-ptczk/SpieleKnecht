var quantityOfCreatedGamesLs = 0;
var quantityOfCreatedGames = 0;
quantityOfCreatedTags = localStorage.getItem("quantityOfCreatedTagsLs");
quantityOfCreatedGames = localStorage.getItem("quantityOfCreatedGamesLs");

document.onload = load();
document.onload = loadTags();
document.onload = loadGames();


// Load localStorage
function load() {
    var startDialogChecked = JSON.parse(localStorage.getItem("isCheckboxStartDialogTrue"));
    document.getElementById("checkboxStartDialog").checked = startDialogChecked;
}

function loadTags() {
    for (let index = 1; index <= quantityOfCreatedTags; index++) {
        var recreateTag = document.createElement("button");
        recreateTag.innerHTML = localStorage.getItem("TagInnerHTML" + index);
        recreateTag.style.borderColor = localStorage.getItem("colorOfTag" + index);
        recreateTag.className = "generatedButtons";
        recreateTag.id = "TagButton" + index;
        // var getButton = quantityOfCreatedTags;
        
        // Onclick get Games with same Tag
        recreateTag.onclick = function getGamesWithTagRecreated() {
            var getRecreatedButton = this.innerHTML;
            for (var index = 1; index <= quantityOfCreatedGames; index++) {
                var tag1 = document.getElementById(index + "." + 1).innerHTML;
                var tag2 = document.getElementById(index + "." + 2).innerHTML;
                var tag3 = document.getElementById(index + "." + 3).innerHTML;
                var tag4 = document.getElementById(index + "." + 4).innerHTML;
                var tag5 = document.getElementById(index + "." + 5).innerHTML;

                if (getRecreatedButton == tag1 || getRecreatedButton == tag2 || getRecreatedButton == tag3 || getRecreatedButton == tag4 || getRecreatedButton == tag5) {
                    document.getElementById(index).style.borderColor = "#E626FF";
                    // document.getElementById(index + 1).style.borderWidth = "2px";
                    // document.getElementById(index + 1).style.boxShadow = "5px 5px 25px 2px #E626FF"
                }
            }
        };
        mainLeft.appendChild(recreateTag);
    }
}


function loadGames() {
    
    quantityOfCreatedGames = localStorage.getItem("quantityOfCreatedGamesLs")
    for (let index = 1; index <= quantityOfCreatedGames; index++) {
        var recreateGame = document.createElement("div");
        recreateGame.className = "createGame";
        recreateGame.id = index;
        
        var recreateGameH1 = document.createElement("h1");
        recreateGameH1.innerHTML = localStorage.getItem("gameH1" + index);

        var recreateGameTag1 = document.createElement("p");
        recreateGameTag1.innerHTML = localStorage.getItem("recreateGameTag1" + index);
        recreateGameTag1.id = index + "." + "1";

        var recreateGameTag2 = document.createElement("p");
        recreateGameTag2.innerHTML = localStorage.getItem("recreateGameTag2" + index);
        recreateGameTag2.id = index + "." + "2";

        var recreateGameTag3 = document.createElement("p");
        recreateGameTag3.innerHTML = localStorage.getItem("recreateGameTag3" + index);
        recreateGameTag3.id = index + "." + "3";

        var recreateGameTag4 = document.createElement("p");
        recreateGameTag4.innerHTML = localStorage.getItem("recreateGameTag4" + index);
        recreateGameTag4.id = index + "." + "4";

        var recreateGameTag5 = document.createElement("p");
        recreateGameTag5.innerHTML = localStorage.getItem("recreateGameTag5" + index);
        recreateGameTag5.id = index + "." + "5";

        recreateGame.title = localStorage.getItem("recreateGameTag1" + index) + ", " + localStorage.getItem("recreateGameTag2" + index) + ", " + localStorage.getItem("recreateGameTag3" + index) + ", " + localStorage.getItem("recreateGameTag4" + index) + ", " + localStorage.getItem("recreateGameTag5" + index);


        mainRight.appendChild(recreateGame);
        recreateGame.appendChild(recreateGameH1);
        recreateGame.appendChild(recreateGameTag1);
        recreateGame.appendChild(recreateGameTag2);
        recreateGame.appendChild(recreateGameTag3);
        recreateGame.appendChild(recreateGameTag4);
        recreateGame.appendChild(recreateGameTag5);
    }
}

// Load Start Dialog if checkbox in the startdialog is false 
if (document.getElementById("checkboxStartDialog").checked == false) {
    window.onload = startDialog();
}


// Open start dialog on first load
function startDialog() {
    document.getElementById("startDialog").classList.add("visible");
    document.getElementById("overlay").classList.add("visible");
}
// Close start dialog
function closeStartDialog() {
    document.getElementById("overlay").classList.remove("visible");
    document.getElementById("startDialog").classList.remove("visible");
}


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


// Generate Button from input Tag dialog
function generateButtonTag() {
    quantityOfCreatedTags++;
    var createButtonTag = document.createElement("button");
    var color = document.getElementById("pickTagColor").value;
    createButtonTag.innerHTML = inputTagDialogTag;
    createButtonTag.className = "generatedButtons";
    createButtonTag.id = "TagButton" + quantityOfCreatedTags;
    createButtonTag.style.borderColor = color;
    var getButton = quantityOfCreatedTags;
    var getButtonText = inputTagDialogTag;


    // Onclick get Games with same Tag
    createButtonTag.onclick = function getGamesWithTag() {
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

    localStorage.setItem("quantityOfCreatedTagsLs", quantityOfCreatedTags.toString())
    localStorage.setItem("TagInnerHTML" + quantityOfCreatedTags, inputTagDialogTag)
    localStorage.setItem("colorOfTag" + quantityOfCreatedTags, color.toString())

    var mainLeft = document.getElementById("mainLeft");
    mainLeft.appendChild(createButtonTag);
}

// var quantityOfCreatedGameButtons = 0;
// var quantityOfCreatedGames = 0;

// Generate Button from input Game dialog -- eigentlich generateGame()
function generateButtonGame() {
    quantityOfCreatedGames++;
    localStorage.setItem("quantityOfCreatedGamesLs", quantityOfCreatedGames.toString());

    var createGame = document.createElement("div");
    createGame.className = "createGame";
    createGame.id = quantityOfCreatedGames;
    
    var createGameH1 = document.createElement("h1");
    createGameH1.innerHTML = inputGameDialogGame;
    localStorage.setItem("gameH1" + quantityOfCreatedGames, inputGameDialogGame);

    var createGameTag1 = document.createElement("p");
    createGameTag1.innerHTML = inputGameDialogTag1;
    createGameTag1.id = quantityOfCreatedGames + "." + "1";
    localStorage.setItem("recreateGameTag1" + quantityOfCreatedGames, inputGameDialogTag1.toString());

    var createGameTag2 = document.createElement("p");
    createGameTag2.innerHTML = inputGameDialogTag2;
    createGameTag2.id = quantityOfCreatedGames + "." + "2";
    localStorage.setItem("recreateGameTag2" + quantityOfCreatedGames, inputGameDialogTag2.toString());


    var createGameTag3 = document.createElement("p");
    createGameTag3.innerHTML = inputGameDialogTag3;
    createGameTag3.id = quantityOfCreatedGames + "." + "3"
    localStorage.setItem("recreateGameTag3" + quantityOfCreatedGames, inputGameDialogTag3.toString());
    

    var createGameTag4 = document.createElement("p");
    createGameTag4.innerHTML = inputGameDialogTag4;
    createGameTag4.id = quantityOfCreatedGames + "." + "4";
    localStorage.setItem("recreateGameTag4" + quantityOfCreatedGames, inputGameDialogTag4.toString());



    var createGameTag5 = document.createElement("p");
    createGameTag5.innerHTML = inputGameDialogTag5;
    createGameTag5.id = quantityOfCreatedGames + "." + "5";
    localStorage.setItem("recreateGameTag5" + quantityOfCreatedGames, inputGameDialogTag5.toString());


    createGame.title = inputGameDialogTag1 + ", " + inputGameDialogTag2 + ", " + inputGameDialogTag3 + ", " + inputGameDialogTag4 + ", " + inputGameDialogTag5;


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


// // Remove the last created TagButton
// function removeTag() {
//     if (quantityofCreatedTags > 0 ) {
//     document.getElementById("TagButton" + quantityOfCreatedTags).parentNode.removeChild(document.getElementById("TagButton" + quantityOfCreatedTags));
//     quantityOfCreatedTags--;
//     }
// };
// // Remove the last created Game
// function removeGame() {
//     if (quantityOfCreatedGames > 0) {
//     document.getElementById(quantityOfCreatedGames).parentNode.removeChild(document.getElementById(quantityOfCreatedGames));
//     quantityOfCreatedGames--;
//     }
// }


// Save in localStorage
var isStartDialogCheckboxTrue = false;

function save() {
    var checkboxStartDialog = document.getElementById("checkboxStartDialog");
    localStorage.setItem("isCheckboxStartDialogTrue", checkboxStartDialog.checked)
}


// Delete the localstorage
function deleteLocalStorage() {
    localStorage.clear();
    window.location.reload()
}



