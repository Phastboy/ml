import * as tf from '@tensorflow/tfjs';

// Build autoencoder model
export const buildModel = (): tf.Sequential => {
  const model = tf.sequential();

  // Encoder
  model.add(tf.layers.dense({
    units: 5,
    inputShape: [1],
    activation: 'relu',
  }));

  // Decoder
  model.add(tf.layers.dense({
    units: 1,
    activation: 'sigmoid',
  }));

  model.compile({
    optimizer: 'adam',
    loss: 'meanSquaredError',
  });

  return model;
};
