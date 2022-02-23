import React, { useContext } from "react";
import { AppContext } from "../context/provider"
import M from "materialize-css";

const OpenImage = () => {
  const [ imageURL, setImageURL ] = useContext(AppContext)

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  });

  return (
    <>      

      <div id="modal-OpenImage" className="modal">
        <div className="modal-content" id="OpenedImage">
          <img className="OpenedImage" src={ imageURL } alt="" />
        </div>
      </div>
    </>
  );
};

export default OpenImage;
