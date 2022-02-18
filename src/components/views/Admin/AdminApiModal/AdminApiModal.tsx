import React, { FC } from "react";
import { Button, Input, OptionInterface, Select } from "src/components/common";
import styles from "./AdminApiModal.module.css";

export const mockData: OptionInterface[] = [
  { value: "binance", label: "Jhon Doe", icon: "Binance" },
  { value: "deribit", label: "Jhon Doe", icon: "Deribit" },
  { value: "ftx", label: "Jhon Doe", icon: "FTX" },
];

export const mockDataPermissions: OptionInterface[] = [
  { value: "Read-Only", label: "Read-Only" },
  { value: "Read-Write", label: "Read-Write" },
];

export const AdminApiModal: FC = () => {
  return (
    <div className={styles.modal}>
      <Select data={mockData} label="Account" placeholder="Select an Account" />
      <Input isLightMode label="Name" placeholder="Specify the Name " />
      <Select
        data={mockDataPermissions}
        label="Permissions"
        placeholder="Define permission"
      />
      <Input
        isLightMode
        label="Key"
        placeholder="zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
      />
      <Input
        isLightMode
        label="Secret"
        placeholder="zaCELgL.0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx"
      />
      <div className={styles.footer}>
        <Button type="secondary">Cancel</Button>
        <Button>Add API Key</Button>
      </div>
    </div>
  );
};

export default AdminApiModal;
