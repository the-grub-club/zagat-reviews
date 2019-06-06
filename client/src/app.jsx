/* eslint-disable react/no-array-index-key */
/* eslint-disable no-debugger */
/* eslint-disable react/no-unused-state */
/* eslint-disable comma-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */

import React from 'react';
import $ from 'jquery';
import Header from './components/header.jsx';
import Graph from './components/graph.jsx';
import Scores from './components/scores.jsx';
import Reviewphrase from './components/reviewphrase.jsx';
import styles from '../dist/styles/appstyles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRestaurant: {
        name: '',
        description: '',
        type: '',
        location: '',
        price: '',
        review: '',
        foodScore: '',
        decorScore: '',
        serviceScore: '',
      },
      phrases: [
        {
          text: '',
          bold: false,
        },
      ]
    };
  }

  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    $.ajax({
      method: 'GET',
      url: `/restaurants/${params.get('id')}/reviews`,
      success: (result) => {
        const newRestaurant = result[0];
        const quotedReview = this.addBoldedQuotes(result[0].review);
        newRestaurant.review = quotedReview;
        this.setState({
          currentRestaurant: newRestaurant,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addBoldedQuotes(review) {
    const splitReview = review.split(' ');
    let phrase = [];
    let rejoinedPhrase = [];
    const reviewObjects = [];
    let phraseObject = {
      text: '',
      bold: false,
    };
    let randomLength = Math.round(Math.random() * 3) + 2;
    let wordCount = 0;
    let i = 0;
    let k = 0;
    let justQuoted = false;

    while (wordCount < splitReview.length) {
      for (i; i < k + randomLength; i += 1) {
        if (splitReview[i] !== undefined) {
          if (i !== k + randomLength - 1) {
            phrase.push(`${splitReview[i]} `);
            wordCount += 1;
          } else {
            phrase.push(splitReview[i]);
            wordCount += 1;
          }
        }
      }

      if (justQuoted === false) {
        if (Math.random() > 0.5) {
          phrase.unshift(' "');
          phrase[phrase.length - 1] += '" ';
          phraseObject.bold = true;
          justQuoted = true;
        } else {
          phrase[phrase.length - 1] += ' ';
          phraseObject.bold = false;
        }
      } else {
        justQuoted = false;
        phraseObject.bold = false;
        phrase[phrase.length - 1] += ' ';
      }

      rejoinedPhrase = phrase.join('');
      phraseObject.text = rejoinedPhrase;
      reviewObjects.push(phraseObject);

      phrase = [];
      phraseObject = {};
      rejoinedPhrase = [];
      randomLength = Math.round(Math.random() * 3) + 2;
      k = i;
    }

    this.setState({
      phrases: reviewObjects,
    });
    return reviewObjects;
  }

  render() {
    return (
      <div className={styles.appcontainer} id="myapp">
        <Header currentRestaurant={this.state.currentRestaurant} className="headerModule" />
        <Graph currentRestaurant={this.state.currentRestaurant} className="graphModule" />
        <Scores currentRestaurant={this.state.currentRestaurant} className="scoreModule" />
        <div className={styles.reviewscontainer}>
          {
            this.state.phrases.map((item, index) => (
              <Reviewphrase phrase={item} className="reviewPhraseModule" key={index} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
