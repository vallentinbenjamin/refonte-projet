fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const gallery = document.querySelector(".gallery");
    data.forEach((item) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = item.imageUrl;
      img.alt = item.title;
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = item.title;
      figure.appendChild(img);
      figure.appendChild(figcaption);
      gallery.appendChild(figure); // Ajout de la figure à la gallery
    });
  });


  