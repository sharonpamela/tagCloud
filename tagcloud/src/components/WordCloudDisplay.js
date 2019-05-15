import React from 'react';
import WordCloud from 'react-d3-cloud';
import styled from 'styled-components';

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function WordCloudDisplay(props) {

  let data = [] // array of objs that holds data for the tagCloud

  // remove most common English language punctuation from txt
  const rawStr = props.rawData.toString();
  let curatedStr = rawStr.replace(/[\.,`'"\/#!$\^&\*;:{}=_`~()@\+\?><\[\]\+]/g, "") // remove special chars
  let finalStr = curatedStr.replace(/[0-9]+ +/g, ''); // remove isolated numbers
  // finalStr = finalStr.replace(/( the | in | or | a | of | to | and | is | that | with | on | any | by | as | for )/, ' '); // remove most common articles
  console.log(finalStr)
  finalStr = finalStr.replace(/\s{2,}/g, " "); //remove extra white spaces

  // format data
  const splitStrArr = finalStr.split(" ") // stores input as array of words
  const wordCountObj = {}; // stores the count for each word in splitStr

  for (let i = 0; i < splitStrArr.length; i++) {
    if (wordCountObj[splitStrArr[i]] === undefined) {
      wordCountObj[splitStrArr[i]] = 1;
    } else {
      wordCountObj[splitStrArr[i]]++;
    }
  }

  for (const key of Object.keys(wordCountObj)) {
    data.push({ text: key, value: wordCountObj[key] });
  }

  const rotate = word => word.value % 360;
  const fontSizeMapper = word => word.value * 16;

  return (
    <CenterDiv>
      <WordCloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        rotate={rotate}
        width={500}
        height={400}
      />
    </CenterDiv>

  );
}