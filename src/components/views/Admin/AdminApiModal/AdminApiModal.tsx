import React, { FC } from "react";
import { Button, Input } from "src/components/common";
import styles from "./AdminApiModal.module.css";

export const AdminApiModal: FC = () => {
  return (
    <div className={styles.modal}>
      <Input isLightMode label="Account" placeholder="Select an Account" />
      <Input isLightMode label="Name" placeholder="Specify the Name " />
      <Input isLightMode label="Permissions" placeholder="Define permission" />
      <Input isLightMode label="Key" placeholder="zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx" />
      <Input isLightMode label="Secret" placeholder="zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx" />
      <div className={styles.footer}>
        <Button type="secondary">Cancel</Button>
        <Button>Add API Key</Button>
      </div>
    </div>
  );
};

export default AdminApiModal;
