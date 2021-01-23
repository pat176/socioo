import React, { Component, Fragment } from "react";
import styles from "./Submitted.module.css";
import Image from "next/image";
import Router from "next/router";

export default class Submitted extends Component {
  state = {
    showR: false,
  };
  showRes() {
    this.setState({
      showR: true,
    });
  }
  refresh() {
    Router.reload(window.location.pathname);
  }
  render() {
    return (
      <div className={styles.cont}>
        <Image src="/standing-genie.png" height="200" width="150" />
        {this.state.showR ? (
          <div>
            <h1 className={styles.heading}>
              You scored{" "}
              {this.props.totalScore + " / " + this.props.totalQues * 10}{" "}
              points!
            </h1>
            <h2>
              According to your score, our socioo genie categorizes you as{" "}
              {this.props.totalScore / this.props.totalQues <= 2.5
                ? "An amatuer. You lack many social skills, you need to work very harder on your skills!"
                : this.props.totalScore / this.props.totalQues <= 5.0
                ? "A Professional. You lack some social skills, you're doing a great job, but still there's a big scope for improvement :D"
                : this.props.totalScore / this.props.totalQues <= 7.5
                ? "A Master. Some more work on your skills will help you become a grandmaster"
                : "A Grandmaster. Woah, Congrats!, you're in the topmost category, but still never stop learning these skills :D"}
            </h2>
            <button
              className={styles.btn}
              onClick={() => {
                this.refresh();
              }}
            >
              Play again?
            </button>
          </div>
        ) : (
          <div>
            <h1 className={styles.heading}>
              You Scored {this.props.points} points!!
            </h1>
            {this.props.points === 10 ? (
              <h2 className={styles.desc}>
                Great job, you seem to have a good amount of social skills!
              </h2>
            ) : (
              <div>
                <h2 className={styles.desc}>
                  The option you chose is not the best choice, you need to
                  improve your skills.
                </h2>
                {this.props.points > 0 ? (
                  <h2 className={styles.desc}>
                    Although, the option you chose shows that you have some
                    amount of social skills, improve yourself a bit more
                    {this.props.currQues < this.props.totalQues - 1
                      ? " and get a 10 in next one!"
                      : "!"}
                  </h2>
                ) : (
                  ""
                )}
                <h2 className={styles.desc}>
                  The best choice you could have made was: {this.props.bestOpt}
                </h2>
              </div>
            )}
            {this.props.currQues < this.props.totalQues - 1 ? (
              <button
                onClick={() => {
                  this.props.nextQues();
                }}
                className={styles.btn}
              >
                Next Question
              </button>
            ) : (
              <Fragment>
                <h2 className={styles.desc}>
                  Game finished, check where do you stand!
                </h2>
                <button
                  onClick={() => {
                    this.showRes();
                  }}
                  className={styles.btn}
                >
                  View Results
                </button>
              </Fragment>
            )}
          </div>
        )}

        <Image src="/sitting-genie.png" height="200" width="150" />
      </div>
    );
  }
}
