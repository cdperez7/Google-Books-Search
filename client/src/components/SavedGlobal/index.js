import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Logo from "../Logo";

class SavedGlobal extends Component {
    state= {
        items: [],
        promiseIsResolved: false
    };

    loadSaved() {

    }

    render(){
        return (
            <div className="global">
                <Logo />
                <SavedGallery items={this.state.items} />
            </div>
        )
    }
}

export default SavedGlobal;