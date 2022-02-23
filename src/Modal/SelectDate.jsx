import React from 'react'
import M from "materialize-css"
import SelectDateInput from './SelectDateInput';
import menu_icon from "../assets/icons/menu.svg"

const SelectDate = () => {

    document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll(".modal");
        var instances = M.Modal.init(elems);
      });

  return (
    <>
      <a className="waves-effect waves-light btn-floating btn-large modal-trigger" href="#modal-select-date" id="modalDate-btn">
        <img src={ menu_icon } alt="" />
      </a>

      <div id="modal-select-date" className="modal bottom-sheet">
        <div className="modal-content blue lighten-1">
          <h4 className="white-text">Select a date to get more images</h4>
          <SelectDateInput />
        </div>
        <div className="modal-footer blue lighten-1 ">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat white-text">
            Agree
          </a>
        </div>
      </div>
    </>
  );
};

export default SelectDate