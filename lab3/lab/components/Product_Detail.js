import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

const Product_Detail = () => {
  const [data, setData] = useState(null);
  const filePath = 'https://dummyjson.com/products/2';

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(d => setData(d))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <Card style={styles.card}>
      <Card.Cover source={{uri: data.thumbnail}} style={styles.image} />
      <Card.Content>
        <Title style={styles.title}>{data.title}</Title>
        <Paragraph>Description: {data.description}</Paragraph>
        <Text>Price: ${data.price}</Text>
        <Text>Discount: {data.discountPercentage}%</Text>
        <Text>Rating: {data.rating}</Text>
        <Text>Stock: {data.stock}</Text>
        <Text>Brand: {data.brand}</Text>
        <Text>Category: {data.category}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" buttonColor="#6A0DAD">
          Delete
        </Button>
        <Button mode="contained" buttonColor="#6A0DAD">
          Cancel
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  card: {
    margin: 16,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
});

export default Product_Detail;
