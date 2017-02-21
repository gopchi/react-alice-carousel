import React from 'react';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {},
            showDots: true,
            showButtons: true,
            children: this.props.children || []
        };

    }

    _renderDots() {
        return(
            <ul className="carousel-dots">
                <li className="carousel-dots__item __active" />
                <li className="carousel-dots__item" />
                <li className="carousel-dots__item" />
            </ul>
        );
    }

    _renderButtons() {
        return(
            <div className="carousel-nav">
                <div className="carousel-nav__left" />
                <div className="carousel-nav__right" />
            </div>
        );
    }
    render() {
        return(
            <div className="carousel">
                { this.state.showButtons ? this._renderButtons() : null }

                <div className="carousel-stage">Stage</div>

                { this.state.showDots ? this._renderDots() : null }

            </div>
        );
    }
}

export default Carousel;
