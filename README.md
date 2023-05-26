### Cypress, Github action and github secrets prototype 

This is a prototype to test Cypress with github secrets in the pipeline.

#### Prerequisites 
Add the secrets in your github repository
Github repository secrets:
1. ![img.png](images/img.png)
2. ![img_1.png](images/img_1.png)
3. ![img_2.png](images/img_2.png)
4. ![img_3.png](images/img_3.png)
5. ![img_4.png](images/img_4.png)
and add password secret:
6. ![img_5.png](images/img_5.png)
7. ![img_6.png](images/img_6.png)

Github environment secrets:
1. ![img_7.png](images/img_7.png)
2. ![img_8.png](images/img_8.png)
3. ![img_9.png](images/img_9.png)
4. ![img_10.png](images/img_10.png)
5. ![img_11.png](images/img_11.png)
6. ![img_12.png](images/img_12.png)
7. ![img_13.png](images/img_13.png)
*Note*
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
