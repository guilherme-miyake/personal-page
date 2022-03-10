import React, {Fragment, useEffect} from "react";

export default function Dinerama(props: { location: any }) {
    useEffect(() => {
        const userAgent = window.navigator.userAgent
        const platform = window.navigator.platform
        const iosPlatforms = ['iPhone', 'iPad', 'iPod']

        if (iosPlatforms.indexOf(platform) !== -1) {
            window.location.href = 'itms-apps://itunes.apple.com/br/app/dinerama/id1572283434?l=en&reffererId=toshio'
        } else if (/Android/.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=br.com.dinerama&reffererId=toshio';
        } else {
            window.location.href = 'https://dinerama.com.br';
        }
    })
    return <Fragment>
        Redirecting to Dinerama...
    </Fragment>
}
