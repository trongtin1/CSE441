import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');
  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        discountPercentage: discountPercentage,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        images: images,
      }),
    })
      .then(res => res.json())
      .then(console.log);
    Alert.alert('Add sucessfull');
  };
  return (
    <View>
      <Text style={{color: 'blue', fontWeight: 'bold'}}>Add a product</Text>
      <Text style={styles.text}>Title</Text>
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}></TextInput>
      <Text style={styles.text}>Description</Text>
      <TextInput
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}></TextInput>
      <Text style={styles.text}>Price</Text>
      <TextInput
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}></TextInput>
      <Text style={styles.text}>Discount Percentage</Text>
      <TextInput
        placeholder="Enter discount percentage"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}></TextInput>
      <Text style={styles.text}>Rating</Text>
      <TextInput
        placeholder="Enter rating"
        value={rating}
        onChangeText={setRating}></TextInput>
      <Text style={styles.text}>Stock</Text>
      <TextInput
        placeholder="Enter stock"
        value={stock}
        onChangeText={setStock}></TextInput>
      <Text style={styles.text}>Brand</Text>
      <TextInput
        placeholder="Enter brand"
        value={brand}
        onChangeText={setBrand}></TextInput>
      <Text style={styles.text}>Category</Text>
      <TextInput
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}></TextInput>
      <Text style={styles.text}>Images</Text>
      <TextInput
        placeholder="Enter images URL (s)"
        value={images}
        onChangeText={setImages}></TextInput>
      <Button title="SUBMIT" onPress={handleSubmit}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});

export default Add;
