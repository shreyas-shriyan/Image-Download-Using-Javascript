dataToURL(url) {
    return fetch(url).then((response) => {
            return response.blob();
        }).then(blob => {
            return URL.createObjectURL(blob);
        });
}

async downloadImage() {
        const a = document.createElement("a");
        a.href = await dataToURL("https://via.placeholder.com/150");
        a.download = "";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
}
