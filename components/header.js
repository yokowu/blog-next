import { Col, Row } from 'antd'
import React from 'react'
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <div>
      <Row justify="center" align="middle" className={styles.header}>
        <Col xs={16} sm={16} md={8} lg={8} xl={8}>
          <div className={styles.logo}>Yoko</div>
        </Col>

        <Col xs={0} sm={0} md={8} lg={8} xl={8}>
        </Col>

        <Col xs={4} sm={4} md={0} lg={0} xl={0}>
        </Col>
      </Row>
    </div>
  )
}

export default Header
