// index.ts

import * as tf from '@tensorflow/tfjs';
import { generateData } from './data/data.create';
import { preprocessData } from './data/data.process';
import { buildModel } from './data/data.model';

const data = generateData();

// Step 1: Data Preprocessing
const inputData: number[][] = data.map(d => [d.cpuUsage]);
const normalizedData = preprocessData(inputData);

// Step 2: Build and Train Model
const model = buildModel();

async function trainModel(): Promise<void> {
  await model.fit(normalizedData, normalizedData, {
    epochs: 50,
    batchSize: 32,
  });
}

// Step 3: Detect Anomalies
async function detectAnomalies(): Promise<void> {
  const predictions: tf.Tensor = model.predict(normalizedData) as tf.Tensor;

  const error: tf.Tensor = predictions.sub(normalizedData).abs();

  const anomalyThreshold = 0.1;

  error.arraySync().forEach((err: number, i: number) => {
    if (err > anomalyThreshold) {
      console.log(`Anomaly detected at index ${i} with error: ${err}`);
    }
  });
}

async function run() {
  await trainModel();
  await detectAnomalies();
}

run();
