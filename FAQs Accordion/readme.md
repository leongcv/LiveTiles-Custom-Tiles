# LiveTiles Custom Tile: FAQs Accordion

This is a custom tile to display a list of FAQ accordions.

![Screenshot of FAQs Accordion](/FAQs%20Accordion/screenshot-faqs-accordion.png)

## Pre-requisites

1. Create a new list with at least 2 columns with the following column names:
    * **Title** (default) - for question text
    * **Content** (new column) - for answer text
    * **SortOrder** (*Optional*: new column) - for sorting order

2. The list has to be stored in the same site as the LiveTiles page using this tile

## Custom Configurations

1. **Accordion Background Color** - Background color of the question panel
2. **Accordion Hover Color** - Background color of the question panel when mouse over
3. **Accordion Text Color** - Text color of the text in question panel
4. **List Name** - Name of the SharePoint list
5. **Sort by (Column name)** - _(Optional)_ Name of the list column to sort in ascending order

![Screenshot of Custom Configuration](/FAQs%20Accordion/screenshot-custom-config.png)

## Importing the Custom Tile

The provided `.tgz` file is an exported tile. To import it:

1. Open the LiveTiles Design Home page (`/LiveTilesDesign/Designer.aspx#route=/Home` from your site collection)
2. Click "Import Page"
3. Click "Upload"
4. In the open file dialog, select the [leongcv.faqs-accordion-1.0.0.tgz](/FAQs%20Accordion/dist/) file
5. Confirm with "Import"
