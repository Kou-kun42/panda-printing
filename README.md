# Panda Printing

## Overview

This project is meant to be the beginning of a possible 3D printing service geared towards individual small batch creators. Currently, most existing services are aimed towards high level enthusiasts or companies that are issuing orders for large scale prototyping. My website is an attempt to bring the benefits of 3D printing to those that don't have access to it, in an easy and streamlined way.

## Progress

So far, I've created a landing webpage and followup informational pages about the service that forms a general layout of the website. I've created a simple cost estimate calculator that people can use to get an immediate price estimate, provided they know how much material their model will use. Lastly I created a print status page that someone might use to check on an ongoing print in the future.

## Future Vision

I want to incorporate curaengine which is the backend of an open source slicer program used to generate the gcode instructions file that a 3D printer uses to create a print. The slicer also calculates the weight and material usage of the model, which is what I was originally planning on using to get the final cost estimate for a print. So instead of the calculator, users could simply upload their model that would then automatically get calculate the cost. Something else I'd like to incorporate is an actual shipping calculator api that would give accurate costs based off of USPS or FedEx data. Finally, I'd like to get the status page functional, working off of actual order numbers that would be produced when someone might place an order.

Eventually, I want to have something like this on the Print Submission page where users can see their model and get all the printing stats like time, material usage, and model weight.
![alt text](https://raw.githubusercontent.com/kennethjiang/OctoPrint-Slicer/master/docs/screenshot1.png "Curaengine as shown in an Octoprint plugin")
