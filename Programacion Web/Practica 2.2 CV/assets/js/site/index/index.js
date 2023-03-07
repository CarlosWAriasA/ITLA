//  Inputs
const inputName = document.getElementById("name");
const inputAddress = document.getElementById("address");
const inputPhone = document.getElementById("phone");
const inputEmail = document.getElementById("email");
const inputSummary = document.getElementById("summary");
const inputWebPage = document.getElementById("web-page");
const inputImage = document.getElementById("image");

//  Botones
const btnSave = document.getElementById("btn-save");
const btnClear = document.getElementById("btn-clear");
const btnLanguage = document.getElementById("btn-language");
const btnSkill = document.getElementById("btn-skill");
const btnEducation = document.getElementById("btn-education");
const btnJob = document.getElementById("btn-add-job");
const btnCertificate = document.getElementById("btn-certificate");

const cardBody1 = document.getElementById("card-body-1");
const container = document.querySelector(".container-fluid");
const divCV = document.getElementById("cv");

function inputValidator(input, value, isValid) {
  if (value == "" || value == null || value == undefined) {
    input.classList.add("input-error");
    input.classList.remove("input-success");
    isValid = false;
  } else {
    input.classList.add("input-success");
    input.classList.remove("input-error");
    if (!isValid) {
      return false;
    }
    return true;
  }
}

function inputValidatorAll(input, isValid) {
  for (let i = 0; i < input.length; i++) {
    if (
      input[i].value == "" ||
      input[i].value == null ||
      input[i].value == undefined
    ) {
      input[i].classList.add("input-error");
      input[i].classList.remove("input-success");
      isValid = false;
    } else {
      input[i].classList.add("input-success");
      input[i].classList.remove("input-error");
    }
  }
  if (!isValid) {
    return false;
  }
  return true;
}

function createBtnDelete(nameBtn) {
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn btn-danger w-100 mt-2");
  btn.innerText = `${nameBtn}`;
  btn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this?")) {
      btn.parentElement.remove();
    }
  });

  return btn;
}

function readImage(input, image) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      image.setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function clearFields() {
  const inputsLanguage = document.querySelectorAll("#language");
  const inputsLevelLanguage = document.querySelectorAll("#level-language");
  const inputsSkill = document.querySelectorAll("#skill");
  const inputsInstitution = document.querySelectorAll("#institution");
  const inputsCareer = document.querySelectorAll("#career");
  const inputsYear = document.querySelectorAll("#year");
  const inputsJobTitle = document.querySelectorAll("#job-title");
  const inputsJobPlace = document.querySelectorAll("#job-place");
  const inputsJobDateStart = document.querySelectorAll("#job-date-start");
  const inputsJobDateEnd = document.querySelectorAll("#job-date-end");
  const inputsCertificate = document.querySelectorAll("#certificate");
  const inputsDescription = document.querySelectorAll("#description");
  inputClear(inputName, true);
  inputClear(inputAddress, false);
  inputClear(inputPhone, false);
  inputClear(inputEmail, false);
  inputClear(inputImage, false);
  inputClear(inputSummary, false);
  inputClear(inputWebPage, false);
  inputClearAll(inputsLanguage);
  inputClearAll(inputsLevelLanguage);
  inputClearAll(inputsSkill);
  inputClearAll(inputsInstitution);
  inputClearAll(inputsCareer);
  inputClearAll(inputsYear);
  inputClearAll(inputsJobTitle);
  inputClearAll(inputsJobPlace);
  inputClearAll(inputsJobDateStart);
  inputClearAll(inputsJobDateEnd);
  inputClearAll(inputsCertificate);
  inputClearAll(inputsDescription);
}

function inputClear(input, isFocus) {
  input.value = "";
  input.classList.remove("input-success");
  input.classList.remove("input-error");
  if (isFocus) {
    input.focus();
  }
}

function inputClearAll(input) {
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
    input[i].classList.remove("input-success");
    input[i].classList.remove("input-error");
  }
}

