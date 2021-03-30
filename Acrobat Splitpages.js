cutLtoR = app.trustedFunction(function()
{
    // create a new document
    app.beginPriv();
    var newDoc = app.newDoc();
    app.endPriv();

    // get the filename of our current file

    var i = 0;
    while (i < this.numPages)
    {
        newDoc.insertPages( {
            nPage: newDoc.numPages-1,
            cPath: this.path,
            nStart: i
        });
        newDoc.insertPages( {
            nPage: newDoc.numPages-1,
            cPath: this.path,
            nStart: i
        });
        // we did this twice so that we can then split each copy of the page into a left
        // and right half. 
        i++;
    }

    if (newDoc.numPages > 1)
    {
        newDoc.deletePages(0);	// this gets rid of the page that was created with the newDoc call.
    }

    // at this point we have a documnent with every page from the source document
    // copied twice


    for (i=0; i<newDoc.numPages; i++)
    {
        // determine the crop box of the page
        var cropRect = newDoc.getPageBox("Crop", i);
        var halfWidth = (cropRect[2]-cropRect[0])/2;

        var cropLeft = new Array();
        cropLeft[0] = cropRect[0];
        cropLeft[1] = cropRect[1];
        cropLeft[2] = cropRect[0] + halfWidth;
        cropLeft[3] = cropRect[3];

        var cropRight = new Array();
        cropRight[0] = cropRect[2] - halfWidth;
        cropRight[1] = cropRect[1];
        cropRight[2] = cropRect[2];
        cropRight[3] = cropRect[3];

        if (i%2 == 0)
        {
	   newDoc.setPageBoxes( {
	       cBox: "Crop",
	       nStart: i,
	       rBox: cropLeft
	       });
        }
        else
        {
	   newDoc.setPageBoxes( {
	       cBox: "Crop",
	       nStart: i,
	       rBox: cropRight
	       });
        }
    }
}
)

cutRtoL = app.trustedFunction(function()
{
    // create a new document
    app.beginPriv();
    var newDoc = app.newDoc();
    app.endPriv();

    // get the filename of our current file

    var i = 0;
    while (i < this.numPages)
    {
        newDoc.insertPages( {
            nPage: newDoc.numPages-1,
            cPath: this.path,
            nStart: i
        });
        newDoc.insertPages( {
            nPage: newDoc.numPages-1,
            cPath: this.path,
            nStart: i
        });
        // we did this twice so that we can then split each copy of the page into a left
        // and right half. 
        i++;
    }

    if (newDoc.numPages > 1)
    {
        newDoc.deletePages(0);	// this gets rid of the page that was created with the newDoc call.
    }

    // at this point we have a documnent with every page from the source document
    // copied twice


    for (i=0; i<newDoc.numPages; i++)
    {
        // determine the crop box of the page
        var cropRect = newDoc.getPageBox("Crop", i);
        var halfWidth = (cropRect[2]-cropRect[0])/2;

        var cropLeft = new Array();
        cropLeft[0] = cropRect[0];
        cropLeft[1] = cropRect[1];
        cropLeft[2] = cropRect[0] + halfWidth;
        cropLeft[3] = cropRect[3];

        var cropRight = new Array();
        cropRight[0] = cropRect[2] - halfWidth;
        cropRight[1] = cropRect[1];
        cropRight[2] = cropRect[2];
        cropRight[3] = cropRect[3];

        if (i%2 == 0)
        {
	   newDoc.setPageBoxes( {
	       cBox: "Crop",
	       nStart: i,
	       rBox: cropRight
	       });
        }
        else
        {
	   newDoc.setPageBoxes( {
	       cBox: "Crop",
	       nStart: i,
	       rBox: cropLeft
	       });
        }
    }
}
)

function addan(){
var annot = this.addAnnot({
page: 0,
type: "Stamp",
author: "A. C. Robat",
name: "myStamp",
rect: [400, 400, 550, 500],
contents: "Try it again, this time with order and method!",
AP: "NotApproved" });
}
