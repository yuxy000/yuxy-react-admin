/**
 * Created by hao.cheng on 2017/4/28.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../Widgets/BreadcrumbCustom';
//import Draggable from 'react-draggable';

class Drags extends React.Component {
  
    render() {
        
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="拖拽" />
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                           Draggable
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Drags;