const setupComparison = (containerId) => {
    const container = document.getElementById(containerId);
    const afterWrapper = container.querySelector(".after-wrapper");
    const slider = container.querySelector(".slider");
  
    let isDragging = false;
  
    container.addEventListener("mousedown", () => isDragging = true);
    window.addEventListener("mouseup", () => isDragging = false);
  
    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
  
      const rect = container.getBoundingClientRect();
      let offsetX = e.clientX - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
  
      afterWrapper.style.width = `${offsetX}px`;
      slider.style.left = `${offsetX}px`;
    });
  };
  
  ["comp1", "comp2", "comp3"].forEach(setupComparison);
  