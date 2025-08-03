const phrases = [
      "I am a Frontend Dev.",
      "I build Clean Interfaces",
     
    ];
    const el = document.getElementById('typeText');
    let phraseIndex = 0;

    function typeWriter(text, i = 0) {
      if (i <= text.length) {
        el.innerHTML = `<span class="typing">${text.slice(0, i)}</span>`;
        setTimeout(() => typeWriter(text, i + 1), 100);
      } else {
        setTimeout(() => eraseText(text), 2000);
      }
    }

    function eraseText(text, i = text.length) {
      if (i >= 0) {
        el.innerHTML = `<span class="typing">${text.slice(0, i)}</span>`;
        setTimeout(() => eraseText(text, i - 1), 50);
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeWriter(phrases[phraseIndex]);
      }
    }

    typeWriter(phrases[0]);

    // Hamburger Toggle
    function toggleMenu() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('left-0');
      sidebar.classList.toggle('left-[-100%]');
    }