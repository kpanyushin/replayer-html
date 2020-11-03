import React, { useState } from 'react';

const Home = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e: any) => {
    console.log(e.target.files);
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  const send = () => {
    fetch('/history', {
      method: 'POST',
      body: file,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(response => response.json()).then(data => console.log(data.result));
  }

  return (
    <div className="App">
      <input type="file" onChange={handleFileUpload} />
      <button onClick={send}>Отправить</button>
    </div>
  );
}

export default Home;
