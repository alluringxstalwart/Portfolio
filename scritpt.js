window.onload = function(){    
    document.getElementById("menu").onclick = function(){
        document.getElementById("aside").style.display = 'flex';
    }

    

    document.getElementById("cross").onclick = function(){
        document.getElementsByClassName("aside")[0].style.display = "none";
    }

    document.getElementById("contact").onclick = function(){
        window.open('mailto:alluringxstalwart@gmail.com')
    }
}

