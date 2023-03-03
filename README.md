## Developer Portfolio Website Template
 <h3 align="center" >
    Live portfolio viewable at <a href="https://newt9.dev/">Newt9.dev</a>.
 </h3>
 
 ## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change "homepage" URL in [package.json](./package.json) file to be your intended deployment url:

   ```json
    "homepage": "https://portfolio-newt.netlify.app/"
   ```

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```  
 8. For quick deployment visit <a href="https://www.netlify.com/">https://www.netlify.com/</a> to deploy this project from your github.
   
 <br>  
 
   ***  
   
 <p align="center">
    Project created with modified framework provided by <a href="https://hashirshoaeb.github.io">hashirshoaeb.github.io</a>. Thanks, Hashir!
 </p>
 
   ***

#### Versions
NPM v9.2.0  
Node v19.3.0

   
