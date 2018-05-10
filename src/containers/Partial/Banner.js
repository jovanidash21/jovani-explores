import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import mapDispatchToProps from '../../actions';

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
      swipe: true,
      infinite: true,
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: ::this.handleAfterChange
    };

    return (
      <section className="banner-section">
        <div className="banner-content">
          <Slider {...slickOptions} >
            <div className="banner-slide-item text-center">
              <Container>
                <Row>
                  <Col xs="12">
                    <h1>Slide Item 1</h1>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="banner-slide-item text-center">
              <Container>
                <Row>
                  <Col xs="12">
                    <h1>Slide Item 2</h1>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="banner-slide-item text-center">
              <Container>
                <Row>
                  <Col xs="12">
                    <h1>Slide Item 3</h1>
                  </Col>
                </Row>
              </Container>
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
