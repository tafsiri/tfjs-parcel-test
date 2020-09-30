import "./styles.css";
import * as tf from "@tensorflow/tfjs";

console.log('tf', tf.version.tfjs, tf.square(9.45).dataSync())

document.getElementById("app").innerHTML = `
    <h1>${tf.version.tfjs}</h1>
  `;
