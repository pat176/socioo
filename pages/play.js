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
        options: shuffle([
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
        ]),
        img: "/ques1.png",
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
        img: "/dog.png",
      },
      {
        title:
          "You're in a nearby park. You see a small girl playing there and she suddenly falls on the ground and she starts crying very loudly. What would you do?",
        bestOpt: "First A and then C",
        options: [
          {
            desc:
              "Go towards her and pick her up and try to stop her from crying",
            points: 7,
          },
          {
            desc:
              "Walk out of the park so that you won't hear her irritating crying.",
            points: 0,
          },
          {
            desc:
              "Go to her and start asking where is her home and take her there",
            points: 5,
          },
          { desc: "First A and then C", points: 10 },
        ],
        img: "/park.png",
      },
      {
        title:
          "You bought some extra food to your school by mistake and couldn't eat that much. What'll you do with that?",
        bestOpt: "Share that with your friends. Sharing is caring :D",
        options: [
          {
            desc: "Take it back to home and throw it.",
            points: 0,
          },
          {
            desc: "Throw it in the school dustbin",
            points: 0,
          },
          {
            desc: "Take it back to home and eat it then.",
            points: 5,
          },
          { desc: "Share that with your friends", points: 10 },
        ],
        img: "/ques4.png",
      },
      {
        title:
          "You an unrecognized man approaching you with a box in his hands which looks like a gift, he comes to you and says that this is for you, what would you do?",
        bestOpt:
          "Deny for the gift and walk right away and ignore him completely",
        options: shuffle([
          {
            desc: "Take it to your home happily",
            points: 0,
          },
          {
            desc:
              "Take it and throw it away without opening it when he goes from there.",
            points: 6,
          },
          {
            desc:
              "Take it and give it to the police station and complain about that man",
            points: 10,
          },
          {
            desc:
              "Deny for the gift and walk right away and ignore him completely",
            points: 10,
          },
        ]),
        img: "/ques4.png",
      },
      {
        title:
          "You go out in night in a wedding, while returning you see an old man laying on footpath shivering in cold, what will you do?",
        bestOpt:
          "Try to arrange a blanket for him and buy him some hot tea from a nearby shop",
        options: shuffle([
          {
            desc: "Ignore him and let him be in his condition",
            points: 0,
          },
          {
            desc:
              "Go to him and ask how can you help him and move away without helping",
            points: 0,
          },
          {
            desc:
              "Go to him and ask if he has family or not and if he has family then try to reach out to them",
            points: 6,
          },
          {
            desc:
              "Try to arrange a blanket for him and buy him some hot tea from a nearby shop and give him some money too if possible",
            points: 10,
          },
        ]),
        img: "/lying-man.jpg",
      },
      {
        title:
          "You saw one of your classmates stealing a pen from your other classmate's pocket, what would you do?",
        bestOpt:
          "Go to that kid and tell him not to do this again and tell him to return that pen to that child and if he does that again then complain to the teacher",
        options: shuffle([
          {
            desc: "Ignore him and keep doing what you're doing",
            points: 0,
          },
          {
            desc:
              "Go to him and snatch the pen from him and hit him very badly to teach him a lesson.",
            points: 0,
          },
          {
            desc:
              "Tell the other classmate whose pen has been stolen and let him deal with it.",
            points: 6,
          },
          {
            desc:
              "Go to that kid and tell him not to do this again and tell him to return that pen to that child and if he does that again then complain to the teacher",
            points: 10,
          },
        ]),
        img: "/school-pen.png",
      },
      {
        title:
          "You are being hitted and bullied by a classmate of yours for no reason, what would you do?",
        bestOpt:
          "Tell him not to do this and if he still doesn't stop, then stand up and walk to the teacher and complain about his behaviour",
        options: shuffle([
          {
            desc: "Ignore him and keep getting hitted, it doesn't hurt.",
            points: 0,
          },
          {
            desc: "Stand up and hit him with double intensity.",
            points: 0,
          },
          {
            desc: "Call your friends to gang up against him.",
            points: 6,
          },
          {
            desc:
              "Tell him not to do this and if he still doesn't stop, then stand up and walk to the teacher and complain about his behaviour",
            points: 10,
          },
        ]),
        img: "/school-pen.png",
      },
      {
        title: "You see a student cheating in the exam, what would you do?",
        bestOpt:
          "Warn him if this is the first time you saw him and if you see him again then complain to your teacher.",
        options: shuffle([
          {
            desc: "Tell him to give some cheating skills to you too.",
            points: 0,
          },
          {
            desc:
              "Blackmail him for months that you'll tell about this to teacher.",
            points: 0,
          },
          {
            desc: "Complain to the teacher right away.",
            points: 6,
          },
          {
            desc:
              "Warn him if this is the first time you saw him and if you see him again then complain to your teacher.",
            points: 10,
          },
        ]),
        img: "/sitting-boy.png",
      },
      {
        title:
          "You see a man smoking in front of your house, and is standing there since last hour, what will you do?",
        bestOpt:
          "Tell any elder(don't do by your own as he might think that you are a kid and might not listen to you) in your house about it and ask them to make him go away.",
        options: shuffle([
          {
            desc: "Tell him to go away.",
            points: 5,
          },
          {
            desc:
              "Ignore him by thinking that he might go after some time as nobody can stand at a place for more than 2 hours, if we think practically.",
            points: 0,
          },
          {
            desc: "Call police if he seem suspicious.",
            points: 6,
          },
          {
            desc:
              "Tell any elder in your house about it and ask them to make him go away.",
            points: 10,
          },
        ]),
        img: "/smoking-man.png",
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
