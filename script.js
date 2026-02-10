document.getElementById("enquiryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("https://script.google.com/macros/s/AKfycbxCLH_NK5SJvzHY2l0yU2BpsapnDWMVt2DC2Xtm84ZbuJzE9MQ0P71pY832zwh0BNXe/exec", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      guests: document.getElementById("guests").value,
      phone: document.getElementById("phone").value
    })
  })
  .then(res => alert("Request submitted successfully!"))
  .catch(err => alert("Error submitting form"));
});

