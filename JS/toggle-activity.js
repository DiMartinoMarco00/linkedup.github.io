let sidebarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity()
{
    sidebarActivity.classList.toggle("open-activity");

    if(sidebarActivity.classList.contains("open-activity"))
    {
        moreLink.innerHTML = "Mostra meno <b>-</b>";
    }
    else 
    {
        moreLink.innerHTML = "Mostra di più <b>+</b>";
    }
}