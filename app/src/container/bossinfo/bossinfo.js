import React from 'react';
import {NavBar, InputItem,TextareaItem,Button} from 'antd-mobile';
import Avatarselector from '../../component/avatar-selector/avatar-selector';
class BossInfo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      company:'',
      money:'',
      desc:''
    };
    this.onChange = this.onChange.bind (this);
  }
  onChange (key, val) {
    this.setState ({
      [key]: val,
    });
  }
  render () {
    return (
      <div>
        <NavBar mode="dark">Boss完善信息页面</NavBar>
        <Avatarselector selectAvatar={(imgname)=>{
          this.setState({
            avatar:imgname
          })
        }}/>
        <InputItem onChange={v => this.onChange ('title', v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={v => this.onChange ('company', v)}>
          公司名称
        </InputItem>
        <InputItem onChange={v => this.onChange ('money', v)}>
          职位薪资
        </InputItem>
        <TextareaItem onChange={v => this.onChange ('desc', v)} 
          rows={3} 
          autoHeight
          title = '职位要求'
        >
        </TextareaItem>
        <Button type='primary'>保存</Button>
      </div>
    );
  }
}

export default BossInfo;
