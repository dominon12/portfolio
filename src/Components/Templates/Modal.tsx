import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import FocusTrap from "focus-trap-react";

import "./Modal.scss";

interface Props {
  visible: boolean;
  setVisible: (nextVisible: boolean) => void;
  quitImpossible?: boolean;
}

/**
 * Modal window template
 * with a close button.
 *
 * @return {*}  {JSX.Element}
 */
const Modal: React.FC<Props> = ({
  visible,
  setVisible,
  quitImpossible,
  children,
}): JSX.Element => {
  const modalRef = useRef<any>(null);

  /**
   * Closes modal window if
   * detects a click outside.
   *
   * @param {MouseEvent} event
   */
  const handleTrackClickOutside = (event: MouseEvent) => {
    const shouldCloseModal =
      modalRef.current && !modalRef.current.contains(event.target);

    if (shouldCloseModal) setVisible(false);
  };

  /**
   * Adds 'mousedown' event listener
   * in order to track clicks outside of
   * the modal window.
   */
  useEffect(() => {
    if (!quitImpossible) {
      document.addEventListener("mousedown", handleTrackClickOutside);
    }

    return () => {
      if (!quitImpossible) {
        document.removeEventListener("mousedown", handleTrackClickOutside);
      }
    };
  }, [modalRef]);

  return visible ? (
    <div role="dialog" aria-modal="true" className="modal">
      <div ref={modalRef} className="modal__content">
        <FocusTrap>
          <div className="modal__content_inner">
            {!quitImpossible && (
              <IoMdClose
                tabIndex={0}
                aria-label="Close"
                className="modal__close hover-highlight"
                onClick={() => setVisible(false)}
              />
            )}
            {children}
          </div>
        </FocusTrap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
