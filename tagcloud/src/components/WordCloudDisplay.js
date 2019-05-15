import React from 'react';
import WordCloud from 'react-d3-cloud';
import styled from 'styled-components';

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function WordCloudDisplay(props) {

  console.log("this is the input entered by user: " , props)

  const data = [
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
  ];

  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const rotate = word => word.value % 360;

  return (
    <CenterDiv>
      <WordCloud
        data={data}
        fontSizeMapper={fontSizeMapper}
        rotate={rotate}
      />
    </CenterDiv>
  );
}