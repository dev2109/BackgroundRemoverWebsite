from flask import Flask, render_template, request, jsonify
from rembg import remove
from PIL import Image
import io, base64

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/remove-bg', methods=['POST'])
def remove_bg():
    if 'image' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['image']
    input_img = Image.open(file.stream)

    # Remove background
    output_img = remove(input_img)

    # Save to memory as PNG
    img_io = io.BytesIO()
    output_img.save(img_io, format="PNG")
    img_io.seek(0)

    # Convert to base64
    img_base64 = base64.b64encode(img_io.read()).decode('utf-8')

    return jsonify({"image": img_base64})

if __name__ == '__main__':
    app.run(debug=True)
