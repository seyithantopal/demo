import React, { Component } from 'react';
import './App.css';

import PullRequests from './components/PullRequests';
import Comment from './components/Comment';


class App extends Component {
  constructor(props) {
    super(props);
    this.sampleComments = {
      "prComments": {
        "137195340": {
          "prNumber": 17,
          "commentAuthor": "mkelly",
          "prAuthor": "creynor",
          "prId": 657516815,
          "commentCreatedAt": "2019-04-15",
          "commentTopic": "maintainability",
          "commentType": "change"
        },
        "138756942": {
          "prNumber": 7,
          "commentAuthor": "creynor",
          "prAuthor": "bbenson",
          "prId": 347333725,
          "commentCreatedAt": "2019-04-04",
          "commentTopic": "modularity",
          "commentType": "change"
        },
        "140543489": {
          "prNumber": 11,
          "commentAuthor": "ksaarn",
          "prAuthor": "mkelly",
          "prId": 185005069,
          "commentCreatedAt": "2019-04-07",
          "commentTopic": "correctness",
          "commentType": "discuss"
        },
        "144190325": {
          "prNumber": 10,
          "commentAuthor": "athorn",
          "prAuthor": "creynor",
          "prId": 110837591,
          "commentCreatedAt": "2019-04-07",
          "commentTopic": "efficiency",
          "commentType": "discuss"
        },
        "161630652": {
          "prNumber": 4,
          "commentAuthor": "bbenson",
          "prAuthor": "ksaarn",
          "prId": 495033053,
          "commentCreatedAt": "2019-04-01",
          "commentTopic": "efficiency",
          "commentType": "suggest"
        },
        "205467231": {
          "prNumber": 19,
          "commentAuthor": "bbenson",
          "prAuthor": "athorn",
          "prId": 186718491,
          "commentCreatedAt": "2019-04-20",
          "commentTopic": "readability",
          "commentType": "discuss"
        },
        "238375819": {
          "prNumber": 16,
          "commentAuthor": "creynor",
          "prAuthor": "mkelly",
          "prId": 809121385,
          "commentCreatedAt": "2019-04-14",
          "commentTopic": "maintainability",
          "commentType": "change"
        },
        "243345546": {
          "prNumber": 20,
          "commentAuthor": "creynor",
          "prAuthor": "ksaarn",
          "prId": 697835429,
          "commentCreatedAt": "2019-04-23",
          "commentTopic": "efficiency",
          "commentType": "praise"
        },
        "243463123": {
          "prNumber": 12,
          "commentAuthor": "mkelly",
          "prAuthor": "athorn",
          "prId": 388344111,
          "commentCreatedAt": "2019-04-11",
          "commentTopic": "maintainability",
          "commentType": "change"
        },
        "264852083": {
          "prNumber": 17,
          "commentAuthor": "mkelly",
          "prAuthor": "creynor",
          "prId": 657516815,
          "commentCreatedAt": "2019-04-15",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "304453480": {
          "prNumber": 13,
          "commentAuthor": "mkelly",
          "prAuthor": "ksaarn",
          "prId": 203960580,
          "commentCreatedAt": "2019-04-12",
          "commentTopic": "efficiency",
          "commentType": "praise"
        },
        "359316959": {
          "prNumber": 8,
          "commentAuthor": "ksaarn",
          "prAuthor": "athorn",
          "prId": 498645461,
          "commentCreatedAt": "2019-04-04",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "361558244": {
          "prNumber": 10,
          "commentAuthor": "mkelly",
          "prAuthor": "creynor",
          "prId": 110837591,
          "commentCreatedAt": "2019-04-06",
          "commentTopic": "modularity",
          "commentType": "change"
        },
        "392161901": {
          "prNumber": 4,
          "commentAuthor": "bbenson",
          "prAuthor": "ksaarn",
          "prId": 495033053,
          "commentCreatedAt": "2019-04-01",
          "commentTopic": "efficiency",
          "commentType": "suggest"
        },
        "397654352": {
          "prNumber": 21,
          "commentAuthor": "athorn",
          "prAuthor": "creynor",
          "prId": 252017364,
          "commentCreatedAt": "2019-04-26",
          "commentTopic": "modularity",
          "commentType": "suggest"
        },
        "423750691": {
          "prNumber": 19,
          "commentAuthor": "bbenson",
          "prAuthor": "athorn",
          "prId": 186718491,
          "commentCreatedAt": "2019-04-20",
          "commentTopic": "correctness",
          "commentType": "suggest"
        },
        "426599784": {
          "prNumber": 10,
          "commentAuthor": "mkelly",
          "prAuthor": "creynor",
          "prId": 110837591,
          "commentCreatedAt": "2019-04-08",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "428300904": {
          "prNumber": 7,
          "commentAuthor": "ksaarn",
          "prAuthor": "bbenson",
          "prId": 347333725,
          "commentCreatedAt": "2019-04-05",
          "commentTopic": "maintainability",
          "commentType": "suggest"
        },
        "428401909": {
          "prNumber": 14,
          "commentAuthor": "ksaarn",
          "prAuthor": "bbenson",
          "prId": 202214671,
          "commentCreatedAt": "2019-04-13",
          "commentTopic": "correctness",
          "commentType": "praise"
        },
        "431151534": {
          "prNumber": 10,
          "commentAuthor": "athorn",
          "prAuthor": "creynor",
          "prId": 110837591,
          "commentCreatedAt": "2019-04-07",
          "commentTopic": "maintainability",
          "commentType": "praise"
        },
        "441848760": {
          "prNumber": 16,
          "commentAuthor": "creynor",
          "prAuthor": "mkelly",
          "prId": 809121385,
          "commentCreatedAt": "2019-04-14",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "458245052": {
          "prNumber": 5,
          "commentAuthor": "athorn",
          "prAuthor": "creynor",
          "prId": 127428071,
          "commentCreatedAt": "2019-04-03",
          "commentTopic": "efficiency",
          "commentType": "suggest"
        },
        "484542214": {
          "prNumber": 14,
          "commentAuthor": "ksaarn",
          "prAuthor": "bbenson",
          "prId": 202214671,
          "commentCreatedAt": "2019-04-13",
          "commentTopic": "maintainability",
          "commentType": "change"
        },
        "507305465": {
          "prNumber": 10,
          "commentAuthor": "mkelly",
          "prAuthor": "creynor",
          "prId": 110837591,
          "commentCreatedAt": "2019-04-06",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "522495020": {
          "prNumber": 6,
          "commentAuthor": "bbenson",
          "prAuthor": "mkelly",
          "prId": 552785453,
          "commentCreatedAt": "2019-04-04",
          "commentTopic": "efficiency",
          "commentType": "praise"
        },
        "546220746": {
          "prNumber": 9,
          "commentAuthor": "bbenson",
          "prAuthor": "mkelly",
          "prId": 838861419,
          "commentCreatedAt": "2019-04-06",
          "commentTopic": "modularity",
          "commentType": "change"
        },
        "563263052": {
          "prNumber": 13,
          "commentAuthor": "mkelly",
          "prAuthor": "ksaarn",
          "prId": 203960580,
          "commentCreatedAt": "2019-04-12",
          "commentTopic": "efficiency",
          "commentType": "suggest"
        },
        "569040693": {
          "prNumber": 5,
          "commentAuthor": "athorn",
          "prAuthor": "creynor",
          "prId": 127428071,
          "commentCreatedAt": "2019-04-03",
          "commentTopic": "modularity",
          "commentType": "discuss"
        },
        "571395507": {
          "prNumber": 21,
          "commentAuthor": "athorn",
          "prAuthor": "creynor",
          "prId": 252017364,
          "commentCreatedAt": "2019-04-25",
          "commentTopic": "readability",
          "commentType": "praise"
        },
        "599455989": {
          "prNumber": 10,
          "commentAuthor": "mkelly",
          "prAuthor": "creynor",
          "prId": 110837591,
          "commentCreatedAt": "2019-04-08",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "624506321": {
          "prNumber": 11,
          "commentAuthor": "ksaarn",
          "prAuthor": "mkelly",
          "prId": 185005069,
          "commentCreatedAt": "2019-04-07",
          "commentTopic": "correctness",
          "commentType": "change"
        },
        "674635141": {
          "prNumber": 5,
          "commentAuthor": "athorn",
          "prAuthor": "creynor",
          "prId": 127428071,
          "commentCreatedAt": "2019-04-03",
          "commentTopic": "maintainability",
          "commentType": "suggest"
        },
        "719448745": {
          "prNumber": 7,
          "commentAuthor": "creynor",
          "prAuthor": "bbenson",
          "prId": 347333725,
          "commentCreatedAt": "2019-04-05",
          "commentTopic": "efficiency",
          "commentType": "praise"
        },
        "761005919": {
          "prNumber": 7,
          "commentAuthor": "creynor",
          "prAuthor": "bbenson",
          "prId": 347333725,
          "commentCreatedAt": "2019-04-05",
          "commentTopic": "maintainability",
          "commentType": "suggest"
        },
        "777392062": {
          "prNumber": 18,
          "commentAuthor": "athorn",
          "prAuthor": "bbenson",
          "prId": 964428930,
          "commentCreatedAt": "2019-04-17",
          "commentTopic": "correctness",
          "commentType": "change"
        },
        "786652383": {
          "prNumber": 4,
          "commentAuthor": "mkelly",
          "prAuthor": "ksaarn",
          "prId": 495033053,
          "commentCreatedAt": "2019-04-02",
          "commentTopic": "correctness",
          "commentType": "change"
        },
        "826490346": {
          "prNumber": 18,
          "commentAuthor": "mkelly",
          "prAuthor": "bbenson",
          "prId": 964428930,
          "commentCreatedAt": "2019-04-19",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "854977133": {
          "prNumber": 18,
          "commentAuthor": "creynor",
          "prAuthor": "bbenson",
          "prId": 964428930,
          "commentCreatedAt": "2019-04-20",
          "commentTopic": "correctness",
          "commentType": "discuss"
        },
        "887725097": {
          "prNumber": 16,
          "commentAuthor": "creynor",
          "prAuthor": "mkelly",
          "prId": 809121385,
          "commentCreatedAt": "2019-04-14",
          "commentTopic": "maintainability",
          "commentType": "discuss"
        },
        "903219281": {
          "prNumber": 18,
          "commentAuthor": "athorn",
          "prAuthor": "bbenson",
          "prId": 964428930,
          "commentCreatedAt": "2019-04-17",
          "commentTopic": "readability",
          "commentType": "discuss"
        },
        "918662312": {
          "prNumber": 4,
          "commentAuthor": "mkelly",
          "prAuthor": "ksaarn",
          "prId": 495033053,
          "commentCreatedAt": "2019-04-02",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "934332130": {
          "prNumber": 12,
          "commentAuthor": "mkelly",
          "prAuthor": "athorn",
          "prId": 388344111,
          "commentCreatedAt": "2019-04-11",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "973656284": {
          "prNumber": 10,
          "commentAuthor": "mkelly",
          "prAuthor": "creynor",
          "prId": 110837591,
          "commentCreatedAt": "2019-04-06",
          "commentTopic": "readability",
          "commentType": "suggest"
        },
        "976140763": {
          "prNumber": 8,
          "commentAuthor": "ksaarn",
          "prAuthor": "athorn",
          "prId": 498645461,
          "commentCreatedAt": "2019-04-04",
          "commentTopic": "correctness",
          "commentType": "suggest"
        },
        "985121017": {
          "prNumber": 15,
          "commentAuthor": "athorn",
          "prAuthor": "creynor",
          "prId": 892287985,
          "commentCreatedAt": "2019-04-13",
          "commentTopic": "readability",
          "commentType": "praise"
        },
        "997168809": {
          "prNumber": 7,
          "commentAuthor": "creynor",
          "prAuthor": "bbenson",
          "prId": 347333725,
          "commentCreatedAt": "2019-04-04",
          "commentTopic": "modularity",
          "commentType": "suggest"
        }
      }
    };
    this.state = {
      comments: this.sampleComments,
      pullRequests: [],
      mode: 'default',
      id: 0,
    }
  }

  changeMode = (mode, id) => {
    if(mode === 'comment') this.setState({id: id});
    this.setState({
      mode: mode,
    });
  }

  render() {
    if(this.state.mode === 'default') {
      return (
        <div>
          <PullRequests
          comments={this.state.comments}
          changeMode={this.changeMode} />
        </div>
      );
    } else if(this.state.mode === 'comment') {
      return (
        <div>
          <Comment
          comments={this.state.comments}
          id={this.state.id}
          changeMode={this.changeMode} />
        </div>
      );
    } 
  }
}

export default App;
