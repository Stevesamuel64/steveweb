// ✅ Smooth Scroll to About Section
document.getElementById("aboutBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});


// ✅ Initialize Supabase
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


// ✅ Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const { error } = await supabase
        .from("contacts")
        .insert([{ name, email, message }]);

    if (error) {
        console.error("Error:", error);
        alert("❌ Failed to send message.");
    } else {
        alert("✅ Message sent successfully!");
        this.reset();
    }
});
