document.getElementById('submit-button').addEventListener('click', function() {
    const inputText = document.getElementById('activity-input').value;
    const outputDiv = document.getElementById('activity-output');

    // Tampilkan teks yang dimasukkan
    if (inputText) {
        const newActivity = document.createElement('p');
        newActivity.textContent = inputText;
        outputDiv.appendChild(newActivity);

        // Kosongkan textarea setelah mengirim
        document.getElementById('activity-input').value = '';
    } else {
        alert('Please write something before submitting.');
    }
});
