import React, { Component } from 'react';
import classnames from 'classnames';
import Star from './Star';
import './styles.scss';

// reused from an old project of mine

class StarRating extends Component {
    constructor(props) {
        super(props);

        let activeStars = props.stars || 0;
        let totalStars = props.maxStars || 5;

        // Get the % fill for the final star to be filled
        let percentFill = (activeStars - Math.floor(activeStars)) * 100;
        activeStars = Math.floor(activeStars);

        this.state = {
            activeStars,
            totalStars,
            percentFill,
        };
    }

    componentWillReceiveProps(newProps) {
        let activeStars = newProps.stars || 0;

        // Get the % fill for the final star to be filled
        let percentFill = (activeStars - Math.floor(activeStars)) * 100;
        activeStars = Math.floor(activeStars);

        this.setState({ activeStars, percentFill });
    }

    buildStars(activeStars, maxStars) {
        let stars = [];
        for (let i = 1; i <= maxStars; i++) {
            if (i === activeStars + 1) {
                stars.push(
                    <Star
                        partialFill={this.state.percentFill}
                        key={i}
                        active={i < activeStars}
                        onClick={(e) => this.handleStarClick(e, i)}
                        size={this.props.size}
                    />
                );
            } else {
                stars.push(
                    <Star
                        key={i}
                        partialFill={i <= activeStars ? 100 : 0}
                        active={i <= activeStars}
                        onClick={(e) => this.handleStarClick(e, i)}
                        size={this.props.size}
                    />
                );
            }
        }
        return stars;
    }

    render() {
        return (
            <div className={classnames(this.props.className, 'star-rating')}>
                {this.buildStars(this.state.activeStars, this.state.totalStars)}
            </div>
        );
    }
}

export default StarRating;
