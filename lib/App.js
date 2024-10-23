import './App.css';
import Classs, { DateTime, LifeCycleMethod, NewCounter, WindowEventListenerComponent } from './class/Classs';
import ConditionalRendering from './otherTopics/ConditionalRendering';
import { ControlledComponents } from './form/Controlled';
import { ForwardRef } from './ref/ForwardRef';
import { SyntheticEventObject } from './otherTopics/SyntheticEvent';
import Todo from './todo/Todo';
import { Uncontrolled } from './form/Uncontrolled';
import { Modal } from './portal/Modal';
import React, { Suspense } from 'react';
import { ClassPropType } from './proptype/ClassPropType';
import { FunctionalCompPropsTypes } from './proptype/FunctionalCompPropsTypes';
const LazyLoaded = React.lazy(() => import("./LazyLoaded"));
function App() {
  return <div>
      <Classs word="Hello World" />
      <LifeCycleMethod />
      <DateTime />
      <NewCounter />
      <WindowEventListenerComponent />
      <SyntheticEventObject />
      <Uncontrolled />
      <ControlledComponents />
      <ConditionalRendering initialValue="Hello World" />
      <Todo />
      {}
      <ForwardRef />
      {}
      <Modal />
      <Suspense fallback={<div>Lazy component loading...</div>}> {}
        <LazyLoaded />
      </Suspense>
      <ClassPropType title="Class PropType" date={new Date()} description="Nothing just checking how Proptypes work" />
      <FunctionalCompPropsTypes title='Functional PropTypes' date={new Date()} description="Nothing just checking how Proptypes work" />
    </div>;
}
export default App;