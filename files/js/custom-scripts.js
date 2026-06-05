document.addEventListener("DOMContentLoaded", () => {

   /* fixed padding for about-us */
   const aboutSection = document.querySelector('.about-us');
   const aboutBlocksContainer = document.querySelector('.about-us__blocks');
   const aboutBlockInfo = document.querySelector('.about-us__block-info');

   if (!aboutSection || !aboutBlocksContainer || !aboutBlockInfo) {
      //console.error("Script: One of the elements of the about-us section was not found.");
      return;
   }

   let isAboutUpdating = false;

   const adjustAboutPadding = () => {
      if (isAboutUpdating) return;

      // Screen width limiter (from 721px and above)
      if (!window.matchMedia('(min-width: 721px)').matches) {
         aboutSection.style.paddingTop = '';
         aboutSection.style.paddingBottom = '';
         return;
      }

      isAboutUpdating = true;

      // 1. Reset inline styles and force the browser to recalculate the layout
      aboutSection.style.paddingTop = '';
      aboutSection.style.paddingBottom = '';
      void aboutSection.offsetHeight; 

      // 2. Obtain the coordinates of the container and the info block
      const containerRect = aboutBlocksContainer.getBoundingClientRect();
      const blockRect = aboutBlockInfo.getBoundingClientRect();

      // 3. Calculate the block's extent beyond the container's boundaries
      const overflowTop = containerRect.top - blockRect.top;
      const overflowBottom = blockRect.bottom - containerRect.bottom;

      // 4. Getting basic CSS indents for the about-us section
      const computedStyle = window.getComputedStyle(aboutSection);
      const basePaddingTop = parseFloat(computedStyle.paddingTop) || 0;
      const basePaddingBottom = parseFloat(computedStyle.paddingBottom) || 0;

      // Debugging
      //console.log(`[About Us] Выход сверху: ${overflowTop}px | Выход снизу: ${overflowBottom}px`);

      // 5. Adjust padding when going beyond the limits
      if (overflowTop > 0) {
         aboutSection.style.paddingTop = `${basePaddingTop + overflowTop}px`;
      }
      
      if (overflowBottom > 0) {
         aboutSection.style.paddingBottom = `${basePaddingBottom + overflowBottom}px`;
      }

      isAboutUpdating = false;
   };

   // Monitoring the content and About Us container
   const aboutObserver = new ResizeObserver(() => {
      requestAnimationFrame(adjustAboutPadding);
   });
   
   aboutObserver.observe(aboutBlockInfo);
   aboutObserver.observe(aboutBlocksContainer);

   // Resize and load events
   window.addEventListener('resize', () => {
      requestAnimationFrame(adjustAboutPadding);
   });
   
   window.addEventListener('load', () => {
      requestAnimationFrame(adjustAboutPadding);
   });

   // Initial launch
   requestAnimationFrame(adjustAboutPadding);




   /* fixed padding for ria-advantage */
   const section = document.querySelector('.ria-advantage');
   const blocksContainer = document.querySelector('.ria-advantage__blocks');
   const blockInfo = document.querySelector('.ria-advantage__block-info');

   if (!section || !blocksContainer || !blockInfo) {
      //console.error("Script: One of the elements was not found.");
      return;
   }

   let isUpdating = false;

   const adjustPadding = () => {
      
      if (isUpdating) return;

      // Using matchMedia for exact CSS media query matching
      if (!window.matchMedia('(min-width: 721px)').matches) {
         section.style.paddingTop = '';
         section.style.paddingBottom = '';
         return;
      }

      isUpdating = true;

      // 1. Reset inline styles before taking measurements
      section.style.paddingTop = '';
      section.style.paddingBottom = '';
      void section.offsetHeight; // Forced reflow

      // 2. MEASURE BY CONTAINER: compare the absolute block and its parent container block
      const containerRect = blocksContainer.getBoundingClientRect();
      const blockRect = blockInfo.getBoundingClientRect();

      // 3. We calculate the output beyond the container itself (and not the entire section with paddings)
      const overflowTop = containerRect.top - blockRect.top;
      const overflowBottom = blockRect.bottom - containerRect.bottom;

      // 4. Read the default CSS margins of the section (the same 108px and 200px)
      const computedStyle = window.getComputedStyle(section);
      const basePaddingTop = parseFloat(computedStyle.paddingTop) || 0;
      const basePaddingBottom = parseFloat(computedStyle.paddingBottom) || 0;

      // Debug information (will appear in the developer console F12 -> Console)
      // This will help you see what numbers the script sees live.
      //console.log(`Выход сверху: ${overflowTop}px | Выход снизу: ${overflowBottom}px`);

      // 5. If there is an overhang beyond the container, we add it to the existing padding of the section.
      if (overflowTop > 0) {
         section.style.paddingTop = `${basePaddingTop + overflowTop}px`;
      }
      
      if (overflowBottom > 0) {
         section.style.paddingBottom = `${basePaddingBottom + overflowBottom}px`;
      }

      isUpdating = false;
   };

   // We monitor the content
   const observer = new ResizeObserver(() => {
      requestAnimationFrame(adjustPadding);
   });
   
   observer.observe(blockInfo);
   observer.observe(blocksContainer);

   window.addEventListener('resize', () => {
      requestAnimationFrame(adjustPadding);
   });
   
   window.addEventListener('load', () => {
      requestAnimationFrame(adjustPadding);
   });

   // Initial launch
   requestAnimationFrame(adjustPadding);
});