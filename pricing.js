
const Box = [
    {
      Versiontype: "Free",
      duration: "$0 / mo",
      content: "10 users included 2 GB of storage Email support Help center access",
      select: "Sign up for free"
    },
    {
      Versiontype: "Pro",
      duration: "$15 / mo",
      content: "20 users included 10 GB of storage Priority email support Help center access",
      select: "Get Started"
    },
    {
      Versiontype: "Enterprise",
      duration: "$29 / mo",
      content: "30 users included 15 GB of storage Phone and email support Help center access",
      select: "Contact us"
    }
  ];
  
  const container = document.getElementById("container");
  
  Box.forEach((item, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "pricing-box"); // Use class for styling
    div.style.height = "250px";
    div.style.width = "200px";
    div.style.border = "1px solid black";
  
    const label = document.createElement("p");
    label.textContent = item.Versiontype;
    div.appendChild(label);
  
    const para1 = document.createElement("p");
    para1.textContent = item.duration;
    div.appendChild(para1);
  
    const para2 = document.createElement("p");
    para2.textContent = item.content;
    div.appendChild(para2);
  
    const btn = document.createElement("button");
    btn.textContent = item.select;
    btn.classList.add("btn", "btn-outline-primary");
    div.appendChild(btn);
  
    // Add a unique identifier as an id for each pricing box
    div.id = `pricing${index}`;
  
    container.appendChild(div);
  });
  
  // Function to display the modal
  function displayModal() {
    document.querySelector(".bg-modal").style.display = "flex";
  }
  
  // Add click event listeners to pricing buttons
  document.querySelectorAll(".pricing-box button").forEach((button, index) => {
    button.addEventListener("click", function () {
      displayModal();
      // You can use the unique identifier to know which pricing box was clicked.
      console.log(`Pricing box ${index + 1} clicked.`);
    });
  });
  
  // Add click event listeners to other buttons
  document.getElementById("button").addEventListener("click", displayModal);
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });
  
  document.querySelector("#shutdown").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
  });
  


//  to display the slider value
  const rangeInput = document.getElementById('customRange1');
  const currentValueSpan = document.getElementById('currentValue');

  rangeInput.addEventListener('input', updateRangeValue);

  function updateRangeValue() {
    currentValueSpan.textContent = rangeInput.value;
  }


  