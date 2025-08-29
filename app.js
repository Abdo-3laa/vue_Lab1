const { createApp } = Vue;

createApp({
  data() {
    return {
      cartCount: 0,
      showProducts: true,
      discount: 10,
      products: [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 59.99,
          inStock: true,
          description: "High quality wireless headphones with noise cancellation.",
          image: "img/photo-wireless-headphones_1029469-18128.jpg",


        },
        {
          id: 2,
          name: "Smart Watch",
          price: 45.0,
          inStock: false,
          description: "Track your fitness and notifications on the go.",
          image: "img/smart-watch_878233-7461.jpg",
        },

        {
          id: 3,
          name: "Bluetooth Speaker",
          price: 30.5,
          inStock: true,
          description: "Portable speaker with excellent sound quality.",
          image: "img/l-intro-1684351042.jpg",
        },
        {
          id: 4,
          name: "Gaming Mouse",
          price: 75.0,
          inStock: false,
          description: "Ergonomic mouse with customizable buttons.",
          image: "img/OIP.webp",
        },
        {
          id: 5,
          name: "USB-C Hub",
          price: 25.0,
          inStock: true,
          description: "Expand your laptop connectivity with multiple ports.",
          image: "img/USB-C Hub_.jpg",
        },
        {
          id: 6,
          name: "External Hard Drive",
          price: 80.0,
          inStock: true,
          description: "1TB external hard drive for backups and storage.",
          image: "img/external-hard-drive-d-external-hard-drive-d-illustration-115138080.webp",
        },
        {
          id: 7,
          name: "Asus F15 Laptop",
          price: 850.0,
          inStock: true,
          description: "Powerful Asus F15 laptop with Intel i5 processor and 8GB RAM.",
          image: "img/Asus.png",
        },
        {
          id: 8,
          name: "iPhone 13",
          price: 999.99,
          inStock: false,
          description: "Latest Apple iPhone 13 with A15 Bionic chip and improved cameras.",
          image: "img/sp851-iphone13.png",
        },

        {
    id: 9,
    name: "AirPods Pro",
    price: 249.0,
    inStock: true,
    description: "Apple AirPods Pro with active noise cancellation and transparency mode.",
    image: "img/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg",
  },

      ],
      cart: [],
    };
  },
  methods: {
    stockClass(product) {
      if (product.inStock) return "text-success";
      else if (product.price < 50) return "text-warning";
      else return "text-danger";
    },
    addToCart(product) {
      this.cartCount++;
      alert(`Added ${product.name} to cart!`);

      // Extra Challenge: Add product to cart array or increase quantity
      const cartItem = this.cart.find((item) => item.product.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex((item) => item.product.id === productId);
      if (index !== -1) {
        this.cartCount -= this.cart[index].quantity;
        this.cart.splice(index, 1);
      }
    },
  },
 computed: {
  totalPrice() {
    const subtotal = this.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    if (this.discount > 0) {
      return subtotal * (1 - this.discount / 100);
    }
    return subtotal;
  },
},

}).mount("#app");
