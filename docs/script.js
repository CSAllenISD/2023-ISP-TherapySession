const btn = document.getElementById("submit");
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    btn.value = "Submitting...";
    const serviceID = "service_fv6oze8";
    const templateID1 = "template_mtyfdys";
    const templateID2 = "template_m5b91ug";
    emailjs.sendForm(serviceID, templateID1, this)
        .then(() => {
	    btn.value = "Submitted!";
	}, (err) => {
	    btn.value = "Failed!";
	});
    emailjs.sendForm(serviceID, templateID2, this)
        .then(() => {
	    btn.value = "Submitted!";
	}, (err) => {
	    btn.value = "Failed!";
	});
});
