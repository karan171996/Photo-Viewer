import ImageComponents from "./components/imageComponents";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { fetchdata } from "./api/hello";
import { get } from "lodash";
import ModalComponent from "./components/ModalData";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

class PhotoViewer extends React.Component {
  state = {
    itemLength: [],
    showModal: false,
    selectedIndex: 0,
  };

  fetchMoreData = async () => {
    const data = await fetchdata(5);
    setTimeout(() => {
      this.addImages(data);
    }, 100);
  };

  addImages = (data = {}, newImages = []) => {
    let imagesResponse = get(data, "json", []);
    imagesResponse.forEach((item) => {
      const image = get(item, "urls.regular", "");
      newImages.push(image);
    });
    this.setState((prevState) => ({
      itemLength: prevState.itemLength.concat(newImages),
    }));
  };
  componentDidMount() {
    const { data } = this.props;
    this.addImages(data);
  }
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  openModal = (index) => {
    console.log("openModal -> index", index);
    this.setState({
      showModal: true,
      selectedIndex: index,
    });
  };
  render() {
    console.log("this.props", this.props);
    const { itemLength, showModal, selectedIndex } = this.state;
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
        </Head>
        <ModalComponent
          show={showModal}
          close={this.closeModal}
          data={itemLength}
          imageIndex={selectedIndex}
        />
        <InfiniteScroll
          dataLength={itemLength}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <ImageComponents data={itemLength} selectedImage={this.openModal} />
        </InfiniteScroll>
      </div>
    );
  }
}

export async function getServerSideProps() {
  let res = await fetchdata();
  return {
    props: {
      data: res,
    },
  };
}

export default PhotoViewer;
