({
    onInitialize : function (component, event, helper) {
        // helper.initObjects(component, event, helper);
    },

    /**
     * Initialize all fields in the attribute object.
     */
    onInitCheckChanged : function (component, event, helper) {
        var selectedElement = event.getSource();                // selected element (checkbox)
        var selectedFieldId = selectedElement.getLocalId();     // aura:id of the selected checkbox
        var selectedValue = selectedElement.get('v.value');     // value of the checkbox (true/false)
        console.log('Checkbox Changed to: '+selectedValue)

        var myCase = {Initialized_Field: ''}
        if (selectedValue) {
            myCase.Bound_Field = ''
            myCase.Uninitialized_Field = ''
        }
        component.set('v.myCase', myCase)
    },

    /**
     *
     */
	onCustomChanged : function(component, event, helper) {
        var myCase = component.get('v.myCase');
        var element = event.getSource();
        var elementId = element.getLocalId();
        var value = element.get('v.value');

        console.log('selected element Id: ',elementId);
        console.log('value: ',value);

        // get the case and set the appropriate field.
        myCase = component.get('v.myCase');
        switch (elementId) {
            case 'case-update-uninitialized-field' :
                myCase.Uninitialized_Field = value
                break
            case 'case-update-initialized-field' :
                myCase.Initialized_Field = value
                break

        }

        //console.log('object: ', myCase);
        component.set('v.myCase', myCase);
	},

    /**
     * THIS DOESN'T WORK WITH LOCKER SERVICE
     */
    windowLocation : function(component, event, helper) {
        var url = component.get('v.myUrl');
        console.log('window.location = '+url);
        window.location = url;
    },

    /**
     * This works with popups enabled.
     */
    windowOpen : function(component, event, helper) {
        var url = component.get('v.myUrl');
        console.log('window.open('+url+')');
        window.open( url );
    },

    /**
     * This also works with (and without?) popups enabled.
     */
    openUrl : function(component, event, helper) {
        var url = component.get('v.myUrl');
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": url
        });
        urlEvent.fire();
    },

    logObject : function(component, event, helper) {
        var myCase = component.get('v.myCase');
        console.log('object: ',myCase)
    }
})