function validate() {
  const inputsLanguage = document.querySelectorAll("#language");
  const inputsLevelLanguage = document.querySelectorAll("#level-language");
  const inputsSkill = document.querySelectorAll("#skill");
  const inputsInstitution = document.querySelectorAll("#institution");
  const inputsCareer = document.querySelectorAll("#career");
  const inputsYear = document.querySelectorAll("#year");
  const inputsJobTitle = document.querySelectorAll("#job-title");
  const inputsJobPlace = document.querySelectorAll("#job-place");
  const inputsJobDateStart = document.querySelectorAll("#job-date-start");
  const inputsJobDateEnd = document.querySelectorAll("#job-date-end");
  const inputsCertificate = document.querySelectorAll("#certificate");
  const inputsDescription = document.querySelectorAll("#description");

  const valueName = inputName.value;
  const valueAddress = inputAddress.value;
  const valuePhone = inputPhone.value;
  const valueEmail = inputEmail.value;
  const valueSummary = inputSummary.value;
  const valueWebPage = inputWebPage.value;
  const valueImage = inputImage.value;
  let isValid = true;

  isValid = inputValidator(inputName, valueName, isValid);
  isValid = inputValidator(inputAddress, valueAddress, isValid);
  isValid = inputValidator(inputPhone, valuePhone, isValid);
  isValid = inputValidator(inputEmail, valueEmail, isValid);
  isValid = inputValidatorAll(inputsLanguage, isValid);
  isValid = inputValidatorAll(inputsLevelLanguage, isValid);
  isValid = inputValidator(inputSummary, valueSummary, isValid);
  isValid = inputValidator(inputWebPage, valueWebPage, isValid);
  isValid = inputValidatorAll(inputsSkill, isValid);
  isValid = inputValidatorAll(inputsInstitution, isValid);
  isValid = inputValidatorAll(inputsCareer, isValid);
  isValid = inputValidatorAll(inputsYear, isValid);
  isValid = inputValidatorAll(inputsJobTitle, isValid);
  isValid = inputValidatorAll(inputsJobPlace, isValid);
  isValid = inputValidatorAll(inputsJobDateStart, isValid);
  isValid = inputValidatorAll(inputsJobDateEnd, isValid);
  isValid = inputValidatorAll(inputsCertificate, isValid);
  isValid = inputValidator(inputImage, valueImage, isValid);
  isValid = inputValidatorAll(inputsDescription, isValid);

  return isValid;
}

function addLanguage() {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute(
    "class",
    "border border-3 p-2 mb-3 rounded-3 border-secondary"
  );

  const parentDivLanguage = document.createElement("div");
  parentDivLanguage.setAttribute("class", "mt-3 d-flex gap-1");

  const divLanguage = document.createElement("div");

  const labelLanguage = document.createElement("label");
  labelLanguage.setAttribute("class", "fw-bold mx-1");
  labelLanguage.setAttribute("for", "language");
  labelLanguage.innerText = "Language:";

  const inputLanguage = document.createElement("input");
  inputLanguage.setAttribute("type", "text");
  inputLanguage.setAttribute("class", "form-control border-1");
  inputLanguage.setAttribute("id", "language");

  const divLevelLanguage = document.createElement("div");

  const labelLevelLanguage = document.createElement("label");
  labelLevelLanguage.setAttribute("class", "fw-bold mx-1");
  labelLevelLanguage.setAttribute("for", "level-language");
  labelLevelLanguage.innerText = "Level:";

  const inputLevelLanguage = document.createElement("input");
  inputLevelLanguage.setAttribute("type", "text");
  inputLevelLanguage.setAttribute(
    "class",
    "form-control border-1 input-level-language"
  );
  inputLevelLanguage.setAttribute("id", "level-language");

  divLanguage.appendChild(labelLanguage);
  divLanguage.appendChild(inputLanguage);

  divLevelLanguage.appendChild(labelLevelLanguage);
  divLevelLanguage.appendChild(inputLevelLanguage);

  parentDivLanguage.appendChild(divLanguage);
  parentDivLanguage.appendChild(divLevelLanguage);
  parentDiv.appendChild(parentDivLanguage);
  parentDiv.appendChild(createBtnDelete("Delete"));

  btnLanguage.before(parentDiv);
}

function addSkill() {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute(
    "class",
    "border border-3 p-2 mb-3 rounded-3 border-secondary mt-2"
  );

  const DivSkill = document.createElement("div");

  const labelSkill = document.createElement("label");
  labelSkill.setAttribute("class", "fw-bold mx-1");
  labelSkill.setAttribute("for", "skill");
  labelSkill.innerText = "Skill Highlight:";

  const inputSkill = document.createElement("input");
  inputSkill.setAttribute("type", "text");
  inputSkill.setAttribute("class", "form-control border-1");
  inputSkill.setAttribute("id", "skill");

  DivSkill.appendChild(labelSkill);
  DivSkill.appendChild(inputSkill);

  parentDiv.appendChild(DivSkill);
  parentDiv.appendChild(createBtnDelete("Delete"));

  btnSkill.before(parentDiv);
}

