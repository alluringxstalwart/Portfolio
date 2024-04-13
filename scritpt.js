window.onload = function () {
    document.getElementById("menu").onclick = function () {
        document.getElementById("aside").style.display = 'flex';
    }



    document.getElementById("cross").onclick = function () {
        document.getElementsByClassName("aside")[0].style.display = "none";
    }

    document.getElementById("contact").onclick = function () {
        window.open('mailto:alluringxstalwart@gmail.com')
    }
    document.getElementById('homebutton').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // smooth scrolling
        });
    });

    document.getElementById("projectsbutton").addEventListener('click', function () {
        // Scroll to the top of the projects section
        document.getElementById("projects").scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.getElementById("blogsbutton").addEventListener('click', function () {
        // Scroll to the top of the blogs section
        document.getElementById("blogs").scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

}

