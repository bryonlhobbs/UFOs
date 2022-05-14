# UFOs

## Overview of Project
The purpose of this project was to enhance the existing website to allow for different filtering parameters of the embedded dynamic table of UFO sightings.  This will allow Dana to better look for patterns in the UFO data on newly searchable criteria.

## Results
In order to use the webpage's dynamic table, you would enter a search term in one of the text fields on the left-hand side. A user would just type the search term and then either use the tab key or click off of the field with the mouse for the table to refresh with the filtered data.  Below are some screenshots of this process in action.

The first image is the table before a search occurs:
<img width="1420" alt="Before_Search" src="https://user-images.githubusercontent.com/99457275/168445598-1ee2a6e7-a2f0-489d-8b09-c205a5fc868b.png">

Next, enter the search criteria:
<img width="1411" alt="Enter_Search_Term" src="https://user-images.githubusercontent.com/99457275/168445604-5ce91795-dc75-4d9c-aa02-5d3fcff26652.png">

Then, initiate a change event by pressing the tab key or clicking elsewhere in the webpage.  This triggers the active event listener code to initiate the functions:
<img width="1413" alt="After_Focus_Change_Event" src="https://user-images.githubusercontent.com/99457275/168445616-4077b237-3f1c-4af4-a61a-54e491a6e7cd.png">

Finally, remove the seach criteria and the table returns to an unfiltered state:
<img width="1410" alt="After_Search_Term_removed" src="https://user-images.githubusercontent.com/99457275/168445634-ed76b782-8718-40ee-b163-6ba7786c19ce.png">


## Summary
This page functions well but does come with a major concern.  The data available only covers a two week span in 2010.  In order for this page to grow into a valuable resource for the UFO community, we would need access to much more data to provide a thorough picture of UFO activity.  My first recommendation is to search for and acquire more data for the table.  My second recommendation would be to add a search field for duration of a UFO event.  This would allow users to pinpoint patterns with more accuracy.  One other concern and recommendation is that the comments could be cleaned up to look more polished.  This would require us to include code that would correct the issues with displaying punctuation properly.
