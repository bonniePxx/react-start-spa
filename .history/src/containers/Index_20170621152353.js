import React from "react";
import CSSModules from "react-css-modules";
import styles from "../styles/app/demo.scss";

class Index extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>图片处理</h2>
          <div className="pic" />
          <img styleName="little" />
        </div>
      </div>
    );
  }
}
// }
// const Index = () =>
//   <div>
//     <div>
//       <h2>图片处理</h2>
//       <div className="pic"/>
//       <img styleName='little'/>
//     </div>
//   </div>;

export default CSSModules(Index, styles);
