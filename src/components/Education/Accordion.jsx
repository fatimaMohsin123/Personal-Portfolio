import React from 'react';

export default function Accordion(props) {
    return (
        <div style={{ width: '100%', marginBottom: '10px' }}>
            <button
                className="w-full p-4 text-left bg-gray-8 
                        hover:bg-blue-100 transition duration-300"
                onClick={props.toggleAccordion}
                style={{
                    width: '100%',
                    border: 'none', // Remove border color
                    textAlign: 'left', // Left-align text
                    fontSize: '24px', // Increase font size
                    boxSizing: 'border-box', // Ensure padding is included in the element's total width and height
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px', // Add spacing between each accordion button
                    color: props.isOpen ? 'white' : 'black',
                    backgroundColor: props.isOpen ? '#0096FF' : '#E9EAEC', // Change title color when expanded
                }}
            >
                {props.title}
                <span className={`transform ${props.isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
                    &#9660;
                </span>
            </button>
            {props.isOpen && (
                <div
                    className="p-3 bg-white"
                    style={{
                        width: '100%',
                        fontSize: '18px', // Increase font size
                        border: '1px solid #E9EAEC', // Add border to the description
                        textAlign: 'left', // Left-align text
                        boxSizing: 'border-box', // Ensure padding is included in the element's total width and height
                    }}
                >
                    {props.data}
                </div>
            )}
        </div>
    );
}
