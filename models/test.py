import streamlit as st
import tensorflow as tf
import cv2
import numpy as np

# Load the Trained Model
model = tf.keras.models.load_model('model_vgg19.h5')

# Define the class labels
class_labels = [
    'Apple___Apple_scab',
    'Apple___Black_rot',
    'Apple___Cedar_apple_rust',
    'Apple___healthy',
    'Blueberry___healthy',
    'Cherry_(including_sour)___Powdery_mildew',
    'Cherry_(including_sour)___healthy',
    'Corn_(maize)___Cercospora_leaf_spot_Gray_leaf_spot',
    'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight',
    'Corn_(maize)___healthy',
    'Grape___Black_rot',
    'Grape___Esca_(Black_Measles)',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
    'Grape___healthy',
    'Orange___Haunglongbing_(Citrus_greening)',
    'Peach___Bacterial_spot',
    'Peach___healthy',
    'Pepper,_bell___Bacterial_spot',
    'Pepper,_bell___healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',
    'Raspberry___healthy',
    'Soybean___healthy',
    'Squash___Powdery_mildew',
    'Strawberry___Leaf_scorch',
    'Strawberry___healthy',
    'Tomato___Bacterial_spot',
    'Tomato___Early_blight',
    'Tomato___Late_blight',
    'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot',
    'Tomato___Spider_mites Two-spotted_spider_mite',
    'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy'
]

# Preprocess the Image
def preprocess_image(image):
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = cv2.resize(image, (224, 224))
    image = image.astype(np.float32) / 255.0
    image = np.expand_dims(image, axis=0)
    return image

# Main Streamlit app code
def main():
    # Set app title
    st.title('Image Classification App')

    # Upload image file
    uploaded_file = st.file_uploader("Upload an image", type=['jpg', 'jpeg', 'png'])

    if uploaded_file is not None:
        try:
            # Read and preprocess the uploaded image
            image = cv2.imdecode(np.fromstring(uploaded_file.read(), np.uint8), 1)
            preprocessed_image = preprocess_image(image)
            st.image(image)

            # Make predictions
            predictions = model.predict(preprocessed_image)
            predicted_class_index = np.argmax(predictions, axis=1)[0]
            predicted_class = class_labels[predicted_class_index]

            # Display the predicted class
            st.subheader('Predicted Class')
            st.write(predicted_class)

        except Exception as e:
            st.error(f'Error: {e}')

# Run the app
if __name__ == '__main__':
    main()
