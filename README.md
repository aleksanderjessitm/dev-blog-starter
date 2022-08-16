# A Starter Dev Blog

Welcome to a starter blog for developers. I included all basics to make sure you are ready to post in no time. 

## Config
Be sure to check out [`config.mjs`](./config.mjs) to customize the look of the website, and provide some basic info. Simply edit the values you want.

Prior to running any npm script, the code over at [`generateStyles.mjs`](./generateStyles.mjs) will run, generating the scss variables.

scss is a superset of css. Any valid css will be valid scss.

## Styling
The main styles are over at [`styles.scss`](./src/styles/styles.scss)

## Deployment
The site is configured to be deployed at Vercel. 

To deploy simply install Vercel's CLI:
`npm i -g vercel`

Then run:
`vercel deploy`

After a successful deploy, deploy all next versions by running

`vercel --prod`.

You may also link your GitHub/GitLab repo on Vercel's dashboard for convenient deploys.

## License AGPLv3
Copyright (C) 2022 Aleksander Jess of ITMAGINATION

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
