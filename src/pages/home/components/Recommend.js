import React, { PureComponent, memo } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

// class Recommend extends PureComponent {
//   render() {
//     return (
//       <RecommendWrapper>
//         {
//           this.props.list.map((item) => <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>)
//         }
//       </RecommendWrapper>
//     );
//   }
// }

const Recommend = memo((props) => {
  const { list } = props;
  return (
    <RecommendWrapper>
      {
        list.map((item) => <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>)
      }
    </RecommendWrapper>
  );
});

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList']),
});

export default connect(mapState, null)(Recommend);
