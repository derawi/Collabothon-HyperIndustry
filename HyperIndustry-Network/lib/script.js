/**
 * ShipCommodity processor function.
 * @param {org.acme.hyperindustry.ShipCommodity} tx
 * @transaction
 */

function shipCommodity(tx){
    tx.commodity.owner = tx.newOwner;
    return getAssetRegistry('org.acme.hyperindustry.Commodity')
        .then(function (assetRegistry) {
            return assetRegistry.update(tx.commodity);
        });
}

/**
 * AcceptShipment processor function.
 * @param {org.acme.hyperindustry.AcceptShipment} tx
 * @transaction
 */

function acceptShipment(tx){
	var commodity = tx.commodity;
    if (commodity.accepted == true) {
        throw new Error('Commodity already accepted');
	}
  	tx.commodity.accepted = true;
    // Get the asset registry for the Commodity.
    return getAssetRegistry('org.acme.hyperindustry.Commodity')
        .then(function (assetRegistry) {
      
            // Update the asset in the asset registry.
            return assetRegistry.update(tx.commodity);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.acme.hyperindustry', 'AcceptShipmentEvent');
      		event.commodity = tx.commodity;
      		event.price = tx.commodity.price;
      		event.producer = tx.commodity.producer;
      		event.receiver = tx.commodity.receiver;
            emit(event);

        });	  
}



/**
 * AcceptShipment processor function.
 * @param {org.acme.hyperindustry.Test} tx
 * @transaction
 */

function test(tx){
  	return getAssetRegistry('org.acme.hyperindustry.Invoice')
  		.then(function (assetRegistry) {
      		var factory = getFactory();
      		var invoice = factory.newResource('org.acme','Invoice',tx.invoiceId);
      		return assetRegistry.add(invoice1);
    })
	.catch(function (error) {
    	// Add optional error handling here.
  	});
}


/*
transaction acceptShipment {
  --> Commodity commodity

}
*/