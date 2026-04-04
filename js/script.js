fetch('footer.html').then(response => response.text()).then(data => document.getElementById('footer-placeholder').innerHTML = data);
// Just basic routing for other pages as an example
function scrollToFormAndSelect(val) {
    if(window.location.pathname.indexOf("index.html") === -1) {
        window.location.href = "index.html#bookingFormSection";
    } else {
        const sel = document.getElementById('applianceSelect');
        if(sel) sel.value = val;
        const el = document.getElementById('bookingFormSection');
        if(el) el.scrollIntoView({behavior: 'smooth'});
    }
}
function hideSplash() {
    var splash = document.getElementById('splashScreen');
    if (splash && !splash.classList.contains('splash-hidden')) {
        splash.style.opacity = '0';
        setTimeout(function(){ splash.style.display = 'none'; }, 300);
        splash.classList.add('splash-hidden');
    }
}
window.addEventListener('load', hideSplash);
setTimeout(hideSplash, 1500);

document.addEventListener("DOMContentLoaded", function() {
    var queryForm = document.getElementById("queryForm");
    if(queryForm) {
        queryForm.addEventListener("submit", function(e) {
            e.preventDefault();
            var formData = new FormData(queryForm);
            var name = formData.get("name") || "";
            var phone = formData.get("phone") || "";
            var city = formData.get("city") || "";
            var appliance = formData.get("appliance") || "";
            
            var text = "Hi, I want to book a service.\n\n" +
                       "*Name:* " + name + "\n" +
                       "*Phone:* " + phone + "\n" +
                       "*City:* " + city + "\n" +
                       "*Appliance:* " + appliance;
            
            var waUrl = "https://wa.me/9120992012?text=" + encodeURIComponent(text);
            window.open(waUrl, "_blank");
        });
    }
});
