# curbside
Curbside nearly ready to deploy.

## 1. Connecting to Heroku
  * in CLI, enter : ```heroku login```
  * then, do ```heroku create```
  * finish with `git add .`, `git commit -am "message"`, `git push heroku master`

## 2. Connect to MongoDB using mLab:
  * Login to your heroku by going to heroku.com
  * navigate to your new app (from first step)
  * click on 'resources'  > search for 'mLab'
  * create mLab using 'sandbox' (free)
  * click on the new mLab icon, you'll see an area that reads __Database: xxxxxx___, below that, you'll see a link:
    *```mongodb://<dbuser>:<dbpassword>@something.mlab.com:something/something```
  * create an user under the 'user' tab and REMEMBER THE USER NAME & PASSWORD, that will fill the fields above.

## 3. Enter MongoDB info to the website:
  * __ Back End __ : Go into server.js > replace the 'localhost' with the new URL & do the same to the 'scripts'> listingsSeed.js
  