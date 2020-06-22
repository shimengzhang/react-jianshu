import React, { memo } from 'react';
import { connect } from 'react-redux';
import { RecommondWrapper, RecommondItem } from '../style';

// class Recommond extends PureComponent {
//   render() {
//     return (
//       <RecommondWrapper>
//         {
//           this.props.recommondList.map((item) => (
//             <RecommondItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommondItem>
//           ))
//         }
//       </RecommondWrapper>
//     );
//   }
// }

const Recommond = memo((props) => (
    <RecommondWrapper>
      {
        props.recommondList.map((item) => (
          <RecommondItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommondItem>
        ))
      }
    </RecommondWrapper>
));

const mapStateToProps = (state) => ({
  recommondList: state.getIn(['home', 'recommondList']),
});

export default connect(mapStateToProps, null)(Recommond);
