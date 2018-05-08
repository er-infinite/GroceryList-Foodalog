import React from 'react';
import Main from './app/components/Main';
import {Font} from 'expo';

export default class App extends React.Component {


    // state = {
    //     fontLoaded: false,
    // };
    //
    // async componentDidMount() {
    //     await Font.loadAsync({
    //         'FredokaOne-Regular': require('assets/fonts/FredokaOne-Regular.ttf'),
    //     });
    //
    //     this.setState({ fontLoaded: true });
    // }


    render() {
        return (
            <Main />
        );
    }
}

