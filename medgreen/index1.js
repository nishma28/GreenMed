function displayImage() {
    const uploadInput = document.getElementById('upload');
    const resultContainer = document.getElementById('result-container');

    const file = uploadInput.files[0];
    if (file) {
        const imageName = file.name;

        // Create an image element and set its source to the selected file
        const image = new Image();
        image.src = URL.createObjectURL(file);

        // Clear previous content and display the image
        resultContainer.innerHTML = '';
        resultContainer.appendChild(image);

        // Display the image name as output
        const imageNameElement = document.createElement('p');
        imageNameElement.textContent = `Image Name: ${imageName}`;
        resultContainer.appendChild(imageNameElement);
    } else {
        resultContainer.innerHTML = '<p>No image selected.</p>';
    }
}