import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <View className="items-center justify-center">
        <Image
          style={{height: '50%', width: '50%'}}
          source={require('./src/assets/Musicfy.png')}
        />
        <Text className="w-2/3 text-white text-center text-xl">
          Milhares de músicas à sua disposição no Musicfy
        </Text>
      </View>
      <View className=" w-11/12 self-center justify-end h-1/4">
        <TouchableOpacity className="w-full h-11 bg-secondary rounded-3xl p-2 items-center justify-center">
          <Text className="text-text text-lg font-semibold">
            Inscreva-se grátis
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full h-11 mt-5 bg-black border border-white rounded-3xl p-2 items-center justify-center">
          <Text className="text-text text-lg font-semibold">Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
