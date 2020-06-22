import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style';
import * as actionCreator from '../store/actionCreator';

class List extends PureComponent {
  render() {
    return (
      <div>
        {
          this.props.articleList.map((item, index) => (
            <Link key={index} to="/detail">
              <ListItem>
                <img className="list-pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
            </ListItem>
            </Link>
          ))
        }
        <LoadMore
          onClick={() => { this.props.getMoreList(this.props.articlePage); }}
        >
          更多文字
        </LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage']),
});

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    console.log('more list');
    dispatch(actionCreator.getMoreListAction(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
