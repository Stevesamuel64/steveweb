// ✅ Smooth Scroll
document.getElementById("aboutBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});


// ✅ Initialize Supabase
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";

const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);


// ✅ Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const { error } = await supabaseClient
        .from("contacts")
        .insert([{ name, email, message }]);

    if (error) {
        console.error("Supabase Error:", error);
        alert("❌ Failed to send message.");
    } else {
        alert("✅ Message sent successfully!");
        this.reset();
    }
});
