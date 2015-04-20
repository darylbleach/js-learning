function removeClass( element, class_name ) {

    /* Regex to test if the class already exists in an element's className: */

    var regexp = new RegExp( '(^| )' + class_name + '( |$)' );

    element.className = element.className.replace( regexp, '$1' );
    element.className = element.className.trim();

};