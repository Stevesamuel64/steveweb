// Scroll to About section when button clicked
document.getElementById("aboutBtn").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// Backend form submission
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value;
    const email = this.querySelector("input[type='email']").value;
    const message = this.querySelector("textarea").value;

    try {
        const response = await fetch("http://127.0.0.1:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();
        alert(result.message);

        this.reset();
    } catch (error) {
        console.error("Error:", error);
        alert("Server error.");
    }
});