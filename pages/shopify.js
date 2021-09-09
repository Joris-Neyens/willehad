import Client from "shopify-buy";

export default function shopify() {

    const client = Client.buildClient({
      domain: "willehad.myshopify.com",
      storefrontAccessToken: "aaf4165bde6a7acc1f9664256d29304a",
    });

    
    client.product.fetchAll().then(products => {
      console.log(products);
    });

    const productId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTQ1NjY3NzA4OTM=";

    client.product.fetch(productId).then(product => {
      console.log(product);
    });

    let id = ""

    const checkout = client.checkout.create().then(checkout => {

        if (checkout) {
            return checkout;
        }
  
    });


    let newCheckoutId = "Z2lkOi8vc2hvcGlmeS9DaGVja291dC81NzM1Mzg5OWUyZDA5NDY0YTliMDkxM2Q5NGI0YzI3ZT9rZXk9YzQ1OGQyZWY4NjdhODI4Yjk2NDc0MWYwYTAwNjk5Yzg=";

    const lineItemsToAdd = [
      {
        quantity: 1,
        variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTk2Mzg5MTk1Nzk2NQ==",
      },
    ];

    console.log("productId", newCheckoutId)
    console.log("lineItem", lineItemsToAdd)


    client.checkout.addLineItems(newCheckoutId, lineItemsToAdd).then(checkout => {
     
      console.log(checkout.lineItems); 
    });

    client.checkout.fetch(newCheckoutId).then(checkout => {
      // Do something with the checkout
      console.log("fetchedCheckout: ", checkout);
    });


  return <div></div>;
}

