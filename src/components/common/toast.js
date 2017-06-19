//第一部分，引入依赖与定义模块内的全局变量
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './toast.scss'
let singleton = null;
const container = document.createElement('div'),

    defaultProps = {
        show: false
    },

    propTypes = {
        /**
         * @property show
         * @description 是否显示，默认false
         * @type Boolean
         * @default false
         * @skip
         */
        show: PropTypes.bool
    };

document.body.appendChild(container);

//第二部分，定义组件
class ToastReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            content: '',
            autoHideTime: 2000
        };
        this._timer = null;
        singleton = this;
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.setState({ show: nextState.show });
        if (!!this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }

        this._timer = setTimeout(() => this.setState({ show: false }), nextState.autoHideTime);
        return true;
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
        document.body.removeChild(container);
    }

    render() {
        const { show, content } = this.state;
        return (
            <div
                className="yo-toast"
                style={{
                    display: show ? null : 'none'
                }}
            >{content}</div>
        );
    }
}

ToastReact.propTypes = propTypes;
ToastReact.defaultProps = defaultProps;

ReactDOM.render(<ToastReact />, container);
// 第三部分，一个代理对象，设置Toast的显示隐藏函数
/**
 * Toast显隐函数
 * @returns {Object}
 */
export default {
    /**
     * @method show
     * @type Function
     * @description 打开组件，显示传入的内容
     * @param {String} content 组件显示的内容
     * @param {Number} [autoHideTime] 内容显示的持续时间，默认2000ms
     */
    show(content = 'no content', autoHideTime = 2000) {
        singleton.setState({
            content,
            autoHideTime,
            show: true
        });
        return this;
    },
    /**
     * @method hide
     * @type Function
     * @description 关闭正在显示的组件
     */
    hide() {
        singleton.setState({ show: false });
        return this;
    }
};