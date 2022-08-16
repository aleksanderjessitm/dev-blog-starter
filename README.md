# A Starter Dev Blog

Welcome to a starter blog for developers. I included all basics to make sure you are ready to post in no time. 

## Config
Be sure to check out [`config.mjs`](./config.mjs) to customize the look of the website, and provide some basic info. Simply edit the values you want. Enter your first name, last name, full name, domain name, etc.

Prior to running any npm script, the code over at [`generateStyles.mjs`](./generateStyles.mjs) will run, generating the scss variables.

scss is a superset of css. Any valid css will be valid scss.

**After making changes to config.ts, that change colors, run `yarn generate-styles` or `npm run generate-styles`.**

## Styling
The main styles are over at [`styles.scss`](./src/styles/styles.scss)

## Deployment
The site is configured to be deployed at Vercel. 

To deploy simply install Netlify's CLI:
`npm install netlify-cli -g`
to then login: 
`netlify login`

Then run:
`netlify deploy --prod`


After a successful deploy, you may link your GitHub/GitLab repo on Netlify's dashboard for convenient deploys.

## License AGPLv3
Copyright (C) 2022 Aleksander Jess of ITMAGINATION

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
