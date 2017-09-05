import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

import EchartArea from '../charts/EchartsArea';
import EchartsForce from '../charts/EchartsForce';
import EchartsPie from '../charts/EchartsPie';
import EchartsEffectScatter from '../charts/EchartsEffectScatter';

class Echarts extends Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-Row" span={24}>
                        <div className="gutter-box">
                            <Card title="区域图" bordered={false}>
                                <EchartArea />
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <div className="gutter-box">
                            <Card title="关系图" bordered={false}>
                                <EchartsForce />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="gutter-box">
                            <Card title="饼图" bordered={false}>
                                <EchartsPie />
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-Row" span={24}>
                        <div className="gutter-box">
                            <Card title="散点图" bordered={false}>
                                <EchartsEffectScatter />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Echarts;