# sketch-coding-challenge

This is an implementation for sketch frontend coding test

## Description

We want you to develop a document viewer for Sketch documents in the cloud with the following requirements.

This viewer must have two screens:

Document page: Here, the user sees all artboards in the document. You need to show the artboards as thumbnails.
Artboard page: Here, the user sees a particular artboard in a bigger size than in the document view.
Interactions:

When the user views the document page and clicks on an artboard's thumbnail, the artboard page is loaded. The app shows the artboard full size, as described before.
The user can navigate through the different artboards using the navigation controls in the top bar.
The user can return to the document view clicking on the Close button in the left side of the top bar.
Notes:

If the artboard image is bigger than the space available, it must get shrunk to fit on the screen.
If the artboard image fits in the available space, show it in its original size.

## How to use

You will need to have [node.js](https://nodejs.org/en/) installed and may need to install [XCode](https://developer.apple.com/xcode/) if you are using macOs. 

```bash
npm install
npm run dev
```
Open [http://localhost:3000/](http://localhost:3000/) to explore.

## Week points

Due lack of time following things were not implemented at all or was implemented in the not perfect way:

- some code, like ``if (loading) return <p>Loading...</p>;``, is duplicated, would be nice to extract in some generic component / level
- some generic css code, variables, colors, sizes of paddings, for example, should be part of theme 
- models are written in happy path way and do not take into account possibility of incomplete data
- tests are missing :`(