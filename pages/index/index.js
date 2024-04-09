// index.js  
Page({  
  data: {  
    products: [  
      { id: 1, name: '商品1', price: '100元', image: '路径1' },  
      { id: 2, name: '商品2', price: '200元', image: '路径2' },  
      // ...更多商品  
    ],  
    cart: [], // 购物车数据，这里简单处理，实际开发中应该是持久化存储或与服务端同步  
  },  
    
  addToCart: function(e) {  
    const productId = e.currentTarget.dataset.id;  
    const product = this.data.products.find(item => item.id === productId);  
    if (product) {  
      const cartItem = this.data.cart.find(item => item.id === productId);  
      if (cartItem) {  
        // 如果购物车中已有该商品，则增加数量（这里简化处理，实际开发中可能需要根据需求调整）  
        cartItem.quantity++;  
      } else {  
        // 如果购物车中没有该商品，则添加商品  
        this.setData({  
          cart: [...this.data.cart, { ...product, quantity: 1 }],  
        });  
      }  
    }  
  },  
    
  goToCart: function() {  
    // 跳转到购物车页面，这里只是简单打印购物车数据，实际开发中应跳转到购物车页面并传递数据  
    console.log(this.data.cart);  
  },  
});