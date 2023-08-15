async function getData() {
    // Fetch data from database
    const dataBaseData = await fetch("https://ndevapi.com/main_list_ratings");
    const data = await dataBaseData.json();


    let noytgames = [];
    // Check for games without youtube videos provided
    for (let game = 0; game < data.length; game++) {
        if (data[game].youtube_url == "") {
            noytgames.push(data[game].name);
        }
    }
    document.getElementById("noyt").innerHTML += ` ${noytgames.length}/${data.length}`;
    document.getElementById("noytgames").innerHTML += ` ${noytgames}`;

    let noraterinfogames = [];
    // Check for games without rater info provided
    for (let game = 0; game < data.length; game++) {
        if (data[game]["rater_note"].conclusion == "") {
            noraterinfogames.push(data[game].name);
        }
    }
    document.getElementById("noraterinfo").innerHTML += ` ${noraterinfogames.length}/${data.length}`;
    document.getElementById("noraterinfogames").innerHTML += ` ${noraterinfogames}`;

    let noytnoraterinfogames = [];
    // Check for games without youtube videos nor rater info provided
    for (let game = 0; game < data.length; game++) {
        if (data[game]["rater_note"].conclusion == "" && data[game].youtube_url == "") {
            noytnoraterinfogames.push(data[game].name);
        }
    }
    document.getElementById("noytnoraterinfo").innerHTML += ` ${noytnoraterinfogames.length}/${data.length}`;
    document.getElementById("noytnoraterinfogames").innerHTML += ` ${noytnoraterinfogames}`;
}

getData();

function showHide(id) {
    switch (id) {
        case 1:
            const currentDisplay = (window.getComputedStyle(document.getElementById("noytgames"))).getPropertyValue("display")
            if (currentDisplay == "block") document.getElementById("noytgames").style.display = "none";
            else document.getElementById("noytgames").style.display = "block";
            break;
        case 2:
            const currentDisplay2 = (window.getComputedStyle(document.getElementById("noraterinfogames"))).getPropertyValue("display")
            if (currentDisplay2 == "block") document.getElementById("noraterinfogames").style.display = "none";
            else document.getElementById("noraterinfogames").style.display = "block";
            break;
        case 3:
            const currentDisplay3 = (window.getComputedStyle(document.getElementById("noytnoraterinfogames"))).getPropertyValue("display")
            if (currentDisplay3 == "block") document.getElementById("noytnoraterinfogames").style.display = "none";
            else document.getElementById("noytnoraterinfogames").style.display = "block";
            break;
        default:
            console.log("You should not see this.");
            break;
    }
}