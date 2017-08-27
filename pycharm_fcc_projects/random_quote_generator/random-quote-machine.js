

/*** Twitter **/
// Embedded Tweet button/ From twitter's dev resources
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));



/**** Test Quotes w/o API & w/ Vanilla JS ****/

/*
var quotes = [
'Blah blah blahblahblahblahblah blah blah blah blah 1',
'Blah blahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah  blahblahblahblah blahblahblahblah blahblahblahblah 2',
'Blah blahblahblahblah blah blahblah blahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah  blahblah 3',
'Blahblahblah blahblahblahblahblahblahblahblahblah blah blah 4',
'Blahblah blahblah blahblah blahblahblahblahblahblah  blahblahblahblah  blahblah 5',
'Blah blahblahblahblahblahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah blahblahblahblah  blahblah 6'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-box').innerHTML = quotes[randomNumber];
}
/*** End of test quotes ***/

/**** Quotes Bank ***/

var quotes = [
    '[shoots portal] There she is. Alright, c\'mon, Morty, let\'s go.       -   Rick',
    ' I\'m better than your brother. I\'m a version of your brother you can trust when he says "Don\'t run." Nobody exists on purpose. Nobody belongs anywhere. Everybody\'s gonna die…Come watch TV?       -   Morty',
    'Oh man, Rick! I\'m looking around this place and I\'m starting to work up some anxiety about this whole thing!     -   Morty',
    'Holy cow, Rick! I didn\'t know hanging out with you was making me smarter!     -   Morty',
    'Full disclosure, Morty—it\'s not. Temporary superintelligence is just a side effect of the Megaseeds dissolving in your rectal cavity.     -   Rick',
    'The outside world is our enemy, Morty! We\'re the only fehh-friends we got, Morty! It\'s just Rick and Morty! Ruh-ick and Morty and their adventures, Morty! Rick and Morty forever and forever, 100 years, Rick and Morty\'s things! Me and Rick and Morty running around and...      -   Rick',
    ' Scaring you? Tell me, Summer. If a human was born with stumpy legs, would they breed it with another deformed human and put their children on display like the Dachshund?     -   Snowball',
    'My-my-my grandpa Rick sent me!     -   Morty',
    ' When two people create a life together, they set aside their previous lives as individuals.       -   Beth',
    'No you don\'t. You\'re the little brother. You\'re not the cause of your parents\' misery, you\'re just a symptom of it.       -   Summer',
    ' Morty, I\'m not as smart as your Grandpa Rick, but I promise never to make that your problem again.       -   Jerry',
    'That\'s because losers look stuff up while the rest of us are carp\'en all them \'diems.       -   Summer',
    'Morty, no offence, but a drawing of me you made when you were eight isn\'t gonna make me feel like less of an accident!        -   Summer',
    'Rick, the only connection between your unquestionable intelligence and the sickness destroying your family is that everyone in your family, you included, use intelligence to justify sickness. You seem to alternate between viewing your own mind as an unstoppable force and as an inescapable curse. And I think it\'s because the only truly unapproachable concept for you is that it\'s your mind within your control.      -   Dr. Wong',
    'Okay, so let me get this straight. For the rest of your lives, no matter how much it hurts you, no matter how much it destroys our children\'s futures, we\'re gonna do whatever Rick wants, whenever he wants?      -   Jerry',
]
/** vanilla JS, need switch out with jquery and rename fxn**/
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-box').innerHTML = quotes[randomNumber];
}