import whatToExport from "./pages/nav";

function component(){
    let contents = document.getElementById('content');
    whatToExport();
    return contents;
}

document.body.appendChild(component());