function addEducation() {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute(
    "class",
    "border border-3 border-secondary p-1 rounded-3 mb-2"
  );

  const divInstitution = document.createElement("div");
  divInstitution.setAttribute("class", "mt-3");

  const labelInstitution = document.createElement("label");
  labelInstitution.setAttribute("class", "fw-bold mx-1");
  labelInstitution.setAttribute("for", "institution");
  labelInstitution.innerText = "Institution:";

  const inputInstitution = document.createElement("input");
  inputInstitution.setAttribute("type", "text");
  inputInstitution.setAttribute("class", "form-control border-1");
  inputInstitution.setAttribute("id", "institution");

  divInstitution.appendChild(labelInstitution);
  divInstitution.appendChild(inputInstitution);

  const divCareer = document.createElement("div");
  divCareer.setAttribute("class", "mt-3");

  const labelCareer = document.createElement("label");
  labelCareer.setAttribute("class", "fw-bold mx-1");
  labelCareer.setAttribute("for", "career");
  labelCareer.innerText = "Career:";

  const inputCareer = document.createElement("input");
  inputCareer.setAttribute("type", "text");
  inputCareer.setAttribute("class", "form-control border-1");
  inputCareer.setAttribute("id", "career");

  divCareer.appendChild(labelCareer);
  divCareer.appendChild(inputCareer);

  const divYear = document.createElement("div");
  divYear.setAttribute("class", "mt-3");

  const labelYear = document.createElement("label");
  labelYear.setAttribute("class", "fw-bold mx-1");
  labelYear.setAttribute("for", "year");
  labelYear.innerText = "Year:";

  const inputYear = document.createElement("input");
  inputYear.setAttribute("type", "number");
  inputYear.setAttribute("class", "form-control border-1");
  inputYear.setAttribute("id", "year");

  divYear.appendChild(labelYear);
  divYear.appendChild(inputYear);

  parentDiv.appendChild(divInstitution);
  parentDiv.appendChild(divCareer);
  parentDiv.appendChild(divYear);
  parentDiv.appendChild(createBtnDelete("Delete"));

  btnEducation.before(parentDiv);
}

