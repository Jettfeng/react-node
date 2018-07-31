import React from 'react';
import PropTypes from 'prop-types';
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
class UserCard extends React.Component {
    componentDidMount(){
        console.log(this.props.userlist);
        
    }
  static propTypes = {
    userlist: PropTypes.array.isRequired,
  };
  render () {
    const Header = Card.Header
    const Body = Card.Body
    return (
      <div>
        <WhiteSpace />
        <WingBlank>
          {this.props.userlist.map (
            v =>
              v.avatar
                ? <Card key={v._id}>
                    <Header
                      title={v.user}
                      thumb={require (`../img/${v.avatar}.png`)}
                      extra={<span>{v.title}</span>}
                    />
                    <Body>
                    {v.type=='boss'? <div>公司:{v.company}</div> :null}
                      {v.desc}
                      {v.type=='boss'? <div>薪资:{v.money}</div> :null}
                    </Body>
                  </Card>
                : null
          )}
        </WingBlank>
      </div>
    );
  }
}

export default UserCard;
