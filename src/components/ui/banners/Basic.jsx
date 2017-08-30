import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;

class Basic extends Component {
    render () {
        return (
            <BannerAnim prefixCls="banner-user">
                <Element prefixCls="banner-user-elem" key="0">
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: '#364d79'
                        }}
                    />

                    <TweenOne className="banner-user-title" animation={{y: 30, opacity: 0, type: 'from'}}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne
                        className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
                <Element prefixCls="banner-user-elem" key="1">
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            background: '#64CBCC',
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne
                        className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
            </BannerAnim>
        );
    }
}

export default Basic;