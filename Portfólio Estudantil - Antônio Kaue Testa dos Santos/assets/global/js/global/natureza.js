document.querySelectorAll('.skill-tag[data-tooltip]').forEach(tag => {
  tag.addEventListener('mouseenter', function () {
    const tip = document.createElement('div');
    tip.className = 'tooltip-box';
    tip.textContent = this.dataset.tooltip;
    document.body.appendChild(tip);

    const rect = this.getBoundingClientRect();
    const tipH = tip.offsetHeight;
    const tipW = tip.offsetWidth;

    tip.style.top = (rect.top - tipH - 10) + 'px';
    tip.style.left = Math.min(rect.left, window.innerWidth - tipW - 10) + 'px';

    this._tip = tip;
  });

  tag.addEventListener('mouseleave', function () {
    if (this._tip) { this._tip.remove(); this._tip = null; }
  });
});