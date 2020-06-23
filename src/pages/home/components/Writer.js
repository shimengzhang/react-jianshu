import React, { PureComponent, memo } from 'react';
import { WriterWrapper } from '../style';

// class Writer extends PureComponent {
//   render() {
//     return (
//       <WriterWrapper>HomeWork</WriterWrapper>
//     )
//   }
// }

const Writer = memo(() => (
    <WriterWrapper>HomeWork</WriterWrapper>
));

export default Writer;
