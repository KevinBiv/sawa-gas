import actionTypes from "./types";
import html2pdf from "html2pdf.js";
export const getPeople = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getPeople });
  };
};
export const generatePdfMembers = () => {
  return (dispatch) => {
    var element = document.getElementById("people-table");
    var clonedElement = element.cloneNode(true);
    // change display of cloned element

    // clonedElement.style.display = "block";
    var opt = {
      margin: 1,
      filename: "members.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(clonedElement).set(opt).save();
    // clonedElement.remove();
  };
};
