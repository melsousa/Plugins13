Backgrounds: function() {
	var self = this,
		scrollLeft = this._getScrollLeft(),
		scrollTop = this._getScrollTop(),
		$backgroundElements;

		this.backgrounds = [];

		if (!this.options.parallaxBackgrounds) return;

		$backgroundElements = this.$element.find('[data-stellar-background-ratio]');

		if (this.$element.data('stellar-background-ratio')) {
	        $backgroundElements = $backgroundElements.add(this.$element);
			}
