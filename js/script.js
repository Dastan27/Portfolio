function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("msg").value,

    };

    emailjs.send('service_w4n0hdu', 'template_zj34dwq', tempParams).then(function(res) {
        console.log("Success", res.status);
    })
    
}