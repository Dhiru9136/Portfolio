/* Shared behaviour */
document.addEventListener("DOMContentLoaded", function () {

    // Back to top button (footer)
    var backToTop = document.getElementById("backToTop");
    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Close the mobile menu after a link is tapped
    var menu = document.getElementById("navbarNav");
    if (menu && window.bootstrap) {
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                if (menu.classList.contains("show")) {
                    bootstrap.Collapse.getOrCreateInstance(menu).hide();
                }
            });
        });
    }

    // Contact form: opens the visitor's email app (static site, no server)
    var form = document.getElementById("contactForm");
    if (form) {
        var status = document.getElementById("formStatus");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            var name = form.elements["name"].value.trim();
            var email = form.elements["email"].value.trim();
            var subject = form.elements["subject"].value.trim();
            var message = form.elements["message"].value.trim();

            if (!name || !email || !subject || !message) {
                status.className = "alert alert-danger";
                status.textContent = "Please fill in all fields.";
                return;
            }

            var body = "Name: " + name + "\n" +
                       "Email: " + email + "\n\n" +
                       "Message:\n" + message;

            status.className = "alert alert-success";
            status.textContent = "Opening your email application...";

            window.location.href = "mailto:palmdhiraj91@gmail.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);
        });
    }
});
