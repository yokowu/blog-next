import { Col, Row } from 'antd'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <Row justify="center">
        <Col>
          <div className="footer-inner">
            Copyright © 珍是月半康的 {new Date().getFullYear()}  

            <a
              target="_brank"
              href="https://beian.miit.gov.cn/"
            >
              闽ICP备20006889号
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
