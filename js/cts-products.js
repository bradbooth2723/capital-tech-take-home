(function ($) {
    'use strict';

    $(document).ready(async function () {
        const products_div = $('#cts-products');
        let page_number = 1;

        const body = `<div id="cts-products-page" class="cts-products-page"></div>`;
        products_div.html(body);

        const cts_page_div = $('#cts-products-page');
        const table = `
            <div id="cts-products-container" class="cts-products-container">
                
            </div>`;
        cts_page_div.html(table);

        let response = await products_page_post(
            $,
            cts_products_ajax_object,
            'get_data',
            {limit: 36, skip: 0}
        );

        if (!response.success) {
            if (response.status === 401) {
                cts_page_div.html(`<div class="cts-error">ERROR: You do not have permission to view this page.</div>`)
                return;
            } else {
                console.error(response);
            }
        }

        const products = [];
        response.data.data.products.forEach(product => products.push(new ProductCard(product)));
        let productTable = new ProductTable(products, 18);
        const products_container = $('#cts-products-container');
        products_container.html(productTable.getCurrent());

        // Controller for infinite scroll
        window.addEventListener('scroll', async ()=> {
            const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
            if ((scrollTop + clientHeight) >= scrollHeight) {
                products_container.html(productTable.next());
                let next_products = await products_page_post(
                    $,
                    cts_products_ajax_object,
                    'get_data',
                    {limit: 18, skip: ++page_number * 18}
                )
                let next_products_array = [];
                next_products.data.data.products.forEach(product => next_products_array.push(new ProductCard(product)));
                productTable.add(next_products_array);
            }
        })
    });

}(jQuery));

/**
 * Sends a POST request to the server for a specified action and returns the result.
 *
 * @param {Object} $ - The jQuery object, used for handling AJAX requests.
 * @param {Object} ajax_object - An object containing AJAX configuration, including the URL and nonce.
 * @param {string} action - The action identifier for the AJAX request.
 * @param {Object} data - Additional data to be sent with the POST request.
 * @return {Promise<*>} A promise that resolves with the response data if the request is successful.
 */
async function products_page_post($, ajax_object, action, data) {
try {
    const response = await $.ajax({
        url: ajax_object.ajax_url,
        method: 'POST',
        data: {
            _ajax_nonce: ajax_object.nonce,
            action: action,
            ...data
        },
    });
    return {
        success: true,
        status: 200,
        data: response
    }
} catch (error) {
    const errorResponse = error.responseJSON || {
        success: false,
        data: error.responseText || 'An error occurred.'
    };

    return {
        success: false,
        status: error.status,
        data: errorResponse.data,
        statusText: errorResponse.statusText
    }
}

}