

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; // Instance de Product
        this.quantity = quantity; // Quantité du produit dans le panier
    }

    // Méthode pour calculer le prix total pour cet élément
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}



class ShoppingCart {
    constructor() {
        this.items = []; // Tableau pour stocker les éléments du panier
    }

    // Méthode pour ajouter un produit au panier
    addItem(product, quantity) {
        // Vérifier si le produit est déjà dans le panier
        let existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Augmenter la quantité si le produit est déjà dans le panier
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem); // Ajouter un nouvel élément au panier
        }
    }

    // Méthode pour supprimer un produit du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId); // Supprimer l'élément avec l'id du produit
    }

    // Méthode pour obtenir le total de tous les éléments du panier
    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Méthode pour afficher tous les éléments du panier
    displayItems() {
        if (this.items.length === 0) {
            console.log("Le panier est vide.");
        } else {
            this.items.forEach(item => {
                console.log(`${item.product.name} x${item.quantity} = ${item.getTotalPrice()} €`);
            });

        }
    }
}