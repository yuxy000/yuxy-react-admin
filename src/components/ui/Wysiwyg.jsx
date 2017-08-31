import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../Widgets/BreadcrumbCustom';
//import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import draftToHtml from 'draftjs-to-html';
//import draftToMarkdown from 'draftjs-to-markdown';

//const rawContentState = {"entityMap":{"0":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"http://i.imgur.com/aMtBIep.png","height":"auto","width":"100%"}}},"blocks":[{"key":"9unl6","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"95kn","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"7rjes","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class Wysiwyg extends Component {


    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="富文本" />
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="富文本编辑器" bordered={false} >
                                
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Card title="同步转换HTML" bordered={false}>
                            
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Card title="同步转换MarkDown" bordered={false}>
                           
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Card title="同步转换JSON" bordered={false}>
                            
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Wysiwyg;