import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { Arrow } from '../../../components/Arrow';
import mapDispatchToProps from '../../../actions';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0
    };
  }
  handleAfterChange(event) {
    this.setState({activeSlide: event});
  }
  render() {
    const slickOptions = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <Arrow direction="left" />,
      nextArrow: <Arrow direction="right" />,
      afterChange: ::this.handleAfterChange
    };

    return (
      <section className="banner-section">
        <div className="banner-content">
          <Slider {...slickOptions} >
            <div className="banner-slide-item-wrapper">
              <div className="banner-slide-item">
                <div class="banner-text">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="banner-slide-item-wrapper">
              <div className="banner-slide-item">
                <div class="banner-text">
                  Aenean nisl tellus
                </div>
              </div>
            </div>
            <div className="banner-slide-item-wrapper">
              <div className="banner-slide-item">
                <div class="banner-text">
                  Fusce non rhoncus turpis
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.options,
    page: state.page
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);
