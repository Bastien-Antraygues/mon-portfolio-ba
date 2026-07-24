import { CvListComponent } from "../components/cvPdf/CvListComponent";

export function CvPdfPage() {

    return (
        <div className="h-screenflex  min-h-screen py-10 px-4 max-w-full">
            <h1>CV PDF</h1>
            <p></p>
            <CvListComponent />
        </div>
    )
}

