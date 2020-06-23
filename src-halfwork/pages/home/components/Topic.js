import React, { memo } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

// class Topic extends PureComponent {
//   render() {
//     return (
//       <TopicWrapper>
//         {
//           this.props.topicList.map((item, index) => (
//               <TopicItem key={item.get('id')}>
//                 <img className="topic-pic" src={item.get('imgUrl')} alt="" />
//                 {item.get('title')}
//               </TopicItem>
//           ))
//         }

//       </TopicWrapper>
//     );
//   }
// }

const Topic = memo((props) => (
    <TopicWrapper>
      {
        props.topicList.map((item, index) => (
            <TopicItem key={item.get('id')}>
              <img className="topic-pic" src={item.get('imgUrl')} alt="" />
              {item.get('title')}
            </TopicItem>
        ))
      }

    </TopicWrapper>
));

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList']),
});

export default connect(mapStateToProps, null)(Topic);
