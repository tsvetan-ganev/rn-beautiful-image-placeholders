import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import artists, {MusicAlbum} from './artists';
import BlurHashPlaceholderImage from './components/BlurHashPlaceholderImage';

const ARTWORK_SIZE = 160;
const BG_COLOR = '#212121';

function renderAlbumListItem(listItem: ListRenderItemInfo<MusicAlbum>) {
  const {item: album} = listItem;

  return (
    <View style={{maxWidth: ARTWORK_SIZE, marginHorizontal: 8}}>
      <BlurHashPlaceholderImage
        key={album.name + album.year}
        source={{
          uri: album.artwork.url,
        }}
        width={ARTWORK_SIZE}
        height={ARTWORK_SIZE}
        blurhash={album.artwork.blurhash!}
        style={{borderRadius: 10}}
      />
      <Text style={styles.albumTitleText}>{album.name}</Text>
      <Text style={styles.albumYearText}>{album.year}</Text>
    </View>
  );
}

function getAlbumListItemLayout(_: any, index: number) {
  return {
    length: 160,
    offset: index * 160,
    index,
  };
}

const App = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: BG_COLOR, flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#222" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{paddingVertical: 12}}>
          {artists.map((artist) => (
            <View key={artist.name}>
              <Text style={styles.artistText}>{artist.name}</Text>
              <FlatList
                data={artist.albums}
                horizontal={true}
                keyExtractor={(album) => album.name}
                getItemLayout={getAlbumListItemLayout}
                windowSize={1}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                renderItem={renderAlbumListItem}
              />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  artistText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fefefe',
    marginTop: 16,
    marginBottom: 8,
    paddingLeft: 8,
  },
  albumTitleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ececec',
    paddingTop: 8,
    paddingHorizontal: 4,
  },
  albumYearText: {
    fontSize: 11,
    fontWeight: '300',
    color: '#bababa',
    paddingHorizontal: 4,
    paddingTop: 2,
    paddingBottom: 4,
  },
});

export default App;
