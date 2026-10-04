import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to toggle visibility
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [];
  for (let i = 0; i < 40; i++) {
    items.push(<h5 key={i}>Item {i}</h5>);
  }

  function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}
      <div>{items}</div>

      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible && (
          <button
            className="backtotop-btn"
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
          >
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
}
export default BackToTop;
