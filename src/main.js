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

//index.html 에서 작성한 app이라는 공간에 App이라는 컴퍼넌트를 그리고자 함 => components 폴더 안에 App.js 와 연결
// ReactDOM.render(<App/>, document.getElementById('app'))..
ReactDOM.render(<MuiThemeProvider theme={ theme }><App/></MuiThemeProvider>, document.getElementById('app'));


