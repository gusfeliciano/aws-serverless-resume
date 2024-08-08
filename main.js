document.addEventListener('DOMContentLoaded', (event) => {
    updateVisitorCount();
});

function updateVisitorCount() {
    fetch('https://edvmxbl58d.execute-api.us-east-1.amazonaws.com/prod/visitorcount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Received data:', data);
        if (data.visitorCount !== undefined) {
            document.getElementById('website-counter').textContent = data.visitorCount;
        } else {
            console.error('Unexpected data format:', data);
        }
    })
    .catch(error => console.error('Error:', error));
}