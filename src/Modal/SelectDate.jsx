import React from 'react'

const SelectDate = () => {
  return (
    <>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
        Modal
      </a>

      <div id="modal-select-date" className="modal bottom-sheet">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    </>
  );
};

export default SelectDate