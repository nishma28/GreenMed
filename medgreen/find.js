function displayImage() {
    const uploadInput = document.getElementById('upload');
    const resultContainer = document.getElementById('result-container');

    const file = uploadInput.files[0];
    if (file) {
        // Get the image name without the file extension
        const imageName = file.name.replace(/\.[^/.]+$/, '');

        // Create an image element and set its source to the selected file
        const image = new Image();
        image.src = URL.createObjectURL(file);

        // Clear previous content and display the image
        resultContainer.innerHTML = '';
        resultContainer.appendChild(image);

        // Display the image name (without extension) as output
        const imageNameElement = document.createElement('p');
        imageNameElement.textContent = `Image Name: ${imageName}`;
        resultContainer.appendChild(imageNameElement);
    } else {
        resultContainer.innerHTML = '<p>No image selected.</p>';
    }
}