import { Image, List,Tag, Space, AutoCenter  } from 'antd-mobile'
import React from 'react'
import { useSelector } from 'react-redux'
import sun from '../../../../assets/images/default.png'
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from 'antd-mobile-icons'
export default (props) => {

  const Username = useSelector(state =>state.login.user)
  const users = [
  {
    name: Username.nick,
    description: '快乐对待每一天',
  },
]

  return (<div>
    <List  header='用户'>
      {users.map(user => (
        <List.Item
        onClick={props.toLogin}
        
          key={user.name}
          prefix={
            <Image
              src={sun}
              style={{ borderRadius: 25 }}
              fit='cover'
              width={48}
              height={48}
              
            />
          }
          description={user.description}
        >
          {user.name}
        </List.Item>
      ))}
      <Space style={{ AutoCenter }}>
        <Tag color='#fff'></Tag>
          <Tag color='primary'>乖巧</Tag>
          <Tag color='success'>听话</Tag>
          <Tag color='warning'>小职员</Tag>
          <Tag color='danger'>emmm</Tag>
        </Space>
      <br/>
      <br/>
    </List>
    <br/>
    <List header='功能列表'>
    <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
      账单
    </List.Item>
    <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
      总资产
    </List.Item>
    <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
      主题
    </List.Item>
    <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
      表情
    </List.Item>
    </List>
    <br/>
    <br/>
    <List>
    <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
      关于我们
    </List.Item>
    <List.Item prefix={<SetOutline />} onClick={() => {}}>
      设置
    </List.Item>
  </List></div>
  )
}
