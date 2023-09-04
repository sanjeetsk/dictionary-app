## Project Overview
### Objective
    Develop a React application integrated with Redux for state management, enabling users to search for word definitions, view their search history, and see detailed explanations for individual words. Follow the provided UI design.

### Relevant Links
    API: Use the DictionaryAPI for fetching word details - https://api.dictionaryapi.dev/api/v2/entries/en/%7Bword%7D

#### Example Endpoint- https://api.dictionaryapi.dev/api/v2/entries/en/${word}
#### UI Reference- https://drive.google.com/file/d/18ZHJDHOzwW_JROYFdPA6EtHJJFIiqoLg/view?usp=sharing

#### Sample Response
      [
      {
    "word": "bark",
    "phonetic": "/bɑːk/",
    "phonetics": [
      {
    "text": "/bɑːk/",
    "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/bark-uk.mp3",
    "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=68569035",
    "license": {
    "name": "BY 4.0",
    "url": "https://creativecommons.org/licenses/by/4.0"
    }
    },
    {
    "text": "/bɑɹk/",
    "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/bark-us.mp3",
    "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1769309",
    "license": {
    "name": "BY-SA 3.0",
    "url": "https://creativecommons.org/licenses/by-sa/3.0"
    }
    }
    ],
    "meanings": [
    {
    "partOfSpeech": "noun",
    "definitions": [
    {
    "definition": "The short, loud, explosive sound uttered by a dog, a fox, and some other animals.",
    "synonyms": [],
    "antonyms": []
    },
    {
    "definition": "An abrupt loud vocal utterance.",
    "synonyms": [],
    "antonyms": []
    }
    ],
    "synonyms": [],
    "antonyms": []
    },
    {
    "partOfSpeech": "verb",
    "definitions": [
    {
    "definition": "To make a short, loud, explosive noise with the vocal organs (said of animals, especially dogs).",
    "synonyms": [
    "give tongue"
    ],
    "antonyms": [],
    "example": "The neighbour's dog is always barking."
    },
    {
    "definition": "To make a clamor; to make importunate outcries.",
    "synonyms": [],
    "antonyms": []
    },
    {
    "definition": "To speak sharply.",
    "synonyms": [],
    "antonyms": [],
    "example": "The sergeant barked an order."
    }
    ],
    "synonyms": [
    "give tongue",
    "latrate"
    ],
    "antonyms": []
    }
    ],
    "license": {
    "name": "CC BY-SA 3.0",
    "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
    "https://en.wiktionary.org/wiki/bark"
    ]
    },
    {
    "word": "bark",
    "phonetic": "/bɑːk/",
    "phonetics": [],
    "meanings": [],
    "license": {},
    "sourceUrls": []
    },
    {
    "word": "bark",
    "phonetic": "/bɑːk/",
    "phonetics": [
    {
    "text": "/bɑːk/",
    "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/bark-uk.mp3",
    "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=68569035",
    "license": {
    "name": "BY 4.0",
    "url": "https://creativecommons.org/licenses/by/4.0"
    }
    },
    {
    "text": "/bɑɹk/",
    "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/bark-us.mp3",
    "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1769309",
    "license": {
    "name": "BY-SA 3.0",
    "url": "https://creativecommons.org/licenses/by-sa/3.0"
    }
    }
    ],
    "meanings": [
    {
    "partOfSpeech": "noun",
    "definitions": [
    {
    "definition": "A small sailing vessel, e.g. a pinnace or a fishing smack; a rowing boat or barge.",
    "synonyms": [],
    "antonyms": []
    },
    {
    "definition": "A sailing vessel or boat of any kind.",
    "synonyms": [],
    "antonyms": []
    },
    {
    "definition": "A vessel, typically with three (or more) masts, with the foremasts (or fore- and mainmasts) square-rigged, and mizzenmast schooner-rigged.",
    "synonyms": [],
    "antonyms": []
    }
    ],
    "synonyms": [],
    "antonyms": []
    }
    ],
    "license": {
    "name": "CC BY-SA 3.0",
    "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
    "https://en.wiktionary.org/wiki/bark"
    ]
    }
    ]

#### Features & Requirements
#### Home Page:
    Navbar: Display application title and navigation links to Home and History pages.
    Search Functionality: Provide an input field where users can type in a word and a button to initiate the search. Display the results below the input

#### History Page:
    Display a list of previously searched words.
    History should be stored and managed in the Redux store.
    Clicking on a word in the history list should redirect users to the word's details page.

#### Word Details Page:
    Display detailed information of a word. This includes its phonetics, meanings, part of speech, definitions, and audio pronunciations.
    Use dynamic routing to handle different words (`/word/:word`).

#### Loader:
    Display a visually appealing loader/spinner while fetching data from the API.

#### Redux Integration:
    Set up Redux for state management.
    Create actions and reducers to manage the history of searched words.
    Use Redux middleware (like `redux-thunk`) for asynchronous operations if necessary.
#### Note
`Please Make sure your UI does not break and is handling all of the values as optional values, because sometimes words will directly have antonyms and synonyms that you need to handle. And sometimes they’ll have definitions, and those definitions will have a lot of antonyms and synonyms. Make sure all of your mapping is accurate and works. Sometimes there will be multiple audio files, sometimes there will be no audio files. Handle all of these edge cases properly.`

#### Sample API Calls
`https://api.dictionaryapi.dev/api/v2/entries/en/entries`
`https://api.dictionaryapi.dev/api/v2/entries/en/hi`
`https://api.dictionaryapi.dev/api/v2/entries/en/synonyms`
#### Marking Scheme
    Functional Requirements (60 Marks):
    `Home Page with Navbar and Search`
    `History Page with working redirection`
    `Word Details Page with all necessary details`
    
#### Loader Implementation

    Redux Integration (20 Marks):
    Proper setup of Redux store, actions, and reducers
    Correct implementation of the history feature using Redux

#### UI Implementation (20 Marks):
    Fidelity to the provided Figma design
    Responsiveness
