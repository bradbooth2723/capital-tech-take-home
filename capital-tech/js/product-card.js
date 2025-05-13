class ProductCard {
    constructor(data) {
        this.title = data.title;
        this.thumbnail = data.thumbnail;
        this.price = data.price;
        this.id = data.id;
        this.rating = data.rating;
        this.descrpition = data.description;
    }

    /**
     * Renders the product card component as an HTML string.
     *
     * @return {string} The HTML structure for the product card, which includes product image, title, description, price, and rating.
     */
    render() {
        return `<div class="cts-product-card">
                    <div class="cts-product-thumbnail">
                        <img src=${this.thumbnail} alt="" class="cts-product-image">
                    </div>
                    <div class="cts-product-info">
                        <h3 class="cts-product-title">${this.title}</h3>
                        <p class="cts-product-description">${this.descrpition}</p>
                        <div class="cts-product-meta">
                            <div class="cts-product-price">$${this.price}</div>
                            <div class="cts-product-rating">${this.star_html()}</div>
                        </div>
                    </div>
                </div>`
    }

    /**
     * Generates an HTML string for a star rating component as a single input element.
     * The input range uses a custom style variable to determine its visual rating value.
     *
     * @return {string} HTML string representation of a star rating input component.
     */
    star_html() {
        // Source: https://dev.to/alvaromontoro/single-html-element-star-rating-component-205l
        return `<input type="range" min="0" max="5" step="0.5" class="cts-rating" style="--val: ${this.rating}">`
    }
}