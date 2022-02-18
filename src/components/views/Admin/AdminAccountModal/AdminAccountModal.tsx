import React, { FC } from "react";
import { Button, Input, OptionInterface, Select } from "src/components/common";
import styles from "./AdminAccountModal.module.css";

export const mockData: OptionInterface[] = [
  { value: "binance", icon: "Binance" },
  { value: "deribit", icon: "Deribit" },
  { value: "ftx", icon: "FTX" },
];

export const AdminAccountModal: FC = () => {
  return (
    <div className={styles.modal}>
      <Select data={mockData} label="Exchange" />
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
