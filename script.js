//Arrays of subjects and predicates to be pulled from to create random phrase
let subjects = ['life', 'future', 'happiness', 'heart', 'smile', 'effort', 'compassion', 'curiousity', 'ambition', 'fortune', 'imagination', 'new idea', 'competence', 'talents', 'success', 'quick wits', 'reputation', 'love', 'mind', 'mentality', 'ideals', 'infinite capacity for patience'];
let predicates = ['is a present you give yourself', 'will ultimately pay off', 'is often more important than a passionate romance', 'is what you need now', 'is the foundation of victory', 'will lead you to success', 'will bring you good luck', 'marks the onset of a friendship', 'is your greatest asset', 'will astonish everyone', 'will be recognized and suitably rewarded', 'can capture the highest status or prestige'];

//function to pull a random string from the above array
const returnRandomPhrase = arr => {
    //Creates a random number from 0 to length of the arry to be used as the index of the array
    let selector = Math.floor(Math.random() * arr.length);
    return arr[selector];
};

//uses the returnRandomPhrase function to pull a subject and predicate and print the message to console
const randomMessage = () => {
    let randSubject = returnRandomPhrase(subjects);
    let randPredicate = returnRandomPhrase(predicates);
    console.log(`Your ${randSubject} ${randPredicate}.`);
}

randomMessage();
