import React, { Component } from 'react'
import './common.css';

export default class JumboTron extends Component {
    render() {
        return (
            <div className="jumbo-custom jumbotron">
                <h1 className="display-h1">{this.props.title}</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg btn-color-custom" href="null" role="button">Learn more</a>
                </div>
                )
              }
            }
