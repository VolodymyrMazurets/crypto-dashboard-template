import { map } from "lodash";
import React, { FC, useRef, useState } from "react";
import classNames from "classnames";
import { Button, Icon, Input } from "src/components/common";
import styles from "./AdminSelectAccountModal.module.css";

interface IAdminSelectAccountModalProps {
  onSubmitClick: () => void;
  onCancel: () => void;
}

export const AdminSelectAccountModal: FC<IAdminSelectAccountModalProps> = ({
  onSubmitClick,
}) => {
  const [selected, setSelected] = useState<string | undefined>();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.modal}>
      <Input
        className={classNames(styles.input, {
          [styles.inactive]: !isSearchVisible,
        })}
        isSearchMode
        isLightMode
        placeholder="Search"
        ref={input}
      />
      <Icon
        name="Search"
        onClick={() => {
          setIsSearchVisible(true);
          setTimeout(() => input.current?.focus(), 100);
        }}
        className={styles.search}
      />
      {map(["1", "2", "3"], (item) => (
        <div
          className={classNames(styles.item, {
            [styles.active]: selected === item,
          })}
          key={item}
          onClick={() => setSelected(item)}
        >
          <div className={styles.wrapper}>
            <span className={styles.name}>Test Account</span>
            <Icon name="Binance" className={styles.exchange} />
          </div>
          <div className={styles.wrapper}>
            <span className={styles.subname}>Subaccount Name</span>
            <span className={styles.subvalue}>defaultaccount</span>
          </div>
        </div>
      ))}
      <div className={styles.footer}>
        <Button type="secondary">Cancel</Button>
        <Button disabled={!selected} onClick={onSubmitClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AdminSelectAccountModal;
