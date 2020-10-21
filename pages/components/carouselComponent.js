import Carousel from "react-bootstrap/Carousel";
import React from "react";

class CarouselComponent extends React.Component {
  state = {
    activeIndex: this.props.index || 0,
  };
  handleSelect = (selectedIndex, e) => {
    this.setState({
      activeIndex: selectedIndex,
    });
  };
  render() {
    const { data = [] } = this.props;
    console.log("CarouselComponent -> render -> data", data);
    const { activeIndex } = this.state;
    console.log("CarouselComponent -> render -> activeIndex", activeIndex);
    return (
      <Carousel activeIndex={activeIndex} onSelect={this.handleSelect}>
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item}
                  alt={`First slide - ${index}`}
                />
              </Carousel.Item>
            );
          })}
      </Carousel>
    );
  }
}

export default CarouselComponent;
