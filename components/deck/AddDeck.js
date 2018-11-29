import React from 'react';

import {
    Text,
    Container,
    Input,
    Button,
    Content,
    Item
} from "native-base";
import {connect} from "react-redux";
import {addDeck} from "../../actions/decks";

class AddDeck extends React.Component {

    state = {
        title: ''
    };

    handleChangeTitle = value => {

        this.setState({
            title: value
        })
    };

    handleSubmit = () => {
        const { dispatch, navigation } = this.props;

        dispatch(addDeck(this.state.title));

        this.setState({
            title: ''
        });

        navigation.goBack();
    };

    render() {

        return (
            <Container>
                <Content padder>
                    <Item regular>
                        <Input onChangeText={this.handleChangeTitle} placeholder="deck title" value={this.state.title}/>
                    </Item>
                    <Button block disabled={this.state.title === ''} onPress={this.handleSubmit}><Text> Add deck </Text></Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(AddDeck)