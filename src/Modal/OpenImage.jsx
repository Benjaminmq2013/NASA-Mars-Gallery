import React from "react";
import M from "materialize-css";

const OpenImage = () => {
  

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  });

  return (
    <>      

      <div id="modal1" className="modal">
        <div className="modal-content blue">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default OpenImage;
