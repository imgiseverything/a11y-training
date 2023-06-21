// @ts-check

/**
 * @var {Record<string, string>}
 * An object of the original values, we can use this to only show errors if the user has chnaged the value
 */
const originalValues = {};

/**
 * @var {<HTMLFormElement | null>}
 */
const form = document.querySelector("[data-js-form]");

/**
 * @var {NodeListOf<HTMLElement> | undefined}
 */
const fields = form?.querySelectorAll("input, select, textarea");

/**
 * Setter for originalValues object
 *
 * @returns {void}
 */
const setOriginalValue = (field) => {
  originalValues[field.name] = field.value;
};

/**
 * validate individual field based upon HTML5 validation rules
 * @param {HTMLElement} field
 * @param {boolean} isBlur
 *
 * @returns {void}
 */
const validateField = (field, isBlur = false) => {
  const error = field.parentNode?.querySelector(".error");

  // Only show an error if the user has changed the values so users just
  // tabbing through don't get bombarded with errors
  if (field.value === originalValues[field.name] && isBlur === true) {
    return;
  }

  if (field.checkValidity()) {
    field.setAttribute("aria-describedby", ""); // needs work
    field.removeAttribute("aria-invalid");
    error.setAttribute("hidden", "");
  } else {
    field.setAttribute("aria-describedby", error.id); // needs work
    field.setAttribute("aria-invalid", true);
    error.removeAttribute("hidden");
  }
};

const validateForm = (event) => {
  if (event.currentTarget.checkValidity() !== true) {
    event.preventDefault();

    fields?.forEach((field) => {
      validateField(field);
    });
  }
};

/**
 *
 *
 * @return {void}
 */
const addEventListeners = () => {
  fields?.forEach((field) => {
    setOriginalValue(field);
    field.addEventListener("blur", () => {
      validateField(field, true);
    });
  });

  form?.addEventListener("submit", validateForm);
};

addEventListeners();
