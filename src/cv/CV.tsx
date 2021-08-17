import React, {useEffect, useState} from "react";
import {Box, Card, IconButton, Tooltip} from "@material-ui/core";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import Lebenslauf from "../resources/cv/Lebenslauf.pdf";
import CV_en from "../resources/cv/CV_en.pdf";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import "./cv.css"
import Typography from "@material-ui/core/Typography";
import i18n from "i18next";

interface PDFDocumentProxy {
    numPages: number
}

export const CV: React.FC = () => {
    const [pagesTotal, setPagesTotal] = useState(2);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfWidth, setPdfWidth] = useState((window.innerWidth - 240) * 0.6)

    useEffect(() => {
        setPdfWidth(document.getElementById("PdfContainer")?.clientWidth || (window.innerWidth - 240) * 0.6)
    }, [])

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
                <Box
                    style={{backgroundColor: '#3f51b5', height: 48, display: "flex", flexDirection: "row"}}>
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

                {
                    i18n.language === 'de' || i18n.language === 'de-DE' ? (
                        <div id={"PdfContainer"}>
                            <Document
                                file={Lebenslauf}
                                onLoadSuccess={onDocumentLoadSuccess}
                                onLoadError={(error: any) => console.log(error)}
                                onSourceError={(error: any) => console.log(error)}
                            >
                                <Page
                                    pageNumber={pageNumber}
                                    // height={window.screen.height-48}
                                    width={pdfWidth}
                                    renderAnnotationLayer={false}
                                />
                            </Document>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Seite {pageNumber} von {pagesTotal}
                            </Typography>
                        </div>
                    ) : (
                        <div id={"PdfContainer"}>
                            <Document
                                file={CV_en}
                                onLoadSuccess={onDocumentLoadSuccess}
                                onLoadError={(error: any) => console.log(error)}
                                onSourceError={(error: any) => console.log(error)}
                            >
                                <Page
                                    pageNumber={pageNumber}
                                    // height={window.screen.height-48}
                                    width={pdfWidth}
                                    renderAnnotationLayer={false}
                                />
                            </Document>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Page {pageNumber} of {pagesTotal}
                            </Typography>
                        </div>
                    )
                }
            </Card>
        </div>
    )
};