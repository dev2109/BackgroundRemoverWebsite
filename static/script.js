const form = document.getElementById("upload-form");
const fileInput = document.getElementById("file-input");
const resultDiv = document.getElementById("result");
const outputImg = document.getElementById("output-img");
const loader = document.getElementById("loader");
const downloadBtn = document.getElementById("downloadBtn");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    loader.style.display = "block";
    resultDiv.style.display = "none";

    try {
        const response = await fetch(window.location.origin + "/remove-bg", { method: "POST", body: formData });

        if (!response.ok) throw new Error("Request failed");

        const data = await response.json();

        if (data.image) {
            outputImg.src = "data:image/png;base64," + data.image;
            resultDiv.style.display = "block";
        }
    } catch (error) {
        alert("Error removing background!");
    } finally {
        loader.style.display = "none";
    }
});

downloadBtn.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = outputImg.src;
    a.download = "output.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

resetBtn.addEventListener("click", () => {
    resultDiv.style.display = "none";
    fileInput.value = "";
    outputImg.src = "";
});

