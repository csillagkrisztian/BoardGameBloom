import React from 'react';
import initialState from '../mockDatabase';
import getComponent from '../component-factory';

export default ({ G, ctx }) => {
  console.log('G', G);
  return (
    <>
      {initialState.game.components.map((componentInfo) => {
        return getComponent(
          initialState.layout[componentInfo._id],
          componentInfo,
          componentInfo.type
        );
      })}
    </>
  );
};
