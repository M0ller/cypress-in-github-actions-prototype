### Cypress, Github action and github secrets prototype 

This is a prototype to test Cypress with github secrets in the pipeline.

#### Prerequisites 
Add the secrets in your github repository
##### Github repository secrets:

1. Go to settings
![img.png](images/img.png)


2. Go to Secrets and variables and click Actions
![img_1.png](images/img_1.png)

3. Add a new repository secret on **New repository secret**
![img_2.png](images/img_2.png)


4. Then add a new secret, this is for email
![img_3.png](images/img_3.png)

5. Then add one more for password
![img_4.png](images/img_4.png)


6. And add password secret
![img_5.png](images/img_5.png)

7. Then you can see your added secrets under **Repository secrets**
![img_6.png](images/img_6.png)

<br>
##### Github environment secrets

1. Click on **Manage environments**
![img_7.png](images/img_7.png)

2. Then click on **New environment**
![img_8.png](images/img_8.png)

3. Name your new enviroment and add it
![img_9.png](images/img_9.png)

4.  In the **Environments** tab under **Code and automation** you will see your enviroments. There you can add a environment secret
![img_10.png](images/img_10.png)

5. Add a username secret.
![img_11.png](images/img_11.png)

6. then add a password secret as well. 
![img_12.png](images/img_12.png)

7. Then you can see your added secrets under **Environment secrets** in your enviroment you created before.
![img_13.png](images/img_13.png)

<br>
**Note**
When using environment you need to specify it in your pipeline ```.github/workflows/main.yml``` like ```environment: cypress_environment```.
![img_14.png](images/img_14.png)


#### Explanation: 
In order to pass the github secrets into your cypress environment. You need to add
```CYPRESS_``` and then your environment name.
In pipeline: ```.github/workflows/main.yml```
![img_15.png](img_15.png)
In cypress config file: ```cypress.config.js```
![img_16.png](img_16.png)

Then it can be used in your cypress e2e testing: ```cypress/e2e/login-test.cy.js```
![img_17.png](img_17.png)

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
