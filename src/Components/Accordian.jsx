import React, { useState } from 'react';
import AccordianItem from './AccordianItem';

const data = [
  {
    title: "Accordion Item #1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #2",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #3",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

function Accordian() {
  const [openIndex, setOpenIndex] = useState(0);

  const containerStyle = {
    width: '50%',
    margin: '0 auto',  // center horizontally
    marginTop: '20px',  // equivalent to mt-5
  };

  return (
    <div style={containerStyle}>
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex}
          setIsOpen={() => {
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
}

export default Accordian;
