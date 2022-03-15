import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {MuiThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

const theme = unstable_createMuiStrictModeTheme ({
    typography: {
        useNextVariants:true,
        fontFamily: "Noto Sans KR"
    }
})

// ReactDOM.render(<App/>, document.getElementById('app'));
ReactDOM.render(<MuiThemeProvider theme={ theme }><App/></MuiThemeProvider>, document.getElementById('app'));

