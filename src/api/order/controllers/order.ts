/**
 * order controller
 */

import { factories } from '@strapi/strapi'
const funt

export default factories.createCoreController('api::order.order', ({ strapi }) => ({
  async paymentOrder(ctx) {
    const {token, products, idUser, addressShipping} = ctx.request.body
    let totalPayment = 0
    products.forEach(element => {
      const priceTemp =
    });
    ctx.body = "Pay and order created";
  },
}));
