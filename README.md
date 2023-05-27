### Cypress, Github action and github secrets prototype 

This is a prototype to test Cypress with github secrets in the pipeline.

#### Prerequisites 
Add the secrets in your github repository
##### Github repository secrets:

1. Go to settings <br><br>
![img.png](images/img.png)<br>


2. Go to Secrets and variables and click Actions <br><br>
![img_1.png](images/img_1.png)<br>

3. Add a new repository secret on **New repository secret** <br><br>
![img_2.png](images/img_2.png)<br>


4. Then add a new secret, this is for email <br><br>
![img_3.png](images/img_3.png)<br>

5. Then add one more for password <br><br>
![img_4.png](images/img_4.png)<br>

6. And add password secret <br><br>
![img_5.png](images/img_5.png)<br>

7. Then you can see your added secrets under **Repository secrets** <br><br>
![img_6.png](images/img_6.png)<br>

<br>
##### Github environment secrets

1. Click on **Manage environments** <br><br>
![img_7.png](images/img_7.png)<br>

2. Then click on **New environment** <br><br>
![img_8.png](images/img_8.png)<br>

3. Name your new enviroment and add it <br><br>
![img_9.png](images/img_9.png)<br>

4.  In the **Environments** tab under **Code and automation** you will see your enviroments. There you can add a environment secret <br>
![img_10.png](images/img_10.png)<br>

5. Add a username secret. <br><br>
![img_11.png](images/img_11.png)<br>

6. then add a password secret as well. <br><br>
![img_12.png](images/img_12.png)<br>

7. Then you can see your added secrets under **Environment secrets** in your enviroment you created before. <br><br>
![img_13.png](images/img_13.png)<br>

<br>
**Note**
When using environment you need to specify it in your pipeline ```.github/workflows/main.yml``` like ```environment: cypress_environment```. <br><br>
![img_14.png](images/img_14.png)<br>


#### Explanation: 
In order to pass the github secrets into your cypress environment. You need to add
```CYPRESS_``` and then your environment name.
In pipeline: ```.github/workflows/main.yml``` <br><br>
![img_15.png](img_15.png)<br>
In cypress config file: ```cypress.config.js``` <br><br>
![img_16.png](img_16.png)<br>

Then it can be used in your cypress e2e testing: ```cypress/e2e/login-test.cy.js``` <br><br>
![img_17.png](img_17.png)<br>

<br>
When you push a change to your main branch, you will trigger github actions which you can find under the **Actions** tab. There you can see the cypress test running.

### using dependencies
```
@vue/cli
cypress
concurrently
```

### Project setup
```
npm install
```

### Compile and Hot-Reload for Development

```
npm run dev
```
