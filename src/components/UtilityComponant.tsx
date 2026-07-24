export default function PdfEmbed({ ficher }: { ficher: string }) {
  return (
    <embed
      src={ficher}
      type="application/pdf"
      width="100%"
      height="600px"
    />
  );
}