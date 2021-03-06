BioSync.TreeGrafter.RenderUtil.Column = function( renderObj ) {

    this.renderObj = renderObj;
    this.make = renderObj.make;
    return this;
}

BioSync.TreeGrafter.RenderUtil.Column.prototype = new BioSync.TreeViewer.RenderUtil.Column();
BioSync.TreeGrafter.RenderUtil.Column.constructor = BioSync.TreeGrafter.RenderUtil.Column;
BioSync.TreeGrafter.RenderUtil.Column.prototype.super = BioSync.TreeViewer.RenderUtil.Column.prototype;


BioSync.TreeGrafter.RenderUtil.Column.prototype.canUserEditTree = function( p ) {

    if( this.renderObj.viewer.isLoggedIn == false ) { return false; }
    else if( this.renderObj.viewer.treeType == 'source'  ) { return true; }

    return ( ( this.renderObj.viewer.userInfo.canEdit ) || 
             ( this.renderObj.viewer.treeCreator == [ this.renderObj.viewer.userInfo.firstName,
                                                      this.renderObj.viewer.userInfo.lastName ].join(' ') ) )
}

BioSync.TreeGrafter.RenderUtil.Column.prototype.handlePruneCladeOptionClick = function() {

    this.nodeIdToPrune = this.recentlyClickedNode.id;

    this.renderObj.pruneClade( { column: this, nodeId: this.nodeIdToPrune } );
}

BioSync.TreeGrafter.RenderUtil.Column.prototype.handleReplaceCladeOptionClick = function() {

    this.nodeIdToReplace = this.recentlyClickedNode.id;

    this.renderObj.getClipboardForCladeReplace( { column: this, nodeId: this.nodeIdToReplace } );
}

BioSync.TreeGrafter.RenderUtil.Column.prototype.handleGraftCladeOptionClick = function() {

    this.nodeIdToGraftOnto = this.recentlyClickedNode.id;

    this.renderObj.getClipboardForCladeGraft( { column: this, nodeId: this.nodeIdToGraftOnto } );
}
