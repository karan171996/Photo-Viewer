import styles from "../../styles/Home.module.css";
import React from "react";

class ImageComponents extends React.Component {
  render() {
    const { data = [] } = this.props;
    return (
      <div className={styles.parentsection}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.grid}
              onClick={() => this.props.selectedImage(index)}
            >
              <img src={item} alt={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageComponents;
