import React, { useState, useEffect, useRef } from 'react';

const ChatInputBox = () => {
  const inputRef = useRef(null);

  const [value, setValue] = useState('');
  const [rows, setRows] = useState(1);

  // Focus the input when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Adjust the textarea height when the value changes  
  useEffect(() => {
    const textarea = inputRef.current;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  const handleChange = event => {
    const { value: _value } = event.target;

    setValue(_value);
    setRows(_value.split('\n').length);
  };

  return (
    <div className="flex flex-col justify-end h-screen items-center">
      <div className="relative w-1/3">
        <textarea
          id="input-field"
          required
          rows={rows}
          value={value}
          ref={inputRef}
          onChange={handleChange}
          placeholder="Send a message.."
          className="w-full h-auto p-4 pr-12 border border-gray-300 rounded-lg resize-none focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-end px-4">
          <img className="w-6 mb-6" src="/send.png" alt="Send Icon" />
        </div>
      </div>
      <div className="mb-20"/>
    </div>
  );
};

ChatInputBox.defaultProps = {};

ChatInputBox.propTypes = {};

export default ChatInputBox;
