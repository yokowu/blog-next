import { Col, List, Row, Tag } from 'antd'
import { ScheduleOutlined } from '@ant-design/icons'
import React from 'react'

const PostList = (props) => {
  return (
    <div>
      <Row justify="center">
        <Col xs={16} sm={16} md={16} lg={16} xl={16}
          className="post-list"
        >
          <List 
            size="large"
            dataSource={props.data}
            itemLayout="vertical"
            renderItem={item => (
              <List.Item
                className="post-list-item"
                actions={[
                  <div><ScheduleOutlined /> {item.createdTime}</div>,
                ]}
              >
                <h1 className="post-list-title">{item.title}</h1>
                <div className="post-list-desc">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}

export default PostList
