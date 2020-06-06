import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";

export function Certificates() {
    const targetRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "//cdn.youracclaim.com/assets/utilities/embed.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    });


    return (
        <div>
            <Grid container spacing={1} style={{margin: 'auto', width: '80%'}}>
                <Grid item md={6}>
                    {/*<div ref={targetRef}*/}
                    {/*     data-iframe-width={100}*/}
                    {/*     data-iframe-height="500"*/}
                    {/*     data-share-badge-id="9bb96afb-8758-480c-b329-7cf02c0249da"*/}
                    {/*     data-share-badge-host="https://www.youracclaim.com"*/}
                    {/*/>*/}
                </Grid>
            </Grid>
        </div>
    )
}
