const data = [];

function readFormData() {
  var formData = {};
  formData["loc"] = document.getElementById("loc").value;
  formData["desc"] = document.getElementById("desc").value;
  formData["country"] = document.getElementById("country").value;
  formData["state"] = document.getElementById("state").value;
  formData["city"] = document.getElementById("city").value;
  formData["ptag"] = document.getElementById("ptag").value;
  return formData;
}

function onFormSubmit() {
  var formData = readFormData();
  data.push(formData);

  document.getElementById("tbody").innerHTML = "";
  data.map((obj) => {
    document.getElementById("tbody").innerHTML += `
        <tr>
         <td><input type="checkbox" class="selectcheckbox" name="chk" /></td>
         <td>${obj.loc}</td>
         <td>${obj.desc}</td>
         <td>${obj.country}</td>
         <td>${obj.state}</td>
         <td>${obj.city}</td>
         <td>${obj.ptag}</td>
        </tr>`;
  });
  reset();  
}

//-------------------------------------------------------------filter----------------------------------------------------------------------------

function filterTable() {
  var countryFilter = document.getElementById("tcountry").value;
  var stateFilter = document.getElementById("tstate").value;
  var cityFilter = document.getElementById("tcity").value;
  var tagFilter = document.getElementById("ptag").value;

  const filteredData = data.filter(
    (obj) =>
      countryFilter === obj.country ||
      stateFilter === obj.state ||
      cityFilter === obj.city ||
      tagFilter === obj.ptag
  );

  document.getElementById("tbody").innerHTML = "";
  filteredData.map((obj) => {
    document.getElementById("tbody").innerHTML += `
      <tr>
        <td><input type="checkbox" class="selectcheckbox" /></td>
        <td>${obj.loc}</td>
        <td>${obj.desc}</td>
        <td>${obj.country}</td>
        <td>${obj.state}</td>
        <td>${obj.city}</td>
        <td>${obj.ptag}</td>
      </tr>`;
  });
}
document.getElementById("tcountry").addEventListener("change", filterTable);
document.getElementById("tstate").addEventListener("change", filterTable);
document.getElementById("tcity").addEventListener("change", filterTable);
// document.getElementById("ptag").addEventListener("change", filterTable);

//-------------------------------------------------------------------reset------------------------------------------------------------

function reset() {
  document.getElementById("loc").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("country").value = "";
  document.getElementById("state").value = "";
  document.getElementById("city").value = "";
  document.getElementById("ptag").value = "";
}

//---------------------------------------------------------------------------------------------------------------------------------

const checkBox = document.getElementsByClassName("selectcheckbox");

const tagelement = document.getElementById("ptag");

const submitBtn = document.getElementById("sbtn");

submitBtn.addEventListener("click", () => {
  const selectedTag = tagelement.value;

  for (let i = 0; i < checkBox.length; i++) {
    const selectCheckbox = checkBox[i];
    if (selectCheckbox.checked) {
      const selectedRow = selectCheckbox.parentNode.parentNode;

      const tagColumn = selectedRow.querySelector("td:last-child");
      tagColumn.textContent = selectedTag;
    }
    selectCheckbox.checked = false;
  }
  reset();
});

//--------------------------------------------------------------------------------------------------------------------------------------

document.getElementById("add-tag").addEventListener("click", addTag);

const tags = ["Home", "Office", "Others"]; // Array to store tags

function addTag() {
  // Function to add a new tag
  const newTag = prompt("Enter a new tag:");
  if (newTag) {
    tags.push(newTag);
    const tagSelectElement = document.getElementById("ptag");

    tagSelectElement.innerHTML = ""; // Clear current options
    const defaultOption = document.createElement("option"); // Add default option

    defaultOption.value = "";
    defaultOption.text = "-- Select --";
    tagSelectElement.add(defaultOption);
    tags.forEach((tag) => {
      // Add each tag as an option

      const option = document.createElement("option");
      option.value = tag;
      option.text = tag;
      tagSelectElement.add(option);
    });
    tagSelectElement.value = newTag; // Set the new tag as the selected option
  }
}

//-------------------------------------------------------------------------------------------------------

const removeBtnElement = document.getElementById("remove-tag");
removeBtnElement.addEventListener("click", () => {
  for (let i = 0; i < checkBox.length; i++) {
    const selectCheckbox = checkBox[i];
    if (selectCheckbox.checked) {
      const selectedRow = selectCheckbox.parentNode.parentNode;
      const tagColumn = selectedRow.querySelector("td:last-child");
      tagColumn.textContent = "";
      selectCheckbox.checked = false;
    }
  }
});

//--------------------------------- for All chechbox select-------------------------------------------------------------------------

function selects() {
  var ele = document.getElementsByName("chk");
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].type == "checkbox") ele[i].checked = true;
  }
}
