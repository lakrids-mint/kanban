import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

interface ModalProps {
  children: any;
  shouldShow?: boolean;
  onRequestClose?: () => void;
}
const modalBackgroundStyles = css`
  background-color: rgba(255, 192, 203, 0.5);
  position: fixed;
  z-index: 1;
  left: 0;
  top: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const modalBody = css`
  background-color: white;
  margin: 10% auto;
  padding: 1rem;
  width: 50%;
  display: grid;
  grid-template-rows: max-content 1fr;
`;

const Modal = ({ children }: ModalProps) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>show modal</button>
      {shouldShow && (
        <div css={modalBackgroundStyles} onClick={() => setShouldShow(false)}>
          <div css={modalBody} onClick={(e) => e.stopPropagation()}>
            <div onClick={() => setShouldShow(false)}>x</div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const ControlledModal = ({
  children,
  shouldShow,
  onRequestClose,
}: ModalProps) => {
  return (
    <>
      {shouldShow && (
        <div css={modalBackgroundStyles} onClick={() => onRequestClose}>
          <div css={modalBody} onClick={(e) => e.stopPropagation()}>
            <div
              css={css`
                justify-self: end;
                cursor: default;
              `}
              onClick={onRequestClose}
            >
              x
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ControlledModal;
