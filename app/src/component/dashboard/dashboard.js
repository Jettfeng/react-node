import React from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import { Switch, Route } from "react-router-dom";
import NavLinkBar from "../navlinkbar/navlinkbar";
import Boss from "../../component/boss/boss";

function Genius() {
  return <div>Genius</div>;
}
function Msg() {
  return <div>Msg</div>;
}
function User() {
  return <div>User</div>;
}
@connect(state => state)
class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    const pathname = this.props.location.pathname;
    const user = this.props.user;
    const navList = [
      {
        path: "/boss",
        text: "牛人",
        icon: "boss",
        title: "牛人列表",
        component: Boss,
        hide: user.type === "genius"
      },
      {
        path: "/genius",
        text: "boss",
        icon: "job",
        title: "BOSS列表",
        component: Genius,
        hide: user.type === "boss"
      },
      {
        path: "/msg",
        text: "消息",
        icon: "msg",
        title: "消息列表",
        component: Msg
      },
      {
        path: "/me",
        text: "我",
        icon: "user",
        title: "个人中心",
        component: User
      }
    ];
    return (
      <div>
        <NavBar className="fixd-header" mode="dard">
          {navList.find(v => v.path === pathname).title}
        </NavBar>
        <div>
          <Switch>
            {navList.map(v => (
              <Route key={v.path} path={v.path} component={v.component} />
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList} />
      </div>
    );
  }
}

export default Dashboard;
