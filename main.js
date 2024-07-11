document.addEventListener('DOMContentLoaded', (event) => {
    updateVisitorCount();
});

function updateVisitorCount() {
    fetch('REPLACE_WITH_API_GATEWAY_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
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