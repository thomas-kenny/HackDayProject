import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

export default function MyReactNativeForm({handleSubmit}) {
  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={values => handleSubmit(values.title)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  )
}