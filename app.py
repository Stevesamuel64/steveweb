from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Home route
@app.route('/')
def home():
    return "Backend is running!"

# Contact route
@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    print("New Contact Form Submission")
    print("Name:", name)
    print("Email:", email)
    print("Message:", message)

    return jsonify({"status": "success", "message": "Message received!"})

if __name__ == '__main__':
    app.run(debug=True)