function addJob() {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute(
    "class",
    "border border-3 p-1 rounded-2 border-secondary mb-2"
  );

  const divJob = document.createElement("div");

  const divJobTitle = document.createElement("div");
  divJobTitle.setAttribute("class", "mt-3");

  const labelJobTitle = document.createElement("label");
  labelJobTitle.setAttribute("class", "fw-bold mx-1");
  labelJobTitle.setAttribute("for", `job-title`);
  labelJobTitle.innerText = "Job Title:";

  const inputJobTitle = document.createElement("input");
  inputJobTitle.setAttribute("type", "text");
  inputJobTitle.setAttribute("class", "form-control border-1");
  inputJobTitle.setAttribute("id", `job-title`);

  const divJobPlace = document.createElement("div");
  divJobPlace.setAttribute("class", "mt-3");

  const labelJobPlace = document.createElement("label");
  labelJobPlace.setAttribute("class", "fw-bold mx-1");
  labelJobPlace.setAttribute("for", `job-place`);
  labelJobPlace.innerText = "Job Place:";

  const inputJobPlace = document.createElement("input");
  inputJobPlace.setAttribute("type", "text");
  inputJobPlace.setAttribute("class", "form-control border-1");
  inputJobPlace.setAttribute("id", `job-place`);

  const divJobDescription = document.createElement("div");
  divJobPlace.setAttribute("class", "mt-3");

  const labelJobDescription = document.createElement("label");
  labelJobDescription.setAttribute("class", "fw-bold");
  labelJobDescription.setAttribute("for", `description`);
  labelJobDescription.innerText = "Description:";

  const inputJobDescription = document.createElement("textarea");
  inputJobDescription.setAttribute("name", "description");
  inputJobDescription.setAttribute("class", "form-control border-1");
  inputJobDescription.setAttribute("id", `description`);
  inputJobDescription.setAttribute("cols", "30");
  inputJobDescription.setAttribute("rows", "3");

  const divJobDateStart = document.createElement("div");
  divJobDateStart.setAttribute("class", "mt-3");

  const labelJobDateStart = document.createElement("label");
  labelJobDateStart.setAttribute("class", "fw-bold mx-1");
  labelJobDateStart.setAttribute("for", `job-date-start`);
  labelJobDateStart.innerText = "Date start:";

  const inputJobDateStart = document.createElement("input");
  inputJobDateStart.setAttribute("type", "date");
  inputJobDateStart.setAttribute("class", "form-control border-1");
  inputJobDateStart.setAttribute("id", `job-date-start`);

  const divJobDateEnd = document.createElement("div");

  const labelJobDateEnd = document.createElement("label");
  labelJobDateEnd.setAttribute("class", "fw-bold mx-1");
  labelJobDateEnd.setAttribute("for", `job-date-end`);
  labelJobDateEnd.innerText = "Date end:";

  const inputJobDateEnd = document.createElement("input");
  inputJobDateEnd.setAttribute("type", "date");
  inputJobDateEnd.setAttribute("class", "form-control border-1");
  inputJobDateEnd.setAttribute("id", `job-date-end`);

  divJobTitle.appendChild(labelJobTitle);
  divJobTitle.appendChild(inputJobTitle);

  divJobPlace.appendChild(labelJobPlace);
  divJobPlace.appendChild(inputJobPlace);

  divJobDescription.appendChild(labelJobDescription);
  divJobDescription.appendChild(inputJobDescription);

  divJobDateStart.appendChild(labelJobDateStart);
  divJobDateStart.appendChild(inputJobDateStart);

  divJobDateEnd.appendChild(labelJobDateEnd);
  divJobDateEnd.appendChild(inputJobDateEnd);

  parentDiv.appendChild(divJobTitle);
  parentDiv.appendChild(divJobPlace);
  parentDiv.appendChild(divJobDescription);
  parentDiv.appendChild(divJobDateStart);
  parentDiv.appendChild(divJobDateEnd);
  parentDiv.appendChild(createBtnDelete("Delete Job"));

  btnJob.before(parentDiv);
}

function addCertificate() {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute(
    "class",
    "border border-3 p-1 rounded-2 border-secondary mt-2 mb-2"
  );

  const divCertificate = document.createElement("div");

  const labelCertificate = document.createElement("label");
  labelCertificate.setAttribute("class", "fw-bold mx-1");
  labelCertificate.setAttribute("for", "certificate");
  labelCertificate.innerText = "Certificate:";

  const inputCertificate = document.createElement("input");
  inputCertificate.setAttribute("type", "text");
  inputCertificate.setAttribute("class", "form-control border-1");
  inputCertificate.setAttribute("id", "certificate");

  divCertificate.appendChild(labelCertificate);
  divCertificate.appendChild(inputCertificate);

  parentDiv.appendChild(divCertificate);
  parentDiv.appendChild(createBtnDelete("Delete"));

  btnCertificate.before(parentDiv);
}

function openModal() {
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute("class", "modal fade");
  parentDiv.setAttribute("id", "modal");
  parentDiv.setAttribute("tabindex", "-1");
  parentDiv.setAttribute("aria-labelledy", "modalLabel");
  parentDiv.setAttribute("aria-hidden", "true");

  const divModal = document.createElement("div");
  divModal.setAttribute("class", "modal-dialog");

  const divModalContent = document.createElement("div");
  divModalContent.setAttribute("class", "modal-content");

  const divModalHeader = document.createElement("div");
  divModalHeader.setAttribute("class", "modal-header");

  const modalTitle = document.createElement("h1");
  modalTitle.setAttribute("class", "modal-title fs-5");
  modalTitle.setAttribute("id", "modalLabel");
  modalTitle.innerText = "Data required";

  const btnHeader = document.createElement("button");
  btnHeader.setAttribute("type", "button");
  btnHeader.setAttribute("class", "btn-close");
  btnHeader.setAttribute("data-bs-dismiss", "modal");
  btnHeader.setAttribute("aria-label", "Close");

  const divModalBody = document.createElement("div");
  divModalBody.setAttribute("class", "modal-body");

  const modalText = document.createElement("p");
  modalText.innerText = "You have to fill out everything";

  const divModalFooter = document.createElement("div");
  divModalFooter.setAttribute("class", "modal-footer");

  const btnOk = document.createElement("button");
  btnOk.setAttribute("type", "button");
  btnOk.setAttribute("class", "btn btn-secondary");
  btnOk.setAttribute("data-bs-dismiss", "modal");
  btnOk.innerText = "Ok";

  divModalHeader.appendChild(modalTitle);
  divModalHeader.appendChild(btnHeader);

  divModalBody.appendChild(modalText);

  divModalFooter.appendChild(btnOk);

  divModalContent.appendChild(divModalHeader);
  divModalContent.appendChild(divModalBody);
  divModalContent.appendChild(divModalFooter);

  divModal.appendChild(divModalContent);

  parentDiv.appendChild(divModal);

  btnSave.setAttribute("data-bs-toggle", "modal");
  btnSave.setAttribute("data-bs-target", "#modal");

  container.appendChild(parentDiv);
}

