document.addEventListener('DOMContentLoaded', (event) => {
    updateVisitorCount();
});

function updateVisitorCount() {
    console.log('Updating visitor count...');
    fetch('https://mzp04i2u44.execute-api.us-east-1.amazonaws.com/prod/visitorcount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Received data:', data);
        if (data.body) {
            const bodyData = JSON.parse(data.body);
            if (bodyData.visitorCount !== undefined) {
                document.getElementById('website-counter').textContent = bodyData.visitorCount;
            } else {
                console.error('Unexpected body format:', bodyData);
            }
        } else {
            console.error('Unexpected data format:', data);
        }
    })
    .catch(error => console.error('Error:', error));
}