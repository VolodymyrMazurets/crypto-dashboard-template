import React, { CSSProperties, FC, ReactNode } from "react";
import styles from "./ModalWindow.module.css";
import ReactModal from "react-modal";
import { Icon } from "..";

export interface IModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  renderHeadContent?: ReactNode;
  renderFooterContent?: ReactNode;
  style?: CSSProperties;
}

export const ModalWindow: FC<IModalWindowProps> = ({
  children,
  isOpen,
  onClose,
  title,
  renderHeadContent,
  renderFooterContent,
  style = { top: 121, left: 24, right: 24, bottom: 121 },
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      overlayClassName={styles.modal}
      className={styles.content}
      style={{ content: style }}
    >
      <div className={styles.head}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.headCustom}>{renderHeadContent}</div>
        <Icon className={styles.close} name="Cross" onClick={onClose} />
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>{renderFooterContent}</div>
    </ReactModal>
  );
};

export default ModalWindow;
