import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import styles from "../styles/menu.module.css";

const Menu = ({ options }) => {
  const [show, setShow] = useState(false);

  const handleClick = (action) => {
    setShow(false);
    if (action) {
      action();
    }
  };

  return (
    <div>
      {show && <div className={styles.full} onClick={() => setShow(false)} />}
      <div className={styles.icon} onClick={() => setShow(!show)}>
        <BiDotsVerticalRounded size={30} />
      </div>
      {show && (
        <>
          <div className={styles.menu}>
            {options &&
              options.map((option, index) => (
                <div key={index} onClick={() => handleClick(option.action)}>
                  <p className={styles.option} key={option.name}>
                    {option.name}
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
