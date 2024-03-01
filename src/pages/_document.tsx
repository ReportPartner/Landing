import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16473166159" />
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16473166159');
                    `}
                </script>
                <script type="text/javascript">
                    {`
                        var yaParams = {};
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', 'http://ip.up66.ru/', true);
                        xhr.onload = function() {
                            yaParams.ip = this.responseText;
                        }
                        xhr.send();
                    `}
                </script>
                <script type="text/javascript">
                    {`
                        (function (d, w, c) {
                            (w[c] = w[c] || []).push(function() {
                                try {
                                    w.yaCounter96590487 = new Ya.Metrika({
                                        id:96590487,
                                        params:window.yaParams,
                                        clickmap:true,
                                        trackLinks:true,
                                        accurateTrackBounce:true,
                                        webvisor:true
                                    });
                                } catch(e) { }
                            });

                            var n = d.getElementsByTagName("script")[0],
                                x = "https://mc.yandex.ru/metrika/watch.js",
                                s = d.createElement("script"),
                                f = function () { n.parentNode.insertBefore(s, n); };
                            for (var i = 0; i < document.scripts.length; i++) {
                                if (document.scripts[i].src === x) { return; }
                            }
                            s.type = "text/javascript";
                            s.async = true;
                            s.src = x;

                            if (w.opera == "[object Opera]") {
                                d.addEventListener("DOMContentLoaded", f, false);
                            } else { f(); }
                        })(document, window, "yandex_metrika_callbacks");
                    `}
                </script>
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></Script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet" />
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            />
            <body>
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/96590487"
                            style={{ position: "absolute", left: "-9999px" }}
                            alt=""
                        />
                    </div>
                </noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
