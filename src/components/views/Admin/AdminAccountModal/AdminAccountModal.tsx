import React, { FC } from "react";
import { Button, Input } from "src/components/common";
import styles from "./AdminAccountModal.module.css";

export const AdminAccountModal: FC = () => {
  return (
    <div className={styles.modal}>
      <Input isLightMode label="Portfolio" placeholder="Select Portfolio" />
      <Input isLightMode label="Exchange" placeholder="Select Exchnage" />
      <Input isLightMode label="Name" placeholder="Specify Account Name" />
      <Input isLightMode label="API Key" placeholder="API Key" />
      <Input isLightMode label="Secret Key" placeholder="Secret Key" />
      <Input
        isLightMode
        label="Subaccount Name"
        subLabel="(optional)"
        placeholder="Specify Subaccount Account"
      />
      <div className={styles.footer}>
        <Button type="secondary">Cancel</Button>
        <Button>Add Account</Button>
      </div>
    </div>
  );
};

export default AdminAccountModal;
