import React from "react";

const Modalaltai = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="modal-body">
      <div className={showHideClassName}>
        <section className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Create Project</h4>
            </div>
            <div className="modal-body">
              Not yet madfakw'ijAF;OIHJ W'aoifj 'oijf'PIOH WOLe
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-default"
              >
                Close
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modalaltai;
