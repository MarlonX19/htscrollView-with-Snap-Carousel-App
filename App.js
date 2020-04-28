import React from 'react';
import { Text, Modal, View, TouchableHighlight, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
    };

    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity
        onPress={() => this.setState({ modalVisible: true })}
      >
        <View
          style={{
            backgroundColor: 'floralwhite',
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25,
          }}>
          <Text style={{ fontSize: 30 }}>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>


        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          hardwareAccelerated={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalView}>
            <View style={styles.modalPhoto}>
              <Text style={styles.txt}>{this.state.carouselItems[this.state.activeIndex].title}</Text>
              <TouchableHighlight
                onPress={() =>
                  this.setState({ modalVisible: false })
                }>
                <Text>fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalPhoto: {
    width: 170,
    height: 170,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
      
  txt: {
    color: 'blue',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 14
  }


});
