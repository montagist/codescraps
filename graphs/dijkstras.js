var nodeCount = 0;

function count() {
	
	nodeCount++;
	return nodeCount;
}

var testRoot = {
	
	ID: count(),
	children: [ { ID: count() }, { ID: count() }, 
				{ ID: count() }, { ID: count() },
				{ ID: count() }, { ID: count(),
				children: [ { ID: count() }, { ID: count() }, 
							{ ID: count() }, { ID: count(), 
							children: [
								{ ID: count() }, { ID: count() }, { ID: count() }						
							] } ]
	} ]
}

function dijkstras( rootNode, optDestNode ) {

	var nodes2Proc = [],
		nodesDist = {},
		dist = 0;

	procNode( rootNode );

	console.log( nodesDist );

	function procNode( theNode ) {

		if ( nodesDist[ theNode.ID ] )
			return;

		nodesDist[ theNode.ID ] = { distance: theNode.ID === rootNode.ID ? null : dist };
		
		if ( !theNode.children )
			return;

		// And count the distance for all these about to be "walked"
		dist++;
		
		//TODO: Sort children for cost
		//var sortedKids = theNode.children.sort( function( a,b ) { ... } );

		for ( var ni = 0; ni < theNode.children.length; ni++ ) {

			

			// If we've not seen this node before
			if ( !nodesDist[ theNode.children[ ni ].ID ] )
				procNode( theNode.children[ ni ] );
		}
	}
}