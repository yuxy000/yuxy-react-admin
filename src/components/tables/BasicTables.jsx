import React from 'react';
import { Row, Col, Card } from 'antd';

import BreadcrumbCustom from '../Widgets/BreadcrumbCustom';

import BasicTable from './BasicTable';
import SelectTable from './SelectTable';
import SortTable from './SortTable';
import SearchTable from './SearchTable';

class BasicTables extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="基础表格" />

                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <Card title="基础表格" bordered={false}>
                            <BasicTable />
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <Card title="可选表格" bordered={false}>
                            <SelectTable />
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <Card title="可控的筛选和排序" bordered={false}>
                            <SortTable />
                        </Card>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <Card title="自定义筛选" bordered={false}>
                            <SearchTable />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BasicTables;