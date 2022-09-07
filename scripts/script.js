$(document).ready(() => {
  const toggle = $("#navbar-toggler");
  let ariaExpanded = $("#navbar-toggler").attr("aria-expanded");

  toggle.click(() => {
    if (ariaExpanded === true) {
      ariaExpanded = false;
    } else {
      ariaExpanded = true;
    }
    toggle.attr("aria-expanded", ariaExpanded);
  });
});
