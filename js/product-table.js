class ProductTable {
    constructor(products=[], step, total) {
        this.products = products;
        this.step = step;
        this.current = 0;
        this.html = this.generate_html();
    }

    /**
     * Retrieves the current HTML content.
     *
     * @return {string} The current HTML as a string.
     */
    getCurrent() {
        return this.html;
    }

    /**
     * Retrieves the size of the products collection.
     *
     * @return {number} The number of elements in the products collection.
     */
    getSize() {
        return this.products.length;
    }

    /**
     * Advances to the next step, updates the internal HTML content
     * by appending new elements based on the current state, and returns the updated HTML.
     *
     * @return {string} The updated HTML content after advancing to the next step.
     */
    next() {
        this.current++;
        const end = this.step * this.current + this.step;
        this.html += this.generate_html(this.step * this.current, end);

        return this.html;
    }

    /**
     * Generates an HTML string by rendering the products within the specified range.
     *
     * @param {number} [start=0] - The starting index of the products array to render.
     * @param {number} [end=this.step] - The ending index (exclusive) of the products array to render.
     * @return {string} The generated HTML string containing the rendered products.
     */
    generate_html(start = 0, end = this.step) {
        this.html = '';
        for (let i = start; i < end; i++) {
            if (i < this.products.length) {
                this.html += this.products[i].render();
            }
        }
        return this.html;
    }

    /**
     * Adds the provided products to the existing list of products.
     *
     * @param {Array} products - An array of product items to be added.
     * @return {void} Does not return a value.
     */
    add(products) {
        this.products = this.products.concat(products);
    }
}
