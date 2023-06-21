// @ts-check

/**
 * @var {NodeListOf<HTMLButtonElement> | undefined}
 */
const tabs = document.querySelectorAll('[role="tab"]');

/**
 * @var {NodeListOf<HTMLDivElement> | undefined}
 */
const tabpanels = document.querySelectorAll('[role="tabpanel"]');

/**
 *
 * @param {Event} event
 *
 * @return {void}
 */
const handleTabClick = (event) => {
  const clickedTab = event.currentTarget;

  if (!clickedTab) {
    console.error("no tab");
    return;
  }

  const isActiveTab = clickedTab.getAttribute("aria-selected") === "true";

  if (isActiveTab) {
    console.error(
      "tab active already",
      clickedTab,
      clickedTab.getAttribute("aria-selected")
    );
    return;
  }

  const activeTabpanel = document.getElementById(
    clickedTab.getAttribute("aria-controls")
  );

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].setAttribute("aria-selected", "false");
  }

  clickedTab.setAttribute("aria-selected", "true");

  for (let i = 0; i < tabpanels.length; i++) {
    tabpanels[i].setAttribute("hidden", "");
  }

  activeTabpanel?.removeAttribute("hidden");
};

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", handleTabClick);
}
