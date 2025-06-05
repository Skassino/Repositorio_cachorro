import styles from '@/src/screens/css_index/style_index';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://dog.ceo/api/breeds/image/random";


  const fetchDogImage = () => {
    setLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        setImageUrl(json.message);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.imagem}
        />
      ) : (
        <Text>Não foi possível carregar a image</Text>
      )}

      <TouchableOpacity style={styles.botao} onPress={fetchDogImage}>
        <Text style={styles.texto}>Ver cachorro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
