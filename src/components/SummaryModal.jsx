import React from "react";
import ReactDOM from "react-dom";
import "./SummaryModal.css"; // simple global CSS

function SummaryModal({ summary, onClose }) {
  if (!summary) return null;

  return ReactDOM.createPortal(
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <h2>Summary</h2>
        <p>{summary}</p>
        <button className="closeBtn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}

export default SummaryModal;
