import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from "reactstrap";
import styled from "styled-components";
//
import { getImageStyleUrl } from "../../../cockpit/utils";

const CarouselCaptionStyled = styled(CarouselCaption)`
  h3 {
    color: white;
    font-size: 4rem;
    text-shadow: 1px 1px 2px rgba(170, 170, 170, 0.8);
  }

  p {
    font-size: 1.4rem;
    text-shadow: 1px 1px 2px rgba(170, 170, 170, 0.8);
  }
`;

const CarouselControlStyled = styled(CarouselControl)`
  span:hover {
    cursor: pointer;
  }
`;

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const items = this.props.items || [];

    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const items = this.props.items || [];

    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const items = this.props.items || [];

    const slides = items.map((item, idx) => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={`carousel-${idx}`}
      >
        {item.value &&
          item.value.carousel_image && (
            <img
              src={getImageStyleUrl("Carousel", item.value.carousel_image)}
              alt={item.value.text || ""}
            />
          )}
        <CarouselCaptionStyled
          captionText={(item.value && item.value.summary) || ""}
          captionHeader={(item.value && item.value.text) || ""}
        />
      </CarouselItem>
    ));

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControlStyled
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControlStyled
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CustomCarousel;
