function createCard(title, cName, views, monthsOld, durations, thumbnail){
    var title
    var cName
    var views
    //Adding Thumbnail picture
    const thumbnailimg = document.createElement('img')
    thumbnailimg.className = 'thumbnail'
    thumbnailimg.src = thumbnail
    const contain = document.querySelector(".thumbnail")
    contain.prepend(thumbnailimg)

    //Adding Duration
    document.querySelector(".duration").insertAdjacentText("afterbegin",durations)

    //Adding Title
    document.querySelector(".title").insertAdjacentText("afterbegin", title)

    //Inserting Course Name
    document.querySelector(".coursename").insertAdjacentText("afterbegin", cName)

    //Inserting views
    if( views < 999 && views > 0){
        views = views
        document.querySelector(".views").insertAdjacentText("afterbegin", views + " views")
    }
    if (views >= 1000 && views < 999999)
    {
        views /= 1000;   
        document.querySelector(".views").insertAdjacentText("afterbegin", views + "k views")
    }
    if(views >= 100000 && views < 999999999){
        var point = views % 1000000;
        point /= 100000
        views /= 1000000
        document.querySelector(".views").insertAdjacentText("afterbegin", views + "." + point + "M views" )
    }
    
    //Inserting Uploaded Months Ago
    const months = monthsOld
    document.querySelector(".Uploadtime").insertAdjacentText("afterbegin", months + " months ago" )
}


createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 1000000, 7, "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

// function createCard(thumbnail)
// {
//     // var title
//     // var cName
//     // var views
//     // var monthsOld
//     const img = document.createElement("img")
//     img.src= thumbnail
//     img.style.width = '50px';
//     const contain = document.querySelector('.thumbnail');
//     contain.append(img); 
// }
// // // Create card container
// // const card = document.createElement('div');
// // card.className = 'card';

// // // Create and add thumbnail image
// // const img = document.createElement('img');
// // img.src = thumbnail;
// // img.className = 'thumbnail';
// // card.appendChild(img);


// createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")