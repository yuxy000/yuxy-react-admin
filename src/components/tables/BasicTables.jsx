import React from 'react';
import { Row, Col, Card } from 'antd';

import BreadcrumbCustom from '../Widgets/BreadcrumbCustom';

import BasicTable from './BasicTable';

class BasicTables extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="基础表格" />

                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <Card title="基础表格" bordered={false}>
                            <BasicTable />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BasicTables;