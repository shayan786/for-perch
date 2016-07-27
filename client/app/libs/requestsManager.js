import request from 'axios';
import metaTagsManager from './metaTagsManager';

const PRODUCTS_API_URL = {
  fetch: 'products.json',
  create: '/products',
  delete: '/products'
};

const CART_API_URL = {
  create: '/carts'
};

export default {

  /**
   * Retrieve list of entities from server using AJAX call.
   *
   * @returns {Promise} - Result of ajax call.
   */
  fetchEntities() {
    return request({
      method: 'GET',
      url: PRODUCTS_API_URL.fetch,
      responseType: 'json',
    });
  },

  /**
   * Submit new entity to server using AJAX call.
   *
   * @param {Object} entity - Request body to post.
   * @returns {Promise} - Result of ajax call.
   */
  submitEntity(entity) {
    return request({
      method: 'POST',
      url: PRODUCTS_API_URL.fetch,
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
      data: entity,
    });
  },

  createNewCart() {
    return request({
      method: 'POST',
      url: CART_API_URL.create,
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      }
    });
  },

  addProductToCart(productId, cartId) {
    return request({
      method: 'POST',
      url: PRODUCTS_API_URL.create,
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      },
      data: {productId, cartId},
    });
  },

  removeProductFromCart(productId) {
    return request({
      method: 'DELETE',
      url: `${PRODUCTS_API_URL.delete}/${productId}`,
      responseType: 'json',
      headers: {
        'X-CSRF-Token': metaTagsManager.getCSRFToken(),
      }
    })
  }

};
