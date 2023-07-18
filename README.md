# 10 Object-oriented Programming: SVG Logo Maker

Command line tool to generate an svg logo and write it to file.


Table of Contents
Description
Usage
Links
Features
User Story
Acceptance Criteria

Description
You will be prompted with questions about the content for your SVG Logo
Answer each questions with the information you want for your SVG Logo

Usage
![image](https://github.com/Jackson24391/Module-10-SVG-Logo-Maker/assets/131276854/e8996b62-b309-4e01-a8d7-f383dab16e2a)
![image](https://github.com/Jackson24391/Module-10-SVG-Logo-Maker/assets/131276854/0d214455-1ce7-465f-a8c2-2a97bba75f82)


Links
Jackson24391/Module-10-SVG-Logo-Maker (github.com)
WEB_2023-07-18_11:13
https://www.vidline.com/share/V0K6H1Z4E3/d1b5912a963a77b98e6fd41122340be2 

Features
Generates an SVG file with the logo of your choice
You can choose text (up to 3 characters), text color, SVG shape and SVG shape color

User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
