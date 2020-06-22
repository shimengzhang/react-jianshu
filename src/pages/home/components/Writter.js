import React, { memo } from 'react';
import { WritterWrapper } from '../style';

// class Writter extends PureComponent {
//   render() {
//     return (
//       <WritterWrapper>writter</WritterWrapper>
//     );
//   }
// }

const Writter = memo(() => (
    <WritterWrapper>writter</WritterWrapper>
));

export default Writter;
