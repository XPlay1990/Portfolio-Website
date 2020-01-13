import React, {useState} from "react";
import {Box, Card, IconButton, Tooltip} from "@material-ui/core";
import {Document, Page} from "react-pdf";
import * as Lebenslauf from "../resources/cv/Lebenslauf.pdf";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import "./cv.css"
import Typography from "@material-ui/core/Typography";


interface PDFDocumentProxy {
    numPages: number
}

export const CV: React.FC = () => {
    const [pagesTotal, setPagesTotal] = useState(2);
    const [pageNumber, setPageNumber] = useState(1);


    function getContainerWidth(): number {
        // const containerElement = document.getElementsByClassName('CVContainer')[0] as HTMLElement;
        // console.log(containerElement)
        // if (containerElement) {
        //     return containerElement.clientWidth
        // } else {
        //     return 600
        // }
        return (window.innerWidth - 240) * 0.4
    }

    function onDocumentLoadSuccess(pdf: PDFDocumentProxy): void {
        setPagesTotal(pdf.numPages)
    }

    function goToPrevPage() {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    function goToNextPage() {
        if (pageNumber < pagesTotal) {
            setPageNumber(pageNumber + 1)
        }
    }

    return (
        <div id='CV'>
            <Card className="CVContainer">
                {/*<Document file={Lebenslauf}>*/}
                {/*    <Outline/>*/}
                {/*    <Page pageNumber={1} width={900}/>*/}
                {/*    <Page pageNumber={2}/>*/}
                {/*</Document>*/}
                <Box style={{backgroundColor: '#3f51b5', height: 48, display: "flex", flexDirection: "row"}}>
                    <Tooltip title={"Zurück"}>
                        <IconButton onClick={goToPrevPage}>
                            <NavigateBeforeIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Vor"}>
                        <IconButton onClick={goToNextPage}>
                            <NavigateNextIcon/>
                        </IconButton>
                    </Tooltip>
                </Box>

                <div>
                    <Document
                        file={Lebenslauf}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page
                            pageNumber={pageNumber}
                            // height={window.screen.height-48}
                            width={getContainerWidth()}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Seite {pageNumber} von {pagesTotal}
                    </Typography>
                </div>
            </Card>
        </div>
    )
};