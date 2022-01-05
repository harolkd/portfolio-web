window.sr = ScrollReveal()
    sr.reveal('.home', {
        duration: 1500,
        origin: 'top',
        distance: '-20px'
    })

    //ANIMACION DE ABOUT Y MIS PROYECTOS

    sr.reveal('.about h1', {
        duration: 1500,
        origin: 'top',
        distance: '-20px'
    })

    sr.reveal('.about p', {
        duration: 1500,
        origin: 'top',
        distance: '-20px'
    })

    sr.reveal('#about-flex', {
        duration: 1500,
        origin: 'top',
        distance: '-20px'
    })

    //ANIMACION DE CONTACTO

    sr.reveal('.contacto h1', {
        duration: 1500,
        origin: 'top',
        distance: '-20px'
    })

    sr.reveal('.contacto p', {
        duration: 1500,
        origin: 'top',
        distance: '-20px'
    })

    sr.reveal('.contacto ul', {
        duration: 1500,
        origin: 'top',
        distance: '-20px'
    })

    sr.reveal('.contacto form', {
        duration: 1500,
        origin: 'top',
        distance: '-20px'
    })

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", async(e) => {
    e.preventDefault();

    try {
        await fetch("https://sheet.best/api/sheets/bf958ef0-1366-4565-87cd-7a4d47455974", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
         body: JSON.stringify({
            "Nombre": formulario.name.value,
            "Apellido": formulario.last.value,
            "Correo": formulario.email.value,
            "Mensaje": formulario.msg.value
            })
        });
        Swal.fire("Mensaje enviado exitosamente!")
        document.formulario.reset();
    } catch(err) {
        console.log(err)
        Swal.fire("Lo sentimos, algo salió mal")
    }
})

