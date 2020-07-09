# curbside
Curbside App, an application to allow users to post items they wish to give away with a location-based Google API (required). nearly ready to deploy.
# Local Installation
### 1. Clone the repo then run:
`git clone git@github.com:ricardoshaffer/curbside-app.git`

### 2. Install missing components
* **Root Directory** `npm install`
* **Client Folder** `npm install`

### 3. Connect to Mongoose
* `npm run seed`

# Deploying Functioning Site:

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


#  Credits
* Home page image, image located on 'sign up', & 'sign out' are copyright by respective owner(s).
* Content created by @dsarra1018, @makiwumi, @vsaleem, @KendraNeves, & @ricardoshaffer.
* Developed using React.js, Node.js (backend), Google Geolocation API, FortAwesome (Font Awesome), etc.

# License
* MIT License, image(s), plugins, React.js components, etc. are copyright of respective owner(s). 2020