function createCV() {
  if (!validate()) {
    console.log("hey");
    openModal();
  } else {
    if (divCV.hasChildNodes()) {
      divCV.innerHTML = "";
    }
    const valueName = inputName.value;
    const valueAddress = inputAddress.value;
    const valuePhone = inputPhone.value;
    const valueEmail = inputEmail.value;
    const valueSummary = inputSummary.value;
    const valueWebPage = inputWebPage.value;
    const valueImage = inputImage.value;
    const inputsLanguage = document.querySelectorAll("#language");
    const inputsLevelLanguage = document.querySelectorAll("#level-language");
    const inputsSkill = document.querySelectorAll("#skill");
    const inputsInstitution = document.querySelectorAll("#institution");
    const inputsCareer = document.querySelectorAll("#career");
    const inputsYear = document.querySelectorAll("#year");
    const inputsJobTitle = document.querySelectorAll("#job-title");
    const inputsJobPlace = document.querySelectorAll("#job-place");
    const inputsJobDateStart = document.querySelectorAll("#job-date-start");
    const inputsJobDateEnd = document.querySelectorAll("#job-date-end");
    const inputsCertificate = document.querySelectorAll("#certificate");
    const inputsDescription = document.querySelectorAll("#description");
    const valuesLanguage = Array.from(inputsLanguage).map((elem) => elem.value);
    const valuesLevelLanguage = Array.from(inputsLevelLanguage).map(
      (elem) => elem.value
    );
    const valuesSkill = Array.from(inputsSkill).map((elem) => elem.value);
    const valuesJobTitle = Array.from(inputsJobTitle).map((elem) => elem.value);
    const valuesJobDateStart = Array.from(inputsJobDateStart).map(
      (elem) => elem.value
    );
    const valuesJobDateEnd = Array.from(inputsJobDateEnd).map(
      (elem) => elem.value
    );
    const valuesJobPlace = Array.from(inputsJobPlace).map((elem) => elem.value);
    const valuesInstitution = Array.from(inputsInstitution).map(
      (elem) => elem.value
    );
    const valuesCareer = Array.from(inputsCareer).map((elem) => elem.value);
    const valuesYear = Array.from(inputsYear).map((elem) => elem.value);
    const valuesCertificate = Array.from(inputsCertificate).map(
      (elem) => elem.value
    );
    const valuesDescription = Array.from(inputsDescription).map(
      (elem) => elem.value
    );

    const leftDiv = document.createElement("div");
    leftDiv.setAttribute("class", "col-4 col-sm-12 col-md-4 offset-md-2");

    const divBlock = document.createElement("div");
    divBlock.setAttribute("class", "block");

    const divData = document.createElement("div");
    divData.setAttribute("class", "mt-5 mx-5");

    const h2Name = document.createElement("h2");
    h2Name.setAttribute(
      "class",
      "text-primary-emphasis fw-bold font-size-name mt-5 max-width-name "
    );
    h2Name.innerText = `${valueName}`;

    const imageCV = document.createElement("img");
    imageCV.setAttribute("class", "mt-5 ms-2 rounded-50");
    imageCV.setAttribute("width", "300px");
    imageCV.setAttribute("height", "300px");
    imageCV.setAttribute("alt", "Image of the Person");
    imageCV.setAttribute("src", "assets/img/rImage.png");
    imageCV.setAttribute("id", "image-cv");
    readImage(inputImage, imageCV);

    const divContact = document.createElement("div");
    divContact.setAttribute("class", "mt-5 w-75");

    const h3Contact = document.createElement("h3");
    h3Contact.setAttribute("class", "fw-bold text-primary-emphasis");
    h3Contact.innerText = "Contact";

    const hr1 = document.createElement("hr");
    hr1.setAttribute(
      "class",
      "border border-primary border-opacity-100 border-2"
    );

    const pAddressText = document.createElement("p");
    pAddressText.setAttribute("class", "mb-0 fw-bold");
    pAddressText.innerText = "Address:";

    const pAddress = document.createElement("p");
    pAddress.innerText = `${valueAddress}`;

    const br = document.createElement("br");

    const pPhoneText = document.createElement("p");
    pPhoneText.setAttribute("class", "mb-0 fw-bold");
    pPhoneText.innerText = "Phone:";

    const pPhone = document.createElement("p");
    pPhone.innerText = `${valuePhone}`;

    const pEmailText = document.createElement("p");
    pEmailText.setAttribute("class", "mb-0 fw-bold");
    pEmailText.innerText = "Email:";

    const pEmail = document.createElement("p");
    pEmail.innerText = `${valueEmail}`;

    const pWebPageText = document.createElement("p");
    pWebPageText.setAttribute("class", "mb-0 fw-bold");
    pWebPageText.innerText = "Web Page:";

    const aWebPage = document.createElement("a");
    aWebPage.setAttribute("class", "d-block");
    aWebPage.setAttribute("href", valueWebPage);
    aWebPage.innerText = valueWebPage;

    const h3Languages = document.createElement("h3");
    h3Languages.setAttribute("class", "fw-bold text-primary-emphasis mt-3");
    h3Languages.innerText = "Languages";

    const hr2 = document.createElement("hr");
    hr2.setAttribute(
      "class",
      "border border-primary border-opacity-100 border-2"
    );

    const rightDiv = document.createElement("div");
    rightDiv.setAttribute("class", "col-5 col-sm-12 col-md-5 margin-top");

    const h3SummaryText = document.createElement("h3");
    h3SummaryText.setAttribute("class", "fw-bold text-primary-emphasis");
    h3SummaryText.innerText = "Summary";

    const hr3 = document.createElement("hr");
    hr3.setAttribute(
      "class",
      "border border-primary border-opacity-100 border-2"
    );

    const pSummary = document.createElement("p");
    pSummary.setAttribute("class", "max-width-p");
    pSummary.innerText = valueSummary;

    const h3SkillText = document.createElement("h3");
    h3SkillText.setAttribute("class", "fw-bold text-primary-emphasis");
    h3SkillText.innerText = "Skill Highlights";

    const hr4 = document.createElement("hr");
    hr4.setAttribute(
      "class",
      "border border-primary border-opacity-100 border-2"
    );

    const divUl = document.createElement("div");
    divUl.setAttribute("class", "height-ul ps-2 d-flex column-gap-5");

    const ul1 = document.createElement("ul");
    const ul2 = document.createElement("ul");

    const h3ExperienceText = document.createElement("h3");
    h3ExperienceText.setAttribute("class", "fw-bold text-primary-emphasis");
    h3ExperienceText.innerText = "Experience";

    const hr5 = document.createElement("hr");
    hr5.setAttribute(
      "class",
      "border border-primary border-opacity-100 border-2"
    );

    const h3EducationText = document.createElement("h3");
    h3EducationText.setAttribute("class", "fw-bold text-primary-emphasis mt-5");
    h3EducationText.innerText = "Education";

    const hr6 = document.createElement("hr");
    hr6.setAttribute(
      "class",
      "border border-primary border-opacity-100 border-2"
    );

    const divEducation = document.createElement("div");
    divEducation.setAttribute("class", "mt-2");

    const h3CertificateText = document.createElement("h3");
    h3CertificateText.setAttribute(
      "class",
      "fw-bold text-primary-emphasis mt-5"
    );
    h3CertificateText.innerText = "Certifications";

    const hr7 = document.createElement("hr");
    hr7.setAttribute(
      "class",
      "border border-primary border-opacity-100 border-2"
    );

    const divBlockParent = document.createElement("div");
    divBlockParent.setAttribute(
      "class",
      "margin-top-div d-flex flex-row-reverse"
    );

    const divBlock2 = document.createElement("div");
    divBlock2.setAttribute("class", "block width-block");

    leftDiv.appendChild(divBlock);
    leftDiv.appendChild(h2Name);
    leftDiv.appendChild(imageCV);

    divContact.appendChild(h3Contact);
    divContact.appendChild(hr1);
    divContact.appendChild(pAddressText);
    divContact.appendChild(pAddress);
    divContact.appendChild(br);
    divContact.appendChild(pPhoneText);
    divContact.appendChild(pPhone);
    divContact.appendChild(br);
    divContact.appendChild(pEmailText);
    divContact.appendChild(pEmail);
    divContact.appendChild(br);
    divContact.appendChild(pWebPageText);
    divContact.appendChild(aWebPage);
    divContact.appendChild(br);
    divContact.appendChild(h3Languages);
    divContact.appendChild(hr2);
    valuesLanguage.forEach((elem, i) => {
      const pElement = document.createElement("p");
      pElement.setAttribute("class", "mb-0");
      pElement.innerText = `${elem} - ${valuesLevelLanguage[i]}`;
      divContact.appendChild(pElement);
    });

    leftDiv.appendChild(divContact);

    rightDiv.appendChild(h3SummaryText);
    rightDiv.appendChild(hr3);
    rightDiv.appendChild(pSummary);
    rightDiv.appendChild(br);
    rightDiv.appendChild(h3SkillText);
    rightDiv.appendChild(hr4);

    valuesSkill.forEach((elem, i) => {
      const li = document.createElement("li");
      li.innerText = elem;

      if (i % 2 === 0) {
        ul1.appendChild(li);
      } else {
        ul2.appendChild(li);
      }
    });

    divUl.appendChild(ul1);
    divUl.appendChild(ul2);

    rightDiv.appendChild(divUl);
    rightDiv.appendChild(h3ExperienceText);
    rightDiv.appendChild(hr5);
    valuesJobTitle.forEach((elem, i) => {
      const pTitle = document.createElement("p");
      pTitle.setAttribute("class", "mb-0 fw-bold mt-4");
      pTitle.innerText = `${elem.toUpperCase()}, ${valuesJobDateStart[i]} to ${
        valuesJobDateEnd[i]
      }`;

      const pPlace = document.createElement("p");
      pPlace.setAttribute("class", "fw-bold");
      pPlace.innerText = `${valuesJobPlace[i]}`;

      const divDescription = document.createElement("div");
      divDescription.setAttribute("class", "ps-2");

      const ul = document.createElement("ul");
      const li = document.createElement("li");
      li.innerText = `${valuesDescription[i]}`;

      ul.appendChild(li);
      divDescription.appendChild(ul);

      rightDiv.appendChild(pTitle);
      rightDiv.appendChild(pPlace);
      rightDiv.appendChild(divDescription);
    });

    rightDiv.appendChild(h3EducationText);
    rightDiv.appendChild(hr6);
    valuesInstitution.forEach((elem, i) => {
      const pInstitution = document.createElement("p");
      pInstitution.setAttribute("class", "mb-0");
      pInstitution.innerText = `${elem},`;

      const pCareer = document.createElement("p");
      pCareer.setAttribute("class", "mb-0 fw-bold mt-4 fs-5");
      pCareer.innerText = `${valuesCareer[i]},`;

      const pYear = document.createElement("p");
      pYear.setAttribute("class", "mb-0");
      pYear.innerText = `${valuesYear[i]}`;

      divEducation.appendChild(pCareer);
      divEducation.appendChild(pInstitution);
      divEducation.appendChild(pYear);

      rightDiv.appendChild(divEducation);
    });

    rightDiv.appendChild(h3CertificateText);
    rightDiv.appendChild(hr7);
    valuesCertificate.forEach((elem) => {
      const pCertificate = document.createElement("p");
      pCertificate.setAttribute("class", "fw-bold");
      pCertificate.innerText = elem;

      rightDiv.appendChild(pCertificate);
    });

    divBlockParent.appendChild(divBlock2);
    rightDiv.appendChild(divBlockParent);

    divCV.appendChild(leftDiv);
    divCV.appendChild(rightDiv);

    clearFields();
  }
}

btnJob.addEventListener("click", addJob);
btnSave.addEventListener("click", createCV);
btnClear.addEventListener("click", clearFields);
btnCertificate.addEventListener("click", addCertificate);
btnEducation.addEventListener("click", addEducation);
btnSkill.addEventListener("click", addSkill);
btnLanguage.addEventListener("click", addLanguage);
