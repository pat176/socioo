import React, { Component, Fragment } from "react";
import styles from "../styles/Play.module.css";
import Image from "next/image";
import Submitted from "../app/components/Submitted";
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export class Play extends Component {
  state = {
    totPoints: 0,
    submitted: false,
    ques: shuffle([
      {
        title:
          "A Handicap Lady is coming towards you from opposite direction, what would you do?",
        bestOpt:
          "Change your way so that lady could keep following her path and don't have to change it.",
        options: [
          {
            desc:
              "Keep walking and ignore the lady completely and let her go by changing her way",
            points: 0,
          },
          {
            desc: "Stop at your place and let the lady go by changing her way",
            points: 4,
          },
          {
            desc:
              "Change your way so that lady could keep following her path and don't have to change it.",
            points: 10,
          },
          { desc: "None of the above", points: 0 },
        ],
        img: "/../public/ques1.png",
      },
      {
        title:
          "You see a stray dog, laying outside your house, looking very thin and hungry, you hear his voices of continuous crying, what would you do?",
        bestOpt: "Both B and C",
        options: [
          {
            desc:
              "Ignore him completely and close all the doors and windows so that you won't hear his voices again",
            points: 0,
          },
          {
            desc:
              "Take him to the nearby veterinary doctor if he seem in a really critical condition",
            points: 7,
          },
          {
            desc: "Serve him some food and provide shelter too if possible",
            points: 7,
          },
          { desc: "Both B and C", points: 10 },
        ],
        img: "/../public/dog.png",
      },
    ]),
    quesNo: 0,
    selectedIndex: undefined,
  };
  incQues() {
    this.setState({ quesNo: this.state.quesNo + 1, submitted: false });
    console.log(this.state.quesNo);
  }
  decQues() {
    this.setState({ quesNo: this.state.quesNo - 1 });
  }
  optSelected(index) {
    this.setState({
      selectedIndex: index,
    });
    console.log(this.state.selectedIndex);
  }
  submitOpt() {
    const points =
      this.state.totPoints +
      this.state.ques[this.state.quesNo].options[this.state.selectedIndex]
        .points;
    console.log(points);
    this.setState({
      submitted: true,
      totPoints: points,
    });
  }
  render() {
    const tmp = this.state.quesNo;
    // const afterSubmitted = (
    //   <Submitted
    //     points={this.state.ques[tmp].options[this.state.selectedIndex].points}
    //     bestOpt={this.state.ques[tmp].bestOpt}
    //     currQues={this.state.quesNo}
    //     totalQues={this.state.ques.length}
    //     nextQues={this.incQues}
    //   >
    //     Submitted
    //   </Submitted>
    // );
    return (
      <div>
        {this.state.submitted ? (
          <Submitted
            points={
              this.state.ques[tmp].options[this.state.selectedIndex].points
            }
            bestOpt={this.state.ques[tmp].bestOpt}
            currQues={this.state.quesNo}
            totalQues={this.state.ques.length}
            nextQues={() => this.incQues()}
            totalScore={this.state.totPoints}
          ></Submitted>
        ) : (
          <Fragment>
            <h1 className={styles.head}>
              {tmp + 1 + ". " + this.state.ques[this.state.quesNo].title}
            </h1>
            <div className={styles.cont}>
              <Image
                src={this.state.ques[tmp].img}
                alt=""
                height="420"
                width="505"
                className={styles.img}
              />
              <div>
                {this.state.ques[tmp].options.map((option, index) => (
                  <button
                    key={index}
                    className={
                      styles.opt +
                      (this.state.selectedIndex == index ? " sel" : " unsel")
                    }
                    onClick={() => {
                      this.optSelected(index);
                    }}
                  >
                    {option.desc}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.btnCont}>
              {this.state.selectedIndex >= 0 ? (
                <button
                  className={styles.btn}
                  onClick={() => {
                    this.submitOpt();
                  }}
                >
                  Submit
                </button>
              ) : null}
            </div>
          </Fragment>
        )}
        {/* {tmp + 1 < this.state.ques.length ? (
            <button className={styles.btn} onClick={this.incQues.bind(this)}>
              Next
            </button>
          ) : null}
          {tmp > 0 ? (
            <button className={styles.btn} onClick={this.decQues.bind(this)}>
              Prev
            </button>
          ) : null} */}
      </div>
    );
  }
}

export default Play;
