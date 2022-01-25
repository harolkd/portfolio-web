function doom() {
    var nombres = ["Lucy", "lucy", "Lucia", "lucia", "Lucía", "lucía"]
    var ru = document.createTextNode("Luciaaaaa")

    if(document.formulario.name.value == "lucia" || document.formulario.name.value == "lucy" || document.formulario.name.value == "Lucia" || document.formulario.name.value == "Lucy")) {
        console.log("yei")
        var f = document.getElementById("formulario").parentNode

        document.getElementById("texto").innerHTML = "Ah, <span>lucia</span>, encantado que seas tú cariño, este mensaje es para tí..."
        
        f.removeChild(document.getElementsByTagName("form")[0])

        setTimeout(function () {
            console.log("5s")

            //f.appendChild(ru)
            document.getElementById("texto").innerHTML = "lucia, ojalá haberte tenido conmigo en navidad y en año nuevo, no importa, te amo tanto a pesar de todo, fuiste tu quien vió algo de valor en mí, y por más tiempo que te vayas, no puedo negar que me amas. Como regalo queria dedicarte esta <a href='https://youtu.be/LGR2_BFm2Ow'>canción.</a>"
        }, 5000);
        
    }
    else {
        alert("vete de aqui waton feo");
    }
}
