import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  { src: "https://image.ibb.co/ebibO9/IMG_0298.jpg", width: 3, height: 4 },
  { src: "https://image.ibb.co/iD0CD9/IMG_1766.jpg", width: 3, height: 4 },
  {
    src: "https://image.ibb.co/kawNfp/1469238251_650047_share.png",
    width: 2.8,
    height: 4
  },
  { src: "https://image.ibb.co/ctaCD9/1483096374_835301_share.png", width: 3, height: 4 },
  { src: "https://image.ibb.co/nkxpRU/IMG_4255.jpg", width: 2.4, height: 4 },
  { src: "https://image.ibb.co/cfJ7Vp/IMG_2352.jpg", width: 3, height: 4 },
  {
    src:
      "https://image.ibb.co/hTnERU/152_BD374_3_E5_D_49_F9_9_DF6_4545_C03_A005_A_11529_0000068063_A0_A152_tmp.jpg",
    width: 3,
    height: 4
  },
  { src: "https://image.ibb.co/mEZfY9/IMG_7970.jpg", width: 3.1, height: 4 },
  { src: "https://image.ibb.co/mXRKt9/IMG_1825.jpg", width: 3, height: 4 }
];

class Photoboard extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default Photoboard;
