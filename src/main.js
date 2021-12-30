function sendMail() {
    alert("Claim request sent!");
    var tempParams = {
        from_name: document.getElementById("name").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('service_soozdyb', 'template_9hvqhzr', tempParams, 'user_UYKI72Q35QSYVNWdrhB7R').then(function(res) {
        console.log("success", res.status, res.text);
        alert("Your claim request has been received!");
    }, (err) => {
        console.log(err);
    })
}