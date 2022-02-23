import classNames from "classnames";
import React, { FC } from "react";
import {
  Button,
  ExchangeLabel,
  Icon,
  LabelElement,
} from "src/components/common";
import styles from "./AdminUserManagementModal.module.css";

export const AdminUserManagementModal: FC<{
  onSelectAccountButtonClick: () => void;
}> = ({ onSelectAccountButtonClick }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2 className={styles.title}>Randy Saris</h2>
        <span className={styles.mail}>randysaris@gmai.com</span>
      </div>
      <div className={styles.labelSection}>
        <h4 className={styles.subtitle}>Permission</h4>
        <div className={styles.labelWrapper}>
          <LabelElement type="yellow">Admin</LabelElement>
          <button type="button" className={styles.subtle}>
            Change
          </button>
        </div>
        {/* <div className={styles.api}>
          <h4 className={classNames(styles.subtitle, styles.withMargin)}>
            API Key
          </h4>
          <div className={styles.apiRow}>
            <div className={styles.copy}>
              <span className={styles.copyText}>
                zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx
              </span>
              <CopyToClipboard
                text="zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
                onCopy={() => toast("Copied successfuly!", { type: "success" })}
              >
                <Icon name="Copy" className={styles.copyButton} />
              </CopyToClipboard>
            </div>
            <button type="button" className={styles.subtle}>
              Generate New API Key
            </button>
          </div>
        </div> */}
        <div className={styles.accounts}>
          <ExchangeLabel exhcange="binance" email="randysaris@gmail.com" />
          {/* <div className={styles.copy}>
            <span className={styles.copyText}>
              zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx
            </span>
            <CopyToClipboard
              text="zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
              onCopy={() => toast("Copied successfuly!", { type: "success" })}
            >
              <Icon name="Copy" className={styles.copyButton} />
            </CopyToClipboard>
          </div> */}
        </div>
        <button
          type="button"
          className={classNames(styles.subtle, styles.add)}
          onClick={onSelectAccountButtonClick}
        >
          <Icon name="Plus" className={styles.icon} />
          New Account Access
        </button>
        <div className={styles.footer}>
          <Button type="secondary">Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagementModal;
