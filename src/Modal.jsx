import React, { useState } from "react";

function Modal({ addConcept }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addConcept({ title, description, image });
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Abrir el modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Añadir nuevo concepto
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Título
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    URL de la imagen
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
