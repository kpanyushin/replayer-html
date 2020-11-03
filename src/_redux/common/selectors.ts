import { createSelector } from '@reduxjs/toolkit';

const rootSelector = createSelector(
  (state: any) => state,
  ({ common }) => common
);

export const modalSelector = createSelector(rootSelector, ({ modal }) => modal);
