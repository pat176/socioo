import React, { Component } from "react";
import styles from "../styles/MeetGenie.module.css";
import Link from "next/link";
import Image from "next/image";

export class MeetGenie extends Component {
  render() {
    return (
      <div className={styles.mainCont}>
        <div className={styles.cont}>
          <Image
            src="/../public/sitting-genie.png"
            alt="sitting genie"
            height="230"
            width="190"
          />
          <h1>
            Before playing, meet our judge - "The Socioo Genie"!!, he's the one
            who judges you on the basis of your answers. He's got a magical
            stick too, he can use it to give you several social skills if he
            becomes happy by your answers :D
          </h1>
        </div>
        <Link href="/play">
          <a className={styles.btn}>Play!</a>
        </Link>
      </div>
    );
  }
}

export default MeetGenie;
