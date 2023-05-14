import React from "react";
import maps from "../assets/image-2.png";
import movie from '../assets/image.png';
import Project from './project';

const projects = [
    
    {
    id: 2,
    title: "Maps-r-Us",
    languages: "Javascript, Handlebars.",
    packages: "mysql12, sequilize, express, dotenv, express-handlebars",
    image: maps,
    description: "This project allows a useer to look up a location and it provides a couple of things you can do in that location.",
    repo: "https://github.com/tmcash/maps-r-us",
    live: "https://guarded-reef-93768.herokuapp.com/",
},


{
    id: 0,
    title: "Movie-Mania",
    languages: "Javascript, HTML, CSS .",
    packages: "API's used for this project: WatchMode: https://api.watchmode.com/,  OMDb: https://www.omdbapi.com/",
    image: movie,
    description: "This project allows a user to pick a random movie to watch by genre",
    repo: "https://github.com/mia2380/Sneak-Attack-Project-1",
    live: "https://mia2380.github.io/Sneak-Attack-Project-1/",
},


];

function Portfolio() {
    return (
    <div>
    <p className="content is-medium">My projects</p>
        

    <Project projects={projects} />
    </div>
    );
}

export default Portfolio;