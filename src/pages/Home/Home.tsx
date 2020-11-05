import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getHandsHistory } from '_redux/replayer/slice';
import { dataSelector } from '_redux/replayer/selectors';

import s from './Home.module.scss';

const Home = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  const handleFileUpload = (e: any) => {
    if (e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
    }
  };

  const handleSendClick = (e: any) => {
    e.preventDefault();
    dispatch(getHandsHistory(file));
  };

  console.log(data);

  return (
    <div className={s.root}>
      <div className={s.uploadWrapper}>
        <div className={s.header}>
          Hand Converter
        </div>
        <form className={s.content} onSubmit={handleSendClick}>
          <textarea
            className={s.textarea}
            rows={7}
            placeholder="Paste your hand history or upload file. Use a blank line to separate mupliple hands"
          />
          <input className={s.file} type="file" onChange={handleFileUpload} />
          <button className={s.submitBtn} type="submit" disabled={!file}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
