# ✨ Background Remover Web App

A modern and user-friendly **web application** built using **Flask**, **Rembg**, and **Pillow** that allows users to remove the background from images instantly.  

Upload an image → Click **Remove Background** → Download your background-free image 🎉  

---

## 🚀 Features
- 🖼️ Upload any image (JPG, PNG, etc.)
- ⚡ Removes background using AI (`rembg`)
- 🎨 Attractive UI with gradient theme
- ⏳ Loader animation while processing
- 📥 Download result as PNG
- 🔄 Reset and upload a new image without refreshing

---

## 📂 Project Structure

Background Remover Project Using Flask/
│── app.py # Flask application
│── requirements.txt # Dependencies
│
├── static/
│ ├── styles.css # Styling
│ └── script.js # Client-side logic
│
└── templates/
└── index.html # UI template

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/background-remover-flask.git
   cd background-remover-flask

2.Create a virtual environment:

python -m venv .venv

3. Activate the virtual environment:

Windows (PowerShell)

.venv\Scripts\activate

4. Install dependencies:

pip install -r requirements.txt

5. Run the Flask app:

python app.py

