import * as tf from '@tensorflow/tfjs';

// Function to preprocess the data (normalize it)
export const preprocessData = (data: number[][]): tf.Tensor => {
  const tensorData: tf.Tensor = tf.tensor2d(data);

  // Normalize data (min-max scaling)
  return tensorData.sub(tensorData.min()).div(tensorData.max().sub(tensorData.min()));
};
