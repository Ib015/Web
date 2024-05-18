function detectLanguage() {
    const text = document.getElementById('text').value;
    const data = `q=${encodeURIComponent(text)}`;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            try {
                const response = JSON.parse(this.responseText);
                if (response.data && response.data.detections && response.data.detections.length > 0) {
                    const detectedLanguage = response.data.detections[0][0].language;
                    document.getElementById('result').innerHTML = `<p>Algılanan Dil: ${detectedLanguage}</p>`;
                } else {
                    document.getElementById('result').innerHTML = `<p>Dil Algılanamadı.</p>`;
                }
            } catch (e) {
                document.getElementById('result').innerHTML = `<p>Error parsing response.</p>`;
            }
        }
    });

    xhr.open('POST', 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect');
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept-Encoding', 'application/gzip');
    xhr.setRequestHeader('X-RapidAPI-Key', '21b959700fmsh45d81527b6d6072p14bbd8jsn0434cb5907ca');
    xhr.setRequestHeader('X-RapidAPI-Host', 'google-translate1.p.rapidapi.com');

    xhr.send(data);
}

