function permute( arr2perm, parNode ) {

	if ( arr2perm.length == 2 ) {
	
		if ( parNode )
			parNode.children.push( { data: arr2perm[ 0 ] ,
				  					 children: [ { data: arr2perm[ 1 ] } ] },
				  				   { data: arr2perm[ 1 ] ,
					  				 children: [ { data: arr2perm[ 0 ] } ] } );

		return [ [ arr2perm[ 0 ], arr2perm[ 1 ] ],
				 [ arr2perm[ 1 ], arr2perm[ 0 ] ] ];
	}

	var foundPerms = [],
		newNode;

	for ( var i = 0; i < arr2perm.length; i++ ) {
		
		if ( i > 0 ) {
			
			var tmp = arr2perm[ 0 ];
			arr2perm[ 0 ] = arr2perm[ i ];
			arr2perm[ i ] = tmp;
		}
		
		if ( parNode ) {
			newNode = { children: [],
						data: arr2perm[ 0 ] };
			
			parNode.children.push( newNode );
		}
		
		var subPerms = permute( arr2perm.slice( 1 ), newNode );
		
		for ( var subi = 0; subi < subPerms.length; subi++ )
			foundPerms.push( [ arr2perm[ 0 ] ].concat( subPerms[ subi ] ) );

	}
	
	return foundPerms;
}