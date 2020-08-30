// const accordions = Array.from(document.querySelectorAll(".accordion"));
// // ^declaring variable ^changing from object into an array then selecting all classes ".accordion"
const accordionContainer = document.querySelector(".accordion-container");

// accordions.forEach((accordion) => {
//   // start of loop ^
//   const accordionHeader = accordion.querySelector(".accordion__header");
//   // ^Find the accordion header through
//   accordionHeader.addEventListener("click", (e) => {
//     //^Add event listener to the accordion header
//     // accordion.classList.toggle("is-open");
//     // ^Toggle the is-open class
//   });
// });

accordionContainer.addEventListener("click", (e) => {
  const accordionHeader = e.target.closest(".accordion__header");

  // NEW CODE FROM SECTION 8-13 early returns
  if (!accordionHeader) return;

  const accordion = accordionHeader.parentElement;
  // accordion.classList.toggle("is-open");
  const accordionContent = accordionHeader.nextElementSibling;
  const accordionInner = accordionContent.children[0];

  // ternary operator from section 8-13
  const height = accordion.classList.contains("is-open")
    ? 0
    : accordionInner.getBoundingClientRect().height;

  // let height;

  // if (accordion.classList.contains("is-open")) {
  //   height = 0;
  // } else {
  //   height = accordionInner.getBoundingClientRect().height;
  // }
  //   ^^ END OF CODE FROM SECTION 7-12
  //  replaced with Ternary Operator line 26-28

  //   //  Traversing Dom to find height of each individual element

  // const accordionContent = accordionHeader.nextEventSibling;
  // //  1 traversing accordionHeader to find accordion inner using nextEventSibling
  // const accordionInner = accordionHeader.children[0];
  // // 2 traversing accordionInner to find children in the element
  // const height = accordionInner.getBoundingClientRect().height;
  // 3 finally using .getBoundingClientRect to find heights of each element

  accordion.classList.toggle("is-open");
  // template literal from sectionb 8-13
  accordionContent.style.height = `${height}px`;
});
