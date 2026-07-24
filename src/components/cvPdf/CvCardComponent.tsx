import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();
export function CvCardComponent({url,title, width = 500}: {url: string, title: string, width?: number}) {
    return(
        <div className=" p-4 rounded-lg overflow-hidden border transition-transform hover:scale-[1.01] duration-300">
                    <Document file={url}>
                        <Page pageNumber={1} width={width} renderAnnotationLayer={false} renderTextLayer={false} className="max-w-full" />
                    </Document>
                    <h2>{title}</h2>
                </div>
    )
}