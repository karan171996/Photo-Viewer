import Modal from "react-bootstrap/Modal";
import React from "react";
import CarouselComponent from "./carouselComponent";
class ModalComponent extends React.Component {
  render() {
    const { show, close, data, imageIndex } = this.props;
    console.log("ModalComponent -> render -> imageIndex", imageIndex);
    return (
      <Modal
        show={show}
        onHide={() => close()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Images
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselComponent data={data} index={imageIndex} />
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalComponent;
