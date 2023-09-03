
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const WordDetails = () => {
  const { word } = useParams();
  const data = useSelector((state) => state.data.data);

  const wordDetails = data.find((item) => item.word === word);

  return (
    <div>
      <h1>Word Details for {word}</h1>
      {wordDetails ? (
        <div>
          <h4>{wordDetails.word}</h4>
          {wordDetails.phonetics &&
            wordDetails.phonetics.length > 0 &&
            wordDetails.phonetics.map((value, index) => (
              <div className="phonetic" key={index}>
                <p>{value.text}</p>
                <audio controls>
                  <source src={value.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          <h5>Meanings:</h5>
          <ul>
            {wordDetails.meanings.map((meaning, index) => (
              <div key={index}>
                <h4>{meaning.partOfSpeech}</h4>
                {meaning.definitions.map((means, index) => (
                  <p key={index}>{means.definition}</p>
                ))}
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <p>Word details not found.</p>
      )}
    </div>
  );
};

export default WordDetails;
