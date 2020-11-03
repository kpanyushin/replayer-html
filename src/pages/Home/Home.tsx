import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getHandsHistory } from '_redux/replayer/slice';
// import { dataSelector } from '_redux/replayer/selectors';

const Home = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector(state => state);

  const handleFileUpload = (e: any) => {
    if (e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSendClick = () => {
    dispatch(getHandsHistory(file));
  };

  console.log(data);

  return (
    <div className="App">
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSendClick}>Отправить</button>
    </div>
  );
}

export default Home;
