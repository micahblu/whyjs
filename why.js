/**
 * Whyjs 
 * 
 * Whyjs provides a random answer
 *
 * This work is based on a Mathworks project I found while looking
 * for a random sentence generator.
*/

function rand(range){
  return Math.floor(Math.random() * range);
}

function phrase(){
  var a
  switch (rand(3)){
    case 0:    a = 'for the ' + nouned_verb() + ' ' prepositional_phrase() + '.'; break;
    case 1:    a = 'to ' + present_verb() + ' ' object() + '.'; break;
    default:   a = 'because ' + sentence(); break;
  }
  return a;
}

function preposition(){
  var a;
  switch (rand(2)){
    case 0:    a = 'of'; break;
    default:   a = 'from'; break;
  }
  return a;
}

function prepositional_phrase(){
  var a;
  switch (rand(3)){
    case 0:    a = preposition() + ' ' + article() + ' ' + noun_phrase(); break;
    case 1:    a = preposition() + ' ' + proper_noun(); break;
    default:   a = preposition() + ' ' + accusative_pronoun(); break;
  }
}

function sentence(){
  return subject() + ' ' + predicate() + '.';  
}

function subject(){
  var a;
  switch (rand(4)){
    case 0:    a = proper_noun(); break;
    case 1:    a = nominative_pronoun(); break;
    default:   a = article() + ' ' + noun_phrase(); break;
  }
  return a;
}

function proper_noun(){
  var a;
  switch (rand(8)){ 
    case 0:    a = 'Cleve'; break;
    case 1:    a = 'Jack'; break;
    case 2:    a = 'Bill'; break;
    case 3:    a = 'Joe'; break;
    case 4:    a = 'Pete'; break;
    case 5:    a = 'Loren'; break;
    case 6:    a = 'Damian'; break;
    case 7:    a = 'Barney'; break;
  }
  return a;
}

function noun_phrase(){
  var a;
  switch (rand(4)){
    case 0:    a = noun(); break;
    case 1:    a = adjective_phrase() + ' ' + noun_phrase(); break;
    default:   a = adjective_phrase() + ' ' + noun(); break;
  }
  return a;
}

function noun(){
  var a;
  switch (rand(6)){
    case 0:    a = 'mathematician'; break;
    case 1:    a = 'programmer'; break;
    case 2:    a = 'system manager'; break;
    case 3:    a = 'engineer'; break;
    case 4:    a = 'hamster'; break;
    case 5:    a = 'kid'; break;
  }
  return a;
}

function nominative_pronoun(){
  var a;
  switch (rand(5)){
    case 0:    a = 'I'; break;
    case 1:    a = 'you'; break;
    case 2:    a = 'he'; break;
    case 3:    a = 'she'; break;
    case 4:    a = 'they'; break;
  }
  return a;
}

function accusative_pronoun(){
  var a;
  switch (rand(4)){
    case 0:    a = 'me'; break;
    case 1:    a = 'all'; break;
    case 2:    a = 'her'; break;
    case 3:    a = 'him'; break;
  }
  return a;
}

function nouned_verb(){
  var a;
  switch (rand(2)){
    case 0:    a = 'love'; break;
    case 1:    a = 'approval'; break;
  }
  return a;
}

function adjective_phrase(){
  var a;
  switch (rand(6)){
    case 0: case 1: case 2:   a = adjective(); break;
    case 3: case 4:           a = adjective_phrase() + ' and ' + adjective_phrase(); break;
    default:                  a = adverb() + ' ' + adjective(); break;
  }
  return a;
}

function adverb(){
  var a;
  switch (rand(3)){
    case 0:    a = 'very'; break;
    case 1:    a = 'not very'; break;
    default:   a = 'not excessively'; break;
  }
  return a;
}

function adjective(){
  var a;
  switch (rand(7)){
    case 0:    a = 'tall'; break;
    case 1:    a = 'bald'; break;
    case 2:    a = 'young'; break;
    case 3:    a = 'smart'; break;
    case 4:    a = 'rich'; break;
    case 5:    a = 'terrified'; break;
    default:   a = 'good'; break;
  }
  return a;
}

function article(){
  var a;
  switch (rand(3)){
    case 0:    a = 'the'; break;
    case 1:    a = 'some'; break;
    default:   a = 'a'; break;
  }
  return a;
}

function predicate(){
  var a;
  switch (rand(3)){
    case 0:    a = transitive_verb() + ' ' + object(); break;
    default:   a = intransitive_verb(); break;
  }
  return a;
}

function present_verb(){
  var a;
  switch (rand(3)){
    case 0:    a = 'fool'; break;
    case 1:    a = 'please'; break;
    default: a = 'satisfy'; break;
  }
  return a;
}

function transitive_verb(){
  var a;
  switch (rand(4)){
    case 0:    a = 'threatened'; break;
    case 1:    a = 'told'; break;
    case 2:    a = 'asked'; break;
    case 3:    a = 'helped'; break;
    default:   a = 'obeyed'; break;
  }
  return a;
}

function intransitive_verb(){
  var a;
  switch (rand(6)){
    case 0:    a = 'insisted on it'; break;
    case 1:    a = 'suggested it'; break;
    case 2:    a = 'told me to'; break;
    case 3:    a = 'wanted it'; break;
    case 4:    a = 'knew it was a good idea'; break;
    default:   a = 'wanted it that way'; break;
  }
  return a;
}

function object(){
  var a;
  switch (rand(2)){
    case 0:    a = accusative_pronoun(); break;
    default:   a = article() + ' ' + noun_phrase(); break;
  }
  return a;
}