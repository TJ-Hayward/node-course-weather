console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const output = document.querySelector("#output");
const errorMessage = document.querySelector("#error");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  output.textContent = "loading...";
  errorMessage.textContent = "";
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        errorMessage.textContent = `${data.error}`;
        output.textContent = "";
      } else {
        output.textContent = `Weather in ${data.location}. ${data.forecast}`;
      }
    });
  });
});
