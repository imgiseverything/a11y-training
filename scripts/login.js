// @ts-check

/**
 * @var {<HTMLButtonElement> | null}
 */
const loginButton = document.getElementById("login-button");

/**
 * @var {<HTMLButtonElement> | null}
 */
const loginSubmitButton = document.getElementById("login-submit-button");

/**
 * @var {<HTMLButtonElement> | null}
 */
const loginCloseButton = document.getElementById("login-close-button");

/**
 * @var {<HTMLDialogElement> | null}
 */
const loginDialog = document.getElementById("login-dialog");

// Update button opens a modal dialog
loginButton?.addEventListener("click", () => {
  loginDialog?.showModal();
});

// Form cancel button closes the dialog box
loginCloseButton?.addEventListener("click", () => {
  loginDialog?.close();
});

// Form submit button closes the dialog box (it's not a real log-in form... so this is ok)
loginSubmitButton?.addEventListener("click", () => {
  loginDialog?.close();
});
