import Link from 'next/link'
import { Col, List, Row, Tag } from 'antd'
import { ScheduleOutlined } from '@ant-design/icons'
import React from 'react'
import { randomColor } from '../utils/util'

const PostList = (props) => {
  return (
    <div>
      <Row justify="center">
        <Col xs={23} sm={23} md={16} lg={16} xl={16}
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
                  <div>{item.tags !== undefined ? item.tags.map(v => (
                    <Tag key={v} color={randomColor()}>{v}</Tag>)) : ""}
                  </div>
                ]}
              >
                <Link href={`/post/${item.id}`}>
                  <a>
                    <h1 className="post-list-title">{item.title}</h1>
                  </a>
                </Link>
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
