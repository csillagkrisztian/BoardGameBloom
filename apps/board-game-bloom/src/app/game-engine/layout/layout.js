import React from 'react';
import initialState from '../mockDatabase';
import getComponent from './component-factory/component-factory';

export default ({ G, ctx }) => {
  return (
    <>
      {Object.entries(G.components).map(([_id, componentInfo]) => {
        console.log('componentInfo', _id, componentInfo);
        return (
          componentInfo &&
          getComponent(
            initialState.layout.find(
              (component) => component.componentId === _id
            ),
            componentInfo,
            componentInfo.type
          )
        );
      })}
    </>
  );
};
