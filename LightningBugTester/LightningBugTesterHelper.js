({
    // this is how you can initialize the fields in your attribute object.
	initObjects : function(component, event, helper) {

        // don't use component.get() because this will return the secure object,
        // instead of a standard JS object.
        var myCase = {
            Bound_Field : '',
            Uninitialized_Field : '',
            Initialized_Field : ''
        }

        component.set('v.myCase', myCase);
	}
})