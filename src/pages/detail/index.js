import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';

// class Detail extends PureComponent {
//   render() {
//     return (
//       <DetailWrapper>
//         <Header>{this.props.title}</Header>
//         <Content
//           dangerouslySetInnerHTML={{ __html: this.props.content }}
//         />
//       </DetailWrapper>
//     );
//   }

//   componentDidMount() {
//     this.props.getDetail(this.props.match.params.id);
//   }
// }

const Detail = memo((props) => {
  const {
    title, content, getDetail, match,
  } = props;

  useEffect(() => {
    getDetail(match.params.id);
  }, []);

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </DetailWrapper>
  );
});

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
