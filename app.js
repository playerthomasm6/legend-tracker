var characterObj = {
    pathfinder = {
        name: "Pathfinder",
        profileImg: "assets/images/character_image_pathfinder.jpg",
        passive: "INFO",
        tactical: "INFO",
        active1: true,
        active2: false,
        active3: false,
        current = {
            kills: 1,
            damage: 167,
            weaponMain = {
                name: "Volt",
                ammoClipLevel: 16,
                ammoClipTotal: 22,
                Mods = {
                    barral: "standard",
                    clip: "purple",
                    stock: "purple",
                    sight: "hcog",
                },
            },
            weaponSecondary = {
                name: "Longbow",
                ammoClipLevel: 8,
                ammoClipTotal: 8,
                Mods = {
                    barral: "standard",
                    clip: "purple",
                    stock: "purple",
                    sight: "2x-4x",
                },
            },
        },
    },
    wraith = {
        name: "Wraith",
        profileImg: "assets/images/character_image_wraith.jpg",
        passive: "INFO",
        tactical: "INFO",
        active1: false,
        active2: true,
        active3: false,
        current = {
            kills: 1,
            damage: 167,
            weaponMain = {
                name: "Volt",
                ammoClipLevel: 16,
                ammoClipTotal: 22,
                Mods = {
                    barral: "standard",
                    clip: "purple",
                    stock: "purple",
                    sight: "hcog",
                },
            },
            weaponSecondary = {
                name: "Longbow",
                ammoClipLevel: 8,
                ammoClipTotal: 8,
                Mods = {
                    barral: "standard",
                    clip: "purple",
                    stock: "purple",
                    sight: "2x-4x",
                },
            },
        },

    },
    lifeline = {
        name: "Lifeline",
        profileImg: "assets/images/character_image_lifeline.jpg",
        passive: "INFO",
        tactical: "INFO",
        active1: false,
        active2: false,
        active3: true,
        current = {
            kills: 1,
            damage: 167,
            weaponMain = {
                name: "Volt",
                ammoClipLevel: 16,
                ammoClipTotal: 22,
                Mods = {
                    barral: "standard",
                    clip: "purple",
                    stock: "purple",
                    sight: "hcog",
                },
            },
            weaponSecondary = {
                name: "Longbow",
                ammoClipLevel: 8,
                ammoClipTotal: 8,
                Mods = {
                    barral: "standard",
                    clip: "purple",
                    stock: "purple",
                    sight: "2x-4x",
                },
            },
        },
    },

};

var activeCharacterObj = {
    active1 = {
        bangalore: false,
        bloodhound: false,
        caustic: false,
        gibraltar: false,
        lifeline: false,
        mirage: false,
        pathfinder: true,
        wraith: false,
    },
    active2 = {
        bangalore: false,
        bloodhound: false,
        caustic: false,
        gibraltar: false,
        lifeline: false,
        mirage: false,
        pathfinder: false,
        wraith: true,
    },
    active2 = {
        bangalore: false,
        bloodhound: false,
        caustic: false,
        gibraltar: false,
        lifeline: true,
        mirage: false,
        pathfinder: false,
        wraith: false,
    },
}

function displayCharacterCheck(){
    var activeCharacter1 = activeCharacterObj.filter()
}

function displayCharacterPosition1(){
    
}




//8d64f384-1559-48b7-bb5a-72926b2d24c6

//GET https://public-api.tracker.gg/v2/apex/standard/profile/{platform}/{platformUserIdentifier}


// WELCOME DIV

// Dynamically creates welcome div on HOME
function displayWelcome1() {
    $(".content1").empty();

    var headerContentEl = $("<div>").attr("class", "col s12 m12 l12 headerContent");
    var welcomeMessageEl = $("<h3>").text("Welcome to the Site and other text");
    var welcomeMessageFooterEl = $("<p>").text("This is some extra text here");

    headerContentEl.append(welcomeMessageEl);
    headerContentEl.append(welcomeMessageFooterEl);
    $(".content1").append(headerContentEl);

};

function displayWhoBest() {
    $(".content1").empty();

    var headerContentEl = $("<div>").attr("class", "col s12 m12 l12 headerContent");
    var welcomeMessageEl = $("<h3>").text("Who is the Best");
    var welcomeMessageFooterEl = $("<p>").text("These are the people");
    var player1El = $("<div>").attr("class")

    headerContentEl.append(welcomeMessageEl);
    headerContentEl.append(welcomeMessageFooterEl);
    $(".content1").append(headerContentEl);

};




// ON LOAD OF PAGE

displayWelcome1();


// NAV BUTTONS

$("#homeBtn").on("click", displayWelcome1);

$("#whoBestBtn").on("click", displayWhoBest);

