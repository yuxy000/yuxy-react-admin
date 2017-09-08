import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Row, Col, Card, Input } from 'antd';

import { getMaterials } from '../../axios';

import BreadcrumbCustom from '../Widgets/BreadcrumbCustom';

const columns = [{
    title: '序号',
    dataIndex: 'rowIndex',
    width: 50,
},{
    title: '名称',
    dataIndex: 'title',
},{
    title: '歌手',
    dataIndex: 'artist',
},{
    title: 'MV',
    dataIndex: 'hasMv',
}];

class SongTable extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
        data: [],
        pageNum:1,  /*页数*/
        pageSize:10,  /*每页显示条数*/
        searchText: '',
    }

    componentDidMount() {
        this.setState({searchText: '花'}, () => {
            this.start();
        });
        
    }

    handleSearchClick = (e) => {
        
        let nameInput = ReactDOM.findDOMNode(this.refs.nameInput);
        console.log('====================================');
        console.log(nameInput.value);
        console.log('====================================');
        this.setState({
            searchText: nameInput.value,
            pageNum: 1,
        }, () => {
            this.start();
        });
    }

    start = () => {
        this.setState({loading: true});
        let params = {
            searchText: this.state.searchText,
            pageSize: this.state.pageSize,
            pageNum: this.state.pageNum,
        }

        console.log('====================================');
        console.log('params:', params);
        console.log('====================================');
        getMaterials(params).then(res => {
            console.log('====================================');
            console.log('materials:', res);
            console.log('====================================');
            if(res.tracks) {
                this.pagination = {
                    current: this.state.pageNum,
                    total: res.total_tracks,
                    showTotal: (total) => `共 ${total} 条`,
                    pageSizeOptions: ['10', '15', '20', '25', '30'],
                    showSizeChanger: true,
                    onShowSizeChange: this.onShowSizeChange.bind(this),
                    onChange: this.onChange.bind(this), 
                };

                this.setState({
                    data: [...res.tracks.map((track, i) => {
                        track.rowIndex = i + 1;
                        track.key = track.id;
                        track.hasMv = track.mv ? '有' : '无';
                        track.artist = track.artists[0].name;
                        return track;
                    })],
                    loading: false,
                });
            } else {
                this.pagination = {
                    current: 1,
                    total: 0,
                    showTotal: (total) => `共 0 条`,
                    pageSizeOptions: ['10', '15', '20', '25', '30'],
                    showSizeChanger: true,
                };
                this.setState({
                    data: [],
                    pageNum: 1,
                    pageSize: 10,
                    searchText: '',
                    loading: false});
            }
        });
    };

    //改变每页显示条数事件
    onShowSizeChange = (current, pageSize) => {
        this.setState({
            pageSize:pageSize, 
            pageNum: current,
        }, () => {
            this.start();
        });

    };

    //翻页事件
    onChange = (current) => {
        this.setState({ 
            pageNum: current,
        }, () => {
            this.start();
        });
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys })
    }
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="表格" second="歌曲列表" />

                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="歌曲列表" bordered={false}>
                                <div style={{marginBottom: 16}}>
                                    <Input style={{width: '200px', marginRight:10}} ref='nameInput' />
                                    <Button type="primary" icon="search" onClick={this.handleSearchClick} disabled={loading} />
                                        
                                    <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
                                </div>
                                <Table rowSelection={rowSelection} pagination={this.pagination} columns={columns} dataSource={this.state.data} loading={loading} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default SongTable;