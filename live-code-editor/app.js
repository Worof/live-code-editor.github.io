let debounceTime;
document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

function saveCode() {
    localStorage.setItem('htmlCode', document.getElementById('htmlCode').value);
    localStorage.setItem('cssCode', document.getElementById('cssCode').value);
    localStorage.setItem('jsCode', document.getElementById('jsCode').value);
  }

document.getElementById('htmlCode').addEventListener('input', saveCode);
document.getElementById('cssCode').addEventListener('input', saveCode);
document.getElementById('jsCode').addEventListener('input', saveCode);
function loadCode() {
  document.getElementById('htmlCode').value = localStorage.getItem('htmlCode') ;
  document.getElementById('cssCode').value = localStorage.getItem('cssCode') ;
  document.getElementById('jsCode').value = localStorage.getItem('jsCode') ;
}

window.onload = loadCode;
