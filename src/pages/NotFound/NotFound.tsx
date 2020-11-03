import React from 'react';
import { Link } from 'react-router-dom';

import s from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={s.root}>
      <p>Страница не найдена</p>
      <Link to="/">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
