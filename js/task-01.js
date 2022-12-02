const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryElements = category.querySelectorAll("li");
  console.log(`Elements: ${categoryElements.length}`);
});
