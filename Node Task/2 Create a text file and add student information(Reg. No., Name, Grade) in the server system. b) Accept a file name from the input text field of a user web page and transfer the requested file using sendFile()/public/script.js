const form = document.getElementById('download-form');
const message = document.getElementById('message');

form.addEventListener('submit', event => {
    event.preventDefault();

    const filename = document.getElementById('filename').value;

    fetch(`/download/${filename}`)
        .then(response => {
            if (response.ok) {
                response.blob().then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = filename;
                    link.click();
                    message.textContent = '';
                });
            } else {
                message.textContent = 'File not found';
            }
        })
        .catch(error => {
            console.error(error);
            message.textContent = 'Error downloading file';
        });
});
