import { compose, withState, withHandlers, withProps } from 'recompose';
import Example from './exampleRecompose';
import { testFetch } from './../services/fetch';


export default compose(
  withState('isVisible', 'toggleVis', false),
  withState('loading', 'setLoading', false),
  withState('data', 'setData', null),
  withHandlers({
    toggleVisibility: ({ toggleVis, isVisible }) => {
      return (event) => {
        return toggleVis(!isVisible);
      };
    },
    getData: ({ setLoading, setData}) => {
      setLoading(true);
      return (event) => {
        return testFetch({
          value: 'dfdfdfdfdfdfdf',
          set: 'set',
        })
          .then(res => {
            setData(res);
            setLoading(false);
          });
      };
    },
  }),
  withProps(({ isVisible }) => {
    return {
      title: isVisible ? 'This is the visible title' : 'This is the default title',
      message: isVisible ? 'Hello I am Visible' : 'I am not visible yet, click the button!',
    };
  })
)
(Example);
