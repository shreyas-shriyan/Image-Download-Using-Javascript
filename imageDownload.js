const downloadImage = async (imageUrl) => {
  // function to download image from link and convert it to objectUrl
  const dataToURL = (url) => {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  };

  // logic to download to local
  const a = document.createElement("a");
  a.href = await dataToURL(imageUrl);
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

//example usage
downloadImage("https://via.placeholder.com/150");
