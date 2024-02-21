
import React from 'react';

export default function About() {
    return (
      <div className="main w-[100vw] h-[90vh] border  flex items-center justify-center">     
      <div className="about h-[85vh] w-[90vw] flex flex-col max-sm:gap-[2vh]" >
        
        <strong className='text-[3vw] text-black max-sm:text-[4.5vh] max-lg:text-[3.5vh]'>About myTextApp</strong>
        <p className='w-[90vw] max-lg:text-[1.5vh] max-sm:text-[2vh]'>This myTextApp is created by react js or tailwind css. This provide different facility to modify your text such as convert text to upperCase lowerCase. TextApp is a simple yet powerful text summary app that helps you save time and get the most out of your reading. With just a few taps, you can summarize any text, from short articles to long documents, without losing any of the important information.
TextApp uses advanced natural language processing (NLP) algorithms to identify the key points of a text and generate a concise and informative summary. The app is also highly customizable, allowing you to choose the length of your summary, the number of sentences, and the level of detail.</p>
      </div>
      </div>

    )
    
  };
  