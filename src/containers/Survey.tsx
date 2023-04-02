export default function Survey() {
  return (
    <div className="page" id="survey">
      <iframe
        id="secim-anketi"
        title="Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowFullScreen={true}
        src="https://form.jotform.com/230861054196961"
        frameBorder={0}
        style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
        scrolling="no"
      ></iframe>
    </div>
  );
}
