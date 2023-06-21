// @ts-check

/**
 * @var {<HTMLButtonElement> | null}
 */
const showButton = document.querySelector("[data-js-show-gallery]");

/**
 * @var {<HTMLDialogElement> | null}
 */
const dialog = document.getElementById("gallery");

/**
 * @var {<HTMLButtonElement> | null}
 */
const closeButton = dialog?.querySelector("[data-js-hide-gallery]");

/** "Show the dialog" button opens the <dialog> modally */
showButton.addEventListener("click", () => {
  dialog.showModal();
});

/** "Close" button triggers "close" on dialog because of [formmethod="dialog"] */
closeButton.addEventListener("click", () => {
  dialog.close();
});
