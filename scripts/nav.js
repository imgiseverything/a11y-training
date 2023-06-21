// @ts-check

/**
 * @var {<HTMLButtonElement> | null}
 */
const button = document.getElementById("burger");

/**
 * @var {<HTMLNavElement> | null}
 */
const popover = document.getElementById("nav");

/**
 * Hide the account popover
 *
 * @returns {void}
 */
const hidePopover = () => {
  button?.setAttribute("aria-expanded", false);
  popover?.setAttribute("hidden", "");
};

/**
 * Show/hide the account popover
 *
 * @returns {void}
 */
const togglePopover = (event) => {
  event.preventDefault(); // stop link resolving #progressiveEnhancement

  const isCollapsed = popover?.getAttribute("hidden") === "";

  if (isCollapsed === true) {
    button?.setAttribute("aria-expanded", true);
    nav?.removeAttribute("hidden");
  } else {
    hidePopover();
  }
};

button?.addEventListener("click", togglePopover);

/**
 * Handle when the user presses a key on the document/window
 * @param {KeyboardEvent} keyboardEvent
 *
 * @return {void}
 */
const handleDocumentKeyDown = (keyboardEvent) => {
  switch (keyboardEvent.key) {
    default:
      break;
    // Hide the basket on ESC press... because it is easier for keyboard users to close this way
    case "Escape":
      hidePopover();
      break;
  }
};

document.addEventListener("keydown", handleDocumentKeyDown);

/**
 * Close the account popover when the user clicks outside of it
 * @param {Event} event
 *
 * @return {void}
 */
const handleDocumentClick = (event) => {
  if (!popover || !button) {
    console.error("Popover or button is not present");
    return;
  }

  if (!popover?.contains(event.target) && button !== event.target) {
    hidePopover();
  }
};

document.addEventListener("click", handleDocumentClick);
