function addClass( element, class_name ) {

    /* Regex to test if the class already exists in an element's className: */

    var regexp = new RegExp( '(^| )' + class_name + '( |$)' );

    if ( ! regexp.test( element.className ) ) {
        element.className += ' ' + class_name;
        element.className = element.className.trim();
    }
    element.className.trim();

};