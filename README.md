# Team Outliers



## Contributors

- Nikhil Dhande
- Yash Patle
- Anshul Shirbate
- Priya Kriplani


## Table of Contents
- [Documentation](#documentation)
- [Screenshots & Videos](#screenshots--videos)

## Documentation
<details>
  <summary>Click to view documentation</summary>

## Problem Statement

**SM24-07 : Customized Learning Assessments**

Description :- Design a platform that creates tailored assessments for students based on their individual progress and learning needs, offering a more personalized evaluation experience.

## Domain

Education

## Description

Our project, **Gurukul**, was developed during the 24-hour Smakathon hackathon hosted by Yeshwantrao Chavan College of Engineering, Nagpur, in the CSE Department. The platform is designed to create personalized assessments for students based on their individual learning progress and needs, offering a more tailored evaluation experience.

**Achievements:**
- **Position:** 2nd Place
- **Prize:** ₹7000 Cash Prize
- **Goodies:** Keyboard, Mouse, and Earphones

We developed this project within the constraints of a 24-hour hackathon, showcasing our ability to rapidly prototype and deliver impactful solutions. The recognition we received underscores our dedication to improving educational technology and providing customized learning experiences.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

 **Clone the repository**:
   ```bash
   git clone https://github.com/yashpatle23/Smakathon-Gurukul
   cd Smakathon-Gurukul
   ```

### Step 1: Create a `.env` File

Create a file named `.env` in the root directory of your project with the following content:

```bash
NEXT_PUBLIC_HOST=http://localhost:3000
MONGO_URI=mongodb://0.0.0.0:27017/outliers
AES_SECRET=secretforcryptojs
JWT_SECRET=secretforjwt
NEXT_PUBLIC_NAME="Gurukul"
NEXT_PUBLIC_API_KEY='Gemini api key'
```


### Step 2: Obtain Gemini API Key
Replace 'Gemini api key' with your actual API key. You can obtain a Gemini API key by signing up on the [Gemini API website](https://ai.google.dev/gemini-api/docs/api-key).

### Step 3: Set Up MongoDB
1. Create a MongoDB database named `outliers`.
2. Provide connection users with appropriate access rights.

### Step 4: Install Dependencies
Ensure you have Yarn installed on your computer.

Install the required dependencies by running:

install yarn 
```bash
npm install --global yarn
```

### Step 5: Deploy Server

```bash
  yarn dev
```


## Tech Stack



- **Next.js**: A React framework for building server-rendered applications. Provides features like server-side rendering, routing, and efficient code splitting.
- **MongoDB with Mongoose**:
  - **Mongoose**: A MongoDB object modeling tool that simplifies interactions with the database. Allows for schema definitions, models, and seamless CRUD operations.
- **UI Components**:
  - **@nextui-org/react**: A UI library designed for Next.js applications with pre-built components for a consistent user interface.
  - **Tailwind CSS**: A utility-first CSS framework for building responsive and efficient designs.
- **Data Visualization**:
  - **Recharts**: A charting library for React to create interactive and visually appealing charts and graphs.
- **Other Dependencies**:
  - **crypto-js**: Provides cryptographic functions.
  - **dotenv**: Manages environment variables.
  - **framer-motion**: An animation library for React.
  - **jsonwebtoken**: Handles JSON Web Tokens (JWT).
  - **react-toastify**: Displays toast notifications in your app.
  - **react-top-loading-bar**: Adds a loading bar to indicate progress.

## Scripts

- `npm run one`: Starts the Next.js development server.
- `npm run live-server`: Runs a live server on port 8080 for the `videoSession` directory.
- `npm run dev`: Concurrently runs `npm run one` and `npm run live-server`.
- `npm run build`: Builds your Next.js app.
- `npm run start`: Starts your Next.js app.
- `npm run lint`: Lints your code using ESLint.
## APIs Used

### Gemini API

- **Purpose**: Integrates AI functionalities into the application.
- **Version**: Ensure you are using the appropriate version of the Gemini API.
- **Documentation**: Refer to the [Gemini API Documentation](https://geminiapi.com/docs) for detailed usage and integration guidelines.
- **Setup**:
  1. Obtain your API key from the Gemini API dashboard.
  2. Add the API key to your environment variables in the `.env.local` file:
     ```
     NEXT_PUBLIC_API_KEY=your-gemini-api-key
     ```
  3. Follow the API documentation to integrate and use Gemini's AI capabilities in your application.

### Agora Web SDK

- **Purpose**: Enables video conferencing features within the application.
- **Version**: `AgoraWebSDK_N-v4.7.3-0-g0eb931c7`
- **Documentation**: Refer to the [Agora Web SDK Documentation](https://docs.agora.io/en/Video/landing-page) for detailed usage and integration guidelines.
- **Setup**:
  1. Sign up on the [Agora Developer Portal](https://dashboard.agora.io) and obtain your App ID and App Certificate.
  2. Add the App ID and App Certificate to your environment variables in the `config.js` file as explained above steps are given in `videoSession/main.js`:
    
  3. Follow the Agora SDK documentation to implement video conferencing features in your application.




</details>


## Screenshots & Videos
<details>
  <summary>Click to view screenshots</summary>

  ## Screenshots

  ![Log In](Screenshot/3.png)
  *Log In*

  ![Sign Up](Screenshot/4.png)
  *Sign Up*

  ![Landing Page](Screenshot/5.png)
  *Landing Page*

  ![Chatbot Example](Screenshot/6.png)
  *Chatbot Example*

  ![Dashboard Profile](Screenshot/7.png)
  *Dashboard Profile*

  ![Pathways and AI Generated Articles](Screenshot/8.png)
  *Pathways and AI Generated Articles*

  ![Book Meeting Options](Screenshot/9.png)
  *Book Meeting Options*

  ![Sample Meeting Photo](Screenshot/10.png)
  *Sample Meeting Photo*

  ![Courses](Screenshot/11.png)
  *Courses*

  ![Final Assessment & AI Generated Quiz](Screenshot/12.png)
  *Final Assessment & AI Generated Quiz*

  ![Quiz Failed Result](Screenshot/13.png)
  *Quiz Failed Result*

  ![Quiz Passed Result](Screenshot/14.png)
  *Quiz Passed Result*

  ![Pre-Quiz Option and Detailation Form](Screenshot/15.png)
  *Pre-Quiz Option and Detailation Form*

  ![Quiz UI](Screenshot/16.png)
  *Quiz UI*

  ![Quiz AI Generated Result](Screenshot/17.png)
  *Quiz AI Generated Result*

  ![Follow Up](Screenshot/18.png)
  *Follow Up*

  ![Updated Detail Option](Screenshot/19.png)
  *Updated Detail Option*

  ![Discuss Forum](Screenshot/20.png)
  *Discuss Forum*
  ![Follow Up](Screenshot/21.png)
  *Follow Up*

</details>


## Demo
<details>
  <summary>Click to view videos</summary>
  
  (https://youtu.be/EtVBo7aeiB0)

  
  **Full Project Demo**
  
  (https://youtu.be/ucak3E7W08c)
  
  **Sample Live Streaming Demo**


</details>
