# 🌟 Star Luminosity & Distance Calculator

[![Node.js Version](https://img.shields.io/badge/Node.js-14.x%20or%20higher-green)](https://nodejs.org/en/) 
[![Inquirer Version](https://img.shields.io/badge/Inquirer-8.x-blue)](https://www.npmjs.com/package/inquirer) 
[![License](https://img.shields.io/badge/license-MIT-purple)](https://opensource.org/licenses/MIT)

## 📜 Overview

This Node.js application calculates the **luminosity** and **distance** of a star after prompting the user for the following information:
- **Star Name** 🌟
- **Flux** (in Watts/m²) 🔭
- **Parallax** (in arcseconds) 🌀

Using this data, it computes the luminosity and distance of the star based on the provided **flux** and **parallax**.

## ✨ Features

- **Interactive CLI** - User-friendly prompts using [Inquirer](https://www.npmjs.com/package/inquirer).
- **Accurate Calculations** - Employs astronomical formulas to compute star distance and luminosity.
- **Easy-to-Use** - Simply run the app and follow the guided prompts.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed (version 14.x or higher). You can download it [here](https://nodejs.org/en/).

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/star-calculator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd star-calculator
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

---

## 🛠️ Usage

1. Run the application:

    ```bash
    node index.js
    ```

2. Follow the prompts:

    - **Enter Star Name**: Provide the name of the star.
    - **Enter Flux**: Input the flux in Watts/m².
    - **Enter Parallax**: Input the parallax in arcseconds.

3. View the calculated luminosity and distance of the star.

---

## 📊 Example


---

## 📚 How It Works

- **Luminosity** is calculated using the formula:  
  \[
  \text{Luminosity} = 4\pi \times (\text{distance}^2) \times \text{flux}
  \]

- **Distance** is derived from the parallax angle using the formula:  
  \[
  \text{Distance (in parsecs)} = \frac{1}{\text{parallax (arcseconds)}}
  \]

The app converts the flux and distance into a comparable scale to provide a star's luminosity relative to our Sun.

---

## 📦 Dependencies

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment.
- [Inquirer.js](https://www.npmjs.com/package/inquirer) - Library for creating interactive command-line prompts.

---


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎨 Screenshots

![CLI Prompt Screenshot](./assets/screenshot1.png)
> The interactive command-line prompts

![Calculation Results](./assets/screenshot2.png)
> Example of star luminosity and distance calculation
