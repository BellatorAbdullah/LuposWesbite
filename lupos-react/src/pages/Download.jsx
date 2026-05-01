import Footer from '../components/Footer'
import useFadeIn from '../components/useFadeIn'

export default function Download() {
  useFadeIn()

  const handleDownload = () => {
    alert('Nice Try Diddy. Lupos App not available 😂')
  }

  return (
    <>
      <main>
        <section className="section fade-in download-section" id="Section1">
          <span className="greeting-text">
            Click the <strong>Button</strong> Below
          </span>

          <button id="button" className="download-btn" onClick={handleDownload}>
            Download
          </button>

          <span className="greeting-lupos">To Download Lupos App</span>
        </section>

        <section className="section fade-in">
          <div className="content1-1-text"><em></em></div>
          <div className="content1-2-text"></div>
        </section>

        <section className="section fade-in" />
        <section className="section fade-in" />
      </main>

      <Footer />
    </>
  )
}
