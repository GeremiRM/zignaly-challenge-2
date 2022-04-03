<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="hatch" />

&#xa0;

</div>

<h1 align="center">Zignaly Challenge 2</h1>

<hr>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-how-to-run">How to run</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-approach">Approach</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
</p>

<br>

## :dart: About

Zignaly Frontend Challenge. It consisted on building a Real City finder making use of the <a href="https://docs.mapbox.com/api/search/geocoding/">GeoCoding API </a>.

## :sparkles: How to Run

First you need to set up an .env file with the following value:

```bash
REACT_APP_API_KEY=...

```

This is the API KEY you get from GeoCoding API. The key I used for this project was provided by Zignaly.

Once you set that up, open your terminal and run:

With docker-compose:

```bash
  # On the root of the project (if using linux, remember to add sudo at the beginning)
  docker-compose up
```

With npm:

```bash
  npm install
  npm run start
```

If everything went well, the application should be running on localhost:3000

## :checkered_flag: Approach

How did I approach this project?

Well, the first thing I did was to determine the layout. The requirements for the project were simple: Have a form with an input field where the queries to the API are going to be made, and a list where the results are going to be displayed. I, however, decided to add a couple of other features to the app, such as a Map (using mapbox-gl) and a suggestions list. Taking this into consideration, the app is primarily made of two components: 

1) **The Search Component**: This is where the queries are performed. Following the requirements, there is a form with an input field that calls the API every time its values changes (for this project, I used React-Query to avoid inconveniences such as race conditions). Besides the form, there is also a suggestions list that is displayed below the input, this is where the short version of the results of the query are displayed. Click on one of the suggestions (or submit the form) and the Map will take you to that location. There is also a filter component, where the user can pick what type of location they are searching: A region, a place, a country, etc. The default value for the filter is Place (which are pretty much cities). 

2) **The Results Component**: This is a table where the information of the queries are displayed with more detail than the one present on the suggestions list (for example, it shows the coordinates of the locations).

Following the requirements for the project, either the list of suggestions or the table can act as the "list" of results required. 

After building everything, I dockerized the application. 

## :rocket: Technologies

The following tools were used in this project:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Docker](https://www.docker.com/)
- [Mapbox-gl](https://docs.mapbox.com/mapbox-gl-js/api/)
- [React Query](https://react-query.tanstack.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
