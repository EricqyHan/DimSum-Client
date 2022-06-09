// fetch is a promise request
// asynch function
document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const foodNames = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://simple-dim-sum-api.herokuapp.com/api/${foodNames}`
    );
    const data = await response.json();
    console.log(data);
    document.getElementById("foodFillings").innerText = data.filling;
    document.getElementById("foodWrapper").innerText = data.wrapper;
    document.getElementById("foodTraditionalName").innerText =
      data.traditional_name;
    document.getElementById("foodSimplifiedName").innerText =
      data.simplified_name;
    document.getElementById("foodImage").src = data.image;
  } catch (error) {
    console.log(error);
  }
}
