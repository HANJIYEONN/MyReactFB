import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const databaseURL = "https://word-cloud-52a63-default-rtdb.firebaseio.com";

class Words extends React.Component {
    constructor() {
        super();
        this.state = {
            words: {}
        };
    }

    _get() {
        fetch(`${databaseURL}/words.json`).then(res => {
           if(res.status != 200) {
               throw new Error(res.statusText);
           }
           return res.json();
        }).then(words => this.setState({words: words}));
    }
    //words 가 변경되면 update되게 설정함
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sords != this.state.words;
    }
    //component 가 구성이 된 다음에 자동으로 실행되도록 함
    componentDidMount() {
        this._get();
    }
    render() {
        return (
            <div>
                {Object.keys(this.state.words).map(id => {
                    const word = this.state.words[id];
                    return (
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    가중치: {word.weight}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {word.word}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}

            </div>
        );
    }
}

export default Words;